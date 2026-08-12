"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function LoadingScreen({ locale }: { locale: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"dharma" | "main">("dharma");
  const [dharmaText, setDharmaText] = useState("");
  const [progress, setProgress] = useState(0);

  const isRTL = locale === "ar";
  const targetSequence = "4 8 15 16 23 42";

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Phase 1: Fast CRT terminal sequence (~600ms)
    let currentIdx = 0;
    let typed = "";
    const typingInterval = setInterval(() => {
      if (currentIdx < targetSequence.length) {
        typed += targetSequence[currentIdx];
        setDharmaText(typed);
        currentIdx++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setPhase("main");
        }, 150);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [targetSequence]);

  // Phase 2: Rapid progress loader (~200ms)
  useEffect(() => {
    if (phase !== "main") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 100);
          return 100;
        }
        return prev + 45;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020703] text-white select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* CRT Scanline Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 z-20"
            style={{
              backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
              backgroundSize: "100% 4px",
            }}
          />

          {/* PHASE 1: Pure Black CRT Dharma Terminal */}
          {phase === "dharma" && (
            <motion.div
              key="dharma-phase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="relative z-30 font-mono p-6 max-w-xl sm:max-w-2xl w-full text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-xs text-[#22c55e] opacity-80 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span>DHARMA INITIATIVE — SWAN 3</span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-[#22c55e]/30 bg-[#000501] shadow-[0_0_50px_rgba(34,197,94,0.12)] space-y-3">
                <p className="text-[10px] sm:text-xs text-[#22c55e]/70 tracking-widest uppercase">
                  &gt; ENTERING SYSTEM RESET SEQUENCE:
                </p>

                <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-black text-[#a8ff3e] tracking-widest whitespace-nowrap min-h-[44px] flex items-center justify-center overflow-x-auto">
                  <span>{dharmaText}</span>
                  <span className="w-2.5 h-7 bg-[#a8ff3e] ms-1 animate-pulse flex-shrink-0" />
                </div>

                <p className="text-[10px] sm:text-xs text-[#22c55e]/80">
                  {dharmaText.length === targetSequence.length
                    ? "&gt; [ EXECUTE ] -&gt; SYSTEM RESET: 108:00"
                    : "&gt; TYPING INPUT..."}
                </p>
              </div>
            </motion.div>
          )}

          {/* PHASE 2: Main Portfolio Creative Loader */}
          {phase === "main" && (
            <motion.div
              key="main-phase"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Subtle Background Glow */}
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(168,255,62,0.06) 50%, transparent 70%)",
                }}
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative p-12 sm:p-16 flex flex-col items-center">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#38bdf8]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#818cf8]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#a8ff3e]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#38bdf8]" />

                {/* Orbital Ring */}
                <motion.div
                  className="absolute inset-2 rounded-3xl border border-white/15"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Brand Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 flex items-center justify-center scale-110 sm:scale-125"
                >
                  <BrandLogo size={64} priority />
                </motion.div>

                {/* Subtitle / System status */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-neutral-300 uppercase mb-4"
                >
                  {isRTL ? "تم تهيئة النظام — 108:00" : "SYSTEM INITIALIZED — 108:00"}
                </motion.p>

                {/* Progress bar container */}
                <div className="w-64 sm:w-80 h-2 bg-white/15 rounded-full overflow-hidden relative shadow-inner">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#a8ff3e]"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  />
                </div>

                {/* Progress digits */}
                <div className="mt-4 flex items-center justify-between w-64 sm:w-80 text-xs sm:text-sm font-mono text-neutral-400">
                  <span className="font-semibold">{isRTL ? "النسخة 2026" : "SYS_V2026"}</span>
                  <span className="text-[#a8ff3e] font-black text-sm sm:text-base">{Math.min(progress, 100)}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
