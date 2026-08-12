"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Real photo provided by user
const PHOTO_SRC: string | null = "/images/mohamed-ibrahim.png";

// Dharma 4 8 15 16 23 42 Slot Machine Shuffler
function DharmaShuffler({ finalValue, color }: { finalValue: string; color: string }) {
  const [displayValue, setDisplayValue] = useState("4");
  const [isDone, setIsDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const numbers = ["4", "8", "15", "16", "23", "42"];
    let step = 0;
    const interval = setInterval(() => {
      if (step < numbers.length * 2.5) {
        setDisplayValue(numbers[step % numbers.length]);
        step++;
      } else {
        clearInterval(interval);
        setDisplayValue(finalValue);
        setIsDone(true);
      }
    }, 95);

    return () => clearInterval(interval);
  }, [finalValue, isInView]);

  return (
    <motion.span
      ref={ref}
      animate={{ scale: isDone ? 1 : [1, 1.15, 1] }}
      transition={{ duration: 0.2 }}
      style={{ color }}
      className="inline-block"
    >
      {displayValue}
    </motion.span>
  );
}

export default function About({ locale }: { locale: string }) {
  const t = useTranslations("about");
  const isRTL = locale === "ar";

  const stats = [
    {
      value: t("projectsValue"),
      label: t("projectsLabel"),
      accent: true,
    },
    {
      value: t("yearsValue"),
      label: t("yearsLabel"),
      accent: false,
    },
    {
      value: t("marketsValue"),
      label: t("marketsLabel"),
      accent: false,
    },
  ];

  const rawTags = t.raw("tags");
  const tags: string[] = Array.isArray(rawTags)
    ? rawTags
    : [
        isRTL ? "مهندس برمجيات" : "Software Engineer",
        isRTL ? "تطوير متكامل & APIs" : "Full-Stack & APIs",
        isRTL ? "تفكير منتجات" : "Product Thinker",
        isRTL ? "حل مشكلات" : "Problem Solver",
        isRTL ? "تركز على العميل" : "Client-Focused",
        isRTL ? "عن بُعد / عالمي" : "Remote / Global",
      ];

  const rawMarkets = t.raw("marketsList");
  const marketsList: string[] = Array.isArray(rawMarkets)
    ? rawMarkets
    : [
        isRTL ? "مصر (EG)" : "EG · Egypt",
        isRTL ? "السعودية (KSA)" : "KSA · Saudi Arabia",
        isRTL ? "دول الخليج (GCC)" : "GCC · Gulf Region",
      ];

  return (
    <section id="about" className="section-full py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
            isRTL ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Left — Story content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={isRTL ? "text-right lg:col-start-2" : ""}
          >
            <p className="text-label mb-6">{t("heading")}</p>

            <div className="space-y-5 mb-10">
              {[t("line1"), t("line2"), t("line3"), t("line4")].map(
                (line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="text-body-lg leading-relaxed"
                    style={{
                      color:
                        i === 3
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                      fontWeight: i === 3 ? "500" : "normal",
                    }}
                  >
                    {line}
                  </motion.p>
                )
              )}
            </div>

            {/* CV download */}
            <motion.a
              href="/Mohamed-Ibrahim-CV.pdf"
              download
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              {t("downloadCV")}
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
            </motion.a>
          </motion.div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={isRTL ? "lg:col-start-1" : ""}
          >
            <div
              className="relative rounded-3xl border overflow-hidden"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {/* Grid bg */}
              <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

              {/* Accent glow */}
              <div
                className="absolute bottom-0 right-0 w-64 h-64 blur-3xl opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 p-6 sm:p-8">
                {/* Top Row: Photo + Markets List side by side */}
                <div
                  className={`flex items-center justify-between gap-4 mb-8 pb-6 border-b ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Photo Avatar */}
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex-shrink-0 flex items-center justify-center shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a8ff3e 100%)",
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#08090a]">
                      <Image
                        src={PHOTO_SRC || "/images/mohamed-ibrahim.png"}
                        alt="Mohamed Ibrahim"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  {/* Vertical Markets List */}
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#a8ff3e] uppercase mb-2">
                      {t("marketsLabel")}
                    </p>
                    <ul className="space-y-1.5 text-xs font-mono font-semibold text-neutral-200">
                      {marketsList.map((m, idx) => (
                        <li key={idx} className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                          <span className="whitespace-nowrap">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Middle Row: 10+ Projects & 2024 Freelancing Side-by-Side */}
                <div
                  className={`grid grid-cols-2 gap-4 mb-8 pb-6 border-b ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-3xl sm:text-4xl font-black mb-1">
                      <DharmaShuffler finalValue={t("projectsValue")} color="#a8ff3e" />
                    </p>
                    <p className="text-xs font-medium text-neutral-400">
                      {t("projectsLabel")}
                    </p>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-3xl sm:text-4xl font-black mb-1">
                      <DharmaShuffler finalValue={t("yearsValue")} color="#ffffff" />
                    </p>
                    <p className="text-xs font-medium text-neutral-400">
                      {t("yearsLabel")}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Identity Tags in a balanced 2-column grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3.5 py-2 rounded-xl border font-medium text-center truncate"
                      style={{
                        borderColor: "rgba(255,255,255,0.12)",
                        color: "var(--text-secondary)",
                        backgroundColor: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
