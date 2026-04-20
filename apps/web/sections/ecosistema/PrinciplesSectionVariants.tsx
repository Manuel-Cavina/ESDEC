"use client";

// sections/ecosistema/PrinciplesSectionVariants.tsx
// 3 variantes para "Lo que nos define" — usa los 3 defineCards reales del content.
// Paleta: CSS vars para acentos/texto, fondo oscuro fijo del ecosistema.

import { useState } from "react";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_ABOUT } from "@/content/ecosistema";

// ─── Variante A — Tres cards abiertas (estilo spec-card de /deportistas) ──────
function VariantA() {
  const { defineEyebrow, defineCards, headlinePre, headlineAccent, headlinePost } = ECOSISTEMA_ABOUT;
  return (
    <div className="mx-auto max-w-landing">
      <ScrollReveal direction="up">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <p className="font-condensed text-[10px] font-semibold uppercase tracking-[4px] text-[var(--p1)]">
              {defineEyebrow}
            </p>
          </div>
          <h2 className="font-condensed text-[clamp(2.4rem,5.5vw,4rem)] uppercase leading-[0.88] tracking-[-0.03em] text-[var(--t1)]">
            {headlinePre}{" "}
            <span className="bg-[linear-gradient(90deg,var(--p1),var(--p2))] bg-clip-text text-transparent">
              {headlineAccent}
            </span>
            {headlinePost}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal cascade cascadeDelay={110}>
        <div className="grid gap-5 sm:grid-cols-3">
          {defineCards.map((card) => (
            <div
              key={card.number}
              className="spec-card-accent group relative flex flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.05]"
              style={{ "--p1": card.accent } as React.CSSProperties}
            >
              {/* Número fondo */}
              <span
                className="pointer-events-none absolute right-6 top-5 font-display text-[5rem] leading-none"
                style={{ color: card.accent, opacity: 0.06 }}
                aria-hidden="true"
              >
                {card.number}
              </span>

              {/* Accent line */}
              <div
                className="mb-6 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                style={{ background: card.accent }}
              />

              {/* Contenido */}
              <p
                className="mb-2 font-condensed text-[0.68rem] uppercase tracking-[3px]"
                style={{ color: card.accent, opacity: 0.7 }}
              >
                {card.number}
              </p>
              <h3 className="font-condensed text-[1.4rem] uppercase leading-[1.0] tracking-[-0.01em] text-[var(--t1)]">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 font-sans text-[0.86rem] leading-[1.8] text-[var(--t2)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Variante B — Horizontal split: headline izq + stack cards der ────────────
function VariantB() {
  const { defineEyebrow, defineCards } = ECOSISTEMA_ABOUT;
  return (
    <div className="mx-auto max-w-landing">
      <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-start">

        {/* Izquierda — headline sticky */}
        <ScrollReveal direction="up">
          <div className="md:sticky md:top-28">
            <div className="mb-5 flex items-center gap-3">
              <BrandLines size="sm" animated />
              <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p1)]">
                {defineEyebrow}
              </p>
            </div>
            <h2 className="font-condensed text-[clamp(2.8rem,6vw,4.8rem)] uppercase leading-[0.86] tracking-[-0.04em] text-[var(--t1)]">
              Lo que{" "}
              <span className="bg-[linear-gradient(90deg,var(--p1),var(--p2))] bg-clip-text text-transparent">
                nos
              </span>
              <br />define.
            </h2>
            <div className="mt-6 h-px w-12 bg-white/[0.12]" />
            <p className="mt-4 max-w-[28ch] font-sans text-[0.88rem] leading-[1.85] text-[var(--t2)]">
              No son valores de pared. Son los criterios que organizan cómo funciona el ecosistema.
            </p>
          </div>
        </ScrollReveal>

        {/* Derecha — cards apiladas */}
        <div className="space-y-4">
          {defineCards.map((card, i) => (
            <ScrollReveal key={card.number} direction="right" delay={i * 90}>
              <div
                className="group flex items-start gap-5 rounded-[20px] border border-[var(--bd)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:border-[var(--bd2)] hover:bg-[var(--card-bg2)]"
              >
                {/* Número */}
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border text-center font-condensed text-[0.75rem] font-bold uppercase"
                  style={{ borderColor: `${card.accent}40`, color: card.accent }}
                >
                  {card.number}
                </div>
                <div>
                  <h3 className="font-condensed text-[1.25rem] uppercase leading-none tracking-[-0.01em] text-[var(--t1)] transition-colors duration-200 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-sans text-[0.84rem] leading-[1.8] text-[var(--t2)]">
                    {card.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Variante C — Statement full-width (tipográfico, sin cards) ───────────────
function VariantC() {
  const { defineEyebrow, defineCards } = ECOSISTEMA_ABOUT;
  return (
    <div className="mx-auto max-w-landing">
      <ScrollReveal direction="up">
        <div className="mb-16 flex items-center gap-3">
          <BrandLines size="sm" animated />
          <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p1)]">
            {defineEyebrow}
          </p>
        </div>
      </ScrollReveal>

      <div className="divide-y divide-[var(--bd)]">
        {defineCards.map((card, i) => (
          <ScrollReveal key={card.number} direction="up" delay={i * 70}>
            <div className="group grid grid-cols-[60px_1fr] gap-8 py-12 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-14">
              {/* Número grande */}
              <span
                className="font-display text-[3.5rem] leading-none transition-opacity duration-300 group-hover:opacity-100 md:text-[4.5rem]"
                style={{ color: card.accent, opacity: 0.18 }}
                aria-hidden="true"
              >
                {card.number}
              </span>

              {/* Texto */}
              <div>
                <h3 className="font-condensed text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[0.92] tracking-[-0.03em] text-[var(--t1)] opacity-75 transition-opacity duration-300 group-hover:opacity-100">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[52ch] font-sans text-[0.88rem] leading-[1.85] text-[var(--t2)]">
                  {card.body}
                </p>
              </div>

              {/* Flecha derecha en desktop */}
              <span
                className="hidden font-condensed text-[1.2rem] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block"
                style={{ color: card.accent }}
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

// ─── Switcher ─────────────────────────────────────────────────────────────────
const VARIANTS = [
  { id: "A", label: "A · Cards", component: VariantA },
  { id: "B", label: "B · Split", component: VariantB },
  { id: "C", label: "C · Statements", component: VariantC },
] as const;
type VariantId = "A" | "B" | "C";

export default function PrinciplesSectionVariants() {
  const [active, setActive] = useState<VariantId>("A");
  const ActiveVariant = VARIANTS.find((v) => v.id === active)!.component;

  return (
    <section className="relative bg-[var(--bg2)] px-6 py-24">
      <div className="sticky top-[72px] z-30 mb-12 flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-full border border-[var(--bd)] bg-[var(--card-bg)] px-2 py-1.5 backdrop-blur-md">
          <span className="mr-2 pl-2 font-condensed text-[9px] uppercase tracking-[3px] text-[var(--p1)]/50">
            Lo que nos define
          </span>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`rounded-full px-4 py-1.5 font-condensed text-[11px] font-semibold uppercase tracking-[2px] transition-all duration-200 ${
                active === v.id
                  ? "bg-[var(--p1)] text-[var(--bg)]"
                  : "text-[var(--p1)]/60 hover:text-[var(--p1)]"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <ActiveVariant />
    </section>
  );
}
