// sections/bienestar-salud/AthleteJourneySection.tsx
// Proceso de prevencion activa — mismo layout, colores y animaciones que ProblemSection en /deportistas.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { SALUD_JOURNEY, type JourneyPhase } from "@/content/bienestar-salud";

function PhaseCard({ phase, index }: { phase: JourneyPhase; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <article className="group relative overflow-hidden border-t-2 border-[var(--p1)]/20 py-10 transition-colors duration-300 hover:border-[var(--p1)]/70">
        {/* Fingerprint aparece en hover — identico a ProblemCard */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [--fps:rgba(90,200,255,0.18)] [--fpg:rgba(90,200,255,0.04)]"
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-36" />
        </div>

        {/* Numero grande */}
        <span
          className="mb-2 block select-none font-condensed text-[var(--p1)]/18 transition-colors duration-300 group-hover:text-[var(--p1)]/30"
          style={{ fontSize: "clamp(72px, 9vw, 108px)", lineHeight: "1" }}
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Linea de acento — se extiende en hover */}
        <div className="mb-5 h-[2px] w-6 bg-[var(--p1)]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--p1)]" />

        {/* Titulo del paso */}
        <h3 className="font-condensed text-[clamp(20px,2.4vw,34px)] font-semibold uppercase leading-[0.98] tracking-[0.02em] text-[var(--t1)] md:tracking-[0.03em]">
          {phase.title}
        </h3>

        {/* Descripcion corta */}
        <p className="mt-3 font-sans text-base leading-[1.8] text-[var(--t2)]">
          {phase.description}
        </p>

      </article>
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
          <h2 className="text-clamp-problem mb-5 font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headlinePre}{" "}
            <span className="text-[var(--p1)]">{headlineAccent}</span>
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
