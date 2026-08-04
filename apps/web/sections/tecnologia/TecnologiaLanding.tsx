// sections/tecnologia/TecnologiaLanding.tsx
// Orquestador de la landing de Tecnologia deportiva.

import SharedHeroSection from "@/components/SharedHeroSection";
import FAQSection from "@/components/FAQSection";
import RelatedGuides from "@/components/RelatedGuides";
import TecnologiaHowItWorksSection from "./TecnologiaHowItWorksSection";
import TecnologiaOfferingsSection from "./TecnologiaOfferingsSection";
import SharedCTASection from "@/components/SharedCTASection";
import { TECNOLOGIA_HERO, TECNOLOGIA_CTA, TECNOLOGIA_FAQ } from "@/content/tecnologia";
import { GUIDES } from "@/content/guias";

const tecnologiaGuides = GUIDES.filter((guide) => guide.pillar === "tecnologia-deportiva-cordoba");

export default function TecnologiaLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image="/images/lifestyle/Deportes_2.jpg"
        imageAlt="Deportista dentro del area de tecnologia deportiva — ESDEC Cordoba"
        eyebrow={TECNOLOGIA_HERO.eyebrow}
        headlinePre={TECNOLOGIA_HERO.headlinePre}
        headlineAccent={TECNOLOGIA_HERO.headlineAccent}
        keyword={TECNOLOGIA_HERO.keyword}
        body={TECNOLOGIA_HERO.body}
        ctaLabel={TECNOLOGIA_HERO.ctaLabel}
        ctaHref={TECNOLOGIA_HERO.ctaHref}
        stats={TECNOLOGIA_HERO.stats}
      />
      <TecnologiaHowItWorksSection />
      <TecnologiaOfferingsSection />
      <FAQSection
        id="preguntas-frecuentes"
        eyebrow="Preguntas frecuentes"
        headline="TECNOLOGÍA DEPORTIVA,"
        headlineAccent="SIN VUELTAS."
        items={TECNOLOGIA_FAQ}
      />
      <RelatedGuides guides={tecnologiaGuides} />
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
        bg="var(--bg2)"
      />
    </main>
  );
}
