import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
  },
  webpack: (config) => {
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["next-intl/config"] = path.resolve("./src/i18n/request.ts");
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tradoplatform.com" },
      { protocol: "https", hostname: "velunakids.com" },
      { protocol: "https", hostname: "razanawebsite.com" },
      { protocol: "http", hostname: "yamizad.com" },
      { protocol: "https", hostname: "capital-link-ksa.com" },
      { protocol: "https", hostname: "bawabauni.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
