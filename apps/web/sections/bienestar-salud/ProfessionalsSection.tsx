"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx
// Cards de profesionales agrupadas por rubro — diseno minimalista orientado al deportista.

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import {
  SALUD_PROFESSIONALS,
  SALUD_PROFESSIONAL_GROUPS,
  BIENESTAR_PROFESSIONALS,
  type BienestarSaludArea,
  type Professional,
} from "@/content/bienestar-salud";

interface Props {
  area: BienestarSaludArea;
}

const SECTION_COPY = {
  salud: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE CUIDAN.",
    subtext: "Cada especialista tiene un rol preciso dentro de tu proceso de salud deportiva. Hacé click para conocer en detalle lo que hace y cuándo lo necesitas.",
    accent: "#5ac8ff",
    areaBadge: "Salud deportiva",
    ctaLabel: "Entrar al ecosistema",
    ctaHref: "/deportistas",
  },
  bienestar: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE SOSTIENEN.",
    subtext: "Cada especialista tiene un rol preciso dentro de tu proceso de bienestar. Hacé click para conocer en detalle lo que hace y cuándo lo necesitas.",
    accent: "#7de8a8",
    areaBadge: "Bienestar deportivo",
    ctaLabel: "Entrar al ecosistema",
    ctaHref: "/deportistas",
  },
} as const;

// ─── Modal ─────────────────────────────────────────────────────────────────────

function ProfessionalModal({
  pro,
  area,
  onClose,
}: {
  pro: Professional;
  area: BienestarSaludArea;
  onClose: () => void;
}) {
  const copy = SECTION_COPY[area];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[8px]"
      role="dialog"
      aria-modal="true"
      aria-label={pro.role}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[980px] overflow-hidden rounded-[26px] shadow-[0_28px_90px_-38px_rgba(0,0,0,0.9)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 font-condensed text-[14px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/14"
        >
          ✕
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.15fr)_380px]">
          {/* Panel visual */}
          <div
            className="relative flex min-h-[260px] items-center justify-center overflow-hidden lg:min-h-[580px]"
            style={{ background: "linear-gradient(145deg, rgba(4,14,44,0.98) 0%, rgba(7,28,74,0.96) 55%, rgba(5,20,58,0.99) 100%)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: "linear-gradient(rgba(90,200,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.08) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(90,200,255,0.5)] [--fpg:rgba(90,200,255,0.03)]"
              style={{ opacity: 0.14, color: pro.accent }}
              aria-hidden="true"
            >
              <FingerprintSVG animate={false} className="h-full w-full object-cover" />
            </div>
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(ellipse at 50% 50%, ${pro.accent}18 0%, transparent 62%)` }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center gap-4" style={{ color: pro.accent }}>
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full border"
                style={{
                  borderColor: `${pro.accent}40`,
                  background: `radial-gradient(circle, ${pro.accent}14 0%, transparent 70%)`,
                  boxShadow: `0 0 60px -16px ${pro.accent}60`,
                }}
              >
                <StickerIcon name={pro.icon} size="lg" className="[&>svg]:drop-shadow-[0_0_18px_currentColor]" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(4,14,44,0.95)] to-transparent px-7 pb-6 pt-10">
              <p className="font-condensed text-[9px] font-black uppercase tracking-[3.5px]" style={{ color: pro.accent }}>
                {copy.areaBadge}
              </p>
              <h3 className="mt-2 font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-black uppercase leading-[0.9] text-white">
                {pro.role}
              </h3>
            </div>
          </div>

          {/* Panel de informacion */}
          <div className="flex flex-col bg-[#14181f]">
            <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full font-condensed text-[0.72rem] font-black"
                style={{ background: `linear-gradient(135deg, ${pro.accent}, rgba(255,255,255,0.6))`, color: "#06275f" }}
              >
                ES
              </div>
              <div>
                <p className="font-sans text-[0.88rem] font-bold text-white">
                  esdec.ar <span style={{ color: pro.accent }} className="font-medium">{copy.areaBadge}</span>
                </p>
                <p className="font-sans text-[0.74rem] text-white/45">Ecosistema deportivo Cordoba</p>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <p className="font-condensed text-[0.72rem] font-black uppercase tracking-[3px]" style={{ color: pro.accent }}>
                {pro.tagline}
              </p>
              <div className="rounded-[14px] border p-4" style={{ borderColor: `${pro.accent}25`, background: `${pro.accent}07` }}>
                <p className="mb-3 font-condensed text-[8px] font-black uppercase tracking-[3px]" style={{ color: pro.accent }}>
                  Lo que hace
                </p>
                <ul className="space-y-2">
                  {pro.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-[0.83rem] leading-[1.6] text-white/78">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: pro.accent }} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] border border-white/[0.07] bg-white/[0.04] p-4">
                <p className="mb-3 font-condensed text-[8px] font-black uppercase tracking-[3px] text-white/40">
                  Cuando lo necesitas
                </p>
                <ul className="space-y-2">
                  {pro.whenYouNeedThem.map((w) => (
                    <li key={w} className="flex items-start gap-2 font-sans text-[0.83rem] leading-[1.6] text-white/74">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" aria-hidden="true" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/[0.08] p-5">
              <Link
                href={copy.ctaHref}
                className="flex min-h-[52px] w-full items-center justify-center rounded-[18px] font-condensed text-[0.8rem] font-black uppercase tracking-[0.22em] no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                style={{ background: pro.accent, color: area === "salud" ? "#06275f" : "#04213d" }}
              >
                {copy.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card minimalista orientada al marketing ────────────────────────────────────

function ProfessionalCard({
  pro,
  accent,
  onClick,
}: {
  pro: Professional;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver especialista: ${pro.role}`}
      className="group relative w-full overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.07)]"
    >
      {/* Barra lateral de acento */}
      <div
        className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full transition-opacity duration-300"
        style={{ background: accent, opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="px-6 py-5 pl-7">
        {/* Icono */}
        <div className="mb-4" style={{ color: accent }}>
          <StickerIcon
            name={pro.icon}
            size="sm"
            className="opacity-80 transition-opacity duration-300 group-hover:opacity-100 [&>svg]:drop-shadow-[0_0_8px_currentColor]"
          />
        </div>

        {/* Rol */}
        <h3 className="font-condensed text-[1.02rem] font-bold uppercase leading-[1.1] tracking-[0.02em] text-white">
          {pro.role}
        </h3>

        {/* Value prop */}
        <p className="mt-2 font-sans text-[0.82rem] leading-[1.6] text-white/56">
          {pro.valueProp}
        </p>

        {/* CTA hint */}
        <div
          className="mt-5 flex items-center gap-1.5 font-condensed text-[0.62rem] font-bold uppercase tracking-[0.18em] transition-all duration-300"
          style={{ color: accent, opacity: 0.55 }}
        >
          <span className="group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: "inherit" }}>
            Ver especialista
          </span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

// ─── Seccion principal ──────────────────────────────────────────────────────────

export default function ProfessionalsSection({ area }: Props) {
  const [selected, setSelected] = useState<Professional | null>(null);
  const copy = SECTION_COPY[area];
  const isSalud = area === "salud";
  const allProfessionals = isSalud ? SALUD_PROFESSIONALS : BIENESTAR_PROFESSIONALS;

  return (
    <section
      id="profesionales"
      className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-14">
          <BrandLines animated className="mb-5" />
          <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px]" style={{ color: copy.accent }}>
            {copy.kicker}
          </p>
          <h2 className="font-condensed text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headline}{" "}
            <span style={{ color: copy.accent }}>{copy.headlineAccent}</span>
          </h2>
          <p className="mt-4 max-w-[56ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Layout Salud: agrupado por rubro */}
        {isSalud ? (
          <div className="space-y-14">
            {SALUD_PROFESSIONAL_GROUPS.map((group, gi) => {
              const groupPros = group.professionalIds
                .map((id) => allProfessionals.find((p) => p.id === id))
                .filter((p): p is Professional => !!p);

              return (
                <ScrollReveal key={group.id} direction="up" delay={gi * 60}>
                  {/* Cabecera del grupo */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                    <div className="text-center">
                      <p
                        className="font-condensed text-[0.72rem] font-black uppercase tracking-[3px]"
                        style={{ color: copy.accent }}
                      >
                        {group.label}
                      </p>
                      <p className="mt-0.5 font-sans text-[0.72rem] text-white/38">
                        {group.description}
                      </p>
                    </div>
                    <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  </div>

                  {/* Cards del grupo */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {groupPros.map((pro) => (
                      <ProfessionalCard
                        key={pro.id}
                        pro={pro}
                        accent={copy.accent}
                        onClick={() => setSelected(pro)}
                      />
                    ))}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          // Layout Bienestar: grid plano
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allProfessionals.map((pro, i) => (
              <div
                key={pro.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 55}ms`, animationFillMode: "both" }}
              >
                <ProfessionalCard
                  pro={pro}
                  accent={copy.accent}
                  onClick={() => setSelected(pro)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected !== null && (
        <ProfessionalModal
          pro={selected}
          area={area}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
