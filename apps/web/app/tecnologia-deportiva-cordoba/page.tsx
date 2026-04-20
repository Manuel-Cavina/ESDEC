// app/tecnologia-deportiva-cordoba/page.tsx
// Temporary SEO landing for the ESDEC technology area.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AreaInDevelopmentPage from "@/components/areas/AreaInDevelopmentPage";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";

const area = AREA_PAGES["tecnologia-deportiva-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function TecnologiaDeportivaCordobaPage() {
  const jsonLd = buildAreaJsonLd(area);

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <AreaInDevelopmentPage area={area} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
