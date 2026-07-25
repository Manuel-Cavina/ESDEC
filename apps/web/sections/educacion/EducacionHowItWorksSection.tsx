// sections/educacion/EducacionHowItWorksSection.tsx
// Journey de 4 pasos: Descubri -> Aprende -> Aplica -> Evoluciona.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { EDUCACION_HOW_IT_WORKS } from "@/content/educacion";

export default function EducacionHowItWorksSection() {
  const { eyebrow, headline, headlineAccent, intro, steps } = EDUCACION_HOW_IT_WORKS;

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <ScrollReveal direction="up">
            <BrandLines animated className="mb-5" />
            <Kicker className="mb-4">{eyebrow}</Kicker>
            <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="text-[var(--t1)]">{headline}</span>
              <br />
              <span className="ecos-title-accent">{headlineAccent}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={80}>
            <p className="max-w-[48ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
              {intro}
            </p>
          </ScrollReveal>
        </div>

        {/* Steps grid */}
        <ScrollReveal cascade cascadeDelay={90} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(90,200,255,0.22)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%)" }}
                aria-hidden="true"
              />

              <div className="mb-5 flex items-center justify-between">
                <span
                  className="select-none font-display text-[44px] leading-none text-[var(--t1)] opacity-[0.15]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <StickerIcon name={step.icon} size="md" />
              </div>

              <h3 className="ecos-title-accent font-condensed text-[1.2rem] font-black uppercase leading-[1.1] tracking-[0.02em]">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-[0.86rem] leading-[1.75] text-[var(--t2)]">
                {step.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
