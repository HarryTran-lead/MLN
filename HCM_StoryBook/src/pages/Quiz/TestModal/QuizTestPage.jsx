import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "react-toastify";
import { Modal } from "antd";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Flag,
  List,
  LayoutGrid,
  LogOut,
  Timer,
  Volume2,
  X,
} from "lucide-react";

import { selectQuiz, setActiveChapter } from "@redux/features/quizSlice";
import { useLocation, useNavigate } from "react-router-dom";
import TestSetupModal from "@components/TestSetupModal";
import endPoint from "@routes/routes";

/* ---------------- Helpers ---------------- */
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const formatMMSS = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const fisherYates = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const beep = async () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    g.gain.value = 0.04;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close?.();
    }, 450);
  } catch (err) {
    console.debug("[beep] failed:", err);
  }
};

// dataset: question ở quiz.question
const getQuestionText = (q) =>
  q?.quiz?.question ??
  q?.question ??
  q?.prompt ??
  q?.title ??
  q?.text ??
  "Câu hỏi";

const getQuizOptions = (q) => q?.quiz?.options ?? q?.options ?? [];
const getQuizCorrectIndex = (q) => q?.quiz?.correct ?? q?.correct ?? 0;
const getFillAnswer = (q) => q?.answer ?? q?.fillAnswer ?? "";

const isFillCorrect = (userAnswer, correct) => {
  const u = (userAnswer || "").toLowerCase().trim();
  // perhaps use strict match by default
  const c = (correct || "").toLowerCase().trim();
  if (!c) return false;
  return u === c || u.includes(c);
};

const hoverLift = (reduce) =>
  reduce
    ? {}
    : {
        whileHover: { y: -2, scale: 1.01 },
        whileTap: { scale: 0.985 },
        transition: { type: "spring", stiffness: 520, damping: 34 },
      };

const hoverPop = (reduce) =>
  reduce
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 650, damping: 36 },
      };

const STRICT_LOCK_TOAST_ID = "quiz-test-strict-lock";
const STRICT_LOCK_TOAST_MESSAGE =
  "Chế độ nghiêm ngặt đã khóa đáp án, không thể thay đổi.";

const showStrictLockToast = () => {
  if (toast.isActive(STRICT_LOCK_TOAST_ID)) return;

  toast.warn(STRICT_LOCK_TOAST_MESSAGE, {
    toastId: STRICT_LOCK_TOAST_ID,
  });
};

/* ---------------- Pool builder (<=80) ---------------- */
const ALL_CHAPTERS = -1;

const buildPool = (chapters, chapterIndex) => {
  if (!Array.isArray(chapters)) return [];

  if (chapterIndex === ALL_CHAPTERS) {
    const pool = [];
    chapters.forEach((ch, ci) => {
      (ch?.questions || []).forEach((_, qi) => {
        pool.push({ chapterIndex: ci, questionIndex: qi });
      });
    });
    return pool;
  }

  const ch = chapters?.[chapterIndex];
  return (ch?.questions || []).map((_, qi) => ({
    chapterIndex,
    questionIndex: qi,
  }));
};

/* ---------------- Shared Question Grid ---------------- */
function QuestionGrid({
  items,
  answers,
  current,
  finished,
  darkMode,
  reduceMotion,
  onPickIndex,
  cols = 5,
}) {
  return (
    <div
      className={`grid gap-2`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {items.map((it, idx) => {
        const a = answers?.[it.id];
        const isActive = idx === current;

        const answered =
          it.type === "quiz"
            ? a?.optionIndex !== null
            : (a?.text || "").trim().length > 0;

        const ok = finished && a?.isCorrect === true;
        const wrong = finished && a?.isCorrect === false;

        const ring = finished
          ? ok
            ? "ring-2 ring-emerald-400/70"
            : wrong
              ? "ring-2 ring-red-400/70"
              : ""
          : answered
            ? "ring-2 ring-amber-300/60"
            : "";

        const baseBg = darkMode
          ? "bg-slate-500/25 border-slate-600/55 hover:bg-slate-600 hover:border-slate-500/70"
          : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300";

        const active = darkMode
          ? "bg-amber-300/15 border-amber-300/80"
          : "bg-amber-200/30 border-amber-400/70";

        return (
          <motion.button
            key={it.id}
            {...hoverPop(reduceMotion)}
            onClick={() => onPickIndex(idx)}
            className={[
              "w-8 h-8 rounded-full text-sm font-medium border transition-colors flex items-center justify-center",
              isActive ? active : baseBg,
              ring,
            ].join(" ")}
            title={`Câu ${idx + 1}`}
          >
            {idx + 1}
          </motion.button>
        );
      })}
    </div>
  );
}

/* ---------------- Right Side Question Nav (Desktop) ---------------- */
function RightQuestionNav({
  items,
  answers,
  current,
  finished,
  darkMode,
  reduceMotion,
  topPx = 120,
  onPickIndex,
}) {
  if (!items?.length) return null;

  return (
    <div
      className="hidden xl:block fixed right-5 w-[280px]"
      style={{ top: topPx }}
    >
      <div
        className={[
          "rounded-3xl border p-4",
          darkMode
            ? "border-slate-700/70 bg-slate-800/30 backdrop-blur"
            : "border-slate-200 bg-white/70 backdrop-blur",
        ].join(" ")}
      >
        <div
          className={[
            "text-sm font-medium mb-3",
            darkMode ? "text-slate-100" : "text-slate-800",
          ].join(" ")}
        >
          Danh sách câu
        </div>

        {/* custom-scrollbar + giới hạn chiều cao + padding để không bị khuất */}
        <div
          className="custom-scrollbar max-h-[62svh] overflow-y-auto pr-3 pl-0.5 pb-2 pt-1"
          style={{ scrollbarGutter: "stable" }}
        >
          <QuestionGrid
            items={items}
            answers={answers}
            current={current}
            finished={finished}
            darkMode={darkMode}
            reduceMotion={reduceMotion}
            onPickIndex={onPickIndex}
            cols={6}
          />

          <div
            className={[
              "mt-4 text-xs font-medium",
              darkMode ? "text-slate-300" : "text-slate-600",
            ].join(" ")}
          >
            • Vàng: đã trả lời • Xanh/Đỏ: đúng/sai (sau khi nộp)
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile Question Nav (Overlay) ---------------- */
function MobileQuestionNav({
  open,
  onClose,
  items,
  answers,
  current,
  finished,
  darkMode,
  reduceMotion,
  onPickIndex,
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="xl:hidden fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/55" onClick={onClose} />
          {/* panel */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36 }}
            className={[
              "absolute left-1/2 -translate-x-1/2 bottom-4 w-[92%] max-w-[520px]",
              "rounded-3xl border p-4 backdrop-blur",
              darkMode
                ? "border-slate-700/70 bg-slate-800/35"
                : "border-slate-200 bg-white/80",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-2">
              <div
                className={[
                  "text-sm font-medium",
                  darkMode ? "text-slate-100" : "text-slate-800",
                ].join(" ")}
              >
                Danh sách câu
              </div>
              <button
                onClick={onClose}
                className={[
                  "w-10 h-10 rounded-2xl border flex items-center justify-center",
                  darkMode
                    ? "border-slate-600/60 bg-slate-700/25 hover:bg-slate-700/40"
                    : "border-slate-200 bg-white hover:bg-slate-50",
                ].join(" ")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 custom-scrollbar max-h-[52svh] overflow-y-auto pr-2 pb-2">
              <QuestionGrid
                items={items}
                answers={answers}
                current={current}
                finished={finished}
                darkMode={darkMode}
                reduceMotion={reduceMotion}
                onPickIndex={(idx) => {
                  onPickIndex(idx);
                  onClose();
                }}
                cols={6}
              />

              <div
                className={[
                  "mt-4 text-xs font-medium",
                  darkMode ? "text-slate-300" : "text-slate-600",
                ].join(" ")}
              >
                • Vàng: đã trả lời • Xanh/Đỏ: đúng/sai (sau khi nộp)
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ---------------- Main Page ---------------- */
export default function QuizTestPage({ embedded = false, onExit }) {
  const dispatch = useDispatch();
  const { chapters, activeChapter } = useSelector(selectQuiz);
  const reduceMotion = useReducedMotion();

  const location = useLocation();
  const navigate = useNavigate();
  const startedRef = useRef(false);

  // header đo để tránh bị che
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(120);
  const [rightNavTop, setRightNavTop] = useState(120);

  // config từ navigate
  const navCfg = location.state?.cfg;
  const autoStart = !!location.state?.autoStart;

  const QUIZ_HOME = endPoint?.QUIZ ?? "/quiz";
  const [setupOpen, setSetupOpen] = useState(() => !(autoStart && navCfg));

  const [darkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

  /* -------- totals -------- */
  const totalAll = useMemo(() => {
    return (chapters || []).reduce(
      (sum, ch) => sum + (ch?.questions?.length || 0),
      0,
    );
  }, [chapters]);

  /* -------- Session state -------- */
  const [cfg, setCfg] = useState(null);
  const [items, setItems] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  // timer
  const [remainingMs, setRemainingMs] = useState(null);
  const deadlineRef = useRef(null);
  const tickRef = useRef(null);

  // UI modes
  const [viewMode, setViewMode] = useState("single"); // single | list
  const [showAnswers, setShowAnswers] = useState(true);

  // exit confirm
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);

  // mobile nav
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const ready = !!cfg && items.length > 0;

  // list refs để scroll tới câu (list mode)
  const listRefs = useRef({});
  const getScrollMarginTop = useCallback(
    () => Math.round((headerH || 120) + 16),
    [headerH],
  );

  /* đo header height */
  useLayoutEffect(() => {
    if (!ready) return;

    const measure = () => {
      const h = headerRef.current?.getBoundingClientRect()?.height ?? 0;
      const hh = Math.max(88, Math.round(h));
      setHeaderH(hh);
      setRightNavTop(hh + 16);
    };

    requestAnimationFrame(measure);

    const ro = new ResizeObserver(() => measure());
    if (headerRef.current) ro.observe(headerRef.current);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ready]);

  /* -------- theme styles -------- */
  // nền tổng tối hơn, card/option nhẹ hơn (không dùng slate-900+ cho card/button/option)
  const theme = darkMode
    ? "bg-slate-900 text-white"
    : "bg-slate-50 text-slate-900";

  const themeGradient = darkMode
    ? "bg-gradient-to-b from-slate-800 via-slate-800 to-slate-800"
    : "bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50";

  const card = darkMode
    ? "bg-slate-800/40 border-slate-700/70 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
    : "bg-white/85 border-slate-200 shadow-[0_12px_40px_rgba(2,6,23,0.10)]";

  const subtleText = darkMode ? "text-slate-200/80" : "text-slate-600";

  const currentItem = items[current];
  const currentQuestion = currentItem
    ? chapters?.[currentItem.chapterIndex]?.questions?.[
        currentItem.questionIndex
      ]
    : null;

  const currentChapter = currentItem
    ? chapters?.[currentItem.chapterIndex]
    : null;

  /* -------- Build session from cfg (<=80, auto ALL) -------- */
  const buildSession = useCallback(
    (nextCfg) => {
      const requested = Number(nextCfg.numQuestions || 1);

      const chapterIndexCandidate = Number.isFinite(nextCfg.chapterIndex)
        ? nextCfg.chapterIndex
        : activeChapter;

      const candidateTotal =
        chapters?.[chapterIndexCandidate]?.questions?.length || 0;

      const chapterIndex =
        requested > candidateTotal ? ALL_CHAPTERS : chapterIndexCandidate;

      const pool = buildPool(chapters, chapterIndex);
      const total = pool.length;

      const maxN = Math.min(80, Math.max(1, total));
      const n = clamp(requested, 1, maxN);

      const baseOrder = nextCfg.shuffle ? fisherYates(pool) : pool;
      const picked = baseOrder.slice(0, n);

      const types = picked.map((_, i) => {
        if (nextCfg.mode === "mixed") return i % 2 === 0 ? "quiz" : "fill";
        return nextCfg.mode;
      });

      const built = picked.map((ref, i) => ({
        id: `${ref.chapterIndex}-${ref.questionIndex}-${i}`,
        chapterIndex: ref.chapterIndex,
        questionIndex: ref.questionIndex,
        type: types[i],
      }));

      const initA = {};
      built.forEach((it) => {
        initA[it.id] = {
          optionIndex: null,
          text: "",
          submitted: false,
          isCorrect: null,
        };
      });

      if (nextCfg.withTimer && nextCfg.minutes) {
        const ms = Number(nextCfg.minutes) * 60 * 1000;
        deadlineRef.current = Date.now() + ms;
        setRemainingMs(ms);
      } else {
        deadlineRef.current = null;
        setRemainingMs(null);
      }

      setCfg({ ...nextCfg, chapterIndex });
      setItems(built);
      setAnswers(initA);
      setCurrent(0);
      setFinished(false);
      setShowAnswers(true);
      setViewMode("single");

      if (chapterIndex !== ALL_CHAPTERS)
        dispatch(setActiveChapter(chapterIndex));
    },
    [chapters, activeChapter, dispatch],
  );

  // AutoStart
  useEffect(() => {
    if (!autoStart || !navCfg) return;
    if (startedRef.current) return;
    startedRef.current = true;

    setSetupOpen(false);
    buildSession(navCfg);
    navigate(location.pathname, { replace: true, state: {} });
  }, [autoStart, navCfg, buildSession, navigate, location.pathname]);

  const handleStart = useCallback(
    (nextCfg) => {
      setSetupOpen(false);
      buildSession(nextCfg);
    },
    [buildSession],
  );

  /* -------- Derived stats -------- */
  const totalQ = items.length;

  const answeredCount = useMemo(() => {
    return items.reduce((acc, it) => {
      const a = answers[it.id];
      if (!a) return acc;
      if (it.type === "quiz") return a.optionIndex === null ? acc : acc + 1;
      return (a.text || "").trim() ? acc + 1 : acc;
    }, 0);
  }, [items, answers]);

  const correctCount = useMemo(() => {
    if (!finished) return 0;
    return items.reduce(
      (acc, it) => (answers[it.id]?.isCorrect ? acc + 1 : acc),
      0,
    );
  }, [items, answers, finished]);

  const wrongCount = useMemo(() => {
    if (!finished) return 0;
    return items.reduce((acc, it) => {
      const a = answers[it.id];
      return a?.submitted && a?.isCorrect === false ? acc + 1 : acc;
    }, 0);
  }, [items, answers, finished]);

  const percent = useMemo(() => {
    if (!totalQ || !finished) return 0;
    return Math.round((correctCount / totalQ) * 100);
  }, [correctCount, totalQ, finished]);

  const canGoPrev = current > 0;
  const canGoNext = current < totalQ - 1;

  /* -------- Jump behavior: single = setCurrent, list = scroll -------- */
  const jumpToIndex = useCallback(
    (idx) => {
      const safeIdx = clamp(idx, 0, Math.max(0, items.length - 1));
      const it = items[safeIdx];
      if (!it) return;

      setCurrent(safeIdx);

      if (viewMode === "list") {
        requestAnimationFrame(() => {
          const el = listRefs.current?.[it.id];
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    },
    [items, viewMode],
  );

  // nếu đang list mode và đổi current (ví dụ next/prev khi còn list), vẫn giữ scroll
  useEffect(() => {
    if (!ready) return;
    if (viewMode !== "list") return;
    const it = items[current];
    if (!it) return;
    requestAnimationFrame(() => {
      const el = listRefs.current?.[it.id];
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [viewMode, current, ready]); // eslint-disable-line

  /* -------- Answer actions (pre-finish: chỉ lưu) -------- */
  const chooseQuiz = useCallback(
    (itemId, optionIndex) => {
      if (finished) return;

      setAnswers((prev) => {
        const current = prev?.[itemId];
        if (
          cfg?.strictMode &&
          current?.optionIndex !== null &&
          current?.optionIndex !== optionIndex
        ) {
          showStrictLockToast();
          return prev;
        }

        return {
          ...prev,
          [itemId]: { ...current, optionIndex },
        };
      });
    },
    [finished, cfg?.strictMode],
  );

  const changeFill = useCallback(
    (itemId, text) => {
      if (finished) return;

      setAnswers((prev) => {
        const current = prev?.[itemId];
        const existingText = (current?.text || "").trim();
        const newText = (text || "").trim();

        if (
          cfg?.strictMode &&
          existingText.length > 0 &&
          existingText !== newText
        ) {
          showStrictLockToast();
          return prev;
        }

        return {
          ...prev,
          [itemId]: { ...current, text },
        };
      });
    },
    [finished, cfg?.strictMode],
  );

  /* -------- Grade all (only when finish) -------- */
  const gradeAll = useCallback(() => {
    setAnswers((prev) => {
      const next = { ...prev };
      items.forEach((it) => {
        const q =
          chapters?.[it.chapterIndex]?.questions?.[it.questionIndex] ?? null;
        const a = next[it.id] || {};
        let isCorrect = false;

        if (it.type === "quiz") {
          const correct = getQuizCorrectIndex(q);
          isCorrect =
            a.optionIndex !== null && Number(a.optionIndex) === Number(correct);
        } else {
          const correct = getFillAnswer(q);
          isCorrect = !!(a.text || "").trim() && isFillCorrect(a.text, correct);
        }

        next[it.id] = { ...a, submitted: true, isCorrect };
      });
      return next;
    });
  }, [items, chapters]);

  const finishNow = useCallback(() => {
    if (finished) return;
    gradeAll();
    setFinished(true);
    setShowAnswers(true);
  }, [finished, gradeAll]);

  /* -------- Timer tick -------- */
  useEffect(() => {
    if (!cfg?.withTimer || !deadlineRef.current || finished) return;

    const tick = () => {
      const ms = deadlineRef.current - Date.now();
      setRemainingMs(ms);
      if (ms <= 0) {
        if (cfg?.sound) beep();
        finishNow();
      }
    };

    tick();
    tickRef.current = window.setInterval(tick, 250);
    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
      tickRef.current = null;
    };
  }, [cfg, finished, finishNow]);

  /* -------- Exit confirm -------- */
  const requestExit = useCallback(() => setExitConfirmOpen(true), []);
  const doExitConfirmed = useCallback(() => {
    setExitConfirmOpen(false);
    if (embedded && onExit) return onExit();
    navigate(QUIZ_HOME, { replace: true });
  }, [embedded, onExit, navigate, QUIZ_HOME]);

  /* -------- reveal toggle rules -------- */
  const canToggleReveal = finished;
  const toggleReveal = () => {
    if (!canToggleReveal) return;
    setShowAnswers((v) => !v);
  };

  return (
    <div className={`${theme} ${themeGradient} min-h-[100svh]`}>
      {/* Confirm Exit Modal */}
      <Modal
        open={exitConfirmOpen}
        onCancel={() => setExitConfirmOpen(false)}
        onOk={doExitConfirmed}
        okText="Thoát"
        cancelText="Ở lại"
        okButtonProps={{ danger: true }}
        centered
        title="Xác nhận thoát bài làm"
      >
        <div className="text-sm font-medium">
          Bạn có chắc muốn thoát về trang Quiz?
          <div className="mt-2">
            • Đã trả lời: <span className="font-medium">{answeredCount}</span>/
            <span className="font-medium">{totalQ}</span>
            {finished ? (
              <>
                <br />• Đúng:{" "}
                <span className="font-medium">{correctCount}</span> • Sai:{" "}
                <span className="font-medium text-red-500">{wrongCount}</span>
              </>
            ) : null}
          </div>
          <div className="mt-2 text-slate-500">
            (Tiến độ hiện tại sẽ không được giữ nếu bạn chưa lưu ở nơi khác)
          </div>
        </div>
      </Modal>

      {/* Setup Modal */}
      <TestSetupModal
        open={setupOpen}
        onClose={() => (embedded ? onExit?.() : setSetupOpen(false))}
        onStart={handleStart}
        totalQuestions={Math.min(80, totalAll)}
        chapters={chapters}
        activeChapter={activeChapter}
        onPickChapter={(ci) => dispatch(setActiveChapter(ci))}
        darkMode={darkMode}
      />

      {/* Nếu đóng modal mà chưa start */}
      {!setupOpen && !ready && (
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className={`border rounded-3xl p-6 ${card}`}>
            <div className="flex items-center gap-2">
              <div className="text-base font-medium">Chưa có bài kiểm tra</div>
            </div>
            <p className={`mt-2 text-sm font-medium ${subtleText}`}>
              Hãy mở lại thiết lập để bắt đầu.
            </p>

            <div className="mt-5 flex gap-2">
              <motion.button
                {...hoverLift(reduceMotion)}
                className="px-4 h-11 rounded-2xl bg-amber-400 text-slate-900 font-medium hover:brightness-95"
                onClick={() => setSetupOpen(true)}
              >
                Thiết lập bài kiểm tra
              </motion.button>

              <motion.button
                {...hoverLift(reduceMotion)}
                className={[
                  "px-4 h-11 rounded-2xl border font-medium transition-colors",
                  darkMode
                    ? "border-slate-600/60 bg-slate-700/20 hover:bg-slate-700"
                    : "border-slate-200 bg-white hover:bg-slate-50",
                ].join(" ")}
                onClick={() => navigate(QUIZ_HOME)}
              >
                Quay lại Quiz
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      {ready && (
        <div
          ref={headerRef}
          className="sticky top-0 z-40 backdrop-blur bg-black/20"
        >
          <div className="max-w-3xl mx-auto px-4 py-3">
            <div className={`border rounded-3xl ${card}`}>
              {/* 👇 2 hàng: (1) tiêu đề + stats, (2) actions nằm ngang bên dưới ở desktop */}
              <div className="px-4 py-3 flex flex-col gap-3">
                {/* Title + meta */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="text-sm font-medium truncate">
                      Bài kiểm tra —{" "}
                      <span className="font-medium">
                        {cfg?.chapterIndex === ALL_CHAPTERS
                          ? "Tổng hợp (≤ 80 câu)"
                          : (currentChapter?.title ?? "Phần")}
                      </span>
                      <span className={`ml-2 ${subtleText}`}>
                        ({cfg?.mode === "mixed" ? "Hỗn hợp" : cfg?.mode})
                      </span>
                    </div>
                  </div>

                  <div className={`text-xs mt-1 font-medium ${subtleText}`}>
                    {!finished ? (
                      <>
                        Đã trả lời:{" "}
                        <span className="font-medium">{answeredCount}</span>/
                        <span className="font-medium">{totalQ}</span>
                      </>
                    ) : (
                      <>
                        Đúng:{" "}
                        <span className="font-medium text-emerald-300">
                          {correctCount}
                        </span>
                        /{totalQ} • Sai:{" "}
                        <span className="font-medium text-red-300">
                          {wrongCount}
                        </span>{" "}
                        •{" "}
                        <span className="font-medium text-white">
                          Điểm: {percent}%
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions (desktop: 1 hàng ngang dưới title, mobile: tự xuống hàng) */}
                <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-2 justify-start md:justify-end">
                  {/* Mobile open question list */}
                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={() => setMobileNavOpen(true)}
                    className={[
                      "xl:hidden flex-1 md:flex-none px-3 h-10 rounded-2xl border flex items-center justify-center gap-2 text-sm font-medium transition-colors whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/20 hover:bg-slate-700"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                    title="Danh sách câu"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span>Câu hỏi</span>
                  </motion.button>

                  {/* View mode */}
                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={() =>
                      setViewMode((v) => (v === "single" ? "list" : "single"))
                    }
                    className={[
                      "flex-1 md:flex-none px-3 h-10 rounded-2xl border flex items-center justify-center gap-2 text-sm font-medium transition-colors whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/20 hover:bg-slate-700"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                    title="Đổi chế độ hiển thị"
                  >
                    {viewMode === "single" ? (
                      <>
                        <List className="w-4 h-4" />
                        <span className="hidden sm:inline">Danh sách</span>
                        <span className="sm:hidden">DS</span>
                      </>
                    ) : (
                      <>
                        <LayoutGrid className="w-4 h-4" />
                        <span className="hidden sm:inline">Từng câu</span>
                        <span className="sm:hidden">1 câu</span>
                      </>
                    )}
                  </motion.button>

                  {/* Timer */}
                  <div
                    className={[
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-3 h-10 rounded-2xl border whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/18"
                        : "border-slate-200 bg-white/70",
                    ].join(" ")}
                  >
                    <Timer className="w-4 h-4 text-amber-400" />
                    <div className="text-sm font-medium">
                      {cfg?.withTimer
                        ? formatMMSS(remainingMs ?? 0)
                        : "Không giới hạn"}
                    </div>
                    {cfg?.sound && cfg?.withTimer && (
                      <Volume2
                        className="w-4 h-4 text-slate-300/70"
                        title="Có âm thanh"
                      />
                    )}
                  </div>

                  {/* Reveal toggle */}
                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={toggleReveal}
                    disabled={!canToggleReveal}
                    className={[
                      "flex-1 md:flex-none px-3 h-10 rounded-2xl border text-sm font-medium transition-colors whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/20 hover:bg-slate-700"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                      !canToggleReveal ? "opacity-50 cursor-not-allowed" : "",
                    ].join(" ")}
                    title={
                      !canToggleReveal
                        ? "Chỉ xem đáp án sau khi nộp bài"
                        : "Hiện/ẩn đáp án"
                    }
                  >
                    Đáp án
                  </motion.button>

                  {/* Finish */}
                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={finishNow}
                    disabled={finished}
                    className={[
                      "flex-1 md:flex-none px-3 h-10 rounded-2xl bg-amber-400 text-slate-900 font-medium flex items-center justify-center gap-2 transition whitespace-nowrap",
                      finished
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:brightness-105",
                    ].join(" ")}
                    title="Nộp bài"
                  >
                    <Flag className="w-4 h-4" />
                    Nộp
                  </motion.button>

                  {/* Exit: full on md+, icon-only on mobile (tuỳ bạn) */}
                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={requestExit}
                    className={[
                      "hidden md:flex px-3 h-10 rounded-2xl border items-center justify-center gap-2 transition-colors whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                    title="Thoát về Quiz"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Thoát</span>
                  </motion.button>

                  <motion.button
                    {...hoverLift(reduceMotion)}
                    onClick={requestExit}
                    className={[
                      "md:hidden flex-1 px-3 h-10 rounded-2xl border flex items-center justify-center gap-2 transition-colors whitespace-nowrap",
                      darkMode
                        ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                    title="Thoát"
                  >
                    <X className="w-4 h-4" />
                    <span>Thoát</span>
                  </motion.button>
                </div>
              </div>

              {/* progress */}
              <div className="px-4 pb-3">
                <div className="h-2 w-full rounded-full bg-slate-700/25 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-amber-400 transition-all"
                    style={{
                      width: `${
                        totalQ ? Math.round((answeredCount / totalQ) * 100) : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Question Nav */}
      {ready && (
        <MobileQuestionNav
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          items={items}
          answers={answers}
          current={current}
          finished={finished}
          darkMode={darkMode}
          reduceMotion={reduceMotion}
          onPickIndex={jumpToIndex}
        />
      )}

      {/* Right side nav (desktop) */}
      {ready && (
        <RightQuestionNav
          items={items}
          answers={answers}
          current={current}
          finished={finished}
          darkMode={darkMode}
          reduceMotion={reduceMotion}
          topPx={rightNavTop}
          onPickIndex={jumpToIndex}
        />
      )}

      {/* Body */}
      {ready && (
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Finished banner */}
          {finished && (
            <div className={`border rounded-3xl p-5 mb-5 ${card}`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <div className="text-base font-medium">Đã nộp bài</div>
              </div>
              <div className={`mt-2 text-sm font-medium ${subtleText}`}>
                Điểm: <span className="font-medium text-white">{percent}%</span>{" "}
                • Đúng{" "}
                <span className="font-medium text-emerald-200">
                  {correctCount}
                </span>
                /{totalQ} • Sai{" "}
                <span className="font-medium text-red-300">{wrongCount}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <motion.button
                  {...hoverLift(reduceMotion)}
                  onClick={() => setSetupOpen(true)}
                  className={[
                    "px-4 h-10 rounded-2xl border font-medium transition-colors",
                    darkMode
                      ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700"
                      : "border-slate-200 bg-white hover:bg-slate-50",
                  ].join(" ")}
                >
                  Mở lại thiết lập
                </motion.button>

                <motion.button
                  {...hoverLift(reduceMotion)}
                  onClick={() => navigate(QUIZ_HOME)}
                  className="px-4 h-10 rounded-2xl bg-amber-400 text-slate-900 font-medium hover:brightness-95"
                >
                  Về trang Quiz
                </motion.button>
              </div>
            </div>
          )}

          {/* SINGLE MODE */}
          {viewMode === "single" && (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem?.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={`border rounded-3xl p-5 ${card}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className={`text-xs font-medium ${subtleText}`}>
                        Câu {current + 1}/{totalQ} • Loại:{" "}
                        <span className="font-medium">
                          {currentItem?.type === "fill"
                            ? "Điền đáp án"
                            : "Trắc nghiệm"}
                        </span>
                      </div>

                      <div className="mt-2 text-base font-medium leading-relaxed">
                        {getQuestionText(currentQuestion)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 max-h-[60svh] overflow-y-auto pr-2 custom-scrollbar">
                    {currentItem?.type === "quiz" ? (
                      <QuizBlock
                        reduceMotion={reduceMotion}
                        darkMode={darkMode}
                        finished={finished}
                        showAnswers={showAnswers}
                        question={currentQuestion}
                        answer={answers[currentItem.id]}
                        onChoose={(idx) => chooseQuiz(currentItem.id, idx)}
                        strictMode={cfg.strictMode}
                        revealAfterEach={cfg.revealAfterEach}
                      />
                    ) : (
                      <FillBlock
                        reduceMotion={reduceMotion}
                        darkMode={darkMode}
                        finished={finished}
                        showAnswers={showAnswers}
                        question={currentQuestion}
                        answer={answers[currentItem.id]}
                        onChangeText={(t) => changeFill(currentItem.id, t)}
                        strictMode={cfg.strictMode}
                        revealAfterEach={cfg.revealAfterEach}
                      />
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <motion.button
                      {...hoverLift(reduceMotion)}
                      onClick={() => setCurrent((v) => Math.max(0, v - 1))}
                      disabled={!canGoPrev}
                      className={[
                        "px-4 h-11 rounded-2xl border flex items-center gap-2 font-medium transition-colors",
                        darkMode
                          ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700"
                          : "border-slate-200 bg-white hover:bg-slate-50",
                        !canGoPrev ? "opacity-60 cursor-not-allowed" : "",
                      ].join(" ")}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Trước
                    </motion.button>

                    <div className={`text-xs font-medium ${subtleText}`}>
                      {!finished ? (
                        (() => {
                          const a = answers[currentItem.id];
                          const answered =
                            currentItem.type === "quiz"
                              ? a?.optionIndex !== null
                              : (a?.text || "").trim().length > 0;
                          return answered ? (
                            <span className="text-amber-200 font-medium">
                              Đã chọn
                            </span>
                          ) : (
                            <span>Chưa trả lời</span>
                          );
                        })()
                      ) : answers[currentItem.id]?.isCorrect ? (
                        <span className="text-emerald-300 font-medium">
                          ✅ Đúng
                        </span>
                      ) : (
                        <span className="text-red-300 font-medium">❌ Sai</span>
                      )}
                    </div>

                    <motion.button
                      {...hoverLift(reduceMotion)}
                      onClick={() =>
                        setCurrent((v) => Math.min(totalQ - 1, v + 1))
                      }
                      disabled={!canGoNext}
                      className={[
                        "px-4 h-11 rounded-2xl border flex items-center gap-2 font-medium transition-colors",
                        darkMode
                          ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700"
                          : "border-slate-200 bg-white hover:bg-slate-50",
                        !canGoNext ? "opacity-60 cursor-not-allowed" : "",
                      ].join(" ")}
                    >
                      Sau
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className={`mt-4 text-xs font-medium ${subtleText}`}>
                Tip: Bên phải (desktop) / nút “Câu hỏi” (mobile) để nhảy nhanh.
                Chỉ khi <b>Nộp</b> mới chấm và hiện đúng/sai.
              </div>
            </>
          )}

          {/* LIST MODE */}
          {viewMode === "list" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {items.map((it, idx) => {
                const q =
                  chapters?.[it.chapterIndex]?.questions?.[it.questionIndex] ??
                  null;
                const a = answers[it.id];

                return (
                  <div
                    key={it.id}
                    ref={(el) => {
                      if (el) listRefs.current[it.id] = el;
                    }}
                    style={{ scrollMarginTop: getScrollMarginTop() }}
                    className={`border rounded-3xl p-5 ${card}`}
                  >
                    <div className={`text-xs font-medium ${subtleText}`}>
                      Câu {idx + 1}/{totalQ} •{" "}
                      <span className="font-medium">
                        {it.type === "fill" ? "Điền đáp án" : "Trắc nghiệm"}
                      </span>
                      {finished ? (
                        a?.isCorrect ? (
                          <span className="ml-2 text-emerald-300 font-medium">
                            ✅ Đúng
                          </span>
                        ) : (
                          <span className="ml-2 text-red-300 font-medium">
                            ❌ Sai
                          </span>
                        )
                      ) : null}
                    </div>

                    <div className="mt-2 text-sm font-medium leading-relaxed">
                      {getQuestionText(q)}
                    </div>

                    <div className="mt-4">
                      {it.type === "quiz" ? (
                        <QuizBlock
                          reduceMotion={reduceMotion}
                          darkMode={darkMode}
                          finished={finished}
                          showAnswers={showAnswers}
                          question={q}
                          answer={a}
                          onChoose={(optIdx) => chooseQuiz(it.id, optIdx)}
                          strictMode={cfg.strictMode}
                          revealAfterEach={cfg.revealAfterEach}
                        />
                      ) : (
                        <FillBlock
                          reduceMotion={reduceMotion}
                          darkMode={darkMode}
                          finished={finished}
                          showAnswers={showAnswers}
                          question={q}
                          answer={a}
                          onChangeText={(t) => changeFill(it.id, t)}
                          strictMode={cfg.strictMode}
                          revealAfterEach={cfg.revealAfterEach}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              <div className={`text-xs font-medium ${subtleText}`}>
                Danh sách có thể dài — bạn chỉ cần cuộn xuống. Nhấn <b>Nộp</b>{" "}
                để chấm toàn bộ.
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------- Blocks ---------------- */
function QuizBlock({
  reduceMotion,
  darkMode,
  finished,
  showAnswers,
  question,
  answer,
  onChoose,
  strictMode,
  revealAfterEach,
}) {
  const options = getQuizOptions(question);
  const correct = getQuizCorrectIndex(question);

  // option tách màu khỏi card: option dùng slate-700, card dùng slate-800
  const optionIdle = darkMode
    ? "bg-slate-700/22 border-slate-600/55 hover:bg-slate-700/38 hover:border-slate-500/70"
    : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300";

  return (
    <div className="space-y-2">
      {options.map((opt, idx) => {
        const selected = answer?.optionIndex === idx;
        const reveal =
          (finished && showAnswers) ||
          (revealAfterEach && answer?.optionIndex !== null);

        const isCorrectOption = reveal && idx === correct;
        const isWrongPick =
          reveal && selected && Number(answer?.optionIndex) !== Number(correct);
        const isCorrectPick =
          reveal && selected && Number(answer?.optionIndex) === Number(correct);

        const base =
          "w-full text-left px-4 py-3 rounded-3xl border transition-colors flex items-start gap-3 font-medium";

        const style = (() => {
          if (!reveal) {
            if (selected) return "border-amber-300/80 bg-amber-300/10";
            return optionIdle;
          }
          if (isCorrectPick) return "border-emerald-400/80 bg-emerald-400/12";
          if (isWrongPick) return "border-red-400/80 bg-red-400/10";
          if (isCorrectOption) return "border-emerald-400/60 bg-emerald-400/6";
          return optionIdle;
        })();

        // FIX lệch: bỏ mt-0.5, canh icon theo top line ổn định
        const bubbleBase = darkMode
          ? "bg-slate-800/35 border-slate-600/60 text-slate-100"
          : "bg-white border-slate-300 text-slate-700";

        const bubbleSelected = !reveal
          ? selected
            ? "border-amber-300/80 text-amber-200 bg-amber-500/10"
            : bubbleBase
          : isWrongPick
            ? "border-red-400/80 text-red-200 bg-red-500/10"
            : isCorrectOption
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-500/10"
              : selected
                ? "border-amber-300/80 text-amber-200 bg-amber-500/10"
                : bubbleBase;

        return (
          <motion.button
            key={idx}
            {...hoverLift(reduceMotion)}
            disabled={finished}
            onClick={() => {
              if (finished) return;
              if (
                strictMode &&
                answer?.optionIndex !== null &&
                answer.optionIndex !== idx
              ) {
                showStrictLockToast(
                  "Bạn đã chọn đáp án và không thể thay đổi trong chế độ nghiêm ngặt!",
                );
                return;
              }
              onChoose(idx);
            }}
            className={`${base} ${style} ${
              finished ? "opacity-95 cursor-not-allowed" : ""
            }`}
          >
            <div
              className={[
                "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border",
                bubbleSelected,
              ].join(" ")}
            >
              {String.fromCharCode(65 + idx)}
            </div>

            <div className="flex-1 pt-[2px]">
              <div className="text-sm leading-relaxed font-medium">{opt}</div>

              {finished && showAnswers && idx === correct && (
                <div className="text-xs mt-1 text-emerald-300 font-medium">
                  Đáp án đúng
                </div>
              )}

              {finished && showAnswers && isWrongPick && (
                <div className="text-xs mt-1 text-red-300 font-medium">
                  Bạn chọn sai
                </div>
              )}
            </div>
          </motion.button>
        );
      })}

      {!finished && (
        <div
          className={`text-xs mt-2 font-medium ${
            darkMode ? "text-slate-300/80" : "text-slate-600"
          }`}
        >
          {strictMode
            ? "Chọn 1 đáp án (không thể đổi sau khi chọn)."
            : "Chọn 1 đáp án (có thể đổi trước khi nộp bài)."}
        </div>
      )}
    </div>
  );
}

function FillBlock({
  reduceMotion,
  darkMode,
  finished,
  showAnswers,
  question,
  answer,
  onChangeText,
  strictMode,
  revealAfterEach,
}) {
  const correct = getFillAnswer(question);
  const reveal =
    (finished && showAnswers) ||
    (revealAfterEach && (answer?.text || "").trim().length > 0);

  return (
    <div>
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -1 }}
        transition={{ type: "spring", stiffness: 520, damping: 34 }}
        className={[
          "flex items-center gap-2 rounded-3xl border px-3 h-12 transition-colors",
          darkMode
            ? "border-slate-600/60 bg-slate-700/18 hover:bg-slate-700/28"
            : "border-slate-200 bg-white hover:bg-slate-50",
        ].join(" ")}
      >
        <input
          value={answer?.text ?? ""}
          onChange={(e) => {
            if (finished) return;
            if (strictMode && (answer?.text || "").trim().length > 0) {
              showStrictLockToast(
                "Bạn đã nhập đáp án và không thể thay đổi trong chế độ nghiêm ngặt!",
              );
              return;
            }
            onChangeText(e.target.value);
          }}
          disabled={finished}
          placeholder="Nhập đáp án…"
          className={`flex-1 bg-transparent outline-none text-sm font-medium ${
            finished ? "opacity-85" : ""
          }`}
        />
      </motion.div>

      {reveal && (
        <div className="mt-3 text-sm font-medium">
          {answer?.isCorrect ? (
            <div className="text-emerald-300 font-medium">✅ Đúng</div>
          ) : (
            <div className="text-red-300 font-medium">❌ Sai</div>
          )}

          <div className="mt-2">
            <span className={darkMode ? "text-slate-300/80" : "text-slate-600"}>
              Đáp án đúng:{" "}
            </span>
            <span className="font-medium text-emerald-200">
              {correct || "(trống)"}
            </span>
          </div>
        </div>
      )}

      {!finished && (
        <div
          className={`text-xs mt-2 font-medium ${
            darkMode ? "text-slate-300/80" : "text-slate-600"
          }`}
        >
          {strictMode
            ? "Nhập đáp án (không thể sửa sau khi nhập)."
            : "Nhập đáp án (có thể sửa trước khi nộp bài)."}
        </div>
      )}
    </div>
  );
}
