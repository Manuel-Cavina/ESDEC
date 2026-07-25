// sections/tecnologia/TecnologiaLanding.tsx
// Orquestador de la landing de Tecnologia deportiva.

import SharedHeroSection from "@/components/SharedHeroSection";
import TecnologiaHowItWorksSection from "./TecnologiaHowItWorksSection";
import TecnologiaOfferingsSection from "./TecnologiaOfferingsSection";
import SharedCTASection from "@/components/SharedCTASection";
import { TECNOLOGIA_HERO, TECNOLOGIA_CTA } from "@/content/tecnologia";

export default function TecnologiaLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image="/images/lifestyle/Deportes_2.jpg"
        imageAlt="Deportista dentro del area de tecnologia deportiva — ESDEC Cordoba"
        eyebrow={TECNOLOGIA_HERO.eyebrow}
        headlinePre={TECNOLOGIA_HERO.headlinePre}
        headlineAccent={TECNOLOGIA_HERO.headlineAccent}
        body={TECNOLOGIA_HERO.body}
        ctaLabel={TECNOLOGIA_HERO.ctaLabel}
        ctaHref={TECNOLOGIA_HERO.ctaHref}
        stats={TECNOLOGIA_HERO.stats}
      />
      <TecnologiaHowItWorksSection />
      <TecnologiaOfferingsSection />
      <SharedCTASection
        eyebrow={TECNOLOGIA_CTA.eyebrow}
        headline={TECNOLOGIA_CTA.headline}
        headlineAccent={TECNOLOGIA_CTA.headlineAccent}
        body={TECNOLOGIA_CTA.body}
        primaryCtaLabel={TECNOLOGIA_CTA.primaryCtaLabel}
        primaryCtaHref={TECNOLOGIA_CTA.primaryCtaHref}
        primaryCtaExternal={TECNOLOGIA_CTA.primaryCtaExternal}
        secondaryCtaLabel={TECNOLOGIA_CTA.secondaryCtaLabel}
        secondaryCtaHref={TECNOLOGIA_CTA.secondaryCtaHref}
        trustText={TECNOLOGIA_CTA.trustText}
      />
    </main>
  );
}
