"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EcosystemSection.tsx
// Sección 3 — Ecosistema: marquee de deportes + grid de especialistas.
// ─────────────────────────────────────────────────────────────────────────────

import FingerprintSVG from "@/components/FingerprintSVG";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSYSTEM } from "@/content/landing";

export default function EcosystemSection() {
  // Duplicamos el array para que el loop CSS no tenga salto visible
  const sportsLoop = [...ECOSYSTEM.sports, ...ECOSYSTEM.sports];

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32"
    >
      {/* Glow ambiental superior */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--p1)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-landing px-6">

        {/* ── Marquee de deportes ── */}
        <div className="group relative mb-20 overflow-hidden">
          {/* Máscaras laterales: gradiente que "desvanece" los extremos del marquee */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
            style={{ background: "linear-gradient(to right, var(--bg2), transparent)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
            style={{ background: "linear-gradient(to left, var(--bg2), transparent)" }}
            aria-hidden="true"
          />

          {/* Track: se detiene cuando el mouse está sobre el grupo (group-hover) */}
          <div className="flex animate-marquee gap-6 group-hover:[animation-play-state:paused]">
            {sportsLoop.map((sport, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-5 py-2.5 font-condensed text-sm font-bold uppercase tracking-widest text-[var(--t2)] transition-colors duration-200 hover:border-[var(--p1)]/50 hover:text-[var(--p1)]"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>

        {/* ── Header ── */}
        <ScrollReveal direction="up" className="mb-16 text-center">
          <p className="mb-4 font-condensed text-sm font-bold uppercase tracking-[3px] text-[var(--p1)]">
            {ECOSYSTEM.eyebrow}
          </p>
          <h2 className="font-condensed text-5xl font-black uppercase leading-none tracking-tight text-[var(--t1)] md:text-7xl">
            {ECOSYSTEM.headline}{" "}
            <span className="text-[var(--p1)]">{ECOSYSTEM.headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--t2)]">
            {ECOSYSTEM.body}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
