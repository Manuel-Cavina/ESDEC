// app/ecosistema-deportivo-cordoba/page.tsx
// Pagina del ecosistema deportivo de ESDEC con narrativa fija de 6 bloques.

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";
import HeroSection from "@/sections/ecosistema/HeroSection";
import WhatIsSection from "@/sections/ecosistema/WhatIsSection";
import ConvictionBannerSection from "@/sections/ecosistema/ConvictionBannerSection";
import EcosystemVisualization from "@/sections/ecosistema/EcosystemVisualization";
import CTASection from "@/sections/ecosistema/CTASection";

export const metadata: Metadata = {
  title: "Ecosistema Deportivo de Cordoba - ESDEC",
  description:
    "ESDEC es el ecosistema deportivo de Cordoba que conecta deportistas y profesionales del deporte en un solo sistema coordinado.",
  alternates: { canonical: `${SITE_URL}/ecosistema-deportivo-cordoba` },
  openGraph: {
    url: `${SITE_URL}/ecosistema-deportivo-cordoba`,
    title: "Ecosistema Deportivo de Cordoba - ESDEC",
    description:
      "El sistema que conecta deportistas y profesionales del deporte en Cordoba, Argentina.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function EcosistemasPage() {
  return (
    <main className="bg-[var(--bg)]">
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>

      <HeroSection />
      <WhatIsSection />
      <ConvictionBannerSection />
      <EcosystemVisualization />
      <CTASection />

      <Footer />
    </main>
  );
}
