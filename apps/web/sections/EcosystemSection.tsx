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
