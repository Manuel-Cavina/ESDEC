// app/nosotros/page.tsx
// Quienes somos: objetivo, vision, mision y los principios que definen a ESDEC.

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MVVSection from "@/sections/ecosistema/MVVSection";
import PrinciplesSection from "@/sections/ecosistema/PrinciplesSection";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/nosotros`;

export const metadata: Metadata = {
  title: "Quienes somos",
  description:
    "Conoce el objetivo, la vision y la mision de ESDEC, el ecosistema deportivo de Cordoba, y los principios que lo definen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "ESDEC",
    title: "Quienes somos - ESDEC",
    description:
      "El objetivo, la vision, la mision y los principios del ecosistema deportivo de Cordoba.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Quienes somos - ESDEC",
  url: PAGE_URL,
  description:
    "Objetivo, vision, mision y principios del ecosistema deportivo de Cordoba.",
  isPartOf: {
    "@type": "WebSite",
    name: "ESDEC",
    url: SITE_URL,
  },
  inLanguage: "es-AR",
};

export default function NosotrosPage() {
  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <main className="bg-[var(--bg2)]">
        <MVVSection />
        <PrinciplesSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
