// sections/bienestar-salud/SaludLanding.tsx
// Concepto: Prevencion Activa — el sistema de salud que trabaja antes de que el cuerpo lo necesite.
// Flujo: Hero → Proceso → Espacio para profesionales → Especialistas → Beneficios → CTA

import HeroSection from "./HeroSection";
import AthleteJourneySection from "./AthleteJourneySection";
import ForProfessionalsSection from "./ForProfessionalsSection";
import ProfessionalsSection from "./ProfessionalsSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";

export default function SaludLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <HeroSection area="salud" />
      <AthleteJourneySection />
      <ForProfessionalsSection />
      <ProfessionalsSection area="salud" />
      <BenefitsSection area="salud" />
      <CTASection area="salud" />
    </main>
  );
}
