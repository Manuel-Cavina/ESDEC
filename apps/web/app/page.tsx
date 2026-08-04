// app/page.tsx
// Home ESDEC — el ecosistema integral deportivo, sin gate de audiencia previo.

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcosistemaLanding from "@/sections/ecosistema/EcosistemaLanding";
import { SITE_URL } from "@/lib/constants";
import { HOME_FAQ } from "@/content/landing";
import { buildFaqJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Ecosistema Deportivo de Cordoba - ESDEC",
  description:
    "ESDEC es el ecosistema deportivo de Cordoba que conecta deportistas y profesionales del deporte en un solo sistema coordinado.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Ecosistema Deportivo de Cordoba - ESDEC",
    description:
      "El sistema que conecta deportistas y profesionales del deporte en Cordoba, Argentina.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = buildFaqJsonLd(HOME_FAQ);

export default function HomePage() {
  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <EcosistemaLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
