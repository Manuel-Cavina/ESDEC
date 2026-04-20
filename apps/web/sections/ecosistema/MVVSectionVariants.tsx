"use client";

// sections/ecosistema/MVVSectionVariants.tsx
// 3 variantes para "ESDEC Institucional". Paleta CSS vars (= /deportistas).

import { useState } from "react";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_MVV } from "@/content/ecosistema";

// ─── Variante A — Tres columnas abiertas ─────────────────────────────────────
function VariantA() {
  const { eyebrow, columns } = ECOSISTEMA_MVV;
  return (
    <div className="mx-auto max-w-landing">
      <ScrollReveal direction="up">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p2)]">{eyebrow}</p>
          </div>
          <h2 className="font-condensed text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.86] tracking-[-0.04em] text-[var(--t1)]">
            No somos una suma
            <br />
            <span className="bg-[linear-gradient(90deg,var(--p1)_0%,var(--p2)_100%)] bg-clip-text text-transparent">
              de servicios.
            </span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mb-12 h-px bg-[var(--bd)]" />

      <ScrollReveal cascade cascadeDelay={100}>
        <div className="grid gap-0 divide-y divide-[var(--bd)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {columns.map((col) => (
            <div
              key={col.id}
              className="group py-8 transition-colors duration-300 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="font-display text-[2.5rem] leading-none text-[var(--p2)] opacity-20"
                >
                  {col.number}
                </span>
                <span className="font-condensed text-[9px] uppercase tracking-[4px] text-[var(--p2)] opacity-60">
                  {col.label}
                </span>
              </div>
              <h3 className="font-condensed text-[clamp(1.3rem,2.5vw,1.8rem)] uppercase leading-[1.05] tracking-[-0.02em] text-[var(--t1)] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {col.headlinePre}{" "}
                <span className="bg-[linear-gradient(90deg,var(--p1),var(--p2))] bg-clip-text text-transparent opacity-100">
                  {col.headlineAccent}
                </span>
                {col.headlinePost}
              </h3>
              <p className="mt-4 font-sans text-[0.85rem] leading-[1.85] text-[var(--t2)]">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Variante B — Statement Stack ────────────────────────────────────────────
function VariantB() {
  const { eyebrow, columns } = ECOSISTEMA_MVV;
  return (
    <div className="mx-auto max-w-landing">
      <ScrollReveal direction="up">
        <div className="mb-20 flex items-center gap-3">
          <BrandLines size="sm" animated />
          <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p2)]">{eyebrow}</p>
        </div>
      </ScrollReveal>

      <div className="space-y-0">
        {columns.map((col, i) => (
          <ScrollReveal key={col.id} direction="up" delay={i * 80}>
            <div className="group relative border-t border-[var(--bd)] py-14 last:border-b">
              <span
                className="pointer-events-none absolute right-0 top-8 font-display leading-none text-[var(--t1)] opacity-[0.04]"
                style={{ fontSize: "clamp(5rem,12vw,10rem)" }}
                aria-hidden="true"
              >
                {col.number}
              </span>
              <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
                <div className="flex flex-row items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <span className="font-condensed text-[0.7rem] uppercase tracking-[4px] text-[var(--p2)] opacity-60">
                    {col.label}
                  </span>
                  <div className="h-px flex-1 bg-[var(--bd)] md:hidden" />
                  <span className="font-condensed text-[0.7rem] uppercase tracking-[2px] text-[var(--t2)] opacity-40">
                    {col.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-condensed text-[clamp(1.8rem,4vw,3.2rem)] uppercase leading-[0.92] tracking-[-0.03em] text-[var(--t1)] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    {col.headlinePre}{" "}
                    <span className="bg-[linear-gradient(90deg,var(--p1),var(--p2))] bg-clip-text text-transparent opacity-100">
                      {col.headlineAccent}
                    </span>
                    {col.headlinePost}
                  </h3>
                  <p className="mt-5 max-w-[56ch] font-sans text-[0.9rem] leading-[1.85] text-[var(--t2)]">
                    {col.body}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

// ─── Variante C — Manifiesto + Cards compactas ────────────────────────────────
function VariantC() {
  const { eyebrow, manifestoLines, closing, columns } = ECOSISTEMA_MVV;
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="mx-auto max-w-landing">
      <ScrollReveal direction="up">
        <div className="mb-5 flex items-center gap-3">
          <BrandLines size="sm" animated />
          <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p2)]">{eyebrow}</p>
        </div>
        <div className="mb-8">
          {manifestoLines.map((line, i) => (
            <p key={i} className="font-condensed text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.86] tracking-[-0.04em]">
              {line.accent
                ? <span className="bg-[linear-gradient(90deg,var(--p1)_0%,var(--p2)_100%)] bg-clip-text text-transparent">{line.text}</span>
                : <span className="text-[var(--t1)]">{line.text}</span>
              }
            </p>
          ))}
        </div>
        <p className="mb-12 max-w-[50ch] font-sans text-[0.93rem] leading-[1.9] text-[var(--t2)]">{closing}</p>
      </ScrollReveal>

      <div className="mb-8 h-px bg-[var(--bd)]" />

      <ScrollReveal cascade cascadeDelay={90}>
        <div className="grid gap-4 sm:grid-cols-3">
          {columns.map((col) => {
            const isOpen = openId === col.id;
            return (
              <div
                key={col.id}
                className="rounded-[20px] border border-[var(--bd)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:border-[var(--bd2)] hover:bg-[var(--card-bg2)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-condensed text-[9px] uppercase tracking-[4px] text-[var(--p2)] opacity-70">
                    {col.label}
                  </span>
                  <span className="font-condensed text-[0.7rem] text-[var(--t2)] opacity-40">{col.number}</span>
                </div>
                <h3 className="font-condensed text-[1.1rem] uppercase leading-[1.1] tracking-[-0.01em] text-[var(--t1)] opacity-80">
                  {col.headlinePre}{" "}
                  <span className="text-[var(--p2)] opacity-100">{col.headlineAccent}</span>
                  {col.headlinePost}
                </h3>
                <div className="mt-3 h-px bg-[var(--bd)]" />
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : col.id)}
                  className="mt-3 w-full text-left"
                >
                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{ maxHeight: isOpen ? 140 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-2 font-sans text-[0.82rem] leading-[1.75] text-[var(--t2)]">{col.body}</p>
                  </div>
                  <span className="font-condensed text-[0.72rem] uppercase tracking-[2px] text-[var(--p1)] opacity-60 hover:opacity-100">
                    {isOpen ? "Cerrar −" : "Ver más +"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Switcher ─────────────────────────────────────────────────────────────────
const VARIANTS = [
  { id: "A", label: "A · Columnas", component: VariantA },
  { id: "B", label: "B · Statements", component: VariantB },
  { id: "C", label: "C · Manifiesto", component: VariantC },
] as const;
type VariantId = "A" | "B" | "C";

export default function MVVSectionVariants() {
  const [active, setActive] = useState<VariantId>("A");
  const ActiveVariant = VARIANTS.find((v) => v.id === active)!.component;

  return (
    <section className="bg-[var(--bg)] px-6 py-28">
      <div className="sticky top-[72px] z-30 mb-14 flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-full border border-[var(--bd)] bg-[var(--card-bg)] px-2 py-1.5 backdrop-blur-md">
          <span className="mr-2 pl-2 font-condensed text-[9px] uppercase tracking-[3px] text-[var(--p2)] opacity-50">
            Institucional
          </span>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`rounded-full px-4 py-1.5 font-condensed text-[11px] font-semibold uppercase tracking-[2px] transition-all duration-200 ${
                active === v.id
                  ? "bg-[var(--p2)] text-[var(--bg)]"
                  : "text-[var(--p2)] opacity-60 hover:opacity-100"
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
