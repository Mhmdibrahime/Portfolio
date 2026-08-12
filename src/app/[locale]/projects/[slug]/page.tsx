import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyClient from "@/components/projects/CaseStudyClient";
import { getProject, projectSlugs } from "@/data/projects";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = locale === "ar" ? project.titleAr : project.title;
  const description = locale === "ar" ? project.descriptionAr : project.description;

  return {
    title: `${title} Case Study`,
    description,
    openGraph: {
      title: `${title} — Mohamed Ibrahim`,
      description,
    },
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        ar: `/ar/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar locale={locale} />
      <main id="main-content">
        <CaseStudyClient locale={locale} slug={slug} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
