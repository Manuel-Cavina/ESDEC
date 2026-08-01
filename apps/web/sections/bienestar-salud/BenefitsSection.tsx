// sections/bienestar-salud/BenefitsSection.tsx
// Numeros reales en formato editorial: stat grande a la izquierda + statement a la derecha.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
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
    headlinePre: "PREVENCION",
    headlineAccent: "EN NUMEROS.",
    subtext:
      "No son estadisticas genericas. Son los resultados concretos de construir un sistema de salud antes de necesitarlo.",
  },
  bienestar: {
    eyebrow: "La diferencia que hace",
    headlinePre: "BIENESTAR",
    headlineAccent: "EN NUMEROS.",
    subtext:
      "No son datos abstractos. Son los resultados concretos de entrenar la mente con la misma disciplina que el cuerpo.",
  },
} as const;

function StatRow({ item, accent, index }: { item: BenefitItem; accent: string; index: number }) {
  return (
    <ScrollReveal direction="left" delay={index * 55}>
      <div className="group grid grid-cols-[80px_1fr] gap-6 border-b border-white/[0.08] py-8 transition-colors duration-200 hover:border-white/[0.14] md:grid-cols-[140px_1fr] md:gap-12">
        {/* Stat number */}
        <div
          className="self-center text-right font-condensed font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", color: accent }}
        >
          {item.stat}
        </div>

        {/* Content */}
        <div className="self-center">
          <Kicker className="mb-2">{item.statLabel}</Kicker>
          <div className="mt-3 h-px w-10 bg-gradient-to-r from-[var(--p1)]/90 to-transparent" />
          <h3 className="mt-4 font-condensed text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold uppercase leading-[1.08] tracking-[0.02em] text-white">
            {item.title}
          </h3>
          <p className="mt-2.5 max-w-[58ch] font-sans text-base leading-[1.82] text-[var(--t2)]">
            {item.description}
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
    <section className="bg-[var(--bg2)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-12">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-4">{copy.eyebrow}</Kicker>
          <h2 className="text-clamp-problem font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headlinePre}{" "}
            <span className="ecos-title-accent">{copy.headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-base leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Filas de stats */}
        <div className="border-t border-white/[0.08]">
          {items.map((item, i) => (
            <StatRow key={item.id} item={item} accent="#5ac8ff" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
