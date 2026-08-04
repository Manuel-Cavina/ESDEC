// app/salud-deportiva-cordoba/page.tsx
// Landing del area de Salud deportiva de ESDEC.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SaludLanding from "@/sections/bienestar-salud/SaludLanding";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";
import { SALUD_FAQ } from "@/content/bienestar-salud";
import { buildFaqJsonLd } from "@/lib/faq";

const area = AREA_PAGES["salud-deportiva-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function SaludDeportivaCordobaPage() {
  const jsonLd = [...buildAreaJsonLd(area), buildFaqJsonLd(SALUD_FAQ)];

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <SaludLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
