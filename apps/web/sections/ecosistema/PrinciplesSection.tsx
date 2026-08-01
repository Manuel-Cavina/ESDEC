// sections/ecosistema/PrinciplesSection.tsx
// "Lo que define a ESDEC" — grilla de 6 principios con icono, tono institucional.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
import { ECOSISTEMA_PRINCIPLES } from "@/content/ecosistema";

export default function PrinciplesSection() {
  const { eyebrow, headline, headlineAccent, items } = ECOSISTEMA_PRINCIPLES;

  return (
    <section className="bg-[var(--bg)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-landing">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-14 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <Kicker>{eyebrow}</Kicker>
              </div>
              <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
                {headline}{" "}
                <span className="ecos-title-accent">{headlineAccent}</span>
              </h2>
            </div>
            <p className="font-condensed text-[9px] uppercase tracking-[3px] text-[var(--t2)] md:text-right">
              {items.length} principios
            </p>
          </div>
        </ScrollReveal>

        {/* Grilla de principios */}
        <ScrollReveal cascade cascadeDelay={70} className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <StepCard
              key={item.number}
              number={item.number}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
