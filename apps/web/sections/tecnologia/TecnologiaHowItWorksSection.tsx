// sections/tecnologia/TecnologiaHowItWorksSection.tsx
// Journey de 4 pasos: Registras -> Se organiza -> Se conecta -> Decidis mejor.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
import { TECNOLOGIA_HOW_IT_WORKS } from "@/content/tecnologia";

export default function TecnologiaHowItWorksSection() {
  const { eyebrow, headline, headlineAccent, intro, steps } = TECNOLOGIA_HOW_IT_WORKS;

  return (
    <section id="como-funciona" className="scroll-mt-24 bg-[var(--bg2)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
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
