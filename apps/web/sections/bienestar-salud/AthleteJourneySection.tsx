// sections/bienestar-salud/AthleteJourneySection.tsx
// Proceso de prevencion activa en formato bento grid con animacion cascade.

import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { SALUD_JOURNEY, type JourneyPhase } from "@/content/bienestar-salud";

const ACCENT = "#5ac8ff";

interface PhaseCardProps {
  phase: JourneyPhase;
  index: number;
  isLast?: boolean;
}

function PhaseCard({ phase, index, isLast = false }: PhaseCardProps) {
  const stepLabel = `Paso 0${index + 1}`;

  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-0.5 ${
        isLast
          ? "border-[rgba(90,200,255,0.28)] bg-[rgba(90,200,255,0.07)]"
          : "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:border-[rgba(90,200,255,0.2)] hover:bg-[rgba(255,255,255,0.07)]"
      }`}
    >
      {/* Numero grande como watermark de fondo */}
      <span
        className="pointer-events-none absolute right-5 top-2 select-none font-condensed text-[7rem] font-black leading-none text-white"
        style={{ opacity: isLast ? 0.04 : 0.025 }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Accent line top — visible en ultimo paso siempre, en otros en hover */}
      <span
        className={`pointer-events-none absolute left-0 top-0 h-px w-full transition-opacity duration-300 ${
          isLast ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(255,255,255,0.06) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Header: paso label + icon */}
      <div className="relative mb-6 flex items-start justify-between">
        <span
          className="font-condensed text-[0.62rem] font-black uppercase tracking-[3px]"
          style={{ color: ACCENT }}
        >
          {stepLabel}
        </span>
        <span style={{ color: ACCENT }} className={isLast ? "opacity-100" : "opacity-60 group-hover:opacity-90 transition-opacity"}>
          <StickerIcon name={phase.icon} size="sm" />
        </span>
      </div>

      {/* Titulo */}
      <h3
        className={`relative font-condensed font-bold uppercase leading-[1.05] tracking-[0.02em] text-[var(--t1)] ${
          isLast ? "text-[1.3rem]" : "text-[1.1rem]"
        }`}
      >
        {phase.title}
      </h3>

      {/* Descripcion */}
      <p className="relative mt-3 font-sans text-[0.85rem] leading-[1.82] text-[var(--t2)]">
        {phase.description}
      </p>

      {/* Chips de profesionales */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {phase.professionals.map((pro) => (
          <span
            key={pro}
            className="inline-flex rounded-full px-2.5 py-1 font-condensed text-[0.58rem] font-bold uppercase tracking-[0.1em]"
            style={{
              background: `${ACCENT}12`,
              color: `${ACCENT}cc`,
              border: `1px solid ${ACCENT}20`,
            }}
          >
            {pro}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AthleteJourneySection() {
  const { eyebrow, headline, subtext, phases } = SALUD_JOURNEY;

  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28"
    >
      {/* Glow sutil izquierda */}
      <div
        className="pointer-events-none absolute left-0 top-[35%] h-[480px] w-[480px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(90,200,255,0.12) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-12 max-w-3xl">
          <BrandLines animated className="mb-5" />
          <p
            className="mb-3 font-condensed text-[10px] font-bold uppercase tracking-[4px]"
            style={{ color: ACCENT }}
          >
            {eyebrow}
          </p>
          <h2 className="font-condensed text-[clamp(36px,5vw,72px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline}
          </h2>
          <p className="mt-5 max-w-[60ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {subtext}
          </p>
        </ScrollReveal>

        {/* Bento grid — cascade animation en los hijos directos */}
        <ScrollReveal cascade cascadeDelay={80} className="grid gap-4 lg:grid-cols-2">
          {/* Fases 1-4: cada una ocupa 1 columna */}
          <PhaseCard phase={phases[0]} index={0} />
          <PhaseCard phase={phases[1]} index={1} />
          <PhaseCard phase={phases[2]} index={2} />
          <PhaseCard phase={phases[3]} index={3} />
          {/* Fase 5: span completo — resultado final del proceso */}
          <div className="lg:col-span-2">
            <PhaseCard phase={phases[4]} index={4} isLast />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
