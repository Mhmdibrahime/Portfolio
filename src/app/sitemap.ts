import { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mohamed-ibrahim.online";
  const locales = ["en", "ar"];
  const now = new Date();

  const homePages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const projectPages = locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...homePages, ...projectPages];
}
