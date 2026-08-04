// sections/bienestar-salud/AthleteJourneySection.tsx
// Proceso de prevencion activa — mismo layout, colores y animaciones que ProblemSection en /deportistas.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
import { SALUD_JOURNEY, type JourneyPhase } from "@/content/bienestar-salud";

function PhaseCard({ phase, index }: { phase: JourneyPhase; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <StepCard number={number} title={phase.title} body={phase.description} />
    </ScrollReveal>
  );
}

export default function AthleteJourneySection() {
  const { eyebrow, headlinePre, headlineAccent, subtext, phases } = SALUD_JOURNEY;

  return (
    <section id="proceso" className="bg-[var(--bg)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
        {/* Header — mismo formato que ProblemSection */}
        <ScrollReveal direction="up" className="mb-14 max-w-3xl">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-4">{eyebrow}</Kicker>
          <h2 className="mb-5 font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headlinePre}{" "}
            <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="max-w-[52ch] font-sans text-base leading-[1.9] text-[var(--t2)]">
            {subtext}
          </p>
        </ScrollReveal>

        {/* Grid de fases — identico a ProblemCard en /deportistas */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
