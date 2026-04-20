"use client";

// sections/ecosistema/WhatIsSection.tsx
// Bloque "Que es ESDEC" con layout editorial inspirado en la referencia.

import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_MVV, ECOSISTEMA_PRINCIPLES } from "@/content/ecosistema";

export default function WhatIsSection() {
  const { columns } = ECOSISTEMA_MVV;
  const defineCards = ECOSISTEMA_PRINCIPLES.items.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#3269c7] px-6 py-24 md:py-28 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)] [--card-bg:rgba(255,255,255,0.08)] [--card-bg2:rgba(255,255,255,0.12)] [--card-bd:rgba(255,255,255,0.18)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-landing">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <ScrollReveal direction="up">
              <div className="mb-6 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <p className="ecos-kicker">Que es ESDEC</p>
              </div>

              <h2 className="ecos-title">
                <span className="block">UN</span>
                <span className="ecos-title-accent block">SISTEMA.</span>
                <span className="mt-8 block">UNA META.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal cascade cascadeDelay={90} className="mt-14">
              <div className="space-y-0">
                {columns.map((item) => (
                  <article
                    key={item.id}
                    className="grid gap-4 border-t border-white/18 py-6 md:grid-cols-[96px_1fr] md:gap-6"
                  >
                    <p className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p2)]">
                      {item.label}
                    </p>
                    <p className="max-w-[58ch] font-sans text-[0.96rem] leading-[1.95] text-[var(--t2)]">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal direction="up">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-7 bg-[var(--p2)]" />
                <p className="ecos-kicker text-[var(--p2)]">Lo que nos define</p>
              </div>
            </ScrollReveal>

            <ScrollReveal cascade cascadeDelay={100}>
              <div className="space-y-4">
                {defineCards.map((card, index) => (
                  <article
                    key={card.number}
                    className="group spec-card-accent relative overflow-hidden rounded-[24px] border border-[var(--card-bd)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/60 hover:bg-[var(--card-bg2)]"
                  >
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                    <div className="mb-3 flex items-center gap-3">
                      <BrandLines size="sm" />
                      <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                        Clave {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <h3 className="font-condensed text-[1.5rem] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-[var(--t1)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] font-sans text-[0.92rem] leading-[1.8] text-[var(--t2)]">
                      {card.body}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
