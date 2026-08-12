"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { formatWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mhmdibrahime",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: formatWhatsAppLink("01096209741"),
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:moibrahime697@gmail.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const isRTL = locale === "ar";
  const tagline = isRTL
    ? "ببني منتجات رقمية من الفكرة لحد الإنتاج — مصر · السعودية · الخليج."
    : "Building scalable digital products from idea to production — EG · KSA · GCC.";

  return (
    <footer
      className="border-t mt-0 pt-16 pb-12"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-12 mb-14 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Brand Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <BrandLogo size={40} />
              </div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] mb-3">
                {t("role")}
              </p>
              <p
                className="text-xs leading-relaxed max-w-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {tagline}
              </p>
            </motion.div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-label mb-4">{isRTL ? "التنقل السريع" : "Navigation"}</p>
              <div className="flex flex-col gap-2.5 items-start">
                {navLinks.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    className="text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tNav(key as "work" | "experience" | "services" | "about" | "contact")}
                  </a>
                ))}
                <a
                  href="/Mohamed-Ibrahim-CV.pdf"
                  download
                  className="text-xs font-mono text-[#a8ff3e] hover:underline inline-flex items-center gap-1.5 mt-1"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  {isRTL ? "تحميل السيرة الذاتية PDF" : "Download CV (PDF)"}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Connect Column */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-label mb-4">{isRTL ? "تواصل معي" : "Connect"}</p>
              <div className="flex flex-col gap-3 items-start">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-xs font-medium transition-all duration-200 hover:text-[var(--accent)] group"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-dim)]"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Mohamed Ibrahim. {t("rights")}
          </p>
          <div className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8ff3e]" />
            <span>{isRTL ? "صُنع بـ ❤️ بواسطة محمد إبراهيم" : "Built with ❤️ by Mohamed Ibrahim"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
