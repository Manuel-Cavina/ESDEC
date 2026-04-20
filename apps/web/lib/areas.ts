// lib/areas.ts
// Helpers for ESDEC temporary area landings metadata, links, and JSON-LD.

import type { Metadata } from "next";
import { FOOTER } from "@/content/landing";
import { AREA_PAGES, type AreaPageConfig, type AreaSlug } from "@/content/areas";
import { SITE_URL } from "@/lib/constants";

const ECOSYSTEM_PATH = "/ecosistema-deportivo-cordoba";
const OG_IMAGE_PATH = "/images/og-image.png";

function getWhatsappBaseHref() {
  return (
    FOOTER.social.find((item) => item.icon === "whatsapp")?.href ??
    "https://wa.me/5493515117555"
  );
}

export function getAreaBySlug(slug: AreaSlug): AreaPageConfig {
  return AREA_PAGES[slug];
}

export function getAreaPath(slug: AreaSlug) {
  return `/${slug}`;
}

export function getAreaUrl(slug: AreaSlug) {
  return `${SITE_URL}${getAreaPath(slug)}`;
}

export function getEcosystemUrl() {
  return `${SITE_URL}${ECOSYSTEM_PATH}`;
}

export function getAreaWhatsappHref(area: AreaPageConfig) {
  const url = new URL(getWhatsappBaseHref());
  url.searchParams.set(
    "text",
    `Hola ESDEC, quiero recibir novedades sobre el area ${area.shortName.toLowerCase()}.`
  );

  return url.toString();
}

export function buildAreaMetadata(area: AreaPageConfig): Metadata {
  const canonical = getAreaUrl(area.slug);

  return {
    title: area.seoTitle,
    description: area.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: canonical,
      title: area.ogTitle,
      description: area.ogDescription,
      siteName: "ESDEC",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${area.shortName} | ESDEC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.ogTitle,
      description: area.ogDescription,
      images: [OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildAreaJsonLd(area: AreaPageConfig) {
  const pageUrl = getAreaUrl(area.slug);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ecosistema deportivo",
          item: getEcosystemUrl(),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: area.navLabel,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: area.h1,
      url: pageUrl,
      description: area.metaDescription,
      isPartOf: {
        "@type": "WebSite",
        name: "ESDEC",
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: area.shortName,
      },
      inLanguage: "es-AR",
    },
  ];
}
