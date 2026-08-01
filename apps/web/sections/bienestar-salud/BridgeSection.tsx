// sections/bienestar-salud/BridgeSection.tsx
// Bloque de conexion al final de Salud que introduce Bienestar como complemento.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { SALUD_BRIDGE } from "@/content/bienestar-salud";

export default function BridgeSection() {
  const { eyebrow, headlineLine1, headlineAccent, headlineLine2, subtext, cta } = SALUD_BRIDGE;

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-20 md:py-24">
      {/* Linea separadora superior */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(90,200,255,0.25) 25%, rgba(125,232,168,0.25) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow dual — transition de azul a verde */}
      <div
        className="pointer-events-none absolute left-[20%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(90,200,255,0.1) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[20%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(125,232,168,0.1) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      {/* Fingerprint muy sutil */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] [--fps:rgba(255,255,255,0.9)] [--fpg:rgba(255,255,255,0.01)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[52vw] max-w-[520px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6">
        <ScrollReveal direction="up">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            {/* Copy */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {eyebrow}
                </p>
              </div>

              <h2 className="font-condensed font-black uppercase leading-[0.9] tracking-tight">
                <span className="block text-[clamp(28px,4vw,56px)] text-[var(--t1)]">
                  {headlineLine1}
                </span>
                <span className="ecos-title-accent block text-[clamp(28px,4vw,56px)]">
                  {headlineAccent}
                </span>
                <span className="mt-1 block text-[clamp(24px,3.5vw,48px)] text-[var(--t2)]">
                  {headlineLine2}
                </span>
              </h2>

              <p className="mt-5 max-w-[52ch] font-sans text-[0.92rem] leading-[1.9] text-[var(--t2)]">
                {subtext}
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                href={cta.href}
                className="group inline-flex min-h-[58px] items-center gap-3 rounded-full border border-[rgba(125,232,168,0.28)] bg-[rgba(125,232,168,0.07)] px-10 font-sans text-[0.95rem] font-semibold uppercase tracking-[0.04em] text-[#7de8a8] transition-all duration-300 hover:-translate-y-px hover:border-[rgba(125,232,168,0.5)] hover:bg-[rgba(125,232,168,0.12)]"
              >
                {cta.label}
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Linea separadora inferior */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
