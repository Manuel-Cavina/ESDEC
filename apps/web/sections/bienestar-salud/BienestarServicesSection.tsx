// sections/bienestar-salud/BienestarServicesSection.tsx
// Outcomes — lo que cambia en vos con ESDEC Bienestar. Grid 2x2 de resultados concretos.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
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
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(90,200,255,0.2)] hover:bg-[rgba(255,255,255,0.05)] md:p-10"
            >
              {/* Top accent on hover */}
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Number */}
              <div
                className="mb-4 select-none font-display text-[52px] leading-none text-[var(--t1)] opacity-[0.1]"
                aria-hidden="true"
              >
                {item.number}
              </div>

              {/* Outcome headline — big, gradient */}
              <h3 className="ecos-title-accent mb-4 font-condensed text-[clamp(24px,3vw,40px)] font-black uppercase leading-[1.0] tracking-tight">
                {item.headline}
              </h3>

              {/* Supporting sentence */}
              <p className="font-sans text-[0.9rem] leading-[1.8] text-[var(--t2)]">
                {item.sub}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
