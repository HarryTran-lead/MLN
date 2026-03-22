import React, { useMemo, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Bot,
  Sparkles,
  ShieldCheck,
  Wand2,
  BookOpen,
  ScrollText,
  TerminalSquare,
  CheckCircle2,
  ChevronDown,
  Copy,
  Info,
} from "lucide-react";

const EASE = [0.2, 0, 0, 1];

function useReducedMotionPref() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

const Surface = ({ children, className = "" }) => (
  <div
    className={[
      "rounded-2xl border border-slate-500/25 bg-slate-800/55",
      "shadow-[0_18px_60px_rgba(15,23,42,0.32)] backdrop-blur-xl",
      "ring-1 ring-white/5",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-400/25 bg-slate-800/55 px-3 py-2 text-sm font-semibold text-slate-50/80 backdrop-blur-xl">
      <Icon size={16} />
      {children}
    </span>
  );
}

function GlowCard({ icon: Icon, title, desc, chips = [] }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-slate-400/25 bg-slate-800/55 p-5
                 shadow-[0_18px_60px_rgba(15,23,42,0.32)] backdrop-blur-xl ring-1 ring-white/5
                 transition-colors hover:bg-slate-800/70 hover:border-slate-300/30"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-amber-300/25 bg-gradient-to-b from-amber-300/20 to-amber-300/10 text-slate-50">
            <Icon size={18} />
          </div>
          <div className="text-base font-semibold text-slate-50/90">
            {title}
          </div>
        </div>

        <div className="text-sm leading-7 text-slate-100/70">{desc}</div>

        {!!chips.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-slate-300/20 bg-slate-700/40 px-3 py-1 text-xs font-semibold text-slate-50/70"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100
                   bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.22),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100
                   bg-[radial-gradient(circle_at_70%_70%,rgba(96,165,250,0.16),transparent_60%)]"
      />
    </motion.div>
  );
}

function AccordionItem({ title, children, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-400/25 bg-slate-800/55 ring-1 ring-white/5 backdrop-blur-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left hover:bg-slate-800/70 transition"
      >
        <span className="font-semibold text-slate-50/90">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="text-slate-100/70"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="px-4 pb-4 text-sm leading-7 text-slate-100/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PromptCard({ title, desc, prompt, onCopy }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-slate-400/25 bg-slate-800/55 p-5
                 shadow-[0_18px_60px_rgba(15,23,42,0.32)] backdrop-blur-xl ring-1 ring-white/5
                 transition-colors hover:bg-slate-800/70 hover:border-slate-300/30"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-slate-50/90">
              {title}
            </div>
            <div className="mt-1 text-sm text-slate-100/65">{desc}</div>
          </div>

          <button
            type="button"
            onClick={() => onCopy(prompt)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300/25 bg-slate-700/40
                       px-3 py-2 text-sm font-semibold text-slate-50/80 transition hover:bg-slate-700/60"
            title="Copy prompt"
          >
            <Copy size={16} />
            Copy
          </button>
        </div>

        <div className="mt-4 rounded-xl border border-slate-300/20 bg-slate-900/40 p-4">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-slate-50/70">
            <TerminalSquare size={16} />
            Prompt
          </div>
          <pre className="max-h-[260px] overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-50/75">
            <code>{prompt}</code>
          </pre>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100
                   bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.18),transparent_55%)]"
      />
    </motion.div>
  );
}

function FloatingOrbs({ reducedMotion }) {
  const orbs = useMemo(
    () => [
      { id: 1, x: "8%", y: "16%", size: 280, dur: 10, delay: 0.2 },
      { id: 2, x: "72%", y: "10%", size: 340, dur: 12, delay: 0.8 },
      { id: 3, x: "82%", y: "68%", size: 420, dur: 14, delay: 0.4 },
      { id: 4, x: "18%", y: "74%", size: 360, dur: 13, delay: 1.1 },
    ],
    []
  );

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-90 [filter:blur(18px)]"
    >
      {orbs.map((o) => (
        <motion.div
          key={o.id}
          className="absolute rounded-full [mix-blend-mode:screen]
                     bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.26),rgba(96,165,250,0.12),transparent_70%)]"
          style={{ left: o.x, top: o.y, width: o.size, height: o.size }}
          animate={{
            x: [0, 16, -10, 0],
            y: [0, -14, 10, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: o.dur,
            ease: "easeInOut",
            repeat: Infinity,
            delay: o.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function AiAppendix() {
  const reducedMotion = useReducedMotionPref();
  const { scrollYProgress } = useScroll();
  const lineScale = useTransform(scrollYProgress, [0.05, 0.55], [0, 1]);

  const [openAcc, setOpenAcc] = useState(0);
  const [toast, setToast] = useState(null);

  const prompts = useMemo(
    () => [
      {
        title: "Tạo câu hỏi trắc nghiệm A/B/C/D",
        desc: "Sinh câu hỏi đúng format, có đáp án & giải thích ngắn.",
        prompt:
          "Hãy tạo 10 câu hỏi trắc nghiệm A/B/C/D về: [CHỦ ĐỀ].\nYêu cầu:\n- Mỗi câu có 4 lựa chọn A/B/C/D.\n- Ghi rõ đáp án đúng (A/B/C/D).\n- Giải thích 1–2 câu.\n- Không viết tắt “chủ nghĩa xã hội”.\n- Ngôn ngữ: Tiếng Việt.\nĐầu ra dạng JSON: [{question, options:[A,B,C,D], correct, explain}]",
      },
      {
        title: "Tạo câu hỏi điền khuyết (_______)",
        desc: "Đúng 1 chỗ khuyết và câu trả lời khớp nội dung.",
        prompt:
          "Hãy tạo 10 câu hỏi điền khuyết về: [CHỦ ĐỀ].\nYêu cầu:\n- Mỗi câu có đúng 1 chỗ khuyết dạng (_______).\n- Trả về: {fillQuestion, answer, explain}.\n- Không viết tắt “chủ nghĩa xã hội”.\n- Tránh câu mơ hồ.\n- Giải thích 1 câu.",
      },
      {
        title: "Rà soát chất lượng bộ câu hỏi",
        desc: "Check sai kiến thức, trùng ý, nhiễu kém, lộ đáp án.",
        prompt:
          "Hãy rà soát danh sách câu hỏi sau: [DÁN JSON].\nKiểm tra:\n1) Đúng kiến thức, không suy diễn.\n2) Không trùng ý.\n3) Phương án nhiễu hợp lý, không lộ đáp án.\n4) Đúng yêu cầu: chỉ A/B/C/D, fill có (_______), không viết tắt “chủ nghĩa xã hội”.\nTrả về: danh sách lỗi + đề xuất sửa.",
      },
    ],
    []
  );

  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ type: "ok", msg: "Đã copy prompt!" });
    } catch {
      setToast({ type: "err", msg: "Copy thất bại. Hãy copy thủ công." });
    } finally {
      setTimeout(() => setToast(null), 1800);
    }
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <div className="relative min-h-[calc(100vh-24px)] overflow-hidden bg-slate-900 text-slate-50">
      {/* background gradients (brighter than before) */}
      <div
        aria-hidden="true"
        className="absolute inset-0
          bg-[radial-gradient(1100px_700px_at_20%_10%,rgba(251,191,36,0.10),transparent_55%),
              radial-gradient(900px_600px_at_80%_20%,rgba(96,165,250,0.10),transparent_55%),
              radial-gradient(1000px_700px_at_70%_80%,rgba(148,163,184,0.10),transparent_60%)]"
      />

      <FloatingOrbs reducedMotion={reducedMotion} />

      {/* grid overlay subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55
          bg-[linear-gradient(to_right,rgba(226,232,240,0.08)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(226,232,240,0.06)_1px,transparent_1px)]
          bg-[length:56px_56px]
          [mask-image:radial-gradient(circle_at_35%_15%,black,transparent)]"
      />

      {/* vignette softer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.35)_70%,rgba(15,23,42,0.55)_100%)]"
      />

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-xl border border-slate-300/25
              bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-50/85 backdrop-blur-xl
              shadow-[0_18px_60px_rgba(15,23,42,0.35)]
              ${
                toast.type === "ok"
                  ? "outline outline-1 outline-amber-300/20"
                  : "outline outline-1 outline-rose-300/25"
              }`}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <CheckCircle2 size={16} />
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1160px] px-4 py-7 lg:px-6">
        {/* HERO */}
        <motion.section
          className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr]"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div className="py-3" variants={item}>
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-200/80">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.14)]" />
              Phụ lục AI • Hỗ trợ học tập thông minh
            </div>

            <h1 className="mt-3 text-[40px] font-extrabold leading-[1.08] tracking-[-0.5px] lg:text-[46px]">
              Phụ lục AI{" "}
              <span className="text-amber-300 [text-shadow:0_10px_40px_rgba(251,191,36,0.18)]">
                chuyên nghiệp
              </span>
              <br />
              cho trải nghiệm học tập.
            </h1>

            <p className="mt-3 max-w-[62ch] text-[15.5px] leading-7 text-slate-100/70">
              Tổng hợp <b className="text-slate-50/90">quy tắc chất lượng</b>,{" "}
              <b className="text-slate-50/90">prompt mẫu</b>, cách dùng AI đúng
              chuẩn để tạo câu hỏi trắc nghiệm và điền khuyết phù hợp với nội
              dung học.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <Badge icon={Sparkles}>Hiệu ứng mượt</Badge>
              <Badge icon={ShieldCheck}>Ưu tiên chính xác</Badge>
              <Badge icon={Bot}>Tối ưu cho đề A/B/C/D</Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#prompt"
                className="group relative inline-flex items-center gap-2 rounded-xl border border-amber-300/30
                  bg-gradient-to-b from-amber-300/20 to-amber-300/10 px-4 py-3 font-bold text-slate-50/90
                  shadow-[0_18px_60px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
              >
                <Wand2 size={18} />
                Prompt Library
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    translate-x-[-200%] transition duration-700 group-hover:translate-x-[320%]"
                />
              </a>

              <a
                href="#rules"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/25 bg-slate-800/55
                  px-4 py-3 font-bold text-slate-50/80 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-slate-800/70"
              >
                <Info size={18} />
                Quy tắc & lưu ý
              </a>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <Surface className="p-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-base font-semibold text-slate-50/90">
                  <Bot size={18} />
                  AI Checklist nhanh
                </div>
                <span className="rounded-full border border-slate-300/25 bg-slate-700/40 px-3 py-1 text-xs font-semibold text-slate-50/70">
                  Best practice
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  "Chỉ tạo câu trắc nghiệm A/B/C/D (đúng format)",
                  "Câu điền khuyết phải có (_______) đúng 1 chỗ",
                  "Không viết tắt “chủ nghĩa xã hội”",
                  "Đáp án không lộ, nhiễu hợp lý",
                  "Giải thích ngắn gọn, đúng trọng tâm",
                ].map((t) => (
                  <motion.div
                    key={t}
                    className="flex items-start gap-3 rounded-xl border border-slate-300/20 bg-slate-700/30 px-3 py-3 text-sm text-slate-50/75"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <span className="mt-0.5 text-amber-300">
                      <CheckCircle2 size={16} />
                    </span>
                    <span>{t}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-xs text-slate-100/70">
                Mẹo: tăng <b className="text-slate-50/90">DATASET_VERSION</b> để
                đổi thứ tự xáo trộn.
              </div>
            </Surface>
          </motion.div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.div variants={item} className="mb-4">
            <h2 className="text-2xl font-extrabold text-slate-50/90">
              AI dùng trong dự án này như thế nào?
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-100/70">
              Tập trung vào <b className="text-slate-50/90">tạo câu hỏi</b>,{" "}
              <b className="text-slate-50/90">chuẩn hóa đáp án</b> và{" "}
              <b className="text-slate-50/90">rà soát chất lượng</b> — tránh sai
              lệch kiến thức.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 gap-4 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <GlowCard
                icon={BookOpen}
                title="Sinh câu hỏi chuẩn"
                desc="Tạo câu hỏi theo chương, đúng format A/B/C/D, có đáp án và giải thích."
                chips={["A/B/C/D", "Correct 0-based", "Giải thích ngắn"]}
              />
            </motion.div>
            <motion.div variants={item}>
              <GlowCard
                icon={ScrollText}
                title="Điền khuyết chính xác"
                desc="Tạo câu (_______) đúng 1 chỗ khuyết, đáp án khớp nội dung."
                chips={["1 blank", "Không mơ hồ", "Dễ chấm"]}
              />
            </motion.div>
            <motion.div variants={item}>
              <GlowCard
                icon={ShieldCheck}
                title="Rà soát chất lượng"
                desc="Phát hiện trùng ý, nhiễu kém, hoặc nội dung dễ lộ đáp án."
                chips={["Chống trùng", "Nhiễu hợp lý", "Kiểm chứng"]}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* RULES + TIMELINE */}
        <section id="rules" className="mt-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Surface className="p-5">
                <h2 className="text-2xl font-extrabold text-slate-50/90">
                  Quy tắc & lưu ý
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-100/70">
                  Dùng AI hiệu quả là{" "}
                  <b className="text-slate-50/90">đặt ràng buộc rõ ràng</b> và{" "}
                  <b className="text-slate-50/90">kiểm chứng</b> trước khi đưa
                  vào dataset.
                </p>

                <div className="mt-4 space-y-3">
                  <AccordionItem
                    title="1) Format câu hỏi phải nhất quán"
                    open={openAcc === 0}
                    onToggle={() => setOpenAcc(openAcc === 0 ? -1 : 0)}
                  >
                    Trắc nghiệm: chỉ A/B/C/D. <br />
                    Fill: bắt buộc có đúng 1 đoạn khuyết dạng <b>(_______)</b>.
                  </AccordionItem>

                  <AccordionItem
                    title="2) Tránh lộ đáp án & nhiễu phải hợp lý"
                    open={openAcc === 1}
                    onToggle={() => setOpenAcc(openAcc === 1 ? -1 : 1)}
                  >
                    Đáp án đúng không nên “dài hơn hẳn” hay “đặc trưng quá”.
                    Nhiễu nên cùng loại, cùng phạm vi, tránh vô lý.
                  </AccordionItem>

                  <AccordionItem
                    title="3) Ngôn ngữ chuẩn – không viết tắt"
                    open={openAcc === 2}
                    onToggle={() => setOpenAcc(openAcc === 2 ? -1 : 2)}
                  >
                    Giữ đúng yêu cầu: <b>không viết tắt “chủ nghĩa xã hội”</b>.
                    Tránh dùng từ địa phương, tránh diễn đạt gây hiểu nhầm.
                  </AccordionItem>

                  <AccordionItem
                    title="4) Kiểm chứng nội dung trước khi publish"
                    open={openAcc === 3}
                    onToggle={() => setOpenAcc(openAcc === 3 ? -1 : 3)}
                  >
                    AI có thể sai. Luôn đối chiếu với tài liệu học/giáo trình và
                    thống nhất thuật ngữ.
                  </AccordionItem>
                </div>
              </Surface>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Surface className="p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-base font-semibold text-slate-50/90">
                    <Sparkles size={18} />
                    Quy trình gợi ý
                  </div>
                  <span className="rounded-full border border-slate-300/25 bg-slate-700/40 px-3 py-1 text-xs font-semibold text-slate-50/70">
                    Flow
                  </span>
                </div>

                <div className="relative mt-4 pl-7">
                  <div
                    className="absolute left-2 top-0 h-full w-[2px] bg-slate-300/20"
                    aria-hidden="true"
                  />
                  <motion.div
                    className="absolute left-2 top-0 h-full w-[2px] origin-top bg-amber-300/55"
                    style={{ scaleY: lineScale }}
                    aria-hidden="true"
                  />

                  {[
                    {
                      t: "Bước 1",
                      h: "Xác định trọng tâm chương",
                      d: "Chọn mục tiêu kiến thức → tránh lan man.",
                    },
                    {
                      t: "Bước 2",
                      h: "Sinh câu hỏi + ràng buộc",
                      d: "A/B/C/D hoặc fill (_______) + đáp án.",
                    },
                    {
                      t: "Bước 3",
                      h: "Rà soát & chỉnh nhiễu",
                      d: "Giảm lộ đáp án, tăng tính phân hóa.",
                    },
                    {
                      t: "Bước 4",
                      h: "Export dataset ổn định",
                      d: "Shuffle deterministic bằng DATASET_VERSION.",
                    },
                  ].map((s, idx) => (
                    <motion.div
                      key={s.t}
                      className="relative mb-4 last:mb-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.5,
                        ease: EASE,
                        delay: idx * 0.06,
                      }}
                    >
                      <div className="absolute -left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.14)]" />
                      <div className="text-xs font-bold text-slate-100/70">
                        {s.t}
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-slate-50/90">
                        {s.h}
                      </div>
                      <div className="mt-1 text-sm leading-7 text-slate-100/70">
                        {s.d}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Surface>
            </motion.div>
          </div>
        </section>

        {/* PROMPTS */}
        <motion.section
          id="prompt"
          className="mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.div variants={item} className="mb-4">
            <h2 className="text-2xl font-extrabold text-slate-50/90">
              Prompt Library
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-100/70">
              Copy nhanh để dùng. Bạn thay{" "}
              <b className="text-slate-50/90">[CHỦ ĐỀ]</b> hoặc{" "}
              <b className="text-slate-50/90">[DÁN JSON]</b> là chạy được ngay.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            {prompts.map((p) => (
              <motion.div key={p.title} variants={item}>
                <PromptCard {...p} onCopy={onCopy} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FOOTER NOTE */}
        <motion.section
          className="mt-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <Surface className="p-5">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-amber-300/25 bg-gradient-to-b from-amber-300/20 to-amber-300/10">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-50/90">
                  Gợi ý an toàn
                </div>
                <div className="mt-1 text-sm leading-7 text-slate-100/70">
                  AI là công cụ hỗ trợ. Khi publish dataset, hãy ưu tiên tài
                  liệu học chính thống và review lại nội dung.
                </div>
              </div>
            </div>
          </Surface>
        </motion.section>
      </div>
    </div>
  );
}
