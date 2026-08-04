// sections/bienestar-salud/BienestarServicesSection.tsx
// Outcomes — lo que cambia en vos con ESDEC Bienestar. Grid 2x2 de resultados concretos.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
import { BIENESTAR_OUTCOMES } from "@/content/bienestar-salud";

export default function BienestarServicesSection() {
  const { eyebrow, headline, headlineAccent, outcomes } = BIENESTAR_OUTCOMES;

  return (
    <section id="servicios" className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28">
      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="text-[var(--t1)]">{headline}</span>
            {" "}
            <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
        </ScrollReveal>

        {/* Outcomes grid — 2x2 */}
        <ScrollReveal cascade cascadeDelay={80} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {outcomes.map((item) => (
            <StepCard
              key={item.id}
              number={item.number}
              title={item.headline}
              body={item.sub}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
