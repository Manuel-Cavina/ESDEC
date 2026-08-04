// app/bienestar-deportivo-cordoba/page.tsx
// Landing del area de Bienestar deportivo de ESDEC.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BienestarLanding from "@/sections/bienestar-salud/BienestarLanding";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";
import { BIENESTAR_FAQ } from "@/content/bienestar-salud";
import { buildFaqJsonLd } from "@/lib/faq";

const area = AREA_PAGES["bienestar-deportivo-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function BienestarDeportivoCordobaPage() {
  const jsonLd = [...buildAreaJsonLd(area), buildFaqJsonLd(BIENESTAR_FAQ)];

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <BienestarLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
