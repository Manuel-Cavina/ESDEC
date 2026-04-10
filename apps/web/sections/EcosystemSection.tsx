"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EcosystemSection.tsx
// Sección 3 — Ecosistema: marquee de deportes + grid de especialistas.
// ─────────────────────────────────────────────────────────────────────────────

import FingerprintSVG from "@/components/FingerprintSVG";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSYSTEM } from "@/content/landing";

// ── SpecialistCard ────────────────────────────────────────────────────────────

interface Specialist {
  number: string;
  icon: string;
  role: string;
  title: string;
  description: string;
  tag: string;
}

function SpecialistCard({ specialist }: { specialist: Specialist }) {
  return (
    <article className="spec-card-accent group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/40 hover:shadow-[0_8px_32px_rgba(90,200,255,0.12)]">
      {/* Número de referencia */}
      <span className="absolute right-4 top-4 font-condensed text-xs font-bold tracking-widest text-[var(--t3)]">
        {specialist.number}
      </span>

      {/* Ícono + Rol */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--p1)]/10 text-2xl" aria-hidden="true">
          {specialist.icon}
        </span>
        <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--p1)]">
          {specialist.role}
        </span>
      </div>

      {/* Título */}
      <h3 className="mb-2 font-condensed text-xl font-bold leading-tight text-[var(--t1)]">
        {specialist.title}
      </h3>

      {/* Descripción */}
      <p className="mb-4 text-sm leading-relaxed text-[var(--t2)]">
        {specialist.description}
      </p>

      {/* Badge Core / Plus */}
      <Badge variant={specialist.tag === "Core" ? "core" : "plus"}>
        {specialist.tag}
      </Badge>

      {/* Huella que aparece en la esquina inferior derecha al hacer hover */}
      <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [--fps:rgba(90,200,255,0.30)] [--fpg:rgba(90,200,255,0.06)]">
        <FingerprintSVG className="h-full w-full" />
      </div>
    </article>
  );
}

// ── Section principal ─────────────────────────────────────────────────────────

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

        {/* ── Grid de especialistas ── */}
        <ScrollReveal direction="up" className="mb-10 text-center">
          <p className="font-condensed text-sm font-bold uppercase tracking-[3px] text-[var(--p2)]">
            {ECOSYSTEM.specialistsEyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={80}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ECOSYSTEM.specialists.map((specialist) => (
              <SpecialistCard key={specialist.number} specialist={specialist} />
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
