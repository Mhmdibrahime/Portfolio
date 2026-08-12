"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";

const navItems = [
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

type NavItem = (typeof navItems)[number];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
        backgroundColor: "transparent",
      }}
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "ar" : "en";
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      className="w-8 h-8 flex items-center justify-center rounded-full border text-xs font-mono font-bold transition-all duration-300 hover:scale-105"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
      aria-label={`Switch to ${otherLocale === "ar" ? "Arabic" : "English"}`}
    >
      {otherLocale === "ar" ? "ع" : "EN"}
    </Link>
  );
}

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const allSectionIds = ["hero", "work", "experience", "services", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        // Find section with highest intersection ratio or top-most intersecting
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersectionRatio descending
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-80px 0px -30% 0px" }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isRTL = locale === "ar";
  const whatsappUrl = "https://wa.me/201096209741?text=Hi%20Mohamed%2C%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500",
            scrolled
              ? "max-w-6xl px-4 rounded-2xl border backdrop-blur-xl shadow-lg"
              : "max-w-7xl px-6"
          )}
          style={{
            backgroundColor: scrolled ? "var(--bg-card-hover, rgba(8,9,10,0.85))" : "transparent",
            borderColor: scrolled ? "var(--border)" : "transparent",
          }}
        >
          <nav
            className="flex items-center justify-between h-14"
            aria-label="Main navigation"
          >
            {/* Brand Logo */}
            <Link
              href={`/${locale}`}
              onClick={() => setActiveSection("hero")}
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Mohamed Ibrahim — Home"
            >
              <BrandLogo size={42} />
            </Link>

            {/* Desktop Nav Links — inside a pill frame */}
            <div
              className="hidden md:flex items-center gap-1 rounded-full border backdrop-blur-sm px-2 py-1.5"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {navItems.map(({ key, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={key}
                    href={href}
                    className="relative px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-full group"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    }}
                    onClick={() => {
                      setActiveSection(sectionId);
                      setMobileOpen(false);
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: "rgba(168,255,62,0.08)", border: "1px solid rgba(168,255,62,0.25)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                      />
                    )}
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    />
                    <span className="relative z-10">{t(key as NavItem["key"])}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher locale={locale} />

              {/* Download CV Nav Button */}
              <a
                href="/Mohamed-Ibrahim-CV.pdf"
                download
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                  backgroundColor: "transparent",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                CV
              </a>

              {/* Start Project CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 shadow-md"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#08090a",
                  boxShadow: "0 0 20px var(--accent-dim)",
                }}
              >
                {t("startProject")}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border text-[var(--text-primary)]"
                style={{ borderColor: "var(--border)" }}
                aria-label="Toggle Menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "fixed top-0 z-50 md:hidden h-full w-72 flex flex-col p-6 pt-20",
                isRTL ? "right-0" : "left-0"
              )}
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderLeft: isRTL ? "1px solid var(--border)" : "none",
                borderRight: isRTL ? "none" : "1px solid var(--border)",
              }}
            >
              <div className="mb-6 pb-4 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                <BrandLogo size={32} showText={true} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-xs p-1 font-mono text-[var(--text-muted)]"
                >
                  ✕
                </button>
              </div>

              <div className={`flex flex-col gap-1 ${isRTL ? "text-right" : "text-left"}`}>
                {navItems.map(({ key, href }, i) => (
                  <motion.a
                    key={key}
                    href={href}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="py-3 px-4 text-base font-semibold rounded-xl transition-colors duration-200"
                    style={{
                      color: "var(--text-primary)",
                      backgroundColor:
                        activeSection === href.replace("#", "")
                          ? "var(--bg-tertiary)"
                          : "transparent",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(key as NavItem["key"])}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t flex flex-col gap-3" style={{ borderColor: "var(--border)" }}>
                <a
                  href="/Mohamed-Ibrahim-CV.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download CV
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold shadow-lg"
                  style={{ backgroundColor: "var(--accent)", color: "#08090a" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("startProject")}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
