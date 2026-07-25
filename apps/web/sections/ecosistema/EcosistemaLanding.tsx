// sections/ecosistema/EcosistemaLanding.tsx
// Orquestador de la landing del ecosistema integral deportivo — usado como Home.

import SharedHeroSection from "@/components/SharedHeroSection";
import HookSection from "./HookSection";
import PillarsGridSection from "./PillarsGridSection";
import AudienceNavSection from "./AudienceNavSection";
import AppTeaserSection from "./AppTeaserSection";
import CTASection from "./CTASection";
import { ECOSISTEMA_HERO } from "@/content/ecosistema";

export default function EcosistemaLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image={ECOSISTEMA_HERO.heroImage}
        imageAlt={ECOSISTEMA_HERO.heroImageAlt}
        eyebrow={ECOSISTEMA_HERO.eyebrow}
        headlinePre={ECOSISTEMA_HERO.headlinePre}
        headlineAccent={ECOSISTEMA_HERO.headlineAccent}
        body={ECOSISTEMA_HERO.body}
        ctaLabel={ECOSISTEMA_HERO.ctaLabel}
        ctaHref={ECOSISTEMA_HERO.ctaHref}
        stats={[...ECOSISTEMA_HERO.stats]}
      />
      <HookSection />
      <PillarsGridSection />
      <AudienceNavSection />
      <AppTeaserSection />
      <CTASection />
    </main>
  );
}
