// sections/bienestar-salud/BenefitsSection.tsx
// Beneficios en formato editorial: numeros grandes + statements directos.

import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import {
  SALUD_BENEFITS,
  BIENESTAR_BENEFITS,
  type BienestarSaludArea,
  type BenefitItem,
} from "@/content/bienestar-salud";

interface Props {
  area: BienestarSaludArea;
}

const SECTION_COPY = {
  salud: {
    eyebrow: "La diferencia que hace",
    headline: "PREVENCION EN NUMEROS.",
    subtext:
      "No son estadisticas genericas. Son los resultados concretos de construir un sistema de salud antes de necesitarlo.",
    accent: "#5ac8ff",
  },
  bienestar: {
    eyebrow: "La diferencia que hace",
    headline: "BIENESTAR EN NUMEROS.",
    subtext:
      "No son datos abstractos. Son los resultados concretos de entrenar la mente con la misma disciplina que el cuerpo.",
    accent: "#7de8a8",
  },
} as const;

function StatRow({ item, accent, index }: { item: BenefitItem; accent: string; index: number }) {
  return (
    <ScrollReveal direction="left" delay={index * 55}>
      <div className="group grid grid-cols-[80px_1fr] gap-6 border-b border-white/[0.08] py-8 transition-colors duration-200 hover:border-white/[0.14] md:grid-cols-[120px_1fr] md:gap-10">
        {/* Stat number */}
        <div
          className="self-start text-right font-condensed font-black leading-none tracking-tight transition-all duration-300"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            color: accent,
            textShadow: `0 0 40px ${accent}35`,
          }}
        >
          {item.stat}
        </div>

        {/* Content */}
        <div className="self-center">
          <h3 className="font-condensed text-[1.05rem] font-bold uppercase leading-[1.1] tracking-[0.02em] text-[var(--t1)]">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[58ch] font-sans text-[0.88rem] leading-[1.82] text-[var(--t2)]">
            {item.description}
          </p>
          <p
            className="mt-2 font-condensed text-[0.62rem] font-bold uppercase tracking-[0.2em]"
            style={{ color: `${accent}80` }}
          >
            {item.statLabel}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BenefitsSection({ area }: Props) {
  const copy = SECTION_COPY[area];
  const items: BenefitItem[] = area === "salud" ? SALUD_BENEFITS : BIENESTAR_BENEFITS;

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28">
      {/* Glow sutil */}
      <div
        className="pointer-events-none absolute right-0 top-[20%] h-[500px] w-[500px] translate-x-1/3 rounded-full"
        style={{
          background: `radial-gradient(circle, ${copy.accent}12 0%, transparent 68%)`,
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-12">
          <BrandLines animated className="mb-5" />
          <p
            className="mb-3 font-condensed text-[10px] font-bold uppercase tracking-[4px]"
            style={{ color: copy.accent }}
          >
            {copy.eyebrow}
          </p>
          <h2 className="font-condensed text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headline}
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Statement list */}
        <div className="border-t border-white/[0.08]">
          {items.map((item, i) => (
            <StatRow key={item.id} item={item} accent={copy.accent} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
