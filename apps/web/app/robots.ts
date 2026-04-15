// ─────────────────────────────────────────────────────────────────────────────
// app/robots.ts
// Directivas de crawl para bots de búsqueda
// Genera automáticamente /robots.txt en producción
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
