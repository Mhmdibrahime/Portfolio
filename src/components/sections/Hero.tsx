"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn, formatWhatsAppLink } from "@/lib/utils";

function AnimatedChar({ char, delay }: { char: string; delay: number }) {
  return (
    <motion.span
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function CredibilityStrip({ isRTL }: { isRTL: boolean }) {
  const t = useTranslations("hero");
  const items: string[] = t.raw("credibilityStrip") as string[];
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y py-3.5"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
      aria-hidden
    >
      <motion.div
        animate={{ x: isRTL ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span
              className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

import { useDharma } from "@/components/providers/DharmaProvider";

// Dharma 4 8 15 16 23 42 Slot Machine Shuffler
function HeroDharmaShuffler({ finalValue }: { finalValue: string }) {
  const [displayValue, setDisplayValue] = useState("4");
  useEffect(() => {
    const numbers = ["4", "8", "15", "16", "23", "42"];
    let step = 0;
    const interval = setInterval(() => {
      if (step < numbers.length * 2) {
        setDisplayValue(numbers[step % numbers.length]);
        step++;
      } else {
        clearInterval(interval);
        setDisplayValue(finalValue);
      }
    }, 90);
    return () => clearInterval(interval);
  }, [finalValue]);
  return <span>{displayValue}</span>;
}

// Rotating frame info badges inside photo card
const frameTags = [
  { label: "Software Engineer", color: "#38bdf8", pulse: true },
  { label: "Freelancing since Sep 2024", color: "#c084fc", pulse: false },
  { label: "Egypt · Remote", color: "#a8ff3e", pulse: false },
];

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const isRTL = locale === "ar";
  const { formattedTime, openDharmaModal } = useDharma();

  const whatsappMsg = isRTL
    ? "مرحباً محمد، أود التواصل ومناقشة تفاصيل مشروع برمجي معك."
    : "Hi Mohamed, I'd like to discuss a project idea with you.";
  const whatsappUrl = formatWhatsAppLink("01096209741", whatsappMsg);

  const name1 = t("name1");
  const name2 = t("name2");

  const [activeTag, setActiveTag] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActiveTag((p) => (p + 1) % frameTags.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-0"
      aria-label="Hero"
    >
      {/* Ambient background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 grid-bg opacity-25"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 100%)",
          }}
        />
        {/* Glow left */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "650px",
            height: "650px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
            left: isRTL ? "70%" : "20%",
            top: "30%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Glow right */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168,255,62,0.08) 0%, transparent 70%)",
            left: isRTL ? "25%" : "75%",
            top: "45%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main hero grid — no scroll parallax so content stays visible */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center my-auto pb-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left Column: Typography & Action */}
          <div
            className={cn(
              "order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left",
              isRTL && "lg:text-right lg:items-end lg:col-start-6"
            )}
          >
            {/* Name Typography — fits on 2 lines max */}
            <div className="mb-4 overflow-hidden w-full">
              <h1
                className={cn(
                  "tracking-tight font-black",
                  isRTL ? "leading-[1.1]" : "leading-[0.88]"
                )}
                style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
              >
                <div className="overflow-hidden">
                  <span className="text-[var(--text-primary)] inline-block">
                    {isRTL ? (
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        {name1}
                      </motion.span>
                    ) : (
                      name1.split("").map((char, i) => (
                        <AnimatedChar key={i} char={char} delay={0.25 + i * 0.035} />
                      ))
                    )}
                  </span>
                </div>
                <div className="overflow-hidden mt-1">
                  <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#a8ff3e] bg-clip-text text-transparent inline-block pb-1">
                    {isRTL ? (
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        {name2}
                      </motion.span>
                    ) : (
                      name2.split("").map((char, i) => (
                        <AnimatedChar key={i} char={char} delay={0.45 + i * 0.035} />
                      ))
                    )}
                  </span>
                </div>
              </h1>
            </div>

            {/* Software Engineer Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-7"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#38bdf8]" />
                <p className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#38bdf8]">
                  {t("title")}
                </p>
                <span className="h-px w-8 bg-[#a8ff3e]" />
              </div>
            </motion.div>

            {/* Tagline & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl mb-10"
            >
              <p
                className="text-h3 font-bold leading-snug mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;{t("tagline")}&rdquo;
              </p>
              <p
                className="text-body-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {t("subTagline")}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-8 sm:mb-0 w-full sm:w-auto"
            >
              {/* Primary — WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-xl"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#08090a",
                  boxShadow: "0 0 35px rgba(168,255,62,0.25)",
                }}
              >
                {t("cta1")}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Download CV CTA */}
              <a
                href="/Mohamed-Ibrahim-CV.pdf"
                download
                id="hero-cta-cv"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-sm border transition-all duration-300 hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {isRTL ? "تحميل السيرة الذاتية" : "Download CV"}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Art-Directed Portrait — with animated info tags inside frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`order-1 lg:order-2 lg:col-span-5 flex justify-center relative ${
              isRTL ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] pb-14" style={{ aspectRatio: "3/4" }}>
              {/* Offset dashed frame */}
              <div
                className="absolute inset-[-12px] rounded-3xl border border-dashed pointer-events-none"
                style={{ borderColor: "rgba(56,189,248,0.2)" }}
              />

              {/* Rotating Orbital Ring with Glowing Nodes */}
              <motion.div
                className="absolute w-[105%] h-[105%] rounded-full border pointer-events-none"
                style={{
                  top: "-2.5%",
                  left: "-2.5%",
                  borderColor: "rgba(168,255,62,0.18)",
                  boxShadow: "0 0 40px rgba(56,189,248,0.04)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#a8ff3e] shadow-[0_0_12px_#a8ff3e]" />
              </motion.div>

              {/* Main Portrait Canvas */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 flex items-end justify-center"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(56,189,248,0.22) 0%, rgba(168,255,62,0.1) 40%, #0d1117 70%, #08090a 100%)",
                }}
              >
                {/* Backlight Radial Aura */}
                <div
                  className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(168,255,62,0.2) 60%, transparent 80%)",
                  }}
                />

                {/* Corner tech tags */}
                <div className="absolute top-3 left-3 text-[9px] font-mono text-[#38bdf8] select-none z-20">
                  [ 31°12&apos;N 29°57&apos;E ]
                </div>
                <div className="absolute top-3 right-3 text-[9px] font-mono text-[#a8ff3e] select-none z-20">
                  [ SYS_ACTIVE ]
                </div>

                {/* Portrait Image — raised (object-top pushes face up) */}
                <div className="relative z-10 w-full h-full">
                  <Image
                    src="/images/mohamed-ibrahim.png"
                    alt="Mohamed Ibrahim — Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 400px"
                    className="object-contain object-top select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                    style={{ objectPosition: "center 5%" }}
                  />
                </div>

                {/* Bottom Shadow Fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08090a] via-[#08090a]/60 to-transparent z-20 pointer-events-none" />
              </div>

              {/* BOTTOM ROW: badge + animated info ticker — side by side */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-5 -left-2 right-2 sm:-left-5 sm:right-0 z-40 flex items-center gap-2"
              >
                {/* +10 Projects Shipped */}
                <div
                  className="flex-shrink-0 px-3 py-2 rounded-2xl border backdrop-blur-xl flex items-center gap-2.5 shadow-2xl"
                  style={{
                    backgroundColor: "rgba(8,9,10,0.9)",
                    borderColor: "rgba(168,255,62,0.35)",
                  }}
                >
                  <div className="w-7 h-7 rounded-xl bg-[#a8ff3e]/15 border border-[#a8ff3e]/30 flex items-center justify-center text-[#a8ff3e] font-black text-xs">
                    <HeroDharmaShuffler finalValue="10+" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white leading-tight whitespace-nowrap">
                      {isRTL ? "مشاريع منجزة" : "Projects Shipped"}
                    </p>
                    <p className="text-[8px] font-mono text-neutral-400 whitespace-nowrap">
                      {isRTL ? "مصر · السعودية" : "EG · KSA · GCC"}
                    </p>
                  </div>
                </div>

                {/* Animated Status Ticker */}
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTag}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl border backdrop-blur-md w-full"
                      style={{
                        backgroundColor: "rgba(8,9,10,0.9)",
                        borderColor: `${frameTags[activeTag].color}45`,
                      }}
                    >
                      <span
                        className="text-[9px] font-mono font-bold truncate"
                        style={{ color: frameTags[activeTag].color }}
                      >
                        {isRTL
                          ? activeTag === 0
                            ? "مهندس برمجيات"
                            : activeTag === 1
                            ? "فريلانس 2024"
                            : "مصر · عُرف"
                          : frameTags[activeTag].label}
                      </span>

                      {/* 3 Animated Indicator Dots on the second half */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {frameTags.map((tagItem, idx) => {
                          const isCurrent = activeTag === idx;
                          return (
                            <motion.span
                              key={idx}
                              animate={{
                                scale: isCurrent ? 1.25 : 1,
                                opacity: isCurrent ? 1 : 0.3,
                                width: isCurrent ? "8px" : "5px",
                              }}
                              transition={{ duration: 0.3 }}
                              className="h-1.5 rounded-full inline-block"
                              style={{
                                backgroundColor: tagItem.color,
                                boxShadow: isCurrent ? `0 0 8px ${tagItem.color}` : "none",
                              }}
                            />
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Floating Badge: Available for Projects + 108-minute Dharma Timer */}
              <motion.button
                type="button"
                onClick={openDharmaModal}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -top-7 -right-2 z-30 px-3.5 py-1.5 rounded-full border backdrop-blur-xl flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer group"
                style={{
                  backgroundColor: "rgba(8,9,10,0.9)",
                  borderColor: "rgba(168,255,62,0.4)",
                }}
                title={isRTL ? "اضغط لإعادة ضبط عداد الـ 108 دقيقة (Dharma System)" : "Click to reset 108-minute Dharma System"}
              >
                <span className="w-2 h-2 rounded-full bg-[#a8ff3e] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[#a8ff3e] uppercase">
                  [{formattedTime}] {t("available")}
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex justify-center mt-6 sm:-mt-2 mb-4 sm:mb-3"
        >
          <a
            href="#work"
            className="group flex flex-col items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            <span className="tracking-widest uppercase">
              {isRTL ? "اسكرول للأسفل" : "Scroll down"}
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1"
            >
              <span className="w-1 h-1 rounded-full bg-current" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Credibility Marquee Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 w-full mt-4"
      >
        <CredibilityStrip isRTL={isRTL} />
      </motion.div>
    </section>
  );
}
