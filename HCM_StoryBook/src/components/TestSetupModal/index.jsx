import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  X,
  Play,
  ChevronDown,
  Check,
  Clock3,
  Layers3,
  Hash,
  Shuffle,
  ShieldCheck,
  Eye,
  Volume2,
} from "lucide-react";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const cx = (...arr) => arr.filter(Boolean).join(" ");

const EASE = [0.22, 1, 0.36, 1]; // easeOutCubic-ish
const reduceSpring = { type: "spring", stiffness: 520, damping: 34 };
const MODE_OPTIONS = [
  { value: "quiz", label: "Trắc nghiệm" },
  { value: "fill", label: "Điền đáp án" },
  { value: "mixed", label: "Hỗn hợp" },
];

// Tạo/ lấy modal-root và đảm bảo nó nằm cuối body
function getOrCreateModalRoot() {
  if (typeof document === "undefined") return null;
  let el = document.getElementById("modal-root");
  if (!el) {
    el = document.createElement("div");
    el.id = "modal-root";
    document.body.appendChild(el);
  } else {
    // đảm bảo nó là phần tử cuối cùng trong body để thắng DOM order
    if (el.parentNode === document.body) {
      document.body.appendChild(el);
    }
  }
  return el;
}

function FocusRing({ darkMode, active }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-2xl"
      initial={false}
      animate={{
        boxShadow: active
          ? darkMode
            ? "0 0 0 1px rgba(251,191,36,0.16), 0 14px 38px rgba(0,0,0,0.40)"
            : "0 0 0 1px rgba(245,158,11,0.18), 0 12px 28px rgba(15,23,42,0.10)"
          : "0 0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.18 }}
    />
  );
}

// ====== UI blocks ======
function FieldShell({
  label,
  icon: Icon,
  hint,
  darkMode,
  isActive,
  children,
  className = "",
}) {
  return (
    <motion.div
      className={cx(
        "relative rounded-2xl border p-3 sm:p-4 transition-colors",
        darkMode
          ? "border-slate-700/80 bg-slate-800/70 hover:bg-slate-800/85"
          : "border-slate-200 bg-white hover:bg-slate-50/60",
        className,
      )}
    >
      <FocusRing darkMode={darkMode} active={isActive} />

      <div className="relative flex items-start justify-between gap-3 mb-2">
        <div
          className={cx(
            "flex items-center gap-2 text-sm font-semibold",
            darkMode ? "text-slate-100" : "text-slate-800",
          )}
        >
          {Icon ? (
            <span
              className={cx(
                "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border",
                darkMode
                  ? "border-slate-600/90 bg-slate-700/70 text-amber-200"
                  : "border-slate-200 bg-slate-50 text-amber-700",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
          ) : null}
          {label}
        </div>
        {hint ? (
          <div
            className={cx(
              "text-xs",
              darkMode ? "text-slate-400" : "text-slate-500",
            )}
          >
            {hint}
          </div>
        ) : null}
      </div>

      <div className="relative">{children}</div>
    </motion.div>
  );
}

function SelectLike({
  darkMode,
  value,
  options,
  onChange,
  onFocus,
  onBlur,
  minWidth = 220,
  align = "left",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const [menuStyle, setMenuStyle] = useState({});
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const selected = useMemo(
    () => options.find((item) => item.value === value)?.label ?? "",
    [options, value],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      if (!triggerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      const gap = 8;
      const viewportPadding = 12;
      const width = Math.min(
        Math.max(rect.width, minWidth),
        window.innerWidth - viewportPadding * 2,
      );
      const desiredLeft = align === "right" ? rect.right - width : rect.left;
      const maxLeft = Math.max(
        viewportPadding,
        window.innerWidth - viewportPadding - width,
      );
      const left = clamp(desiredLeft, viewportPadding, maxLeft);

      const spaceBelow = window.innerHeight - rect.bottom - viewportPadding;
      const spaceAbove = rect.top - viewportPadding;
      const shouldOpenUp = spaceBelow < 260 && spaceAbove > spaceBelow;
      const preferredHeight = window.innerWidth < 640 ? 256 : 320;
      const availableHeight = Math.max(
        140,
        (shouldOpenUp ? spaceAbove : spaceBelow) - gap,
      );
      const maxHeight = Math.min(preferredHeight, availableHeight);

      setPlacement(shouldOpenUp ? "top" : "bottom");
      setMenuStyle({
        position: "fixed",
        zIndex: 2147483647,
        width,
        left,
        top: shouldOpenUp ? undefined : rect.bottom + gap,
        bottom: shouldOpenUp ? window.innerHeight - rect.top + gap : undefined,
        maxHeight,
      });
    };

    updatePosition();

    const onResize = () => updatePosition();
    const onScroll = () => updatePosition();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open, align, minWidth]);

  useEffect(() => {
    if (!open) return;

    const closeMenu = (restoreFocus = false) => {
      setOpen(false);
      onBlur?.();
      if (restoreFocus) triggerRef.current?.focus();
    };

    const onDoc = (e) => {
      const target = e.target;
      if (
        wrapperRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      closeMenu();
    };

    const onKey = (e) => {
      if (e.key === "Escape") closeMenu(true);
    };

    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onBlur]);

  const toggleOpen = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) onFocus?.();
      else onBlur?.();
      return next;
    });
  };

  const closeMenu = () => {
    setOpen(false);
    onBlur?.();
  };

  const portalTarget =
    mounted && typeof document !== "undefined"
      ? document.getElementById("modal-root") || document.body
      : null;

  return (
    <div ref={wrapperRef} className="relative">
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={toggleOpen}
        className={cx(
          "group relative flex h-11 w-full items-center gap-2 rounded-xl border px-3 pr-10 text-left text-sm font-semibold outline-none transition-all",
          darkMode
            ? "border-slate-700 bg-slate-700/60 text-slate-100 hover:border-amber-300/35 hover:bg-slate-700/75"
            : "border-slate-200 bg-white text-slate-900 hover:border-amber-500/30 hover:bg-slate-50",
          open &&
            (darkMode
              ? "border-amber-300/40 bg-slate-700/80"
              : "border-amber-500/40 bg-white"),
          "focus-visible:ring-2 focus-visible:ring-amber-300/20",
        )}
        whileTap={{ scale: 0.995 }}
      >
        <span className="min-w-0 truncate">{selected}</span>

        <motion.span
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          <ChevronDown
            className={cx(
              "h-4 w-4",
              darkMode ? "text-slate-300" : "text-slate-500",
            )}
          />
        </motion.span>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: darkMode ? 0.08 : 0.04 }}
          animate={{ opacity: open ? (darkMode ? 0.08 : 0.04) : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 65%)",
          }}
        />
      </motion.button>

      {portalTarget
        ? createPortal(
            <AnimatePresence>
              {open && (
                <motion.div
                  ref={menuRef}
                  initial={{
                    opacity: 0,
                    y: placement === "top" ? 6 : -6,
                    scale: 0.985,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: placement === "top" ? 6 : -6,
                    scale: 0.985,
                  }}
                  transition={reduceSpring}
                  style={{
                    ...menuStyle,
                    transformOrigin:
                      placement === "top" ? "bottom center" : "top center",
                  }}
                >
                  <div
                    className={cx(
                      "overflow-hidden rounded-xl border shadow-[0_18px_50px_rgba(0,0,0,.32)] backdrop-blur-xl",
                      darkMode
                        ? "border-slate-600 bg-slate-800/98"
                        : "border-slate-200 bg-white",
                    )}
                  >
                    <div
                      className="overflow-y-auto overflow-x-hidden px-1 py-1 custom-scrollbar overscroll-contain"
                      style={{ maxHeight: menuStyle.maxHeight }}
                    >
                      <div className="flex flex-col gap-px">
                        {options.map((option) => {
                          const active = option.value === value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                onChange(option.value);
                                closeMenu();
                              }}
                              className={cx(
                                "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors duration-200",
                                active
                                  ? darkMode
                                    ? "bg-amber-300/18 text-amber-100"
                                    : "bg-amber-50 text-amber-900"
                                  : darkMode
                                    ? "text-slate-100 hover:bg-slate-700/80"
                                    : "text-slate-700 hover:bg-slate-100",
                              )}
                            >
                              <span className="truncate">{option.label}</span>
                              <motion.span
                                initial={false}
                                animate={{
                                  opacity: active ? 1 : 0,
                                  scale: active ? 1 : 0.8,
                                }}
                                transition={{ duration: 0.18 }}
                                className={cx(
                                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                                  active
                                    ? darkMode
                                      ? "border-amber-300/45 bg-amber-300/16 text-amber-100"
                                      : "border-amber-300 bg-amber-50 text-amber-700"
                                    : "border-transparent text-transparent",
                                )}
                              >
                                <Check className="h-3.5 w-3.5" />
                              </motion.span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            portalTarget,
          )
        : null}
    </div>
  );
}

function ToggleCard({ darkMode, title, desc, checked, onChange, icon: Icon }) {
  return (
    <motion.label
      className={cx(
        "group relative flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 sm:px-4 cursor-pointer",
        darkMode
          ? "border-slate-700/80 bg-slate-800/70 hover:bg-slate-800/85"
          : "border-slate-200 bg-white hover:bg-slate-50/60",
      )}
    >
      <div className="relative">
        <div className="flex items-center gap-2">
          {Icon ? (
            <span
              className={cx(
                "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border",
                darkMode
                  ? "border-slate-600/90 bg-slate-700/70 text-amber-200"
                  : "border-slate-200 bg-slate-50 text-amber-700",
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
          ) : null}
          <div
            className={cx(
              "text-sm font-semibold",
              darkMode ? "text-slate-100" : "text-slate-800",
            )}
          >
            {title}
          </div>
        </div>
        {desc ? (
          <div
            className={cx(
              "text-xs mt-1",
              darkMode ? "text-slate-400" : "text-slate-500",
            )}
          >
            {desc}
          </div>
        ) : null}
      </div>

      <span className="relative inline-flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <span
          className={cx(
            "h-6 w-11 rounded-full border transition-all",
            darkMode ? "border-slate-700" : "border-slate-200",
            "peer-focus:ring-1 peer-focus:ring-amber-400/10",
            checked
              ? darkMode
                ? "bg-amber-300/90"
                : "bg-amber-400"
              : darkMode
                ? "bg-slate-700/80"
                : "bg-slate-200",
          )}
        />
        <motion.span
          className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
          initial={false}
          animate={{ x: checked ? 20 : 0 }}
          transition={reduceSpring}
        />
      </span>
    </motion.label>
  );
}

export default function TestSetupModal({
  open,
  onClose,
  onStart,
  totalQuestions = 0,
  chapters = [],
  activeChapter = 0,
  darkMode: darkModeProp,
  topicTitle = "Tôn giáo ở Việt Nam và chính sách tôn giáo hiện nay",
  topicSubtitle = "Ôn tập đặc điểm tôn giáo, chính sách hiện hành và công tác tôn giáo.",
}) {
  const reduceMotion = useReducedMotion();
  const darkMode = darkModeProp ?? true;

  // ===== Portal target =====
  const [portalEl, setPortalEl] = useState(null);
  useEffect(() => {
    setPortalEl(getOrCreateModalRoot());
  }, []);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const fn = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  const totalAll = useMemo(() => {
    if (totalQuestions && totalQuestions > 0) return totalQuestions;
    return (chapters || []).reduce(
      (sum, ch) => sum + (ch?.questions?.length || 0),
      0,
    );
  }, [totalQuestions, chapters]);

  const maxTotal = Math.max(1, totalAll);
  const [focused, setFocused] = useState("");

  const [form, setForm] = useState(() => ({
    numQuestions: Math.min(10, maxTotal),
    mode: "quiz",
    shuffle: true,
    withTimer: true,
    minutes: 10,
    strictMode: false,
    revealAfterEach: false,
    sound: true,
  }));

  useEffect(() => {
    if (!open) return;
    setForm((prev) => ({
      ...prev,
      numQuestions: clamp(Number(prev.numQuestions ?? 10), 1, maxTotal),
    }));
  }, [open, maxTotal]);

  const patch = (p) => setForm((s) => ({ ...s, ...p }));

  const handleStart = () => {
    const withTimer = !!form.withTimer;
    onStart?.({
      chapterIndex: activeChapter,
      numQuestions: clamp(Number(form.numQuestions || 1), 1, maxTotal),
      mode: form.mode,
      shuffle: !!form.shuffle,
      withTimer,
      minutes: withTimer ? clamp(Number(form.minutes || 1), 1, 300) : 0,
      strictMode: !!form.strictMode,
      revealAfterEach: !!form.revealAfterEach,
      sound: !!form.sound,
    });
  };

  const card = darkMode
    ? "bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 text-white border-slate-700 shadow-2xl"
    : "bg-white text-slate-900 border-slate-200 shadow-xl";

  const sub = darkMode ? "text-slate-300/80" : "text-slate-600";
  const divider = darkMode ? "border-slate-700/70" : "border-slate-200";

  const panelVariants = {
    hidden: { y: 18, scale: 0.985, opacity: 0 },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0.15 }
        : { type: "spring", stiffness: 420, damping: 32 },
    },
    exit: { y: 14, scale: 0.99, opacity: 0, transition: { duration: 0.14 } },
  };

  const bodyContainer = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? {}
        : { staggerChildren: 0.05, delayChildren: 0.03 },
    },
  };
  const bodyItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
  };

  // Nếu chưa mount portal target (SSR / hydrate), không render
  if (!portalEl) return null;

  const modalUI = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2147483647] flex items-start justify-center px-3 pb-4 pt-10 sm:pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // isolation giúp nội bộ modal không bị ảnh hưởng lẫn nhau, nhưng quan trọng nhất vẫn là Portal
          style={{ isolation: "isolate" }}
        >
          {/* Overlay (đặt z thấp hơn panel) */}
          <motion.button
            type="button"
            className={cx(
              "absolute inset-0 z-0",
              darkMode ? "bg-slate-950/60" : "bg-black/40",
            )}
            style={{ backdropFilter: "blur(12px)" }}
            aria-label="Đóng"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className={cx(
              "relative z-10 w-[96vw] sm:w-[94vw] max-w-2xl overflow-hidden rounded-xl border",
              "max-h-[92svh] flex flex-col",
              card,
            )}
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Header */}
            <motion.div
              className={cx(
                "px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b",
                divider,
              )}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <div className="text-lg sm:text-xl font-bold tracking-tight text-amber-50">
                      Thiết lập bài kiểm tra
                    </div>
                    <div className={cx("text-sm", sub)}>
                      (Chọn số câu, chế độ và thời gian)
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className={cx(
                    "p-2 rounded-lg",
                    darkMode ? "hover:bg-slate-700" : "hover:bg-slate-100",
                  )}
                  onClick={onClose}
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Topic banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: EASE }}
              className={cx(
                "border-b px-4 sm:px-6 py-3",
                darkMode
                  ? "border-slate-700/70 bg-slate-800/55"
                  : "border-slate-100 bg-slate-50/70",
              )}
            >
              <div
                className={cx(
                  "text-sm font-bold leading-snug",
                  darkMode ? "text-white" : "text-slate-900",
                )}
              >
                {topicTitle}
              </div>
              <div
                className={cx(
                  "text-xs mt-1 leading-snug",
                  darkMode ? "text-slate-300/80" : "text-slate-600",
                )}
              >
                {topicSubtitle}
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              variants={bodyContainer}
              initial="hidden"
              animate="show"
              className="px-4 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-4 overflow-y-auto"
            >
              <motion.div
                variants={bodyItem}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <FieldShell
                  label="Chế độ"
                  icon={Layers3}
                  darkMode={darkMode}
                  isActive={focused === "mode"}
                >
                  <SelectLike
                    darkMode={darkMode}
                    value={form.mode}
                    options={MODE_OPTIONS}
                    onChange={(nextMode) => patch({ mode: nextMode })}
                    onFocus={() => setFocused("mode")}
                    onBlur={() => setFocused("")}
                  />
                  <div className={cx("text-xs mt-2", sub)}>
                    Lựa chọn chế độ kiểm tra
                  </div>
                </FieldShell>

                <FieldShell
                  label="Số câu"
                  icon={Hash}
                  hint={`Tối đa: ${maxTotal}`}
                  darkMode={darkMode}
                  isActive={focused === "num"}
                >
                  <motion.input
                    type="number"
                    min={1}
                    max={maxTotal || 80}
                    value={form.numQuestions}
                    onChange={(e) => patch({ numQuestions: e.target.value })}
                    onFocus={() => setFocused("num")}
                    onBlur={() => setFocused("")}
                    className={cx(
                      "h-11 w-full rounded-xl border px-3 text-sm outline-none transition-all",
                      darkMode
                        ? "border-slate-700 bg-slate-700/60 text-slate-100 focus:border-amber-300/35 focus:ring-1 focus:ring-amber-300/10"
                        : "border-slate-200 bg-white text-slate-900 focus:border-amber-500/40 focus:ring-1 focus:ring-amber-400/10",
                    )}
                    whileFocus={reduceMotion ? undefined : { scale: 1.01 }}
                    transition={{ duration: 0.18, ease: EASE }}
                  />
                  <div className={cx("text-xs mt-2", sub)}>
                    Tổng câu của tất cả phần
                  </div>
                </FieldShell>
              </motion.div>

              <motion.div
                variants={bodyItem}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <ToggleCard
                  darkMode={darkMode}
                  title="Trộn câu hỏi"
                  desc="Xáo trộn thứ tự câu hỏi"
                  icon={Shuffle}
                  checked={form.shuffle}
                  onChange={(v) => patch({ shuffle: v })}
                />
                <ToggleCard
                  darkMode={darkMode}
                  title="Strict"
                  desc="Khóa sửa đáp án"
                  icon={ShieldCheck}
                  checked={form.strictMode}
                  onChange={(v) => patch({ strictMode: v })}
                />
                <ToggleCard
                  darkMode={darkMode}
                  title="Hiện đáp án"
                  desc="Sau mỗi câu"
                  icon={Eye}
                  checked={form.revealAfterEach}
                  onChange={(v) => patch({ revealAfterEach: v })}
                />
                <ToggleCard
                  darkMode={darkMode}
                  title="Âm thanh hết giờ"
                  desc="Báo khi hết thời gian"
                  icon={Volume2}
                  checked={form.sound}
                  onChange={(v) => patch({ sound: v })}
                />
              </motion.div>

              <motion.div
                variants={bodyItem}
                className={cx(
                  "rounded-3xl border p-4 sm:p-5",
                  darkMode
                    ? "border-slate-700/80 bg-slate-800/70"
                    : "border-slate-200 bg-slate-50/60",
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <motion.div
                      className={cx(
                        "inline-flex items-center justify-center rounded-2xl border px-4 h-11 text-sm font-medium",
                        darkMode
                          ? "border-slate-700 bg-slate-700/55 text-slate-100"
                          : "border-slate-200 bg-white text-slate-900",
                      )}
                      whileHover={reduceMotion ? undefined : { y: -1 }}
                      transition={{ duration: 0.18, ease: EASE }}
                    >
                      <Clock3 className="mr-2 h-4 w-4 text-amber-200/90" />
                      Hẹn giờ
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {form.withTimer && (
                        <motion.div
                          key="minutes"
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: EASE }}
                          className="flex items-center gap-2"
                        >
                          <span
                            className={cx(
                              "text-xs font-semibold whitespace-nowrap",
                              darkMode ? "text-slate-300" : "text-slate-600",
                            )}
                          >
                            Số phút
                          </span>

                          <motion.input
                            type="number"
                            min={1}
                            max={300}
                            value={form.minutes}
                            onChange={(e) => patch({ minutes: e.target.value })}
                            className={cx(
                              "h-11 w-28 rounded-xl border px-3 text-sm outline-none transition-all",
                              darkMode
                                ? "border-slate-700 bg-slate-700/70 text-slate-100 focus:border-amber-300/35 focus:ring-1 focus:ring-amber-300/10"
                                : "border-slate-200 bg-white text-slate-900 focus:border-amber-500/40 focus:ring-1 focus:ring-amber-400/10",
                            )}
                            whileFocus={
                              reduceMotion ? undefined : { scale: 1.01 }
                            }
                            transition={{ duration: 0.18, ease: EASE }}
                          />

                          <span className={cx("text-xs", sub)}>1–300</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <label className="flex items-center gap-2 text-sm select-none ml-auto">
                    <input
                      type="checkbox"
                      checked={form.withTimer}
                      onChange={(e) => patch({ withTimer: e.target.checked })}
                      className="accent-amber-400"
                    />
                    <span
                      className={cx(
                        darkMode ? "text-slate-100" : "text-slate-700",
                      )}
                    >
                      Bật
                    </span>
                  </label>
                </div>

                <div className={cx("text-xs mt-2", sub)}>
                  Bật/tắt giới hạn thời gian làm bài.
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className={cx("px-4 sm:px-6 pb-4 sm:pb-6 pt-3 border-t", divider)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <div className="flex items-center justify-end gap-2">
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -1, boxShadow: "0 12px 28px rgba(0,0,0,0.35)" }
                  }
                  whileTap={{ scale: 0.98 }}
                  className={cx(
                    "px-4 h-11 rounded-xl text-sm font-semibold transition-all border",
                    darkMode
                      ? "bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700/85"
                      : "bg-slate-800 border-slate-800 text-white hover:bg-slate-700",
                  )}
                >
                  Hủy
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleStart}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -2,
                          boxShadow: "0 18px 45px rgba(251,191,36,0.18)",
                          filter: "brightness(1.02)",
                        }
                  }
                  whileTap={{ scale: 0.98 }}
                  className={cx(
                    "group px-4 h-11 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-all",
                    "bg-amber-300/95 text-slate-900 hover:bg-amber-400",
                  )}
                >
                  <Play className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:scale-105" />
                  Bắt đầu
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ✅ Render ra modal-root/body (thoát stacking context)
  return createPortal(modalUI, portalEl);
}
