"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatWhatsAppLink } from "@/lib/utils";

type DharmaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onResetTimer: () => void;
  locale: string;
};

const TARGET_SEQUENCE = "4 8 15 16 23 42";

export default function DharmaModal({
  isOpen,
  onClose,
  onResetTimer,
  locale,
}: DharmaModalProps) {
  const isRTL = locale === "ar";

  const [typedText, setTypedText] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const resetRef = useRef(onResetTimer);

  useEffect(() => {
    resetRef.current = onResetTimer;
  }, [onResetTimer]);

  const startAutoType = useCallback(() => {
    setTypedText("");
    setIsExecuting(true);
    setIsResetSuccess(false);

    let current = "";
    const chars = TARGET_SEQUENCE.split("");
    let idx = 0;

    const interval = setInterval(() => {
      if (idx < chars.length) {
        current += chars[idx];
        setTypedText(current);
        idx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsExecuting(false);
          setIsResetSuccess(true);
          resetRef.current();
        }, 400);
      }
    }, 150);
  }, []);

  useEffect(() => {
    if (isOpen) {
      startAutoType();
    } else {
      setTypedText("");
      setIsExecuting(false);
      setIsResetSuccess(false);
    }
  }, [isOpen, startAutoType]);

  const whatsappMsg = isRTL
    ? "أهلاً محمد، دخلت تسلسل دارما (4 8 15 16 23 42) وعملت Reset للسيستم! خلينا نتكلم عن مشروع جديد."
    : "Hi Mohamed, I entered the Dharma sequence (4 8 15 16 23 42) and reset the system! I'd like to discuss a project.";

  const whatsappUrl = formatWhatsAppLink("01096209741", whatsappMsg);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Retro CRT Terminal Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-full max-w-xl rounded-3xl border border-[#22c55e]/30 bg-[#050c07] text-[#22c55e] p-6 sm:p-8 shadow-[0_0_80px_rgba(34,197,94,0.15)] overflow-hidden select-none"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* CRT Scanline Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 z-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
                backgroundSize: "100% 4px",
              }}
            />

            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-[#22c55e]/20 pb-4 mb-6 relative z-30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#22c55e] animate-ping" />

                <span className="text-xs font-mono font-bold tracking-widest text-[#a8ff3e] uppercase">
                  DHARMA INITIATIVE — STATION 3 (SWAN)
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono px-2 py-1 rounded border border-[#22c55e]/30 text-[#22c55e] hover:bg-[#22c55e]/20 transition-colors"
              >
                ✕ ESC
              </button>
            </div>

            {/* CRT Screen Display Area */}
            <div className="relative z-30 space-y-5 font-mono">
              <div className="text-[11px] text-[#22c55e]/70 space-y-1">
                <p>&gt; SYSTEM STATUS: THE SWAN HATCH COMPUTER</p>
                <p>&gt; VALENZETTI EQUATION CONSTANTS DETECTED</p>
                <p>
                  &gt; LOC: 31°12&apos;N 29°57&apos;E — EGYPT ARCHITECTURE
                </p>
              </div>

              {/* Main Input Display Screen */}
              <div className="p-5 rounded-2xl border border-[#22c55e]/40 bg-[#020703] flex flex-col items-center justify-center space-y-3 shadow-inner">
                <p className="text-[10px] tracking-widest uppercase text-[#a8ff3e]/80">
                  {isRTL ? "تسلسل دارما" : "VALENZETTI SEQUENCE"}
                </p>

                <div className="text-2xl sm:text-4xl font-mono font-black tracking-widest text-[#a8ff3e] min-h-[48px] flex items-center justify-center">
                  <span>{typedText}</span>

                  <span className="w-2.5 h-7 bg-[#a8ff3e] ms-1 animate-pulse" />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[10px] text-[#22c55e]/80">
                    {isExecuting
                      ? isRTL
                        ? "جاري إدخال التسلسل..."
                        : "TYPING INTO TERMINAL..."
                      : isResetSuccess
                      ? isRTL
                        ? "تم إعادة تشغيل السيستم بنجاح — 108:00"
                        : "SYSTEM RESET CONFIRMED (108:00)"
                      : isRTL
                      ? "مستني التسلسل..."
                      : "READY FOR INPUT"}
                  </span>
                </div>
              </div>

              {/* Confirmation Message */}
              {isResetSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl border border-[#a8ff3e]/30 bg-[#a8ff3e]/10 text-center space-y-2"
                >
                  <p className="text-sm font-bold text-[#a8ff3e]">
                    {isRTL
                      ? "0 CRASHES — السيستم شغال زي الفل"
                      : "0 CRASHES — SYSTEM FULLY STABLE"}
                  </p>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {isRTL
                      ? "«كل 108 دقيقة لازم ندوس الزرار... عشان السيستم يفضل شغال.» — محمد إبراهيم"
                      : "“Pushing the button every 108 minutes so your web applications never crash.” — Mohamed Ibrahim"}
                  </p>
                </motion.div>
              )}

              {/* Modal Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={startAutoType}
                  disabled={isExecuting}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#22c55e]/40 font-mono text-xs font-bold text-[#22c55e] hover:bg-[#22c55e]/20 transition-all disabled:opacity-50"
                >
                  {isRTL
                    ? "إعادة إدخال التسلسل [4 8 15 16 23 42]"
                    : "RE-ENTER [4 8 15 16 23 42]"}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#a8ff3e] text-[#08090a] font-mono text-xs font-bold shadow-[0_0_25px_rgba(168,255,62,0.4)] hover:scale-105 transition-all text-center"
                >
                  {isRTL
                    ? "دُست الزرار! كلّمني على واتساب"
                    : "I RESET THE 108 SYSTEM! LET'S TALK"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}