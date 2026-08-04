// app/tecnologia-deportiva-cordoba/page.tsx
// Landing del area de Tecnologia deportiva de ESDEC.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TecnologiaLanding from "@/sections/tecnologia/TecnologiaLanding";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";
import { TECNOLOGIA_FAQ } from "@/content/tecnologia";
import { buildFaqJsonLd } from "@/lib/faq";

const area = AREA_PAGES["tecnologia-deportiva-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function TecnologiaDeportivaCordobaPage() {
  const jsonLd = [...buildAreaJsonLd(area), buildFaqJsonLd(TECNOLOGIA_FAQ)];

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <TecnologiaLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
