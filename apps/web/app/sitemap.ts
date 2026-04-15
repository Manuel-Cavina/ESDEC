// ─────────────────────────────────────────────────────────────────────────────
// app/sitemap.ts
// Sitemap XML generado automáticamente por Next.js
// Accesible en /sitemap.xml en producción
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // ── Páginas SEO locales (descomentar a medida que se crean)
    // {
    //   url: `${SITE_URL}/ecosistema-deportivo-cordoba`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${SITE_URL}/entrenamiento-deportivo`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/nutricion-deportiva`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];

  return staticRoutes;
}
