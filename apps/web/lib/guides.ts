// lib/guides.ts
// Helpers to build metadata and Article JSON-LD for ESDEC's long-form guides (/guias).
// Guides are the AEO content layer: self-contained answers to real long-tail queries,
// grounded in what each pillar actually offers today — no invented claims.

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import type { AreaSlug } from "@/content/areas";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  pillar: AreaSlug;
  title: string;
  keyword: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  excerpt: string;
  intro: string;
  sections: GuideSection[];
}

export function getGuidePath(slug: string) {
  return `/guias/${slug}`;
}

export function getGuideUrl(slug: string) {
  return `${SITE_URL}${getGuidePath(slug)}`;
}

export function buildGuideMetadata(guide: Guide): Metadata {
  const canonical = getGuideUrl(guide.slug);

  return {
    title: `${guide.title} | ESDEC`,
    description: guide.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "es_AR",
      url: canonical,
      siteName: "ESDEC",
      title: guide.title,
      description: guide.metaDescription,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
      images: ["/images/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export function buildGuideJsonLd(guide: Guide) {
  const url = getGuideUrl(guide.slug);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.metaDescription,
      url,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      author: {
        "@type": "Person",
        name: guide.author,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "ESDEC",
        url: SITE_URL,
      },
      inLanguage: "es-AR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guías", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
  ];
}
