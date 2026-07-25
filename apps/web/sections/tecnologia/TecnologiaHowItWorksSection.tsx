// sections/tecnologia/TecnologiaHowItWorksSection.tsx
// Journey de 4 pasos: Registras -> Se organiza -> Se conecta -> Decidis mejor.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
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
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-[var(--card-bg)] p-7 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/40 dark:border-white/12 dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, var(--p1) 0%, transparent 100%)" }}
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
