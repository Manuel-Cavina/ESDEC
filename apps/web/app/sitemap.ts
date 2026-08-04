// ─────────────────────────────────────────────────────────────────────────────
// app/sitemap.ts
// Sitemap XML generado automáticamente por Next.js — /sitemap.xml en producción
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { GUIDES } from "@/content/guias";
import { getGuideUrl } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const guideEntries: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: getGuideUrl(guide.slug),
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    {
      url: `${SITE_URL}/guias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...guideEntries,
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/deportistas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/profesionales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/salud-deportiva-cordoba`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/tecnologia-deportiva-cordoba`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/bienestar-deportivo-cordoba`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/market-deportivo-cordoba`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/educacion-deportiva-cordoba`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/eventos-deportivos-cordoba`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
