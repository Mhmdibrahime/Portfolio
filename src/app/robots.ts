import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.mohamed-ibrahim.online/sitemap.xml",
    host: "https://www.mohamed-ibrahim.online",
  };
}
