// app/guias/page.tsx
// Indice de guias ESDEC — capa AEO: respuestas long-form a busquedas reales por pilar.

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GUIDES } from "@/content/guias";
import { getAreaBySlug } from "@/lib/areas";
import { getGuidePath } from "@/lib/guides";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/guias`;

export const metadata: Metadata = {
  title: "Guías - ESDEC",
  description:
    "Guías de ESDEC sobre tecnología, educación y eventos deportivos en Córdoba, Argentina — respuestas directas a las dudas más comunes de cada pilar.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "ESDEC",
    title: "Guías - ESDEC",
    description:
      "Guías de ESDEC sobre tecnología, educación y eventos deportivos en Córdoba, Argentina.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guías - ESDEC",
  url: PAGE_URL,
  description: "Guías de ESDEC sobre tecnología, educación y eventos deportivos en Córdoba, Argentina.",
  isPartOf: {
    "@type": "WebSite",
    name: "ESDEC",
    url: SITE_URL,
  },
  inLanguage: "es-AR",
};

export default function GuiasPage() {
  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <main className="bg-[var(--bg2)] px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-landing">
          <p className="font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
            ESDEC — Ecosistema Deportivo de Córdoba
          </p>
          <h1 className="mt-3 max-w-[20ch] font-condensed text-[clamp(2.4rem,5.5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-[var(--t1)]">
            Guías
          </h1>
          <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.9] text-[var(--t2)]">
            Respuestas directas a las dudas más comunes sobre cada pilar del ecosistema, en Córdoba, Argentina.
          </p>

          <div className="mt-14 flex flex-col divide-y divide-white/10 border-t border-white/10">
            {GUIDES.map((guide) => {
              const area = getAreaBySlug(guide.pillar);
              return (
                <Link
                  key={guide.slug}
                  href={getGuidePath(guide.slug)}
                  className="group flex flex-col gap-2 py-8 no-underline transition-colors hover:text-white"
                >
                  <span className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--p1)]">
                    {area.shortName}
                  </span>
                  <h2 className="font-condensed text-[1.4rem] font-bold uppercase leading-[1.05] tracking-tight text-[var(--t1)] transition-colors group-hover:text-[var(--p1)] md:text-[1.7rem]">
                    {guide.title}
                  </h2>
                  <p className="max-w-[64ch] font-sans text-[0.92rem] leading-[1.8] text-[var(--t2)]">
                    {guide.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
