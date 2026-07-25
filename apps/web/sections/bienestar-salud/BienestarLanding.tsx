// sections/bienestar-salud/BienestarLanding.tsx
// Orquestador de la landing de Bienestar Deportivo.

import SharedHeroSection from "@/components/SharedHeroSection";
import BienestarSystemSection from "./BienestarSystemSection";
import BienestarServicesSection from "./BienestarServicesSection";
import ForProfessionalsSection from "./ForProfessionalsSection";
import SharedCTASection from "@/components/SharedCTASection";
import { BIENESTAR_HERO, BIENESTAR_CTA } from "@/content/bienestar-salud";

export default function BienestarLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image="/images/lifestyle/Correr_lluvia_1.jpg"
        imageAlt="Deportista en bienestar integral — ESDEC Cordoba"
        eyebrow={BIENESTAR_HERO.eyebrow}
        headlinePre={BIENESTAR_HERO.headlinePre}
        headlineAccent={BIENESTAR_HERO.headlineAccent}
        body={BIENESTAR_HERO.body}
        ctaLabel={BIENESTAR_HERO.ctaLabel}
        ctaHref={BIENESTAR_HERO.ctaHref}
        stats={BIENESTAR_HERO.stats}
      />
      <BienestarSystemSection />
      <BienestarServicesSection />
      <ForProfessionalsSection />
      <SharedCTASection
        eyebrow={BIENESTAR_CTA.eyebrow}
        headline={BIENESTAR_CTA.headline}
        headlineAccent={BIENESTAR_CTA.headlineAccent}
        body={BIENESTAR_CTA.body}
        primaryCtaLabel={BIENESTAR_CTA.primaryCtaLabel}
        primaryCtaHref={BIENESTAR_CTA.primaryCtaHref}
        secondaryCtaLabel={BIENESTAR_CTA.secondaryCtaLabel}
        secondaryCtaHref={BIENESTAR_CTA.secondaryCtaHref}
        trustText={BIENESTAR_CTA.trustText}
      />
    </main>
  );
}
