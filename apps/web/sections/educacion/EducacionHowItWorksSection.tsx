// sections/educacion/EducacionHowItWorksSection.tsx
// Journey de 4 pasos: Descubri -> Aprende -> Aplica -> Evoluciona.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
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
            <StepCard
              key={step.id}
              number={step.number}
              icon={step.icon}
              title={step.title}
              body={step.description}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
