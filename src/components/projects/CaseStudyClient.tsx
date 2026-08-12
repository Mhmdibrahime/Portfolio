"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProject, getAdjacentProjects, projects } from "@/data/projects";
import { formatWhatsAppLink } from "@/lib/utils";

type Props = {
  locale: string;
  slug: string;
};

function SectionBlock({
  number,
  title,
  content,
  isRTL,
  accentColor,
}: {
  number: string;
  title: string;
  content: string;
  isRTL: boolean;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b ${isRTL ? "text-right" : ""}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="lg:col-span-3">
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-md border"
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent-border)",
              backgroundColor: "var(--accent-dim)",
            }}
          >
            {number}
          </span>
          <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
            {title}
          </h3>
        </div>
      </div>
      <div className="lg:col-span-9">
        <p className="text-body-lg leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}

export default function CaseStudyClient({ locale, slug }: Props) {
  const t = useTranslations("project");
  const tContact = useTranslations("contact");
  const isRTL = locale === "ar";
  const project = getProject(slug);
  const adjacent = project ? getAdjacentProjects(slug) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p style={{ color: "var(--text-muted)" }}>Project not found</p>
          <Link href={`/${locale}#work`} className="mt-4 block text-sm underline" style={{ color: "var(--accent)" }}>
            {t("backToWork")}
          </Link>
        </div>
      </div>
    );
  }

  const title = isRTL ? project.titleAr : project.title;
  const category = isRTL ? project.categoryAr : project.category;
  const role = isRTL ? project.roleAr : project.role;
  const description = isRTL ? project.descriptionAr : project.description;
  const overview = isRTL ? project.overviewAr : project.overview;
  const problem = isRTL ? project.problemAr : project.problem;
  const solution = isRTL ? project.solutionAr : project.solution;
  const contribution = isRTL ? project.contributionAr : project.contribution;

  const whatsappUrl = formatWhatsAppLink(
    "01096209741",
    `Hi Mohamed, I saw the ${project.title} case study and would like to discuss a project.`
  );

  return (
    <article className="min-h-screen">
      {/* Back link & breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-6">
        <Link
          href={`/${locale}#work`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-secondary)",
          }}
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t("backToWork")}
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={isRTL ? "text-right" : ""}
        >
          <div
            className={`flex items-center gap-3 mb-6 ${isRTL ? "justify-start" : ""}`}
          >
            <span className="text-label">{category}</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            <span className="text-label font-mono">{project.year}</span>
          </div>

          <h1 className="text-display mb-6 tracking-tight">{title}</h1>

          <p className={`text-body-lg max-w-3xl mb-8 leading-relaxed ${isRTL ? "ms-auto" : ""}`}>{description}</p>

          {/* Metadata Cards Bar */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl border ${
              isRTL ? "text-right" : ""
            }`}
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div>
              <p className="text-label mb-1.5">{t("role")}</p>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {role}
              </p>
            </div>
            <div>
              <p className="text-label mb-1.5">{t("tech")}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg border font-mono"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--accent)", color: "#08090a" }}
              >
                {t("viewLive")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Browser Mockup Showcase Visual */}
      <section className="max-w-7xl mx-auto px-6 mb-12" aria-label="Visual Showcase">
        <div
          className="rounded-3xl border overflow-hidden shadow-2xl"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          {/* Browser Header Bar */}
          <div
            className="px-5 py-3 border-b flex items-center justify-between gap-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-tertiary)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div
              className="px-4 py-1 rounded-lg border text-xs font-mono truncate max-w-sm"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-muted)",
              }}
            >
              {project.liveUrl}
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live
            </div>
          </div>

          {/* Mockup Canvas */}
          {project.imageUrl ? (
            <div className="relative w-full overflow-hidden bg-[#08090a]">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt || project.title}
                width={1280}
                height={720}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>
          ) : (
            <div
              className="py-24 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center"
              style={{
                background: `radial-gradient(ellipse at center, ${project.accentColor}18 0%, var(--bg-secondary) 75%)`,
              }}
            >
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl font-black mb-6 mx-auto shadow-2xl border"
                  style={{
                    backgroundColor: project.accentColor,
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  {project.title.charAt(0)}
                </div>

                <h2 className="text-4xl sm:text-5xl font-black mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h2>

                <p className="text-sm max-w-md mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
                  {isRTL ? project.categoryAr : project.category} · {project.year}
                </p>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 hover:scale-105 hover:border-[var(--accent)]"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
                  {project.liveUrl.replace("https://", "").replace("http://", "")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Editorial Sections */}
      <section className="max-w-7xl mx-auto px-6 py-8" aria-label="Case Study Analysis">
        <SectionBlock
          number="01"
          title={t("overview")}
          content={overview}
          isRTL={isRTL}
          accentColor={project.accentColor}
        />
        <SectionBlock
          number="02"
          title={t("problem")}
          content={problem}
          isRTL={isRTL}
          accentColor={project.accentColor}
        />
        <SectionBlock
          number="03"
          title={t("solution")}
          content={solution}
          isRTL={isRTL}
          accentColor={project.accentColor}
        />
        <SectionBlock
          number="04"
          title={t("contribution")}
          content={contribution}
          isRTL={isRTL}
          accentColor={project.accentColor}
        />
      </section>

      {/* Project CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div
          className="p-8 sm:p-12 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div className={isRTL ? "text-right" : ""}>
            <p className="text-label mb-2">
              {isRTL ? "هل لديك مشروع مشابه؟" : "Need a similar product built?"}
            </p>
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              {isRTL ? "دعنا نبدأ محادثة عمل." : "Let's build your next digital product."}
            </h3>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "var(--accent)", color: "#08090a" }}
            >
              {tContact("cta2")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      {adjacent?.next && (
        <nav
          className="border-t"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
          aria-label="Next Case Study"
        >
          <Link
            href={`/${locale}/projects/${adjacent.next.slug}`}
            className="group flex items-center justify-between max-w-7xl mx-auto px-6 py-14 transition-all duration-300 hover:opacity-90"
          >
            <div className={isRTL ? "text-right order-last" : ""}>
              <p className="text-label mb-2">{t("nextProject")}</p>
              <h4 className="text-h2 font-black group-hover:text-[var(--accent)] transition-colors duration-200" style={{ color: "var(--text-primary)" }}>
                {isRTL ? adjacent.next.titleAr : adjacent.next.title}
              </h4>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {isRTL ? adjacent.next.categoryAr : adjacent.next.category}
              </p>
            </div>
            <div
              className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#08090a]"
              style={{ borderColor: "var(--border)", color: "var(--accent)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: isRTL ? "scaleX(-1)" : "none",
                }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </nav>
      )}
    </article>
  );
}
