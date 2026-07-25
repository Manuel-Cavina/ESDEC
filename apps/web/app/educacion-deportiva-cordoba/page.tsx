// app/educacion-deportiva-cordoba/page.tsx
// Landing del area de Educacion deportiva de ESDEC.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EducacionLanding from "@/sections/educacion/EducacionLanding";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";

const area = AREA_PAGES["educacion-deportiva-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function EducacionDeportivaCordobaPage() {
  const jsonLd = buildAreaJsonLd(area);

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <EducacionLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
