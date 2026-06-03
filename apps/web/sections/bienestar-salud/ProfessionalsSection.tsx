"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx
// Directorio de profesionales por sub-area. Cada sub-area tiene un spread tipo cupcake:
// el profesional del centro es grande, los del costado se achican. Al tocar uno → aparece su info.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import {
  SALUD_PROFESSIONALS,
  SALUD_PROFESSIONAL_GROUPS,
  BIENESTAR_PROFESSIONALS,
  type BienestarSaludArea,
  type Professional,
  type ProfessionalGroup,
} from "@/content/bienestar-salud";

interface Props {
  area: BienestarSaludArea;
}

const SECTION_COPY = {
  salud: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE CUIDAN.",
    subtext:
      "Encontra al especialista que necesitas. Cada uno tiene un rol preciso en tu proceso de salud deportiva.",
    accent: "#5ac8ff",
    ctaLabel: "Conectar",
    ctaHref: "/deportistas",
  },
  bienestar: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE SOSTIENEN.",
    subtext:
      "Encontra al especialista que necesitas. Cada uno tiene un rol preciso en tu proceso de bienestar.",
    accent: "#7de8a8",
    ctaLabel: "Conectar",
    ctaHref: "/deportistas",
  },
} as const;

// ─── Spread de una sub-area ───────────────────────────────────────────────────

function ProfessionalSpread({
  professionals,
  accent,
  ctaLabel,
  ctaHref,
}: {
  professionals: Professional[];
  accent: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const [active, setActive] = useState(Math.floor(professionals.length / 2));
  const pro = professionals[active];

  const SCALES  = [1, 0.76, 0.58, 0.45];
  const OPACITY = [1, 0.62, 0.40, 0.25];

  const firstName = pro.name?.split(" ").pop() ?? pro.role.split(" ")[0];

  return (
    <div>
      {/* ── Spread cupcake ── */}
      <div className="relative flex items-end justify-center gap-3 overflow-visible pb-2">
        {professionals.map((p, i) => {
          const dist  = Math.abs(i - active);
          const scale = SCALES[Math.min(dist, 3)];
          const alpha = OPACITY[Math.min(dist, 3)];

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver ${p.name ?? p.role}`}
              className="relative shrink-0 cursor-pointer overflow-hidden rounded-[20px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] outline-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                width: "220px",
                height: "320px",
                transform: `scale(${scale})`,
                opacity: alpha,
                transformOrigin: "bottom center",
                zIndex: 10 - dist,
              }}
            >
              {/* Foto o placeholder */}
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name ?? p.role}
                  fill
                  sizes="220px"
                  className="object-cover saturate-75 opacity-85"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(145deg, rgba(4,14,44,0.98) 0%, rgba(7,28,74,0.95) 100%)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center" style={{ color: accent }}>
                    <StickerIcon name={p.icon} size="lg" className="opacity-20" />
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(4,14,44,0.05)_0%,rgba(4,14,44,0.55)_50%,rgba(4,14,44,0.95)_100%)]" />

              {/* Borde acento en activo */}
              {i === active && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-[20px] border-2"
                  style={{ borderColor: `${accent}60` }}
                  aria-hidden="true"
                />
              )}

              {/* Nombre — solo en el activo */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300"
                style={{ opacity: i === active ? 1 : 0 }}
              >
                <p
                  className="font-condensed text-[0.54rem] font-black uppercase tracking-[2.5px]"
                  style={{ color: accent }}
                >
                  {p.role}
                </p>
                <h4 className="font-condensed text-[1rem] font-black uppercase leading-tight text-white">
                  {p.name ?? p.role}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dots de navegación */}
      <div className="mt-5 flex justify-center gap-1.5">
        {professionals.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir al profesional ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              height: "5px",
              width: i === active ? "18px" : "5px",
              background: i === active ? accent : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* ── Panel de info del activo ── */}
      <div
        key={pro.id}
        className="animate-fade-up mt-6 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6"
        style={{ animationFillMode: "both" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="mb-1 font-condensed text-[0.58rem] font-black uppercase tracking-[2.5px]"
              style={{ color: accent }}
            >
              {pro.role}
            </p>
            <h4 className="font-condensed text-[1.25rem] font-black uppercase leading-tight text-white">
              {pro.name ?? pro.role}
            </h4>
          </div>
          <span style={{ color: accent }}>
            <StickerIcon name={pro.icon} size="sm" className="opacity-70 [&>svg]:drop-shadow-[0_0_8px_currentColor]" />
          </span>
        </div>

        <p className="mt-3 font-sans text-[0.86rem] leading-[1.7] text-white/58">
          {pro.valueProp}
        </p>

        <Link
          href={ctaHref}
          className="mt-5 inline-flex h-10 items-center gap-2 rounded-full px-6 font-condensed text-[0.7rem] font-black uppercase tracking-[0.2em] transition-all duration-200 hover:brightness-110"
          style={{ background: accent, color: accent === "#5ac8ff" ? "#06275f" : "#04213d" }}
        >
          {ctaLabel} con {firstName} →
        </Link>
      </div>
    </div>
  );
}

// ─── Seccion principal ────────────────────────────────────────────────────────

export default function ProfessionalsSection({ area }: Props) {
  const copy = SECTION_COPY[area];
  const isSalud = area === "salud";
  const allProfessionals = isSalud ? SALUD_PROFESSIONALS : BIENESTAR_PROFESSIONALS;

  const groups: { group: ProfessionalGroup; pros: Professional[] }[] = isSalud
    ? SALUD_PROFESSIONAL_GROUPS.map((g) => ({
        group: g,
        pros: g.professionalIds
          .map((id) => allProfessionals.find((p) => p.id === id))
          .filter((p): p is Professional => !!p),
      }))
    : [{ group: { id: "all", label: "Especialistas", description: "", professionalIds: [] }, pros: allProfessionals }];

  return (
    <section
      id="profesionales"
      className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-16">
          <BrandLines animated className="mb-5" />
          <p
            className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px]"
            style={{ color: copy.accent }}
          >
            {copy.kicker}
          </p>
          <h2 className="font-condensed text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headline}{" "}
            <span style={{ color: copy.accent }}>{copy.headlineAccent}</span>
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Sub-areas */}
        <div className="space-y-20">
          {groups.map(({ group, pros }, gi) => (
            <ScrollReveal key={group.id} direction="up" delay={gi * 60}>
              {/* Cabecera de sub-area */}
              {isSalud && (
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  <div className="text-center">
                    <p
                      className="font-condensed text-[0.7rem] font-black uppercase tracking-[3px]"
                      style={{ color: copy.accent }}
                    >
                      {group.label}
                    </p>
                    <p className="mt-0.5 font-sans text-[0.68rem] text-white/35">
                      {group.description}
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
              )}

              {/* Spread de la sub-area */}
              <ProfessionalSpread
                professionals={pros}
                accent={copy.accent}
                ctaLabel={copy.ctaLabel}
                ctaHref={copy.ctaHref}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
