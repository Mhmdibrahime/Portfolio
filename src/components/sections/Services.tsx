"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type ServiceItem = {
  number: string;
  title: string;
  titleShort: string;
  description: string;
  what: string[];
  tech: string;
};

const serviceIcons: Record<string, React.ReactNode> = {
  "01": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "02": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "03": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  "04": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <rect x="2" y="17" width="20" height="4" rx="1" />
    </svg>
  ),
  "05": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "06": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  "07": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  "08": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
};

export default function Services({ locale }: { locale: string }) {
  const t = useTranslations("services");
  const isRTL = locale === "ar";
  const items: ServiceItem[] = t.raw("items") as ServiceItem[];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = items[activeIndex];

  return (
    <section id="services" className="section-full py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(168,255,62,0.15) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mb-16 ${isRTL ? "text-right" : "text-left"}`}
        >
          <div className={`flex items-center gap-2 mb-4 ${isRTL ? "justify-end flex-row-reverse" : "justify-start"}`}>
            <span className="text-label">{t("heading")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
          </div>
          <h2 className="text-h1 tracking-tight mb-4">{t("subheading")}</h2>
          <p
            className="text-body-lg max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("body")}
          </p>
        </motion.div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {items.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={item.number}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  style={{
                    borderColor: isActive ? "rgba(168,255,62,0.4)" : "var(--border)",
                    backgroundColor: isActive ? "rgba(168,255,62,0.06)" : "var(--bg-card)",
                  }}
                >
                  {/* Active highlight line */}
                  {isActive && (
                    <motion.div
                      layoutId="services-active-bar"
                      className={`absolute top-2 bottom-2 w-1 rounded-full ${
                        isRTL ? "right-2" : "left-2"
                      }`}
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    {/* Number Badge */}
                    <span
                      className="text-xs font-mono font-black w-7 h-7 rounded-lg border flex items-center justify-center transition-colors duration-200"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        borderColor: isActive ? "rgba(168,255,62,0.3)" : "var(--border)",
                        backgroundColor: isActive ? "var(--accent-dim)" : "transparent",
                      }}
                    >
                      {item.number}
                    </span>

                    {/* Title */}
                    <div>
                      <h3
                        className="text-sm sm:text-base font-bold transition-colors duration-200"
                        style={{
                          color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon & Arrow */}
                  <div className="flex items-center gap-2">
                    <span
                      className="transition-colors duration-200"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                      }}
                    >
                      {serviceIcons[item.number]}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform duration-300"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        transform: isActive
                          ? isRTL
                            ? "translateX(-4px) scaleX(-1)"
                            : "translateX(4px)"
                          : isRTL
                          ? "scaleX(-1)"
                          : "none",
                      }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Detail Showcase Panel */}
          <div className="lg:col-span-7">
            <div
              className="sticky top-24 rounded-3xl border overflow-hidden shadow-2xl"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
                minHeight: "440px",
              }}
            >
              {/* Top Accent Gradient Line */}
              <div
                className="h-1.5 w-full bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#a8ff3e]"
              />

              <div className="p-8 sm:p-12 relative overflow-hidden">
                {/* Background Tech Watermark */}
                <div className="absolute top-4 right-4 text-8xl font-black font-mono text-white/[0.03] select-none pointer-events-none">
                  {activeService.number}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.number}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative z-10 ${isRTL ? "text-right" : "text-left"}`}
                  >
                    {/* Header Tag */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="p-2 rounded-xl bg-[#a8ff3e]/10 text-[#a8ff3e] border border-[#a8ff3e]/20">
                        {serviceIcons[activeService.number]}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#38bdf8] uppercase">
                        SERVICE // {activeService.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl sm:text-4xl font-black tracking-tight mb-4 leading-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activeService.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-body-lg leading-relaxed mb-8"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {activeService.description}
                    </p>

                    {/* Deliverables / Scope */}
                    <div className="mb-8">
                      <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#a8ff3e] mb-4">
                        {isRTL ? "ما يشمله النطاق" : "SCOPE & DELIVERABLES"}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.what.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border ${
                              isRTL ? "text-right" : "text-left"
                            }`}
                            style={{
                              borderColor: "var(--border)",
                              backgroundColor: "var(--bg-secondary)",
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e] flex-shrink-0" />
                            <span
                              className="text-xs sm:text-sm font-semibold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Hint */}
                    <div
                      className="pt-6 border-t flex items-center justify-between flex-wrap gap-4"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div>
                        <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase mb-1">
                          {isRTL ? "المنظومة التقنية" : "TECHNOLOGY"}
                        </p>
                        <p className="text-xs font-mono font-bold text-[#38bdf8]">
                          {activeService.tech}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#a8ff3e] hover:underline"
                      >
                        <span>{isRTL ? "اطلب هذه الخدمة" : "Request this service →"}</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
