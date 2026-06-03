// sections/bienestar-salud/SaludLanding.tsx
// Concepto: Prevencion Activa.
// Flujo: Hero → Carrusel → Proceso → Numeros reales → Profesionales → CTA

import HeroSection from "./HeroSection";
import SpecialtiesCarouselSection from "./SpecialtiesCarouselSection";
import AthleteJourneySection from "./AthleteJourneySection";
import ForProfessionalsSection from "./ForProfessionalsSection";
import BenefitsSection from "./BenefitsSection";
import ProfessionalsSection from "./ProfessionalsSection";
import CTASection from "./CTASection";

export default function SaludLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <HeroSection area="salud" />
      <SpecialtiesCarouselSection />
      <AthleteJourneySection />
      <ForProfessionalsSection />
      <BenefitsSection area="salud" />
      <ProfessionalsSection area="salud" />
      <CTASection area="salud" />
    </main>
  );
}
