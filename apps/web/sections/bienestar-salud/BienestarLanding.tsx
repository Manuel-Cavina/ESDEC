// sections/bienestar-salud/BienestarLanding.tsx
// Orquestador de la landing de Bienestar deportivo.

import HeroSection from "./HeroSection";
import ProfessionalsSection from "./ProfessionalsSection";
import BenefitsSection from "./BenefitsSection";
import CTASection from "./CTASection";

export default function BienestarLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <HeroSection area="bienestar" />
      <ProfessionalsSection area="bienestar" />
      <BenefitsSection area="bienestar" />
      <CTASection area="bienestar" />
    </main>
  );
}
