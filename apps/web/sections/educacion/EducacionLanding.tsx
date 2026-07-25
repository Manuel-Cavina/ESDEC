// sections/educacion/EducacionLanding.tsx
// Orquestador de la landing de Educacion deportiva.

import SharedHeroSection from "@/components/SharedHeroSection";
import EducacionThemesCarouselSection from "./EducacionThemesCarouselSection";
import EducacionHowItWorksSection from "./EducacionHowItWorksSection";
import EducacionOfferingsSection from "./EducacionOfferingsSection";
import EducacionBenefitsSection from "./EducacionBenefitsSection";
import SharedCTASection from "@/components/SharedCTASection";
import { EDUCACION_HERO, EDUCACION_CTA } from "@/content/educacion";

export default function EducacionLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image="/images/athletes/metricas1.jpg"
        imageAlt="Deportista analizando sus metricas de entrenamiento — ESDEC Cordoba"
        eyebrow={EDUCACION_HERO.eyebrow}
        headlinePre={EDUCACION_HERO.headlinePre}
        headlineAccent={EDUCACION_HERO.headlineAccent}
        body={EDUCACION_HERO.body}
        ctaLabel={EDUCACION_HERO.ctaLabel}
        ctaHref={EDUCACION_HERO.ctaHref}
        stats={EDUCACION_HERO.stats}
      />
      <EducacionThemesCarouselSection />
      <EducacionHowItWorksSection />
      <EducacionOfferingsSection />
      <EducacionBenefitsSection />
      <SharedCTASection
        eyebrow={EDUCACION_CTA.eyebrow}
        headline={EDUCACION_CTA.headline}
        headlineAccent={EDUCACION_CTA.headlineAccent}
        body={EDUCACION_CTA.body}
        primaryCtaLabel={EDUCACION_CTA.primaryCtaLabel}
        primaryCtaHref={EDUCACION_CTA.primaryCtaHref}
        secondaryCtaLabel={EDUCACION_CTA.secondaryCtaLabel}
        secondaryCtaHref={EDUCACION_CTA.secondaryCtaHref}
        trustText={EDUCACION_CTA.trustText}
      />
    </main>
  );
}
