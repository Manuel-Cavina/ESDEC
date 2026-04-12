"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/CommunitySection.tsx
// Sección 4 — Prueba social / comunidad.
//
// Posición narrativa: entre EcosystemSection y EmotionalSection.
// Muestra que hay personas reales en ESDEC antes del pico emocional.
//
// Layout:
//   Header — Eyebrow + headline + body
//   Mosaic — grid editorial de fotos (Atleta_1.png como protagonista)
//   Quote + Stats — testimonio + 3 números clave
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import { COMMUNITY, IMAGES, BLUR_PH } from "@/content/landing";
import { cn } from "@/lib/utils";

// ── AthletePlaceholder ────────────────────────────────────────────────────────
// SVG de silueta deportiva — ocupa el espacio hasta tener foto real.

function AthletePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-end justify-center overflow-hidden",
        "[background:linear-gradient(160deg,var(--bg2),var(--bg3,var(--bg2)))]",
        className
      )}
      aria-hidden="true"
    >
      {/* Silueta SVG runner */}
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[70%] w-auto opacity-20"
      >
        {/* Cabeza */}
        <circle cx="72" cy="22" r="12" fill="currentColor" />
        {/* Torso */}
        <path d="M60 34 Q55 60 48 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        {/* Brazo delantero */}
        <path d="M60 48 L80 62" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        {/* Brazo trasero */}
        <path d="M55 50 L38 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        {/* Pierna delantera */}
        <path d="M48 80 Q42 108 36 130" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        {/* Pierna trasera */}
        <path d="M52 78 Q60 105 72 128" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
      {/* Degradado de huella en fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg2)] to-transparent opacity-40" />
    </div>
  );
}

// ── CommunityMosaic ───────────────────────────────────────────────────────────
// Grid editorial de 4 celdas. Usa las fotos disponibles o placeholders SVG.

function CommunityMosaic() {
  const athlete = IMAGES.athletes[0];
  const lifestyle = IMAGES.lifestyle[0];
  const team = IMAGES.team[0];

  return (
    <div className="grid h-[480px] grid-cols-2 grid-rows-2 gap-3 md:h-[560px] lg:h-[640px]">

      {/* Celda grande — protagonista (Atleta_1.png) */}
      <div className="relative row-span-2 overflow-hidden rounded-2xl">
        {athlete ? (
          <>
            <Image
              src={athlete.src}
              alt={athlete.alt}
              fill
              className="object-cover object-top"
              placeholder="blur"
              blurDataURL={BLUR_PH}
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Degradado inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Label */}
            <div className="absolute bottom-4 left-4">
              <p className="font-condensed text-[9px] font-bold uppercase tracking-[4px] text-white/60">
                ESDEC · Córdoba
              </p>
              <p className="font-condensed text-[15px] font-black uppercase leading-tight tracking-wide text-white">
                Tu estructura,
                <br />tu resultado.
              </p>
            </div>
          </>
        ) : (
          <AthletePlaceholder className="h-full w-full text-[var(--p1)]" />
        )}
      </div>

      {/* Celda superior derecha — lifestyle (Correr_lluvia_1.jpg) */}
      <div className="relative overflow-hidden rounded-2xl">
        {lifestyle ? (
          <>
            <Image
              src={lifestyle.src}
              alt={lifestyle.alt}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PH}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
            <span className="absolute left-3 top-3 rounded-sm border border-white/25 bg-white/12 px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-[3px] text-white backdrop-blur-sm">
              Comunidad
            </span>
          </>
        ) : (
          <AthletePlaceholder className="h-full w-full text-[var(--p2)]" />
        )}
      </div>

      {/* Celda inferior derecha — equipo/especialistas (descarga.png) */}
      <div className="relative overflow-hidden rounded-2xl">
        {team ? (
          <>
            <Image
              src={team.src}
              alt={team.alt}
              fill
              className="object-cover object-top"
              placeholder="blur"
              blurDataURL={BLUR_PH}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-condensed text-[9px] font-bold uppercase tracking-[3px] text-[var(--p2)]/80">
                {team.role}
              </p>
              <p className="font-condensed text-[13px] font-black uppercase text-white">
                Tu especialista
              </p>
            </div>
          </>
        ) : (
          <AthletePlaceholder className="h-full w-full text-[var(--p1)]" />
        )}
      </div>

    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────

export default function CommunitySection() {
  return (
    <section id="community" className="overflow-hidden bg-[var(--bg)] py-24 md:py-32">
      <div className="mx-auto max-w-landing px-6">

        {/* ── Header ── */}
        <ScrollReveal direction="up" className="mb-16">
          <BrandLines animated className="mb-5" />
          <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
            {COMMUNITY.eyebrow}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
            <h2
              className="font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]"
              style={{ fontSize: "clamp(40px, 6.5vw, 92px)" }}
            >
              {COMMUNITY.headline}{" "}
              <span className="text-[var(--p1)]">{COMMUNITY.headlineAccent}</span>
            </h2>
          </div>
          <p className="mt-6 max-w-lg font-sans text-base leading-[1.75] text-[var(--t2)]">
            {COMMUNITY.body}
          </p>
        </ScrollReveal>

        {/* ── Mosaic ── */}
        <ScrollReveal direction="up" delay={80}>
          <CommunityMosaic />
        </ScrollReveal>

        {/* ── Quote + Stats ── */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">

          {/* Quote */}
          <ScrollReveal direction="up" delay={0}>
            <div className="relative pl-6">
              {/* Línea acento izquierda */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[var(--p1)] to-[var(--p2)]" />

              {/* Comillas grandes */}
              <span
                className="block font-condensed font-black leading-none text-[var(--p1)]/25 select-none"
                style={{ fontSize: "clamp(64px, 8vw, 96px)" }}
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-sans text-base leading-[1.85] text-[var(--t2)] -mt-4">
                {COMMUNITY.quote.text}
              </p>
              <div className="mt-5">
                <BrandLines className="mb-3 [--bl-color:var(--p1)]" />
                <p className="font-condensed text-[13px] font-bold uppercase tracking-[2px] text-[var(--t1)]">
                  {COMMUNITY.quote.author}
                </p>
                <p className="font-sans text-[12px] text-[var(--t2)]">
                  {COMMUNITY.quote.sport}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal cascade cascadeDelay={80}>
            {COMMUNITY.stats.map((stat) => (
              <div
                key={stat.label}
                className="group border-t border-[var(--p1)]/20 py-6 transition-colors duration-300 hover:border-[var(--p1)]/60"
              >
                <span
                  className="block font-condensed font-black leading-none text-[var(--t1)] transition-colors duration-300 group-hover:text-[var(--p1)]"
                  style={{ fontSize: "clamp(40px, 5vw, 60px)" }}
                >
                  {stat.value}
                </span>
                <p className="mt-2 font-sans text-sm text-[var(--t2)]">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
