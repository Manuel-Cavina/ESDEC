// ─────────────────────────────────────────────────────────────────────────────
// app/profesionales/page.tsx
// Recorrido para profesionales — 3 secciones, tema oscuro (activado por layout).
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

const PAGE_URL = `${SITE_URL}/profesionales`;
const BASE_TITLE = "Marketplace de profesionales del deporte en Córdoba, Argentina";
const TITLE = `${BASE_TITLE} - ESDEC`;
const DESCRIPTION =
  "Sumá tu práctica al marketplace de profesionales del deporte de ESDEC en Córdoba, Argentina — visibilidad, coordinación con otros especialistas y escala real.";

export const metadata: Metadata = {
  title: BASE_TITLE,
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

export default function ProfesionalesPage() {
  return (
    <main>
      <div className="nav-visible">
        <Navbar audience="profesional" />
      </div>

      <EntrySection audience="profesional" />
      <SportsCarouselSection audience="profesional" />
      <ProblemSection audience="profesional" />
      <ClosingCTASection audience="profesional" />
      <Footer />
    </main>
  );
}
