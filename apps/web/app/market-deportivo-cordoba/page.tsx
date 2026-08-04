// app/market-deportivo-cordoba/page.tsx
// "Proximamente" landing for the ESDEC market area.

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MarketComingSoonSection from "@/sections/market/MarketComingSoonSection";
import { AREA_PAGES } from "@/content/areas";
import { buildAreaJsonLd, buildAreaMetadata } from "@/lib/areas";
import { buildFaqJsonLd } from "@/lib/faq";

const area = AREA_PAGES["market-deportivo-cordoba"];

export function generateMetadata(): Metadata {
  return buildAreaMetadata(area);
}

export default function MarketDeportivoCordobaPage() {
  const jsonLd = [
    ...buildAreaJsonLd(area),
    ...(area.faq && area.faq.length > 0 ? [buildFaqJsonLd(area.faq)] : []),
  ];

  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <MarketComingSoonSection area={area} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
