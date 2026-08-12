"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  locale,
  isActive,
}: {
  project: (typeof projects)[0];
  index: number;
  locale: string;
  isActive: boolean;
}) {
  const t = useTranslations("work");
  const router = useRouter();
  const isRTL = locale === "ar";
  const title = isRTL ? project.titleAr : project.title;
  const category = isRTL ? project.categoryAr : project.category;
  const shortDesc = isRTL ? project.shortDescAr : project.shortDesc;
  const role = isRTL ? project.roleAr : project.role;

  return (
    <motion.div
      layout
      onClick={() => router.push(`/${locale}/projects/${project.slug}`)}
      className={cn(
        "group relative w-full border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col justify-between",
        isActive ? "shadow-2xl" : ""
      )}
      style={{
        borderColor: isActive ? "var(--border-hover)" : "var(--border)",
        backgroundColor: isActive ? "var(--bg-card-hover)" : "var(--bg-card)",
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        {/* Top row */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span
              className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border"
              style={{
                color: isActive ? "var(--accent)" : "var(--text-muted)",
                borderColor: isActive ? "var(--accent-border)" : "var(--border)",
                backgroundColor: isActive ? "var(--accent-dim)" : "transparent",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p
                className="text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {category}
              </p>
            </div>
          </div>
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#08090a]"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Visual area */}
        <div
          className="mx-6 mb-5 rounded-xl h-52 flex items-center justify-center relative overflow-hidden border group/img"
          style={{
            backgroundColor: "var(--bg-tertiary)",
            borderColor: "var(--border)",
          }}
        >
          {project.imageUrl ? (
            <div className="w-full h-full relative overflow-hidden">
              {/* Image */}
              <Image
                src={project.imageUrl}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              {/* Subtle top shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-black/20" />
            </div>
          ) : (
            <>
              {/* Project color accent radial background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${project.accentColor} 0%, transparent 80%)`,
                }}
              />
              {/* Grid */}
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

              {/* Project label */}
              <div className="relative text-center px-4 z-10">
                <p
                  className="text-3xl sm:text-4xl font-black tracking-tight mb-1"
                  style={{ color: project.accentColor }}
                >
                  {project.title}
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.liveUrl.replace("https://", "").replace("http://", "")}
                </p>
              </div>
            </>
          )}

          {/* Live indicator */}
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold z-20"
            style={{
              backgroundColor: "rgba(8,9,10,0.85)",
              backdropFilter: "blur(8px)",
              color: "#4ade80",
              border: "1px solid rgba(74,222,128,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* Info */}
        <div className={`px-6 pb-2 ${isRTL ? "text-right" : ""}`}>
          <h3
            className="text-xl font-bold mb-2 tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {shortDesc}
          </p>

          {/* Tech tags preview */}
          <div className={`flex flex-wrap gap-1.5 mb-4 ${isRTL ? "justify-end" : ""}`}>
            {project.tech.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                {item}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span
                className="text-[11px] font-mono px-1.5 py-0.5 rounded-md border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meta bottom row */}
      <div
        className="mx-6 mb-6 pt-4 border-t flex items-center justify-between flex-wrap gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-label text-[10px]">{t("role")}:</span>
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {role}
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-stretch sm:justify-end" onClick={(e) => e.stopPropagation()}>
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center flex-1 sm:flex-initial"
            style={{
              backgroundColor: "var(--accent)",
              color: "#08090a",
            }}
          >
            {t("viewCaseStudy")}
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-2 rounded-lg border font-medium transition-colors duration-200 hover:border-[var(--accent)] text-center flex-1 sm:flex-initial"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {t("viewLive")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork({ locale }: { locale: string }) {
  const t = useTranslations("work");
  const isRTL = locale === "ar";
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="section-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-16 ${isRTL ? "text-right" : ""}`}
        >
          <p className="text-label mb-4">{t("heading")}</p>
          <h2 className="text-h1 mb-4">{t("subheading")}</h2>
          <p
            className="text-body-lg max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("bodyText")}
          </p>
          <div
            className={`flex items-center gap-2 mt-4 ${isRTL ? "justify-end" : ""}`}
          >
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                borderColor: "var(--accent-border)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-dim)",
              }}
            >
              {t("projectCount")}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              ·
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              {t("selectedCount")}
            </span>
          </div>
        </motion.div>


        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onHoverStart={() => setActiveIndex(i)}
            >
              <ProjectCard
                project={project}
                index={i}
                locale={locale}
                isActive={activeIndex === i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
