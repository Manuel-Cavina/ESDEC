// ─────────────────────────────────────────────────────────────────────────────
// app/deportistas/page.tsx
// Recorrido para deportistas — 3 secciones, tema claro, enfocado en conversión.
// Server Component. About, Ecosystem y Emotional se movieron a /ecosistema.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EntrySection from "@/sections/EntrySection";
import SportsCarouselSection from "@/sections/SportsCarouselSection";
import ProblemSection from "@/sections/ProblemSection";
import ClosingCTASection from "@/sections/ClosingCTASection";
import { SITE_URL } from "@/lib/constants";

const PAGE_URL = `${SITE_URL}/deportistas`;
const TITLE = "Para deportistas amateurs en Córdoba, Argentina - ESDEC";
const DESCRIPTION =
  "Entrená con estructura: entrenamiento, nutrición y recuperación integrados en un mismo sistema. ESDEC conecta deportistas amateurs con profesionales del deporte en Córdoba, Argentina.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: PAGE_URL,
    siteName: "ESDEC",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
};

export default function DeportistasPage() {
  return (
    <main>
      <div className="nav-visible">
        <Navbar audience="deportista" />
      </div>

      <EntrySection audience="deportista" />
      <SportsCarouselSection audience="deportista" />
      <ProblemSection audience="deportista" />
      <ClosingCTASection audience="deportista" />
      <Footer />
    </main>
  );
}
