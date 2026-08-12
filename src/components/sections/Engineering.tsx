"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { techEcosystem } from "@/data/experience";

const categoryIcons: Record<string, React.ReactNode> = {
  web: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  ),
  backend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <rect x="2" y="17" width="20" height="4" rx="1" />
      <line x1="6" y1="5" x2="6.01" y2="5" />
      <line x1="6" y1="12" x2="6.01" y2="12" />
      <line x1="6" y1="19" x2="6.01" y2="19" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  integrations: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  architecture: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  security: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  performance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  mobile: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  data: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

export default function Engineering({ locale }: { locale: string }) {
  const t = useTranslations("ecosystem");
  const isRTL = locale === "ar";
  const [activeId, setActiveId] = useState<string>("web");

  const activeCluster = techEcosystem.find((c) => c.id === activeId)!;
  const activeLabel = isRTL ? activeCluster.labelAr : activeCluster.label;

  return (
    <section id="engineering" className="section-full py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-label mb-6 ${isRTL ? "text-right" : ""}`}
        >
          {t("label")}
        </motion.p>

        {/* Manifesto heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-6 ${isRTL ? "text-right" : ""}`}
        >
          <h2 className="text-h1 leading-tight">
            <span style={{ color: "var(--text-primary)" }}>
              {t("heading")}{" "}
            </span>
            <br />
            <span style={{ color: "var(--accent)" }}>{t("headingAccent")}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-body-lg max-w-lg mb-16 ${isRTL ? "text-right ms-auto" : ""}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {t("body")}
        </motion.p>

        {/* Ecosystem grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Category tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {techEcosystem.map((cluster, i) => {
              const isActive = activeId === cluster.id;
              const clusterLabel = isRTL ? cluster.labelAr : cluster.label;

              return (
                <motion.button
                  key={cluster.id}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setActiveId(cluster.id)}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  style={{
                    borderColor: isActive
                      ? "var(--accent-border)"
                      : "var(--border)",
                    backgroundColor: isActive
                      ? "rgba(168,255,62,0.06)"
                      : "var(--bg-card)",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  <span
                    className="flex-shrink-0 transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                    }}
                  >
                    {categoryIcons[cluster.id]}
                  </span>
                  <span className="text-sm font-semibold">{clusterLabel}</span>
                  <span
                    className={`ms-auto text-xs font-mono transition-colors duration-200 ${
                      isActive ? "" : "opacity-0 group-hover:opacity-60"
                    }`}
                    style={{ color: "var(--accent)" }}
                  >
                    {cluster.items.length}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active cluster panel */}
          <div className="lg:col-span-8">
            <div
              className="h-full rounded-2xl border p-8 sm:p-10 relative overflow-hidden"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
                minHeight: "320px",
              }}
            >
              {/* Background accent glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(168,255,62,0.04) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative ${isRTL ? "text-right" : ""}`}
                >
                  {/* Cluster title */}
                  <div className="flex items-center gap-3 mb-8">
                    <span style={{ color: "var(--accent)" }}>
                      {categoryIcons[activeCluster.id]}
                    </span>
                    <h3
                      className="text-2xl font-black tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activeLabel}
                    </h3>
                  </div>

                  {/* Tech items as flowing chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {activeCluster.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        className="text-sm font-mono px-4 py-2 rounded-xl border"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                          backgroundColor: "var(--bg-secondary)",
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {/* Principle note */}
                  <p
                    className="text-xs font-mono mt-10 pt-6 border-t"
                    style={{
                      color: "var(--text-muted)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {isRTL
                      ? "التقنية بتتحدد حسب ما المنتج يحتاجه — مش العكس."
                      : "Technology is chosen per product requirements — not the other way around."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
