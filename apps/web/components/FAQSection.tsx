// components/FAQSection.tsx
// FAQ estandar para todas las paginas de ESDEC.
// Preguntas y respuestas viven en texto plano en el HTML (no solo en JSON-LD) —
// requisito de Google para que el FAQPage schema sea valido.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import type { FAQItem } from "@/lib/faq";

interface FAQSectionProps {
  id?: string;
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  items: readonly FAQItem[];
  bg?: string;
}

export default function FAQSection({
  id,
  eyebrow,
  headline,
  headlineAccent,
  items,
  bg = "var(--bg2)",
}: FAQSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 py-20 md:py-28"
      style={{ background: bg }}
    >
      <div className="relative mx-auto max-w-landing">
        <ScrollReveal direction="up">
          <div className="mb-6 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
          <h2 className="max-w-[24ch] font-condensed text-[clamp(2rem,4.5vw,3.2rem)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline}{" "}
            {headlineAccent && (
              <span className="ecos-title-accent">{headlineAccent}</span>
            )}
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
          {items.map((item, i) => (
            <ScrollReveal key={item.question} direction="up" delay={i * 40}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-condensed text-[1rem] font-bold uppercase leading-snug tracking-tight text-[var(--t1)] md:text-[1.1rem]">
                    {item.question}
                  </h3>
                  <span
                    className="mt-1 shrink-0 font-sans text-lg leading-none text-[var(--t2)] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[62ch] font-sans text-[0.95rem] leading-[1.85] text-[var(--t2)]">
                  {item.answer}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
