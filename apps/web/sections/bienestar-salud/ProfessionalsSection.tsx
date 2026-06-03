"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx
// Directorio de profesionales: tabs por sub-area + carrusel + modal premium editorial.

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import Kicker from "@/components/ui/Kicker";
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
    subtext: "Encontra al especialista que necesitas. Seleccioná la especialidad y elegí con quién querés trabajar.",
    accent: "#5ac8ff",
    textColor: "#06275f",
    ctaLabel: "Conectar con este especialista",
    ctaHref: "/deportistas",
  },
  bienestar: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE SOSTIENEN.",
    subtext: "Encontra al especialista que necesitas y conecta directamente.",
    accent: "#7de8a8",
    textColor: "#04213d",
    ctaLabel: "Conectar con este especialista",
    ctaHref: "/deportistas",
  },
} as const;

// ─── Modal premium editorial ──────────────────────────────────────────────────

interface ModalCopy {
  accent: string;
  textColor: string;
  ctaLabel: string;
  ctaHref: string;
}

function ProfessionalModal({
  pro,
  groupLabel,
  copy,
  onClose,
}: {
  pro: Professional;
  groupLabel: string;
  copy: ModalCopy;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-label={pro.name ?? pro.role}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[1000px] overflow-hidden rounded-[28px] shadow-[0_32px_100px_-40px_rgba(0,0,0,0.95)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 font-condensed text-[13px] font-bold text-white/80 backdrop-blur-md transition-colors hover:bg-white/15 hover:text-white"
        >
          ✕
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.1fr)_400px]">

          {/* ── Panel visual — foto editorial ── */}
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[620px]">
            {pro.image ? (
              <Image
                src={pro.image}
                alt={pro.name ?? pro.role}
                fill
                quality={94}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(145deg,rgba(4,14,44,0.98) 0%,rgba(7,28,74,0.95) 100%)" }}
              />
            )}

            {/* Overlay cinematico */}
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,8,24,0.18)_0%,rgba(0,8,24,0.42)_42%,rgba(4,14,44,0.96)_100%)]" />

            {/* Chip especialidad — top left */}
            <div className="absolute left-6 top-6">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-condensed text-[0.62rem] font-black uppercase tracking-[2.5px] backdrop-blur-sm"
                style={{ borderColor: `${copy.accent}45`, background: `${copy.accent}12`, color: copy.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: copy.accent }} aria-hidden="true" />
                {groupLabel}
              </span>
            </div>

            {/* Nombre grande al pie */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16">
              <p
                className="mb-1.5 font-condensed text-[0.58rem] font-black uppercase tracking-[3px]"
                style={{ color: copy.accent }}
              >
                {pro.role}
              </p>
              <h3 className="font-condensed text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-[0.9] text-white">
                {pro.name ?? pro.role}
              </h3>
            </div>
          </div>

          {/* ── Panel de info ── */}
          <div className="flex flex-col bg-[#121820]">
            {/* Header */}
            <div className="border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: copy.accent }} aria-hidden="true" />
                <span
                  className="font-condensed text-[0.6rem] font-black uppercase tracking-[3px]"
                  style={{ color: copy.accent }}
                >
                  {groupLabel} · ESDEC
                </span>
              </div>
              <p className="mt-2.5 font-sans text-[0.9rem] font-medium italic leading-[1.6] text-white/70">
                "{pro.valueProp}"
              </p>
            </div>

            {/* Contenido scrollable */}
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {/* Lo que hace */}
              <div
                className="rounded-[14px] border p-4"
                style={{ borderColor: `${copy.accent}22`, background: `${copy.accent}08` }}
              >
                <p
                  className="mb-3 font-condensed text-[0.52rem] font-black uppercase tracking-[3px]"
                  style={{ color: copy.accent }}
                >
                  Lo que hace
                </p>
                <ul className="space-y-2.5">
                  {pro.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[0.83rem] leading-[1.6] text-white/75">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: copy.accent }} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cuando lo necesitas */}
              <div className="rounded-[14px] border border-white/[0.07] bg-white/[0.04] p-4">
                <p className="mb-3 font-condensed text-[0.52rem] font-black uppercase tracking-[3px] text-white/35">
                  Cuando lo necesitas
                </p>
                <ul className="space-y-2.5">
                  {pro.whenYouNeedThem.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 font-sans text-[0.83rem] leading-[1.6] text-white/60">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" aria-hidden="true" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-white/[0.07] p-5">
              <Link
                href={copy.ctaHref}
                className="flex min-h-[52px] w-full items-center justify-center rounded-full font-condensed text-[0.78rem] font-black uppercase tracking-[0.12em] no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                style={{ background: copy.accent, color: copy.textColor }}
              >
                {copy.ctaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card estilo eventos ──────────────────────────────────────────────────────

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
      aria-label={`Ver perfil de ${pro.name ?? pro.role}`}
      className="group relative min-h-[480px] w-[min(80vw,320px)] shrink-0 overflow-hidden rounded-[24px] bg-[rgba(4,14,44,0.9)] text-left shadow-[0_16px_48px_-24px_rgba(0,0,0,0.7)] outline-none transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2"
    >
      {/* Foto */}
      {pro.image && (
        <Image
          src={pro.image}
          alt={pro.name ?? pro.role}
          fill
          sizes="(min-width: 768px) 30vw, 80vw"
          className="object-cover opacity-82 saturate-75 transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(0,10,24,0.12)_0%,rgba(0,10,24,0.6)_48%,rgba(4,14,44,0.98)_100%)]" />

      {/* Acento top en hover */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${accent} 0%, rgba(255,255,255,0.08) 100%)` }}
        aria-hidden="true"
      />

      {/* Info al pie */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="mb-1 font-condensed text-[0.56rem] font-black uppercase tracking-[2.5px]"
          style={{ color: accent }}
        >
          {pro.role}
        </p>
        <h3 className="font-condensed text-[1.2rem] font-black uppercase leading-tight text-white">
          {pro.name ?? pro.role}
        </h3>
        <p className="mt-1.5 font-sans text-[0.74rem] leading-[1.5] text-white/50">
          {pro.valueProp}
        </p>
        {/* CTA hint */}
        <span className="mt-5 block w-full rounded-full bg-white/90 py-3 text-center font-condensed text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#001a33] transition-colors group-hover:bg-white">
          Ver perfil
        </span>
      </div>
    </button>
  );
}

// ─── Seccion principal ────────────────────────────────────────────────────────

export default function ProfessionalsSection({ area }: Props) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [selectedPro, setSelectedPro] = useState<Professional | null>(null);
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

  const current = groups[activeGroup] ?? groups[0];

  return (
    <section
      id="profesionales"
      className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-10">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-3">{copy.kicker}</Kicker>
          <h2 className="font-condensed text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headline}{" "}
            <span style={{ color: copy.accent }}>{copy.headlineAccent}</span>
          </h2>
          <p className="mt-4 max-w-[48ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Tabs de especialidad */}
        {isSalud && (
          <ScrollReveal direction="up" delay={60} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {groups.map(({ group }, i) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(i)}
                  className={`rounded-full px-4 py-2 font-condensed text-[0.82rem] font-bold uppercase tracking-widest transition-colors duration-200 ${
                    i === activeGroup
                      ? "bg-white/15 text-white"
                      : "bg-[var(--card-bg)] text-white/55 hover:text-white"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>
            <p className="mt-2 font-sans text-[0.72rem] text-white/35">
              {current.group.description}
            </p>
          </ScrollReveal>
        )}

        {/* Carrusel — scroll manual con snap */}
        <ScrollReveal direction="up" delay={80}>
          <div className="-mx-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
            <div
              key={activeGroup}
              className="flex gap-5 overflow-x-auto px-6 pb-4 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {current.pros.map((pro) => (
                <div key={`${activeGroup}-${pro.id}`} className="[scroll-snap-align:start]">
                  <ProfessionalCard
                    pro={pro}
                    accent={copy.accent}
                    onClick={() => setSelectedPro(pro)}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {selectedPro !== null && (
        <ProfessionalModal
          pro={selectedPro}
          groupLabel={current.group.label}
          copy={copy}
          onClose={() => setSelectedPro(null)}
        />
      )}
    </section>
  );
}
