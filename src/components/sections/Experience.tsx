"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, experienceTypeLabels } from "@/data/experience";

export default function Experience({ locale }: { locale: string }) {
  const t = useTranslations("experience");
  const isRTL = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExp = experiences[activeIndex];
  const company = isRTL ? activeExp.companyAr : activeExp.company;
  const role = isRTL ? activeExp.roleAr : activeExp.role;
  const period = isRTL ? activeExp.periodAr : activeExp.period;
  const description = isRTL ? activeExp.descriptionAr : activeExp.description;
  const typeInfo = experienceTypeLabels[activeExp.type];
  const typeLabel = isRTL ? typeInfo.ar : typeInfo.en;

  return (
    <section id="experience" className="section-full py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mb-16 ${isRTL ? "text-right" : ""}`}
        >
          <p className="text-label mb-4">{t("heading")}</p>
          <h2 className="text-h1">{t("subheading")}</h2>
        </motion.div>

        {/* Timeline + Detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Timeline list */}
          <div className="lg:col-span-5 flex flex-col gap-0">
            {experiences.map((exp, i) => {
              const isActive = activeIndex === i;
              const expTypeInfo = experienceTypeLabels[exp.type];
              const expTypeLabel = isRTL ? expTypeInfo.ar : expTypeInfo.en;
              const expCompany = isRTL ? exp.companyAr : exp.company;
              const expRole = isRTL ? exp.roleAr : exp.role;
              const expPeriod = isRTL ? exp.periodAr : exp.period;

              return (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setActiveIndex(i)}
                  className={`group w-full border-b last:border-b-0 py-5 transition-all duration-200 relative ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Active accent line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLine"
                      className={`absolute top-0 bottom-0 w-0.5 ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{ backgroundColor: expTypeInfo.color }}
                    />
                  )}

                  <div
                    className={`pl-4 pr-2 ${isRTL ? "pr-4 pl-2" : ""}`}
                  >
                    {/* Top row: company + type badge */}
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        {/* Featured dot for freelance */}
                        {exp.featured && (
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: expTypeInfo.color }}
                          />
                        )}
                        <span
                          className="text-sm font-bold transition-colors duration-200"
                          style={{
                            color: isActive
                              ? "var(--text-primary)"
                              : "var(--text-secondary)",
                          }}
                        >
                          {expCompany}
                        </span>
                      </div>

                      {/* Type badge */}
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0"
                        style={{
                          color: expTypeInfo.color,
                          backgroundColor: expTypeInfo.bg,
                          borderColor: expTypeInfo.border,
                        }}
                      >
                        {expTypeLabel}
                      </span>
                    </div>

                    {/* Role */}
                    <p
                      className="text-xs font-medium mb-1 transition-colors duration-200"
                      style={{
                        color: isActive
                          ? "var(--text-secondary)"
                          : "var(--text-muted)",
                      }}
                    >
                      {expRole}
                    </p>

                    {/* Period */}
                    <p
                      className="text-[11px] font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {expPeriod}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div
              className="h-full rounded-2xl border p-6 sm:p-8 lg:p-10"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className={isRTL ? "text-right" : ""}
                >
                  {/* Type badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{
                        color: typeInfo.color,
                        backgroundColor: typeInfo.bg,
                        borderColor: typeInfo.border,
                      }}
                    >
                      {typeLabel}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {period}
                    </span>
                  </div>

                  {/* Company + Role */}
                  <h3
                    className="text-2xl sm:text-3xl font-black mb-1 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {company}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-6"
                    style={{ color: typeInfo.color }}
                  >
                    {role}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px mb-6"
                    style={{ backgroundColor: "var(--border)" }}
                  />

                  {/* Description */}
                  <p
                    className="text-body-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {description}
                  </p>

                  {/* Featured callout for freelance */}
                  {activeExp.featured && (
                    <div
                      className="mt-6 p-4 rounded-xl border"
                      style={{
                        borderColor: "rgba(168,255,62,0.2)",
                        backgroundColor: "rgba(168,255,62,0.05)",
                      }}
                    >
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--accent)" }}
                      >
                        {isRTL
  ? "ده الأساس اللي اتبنت عليه معظم المشاريع المعروضة هنا."
  : "This is the context behind most of the selected projects on this portfolio."}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
