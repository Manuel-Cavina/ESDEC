"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx
// Directorio de profesionales: tabs por sub-area + carrusel + modal premium editorial.

import { useEffect, useState } from "react";
import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import Kicker from "@/components/ui/Kicker";
import SweepButton from "@/components/ui/SweepButton";
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
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-label={pro.name ?? pro.role}
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-[520px] overflow-hidden rounded-[28px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)]"
        style={{ background: "linear-gradient(160deg, #1556d4 0%, #0c35a8 100%)" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close button — fixed at top-right, stays visible while scrolling */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-condensed text-[11px] font-bold text-white/70 transition-all hover:bg-white/20 hover:text-white"
        >
          ✕
        </button>

        <div className="flex max-h-[90svh] flex-col overflow-y-auto">

          {/* Header: square photo + profile titles */}
          <div className="flex items-center gap-5 px-6 pb-4 pt-6">
            {pro.image ? (
              <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-[16px]">
                <Image
                  src={pro.image}
                  alt={pro.name ?? pro.role}
                  fill
                  quality={90}
                  sizes="110px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-[16px] bg-white/10">
                <span className="font-condensed text-[2.8rem] font-black text-white/30">
                  {(pro.name ?? pro.role).charAt(0)}
                </span>
              </div>
            )}

            <div className="min-w-0 flex-1">
              <h3 className="font-condensed text-[1.75rem] font-black uppercase leading-[0.93] text-white">
                {pro.name ?? pro.role}
              </h3>
              {pro.name && (
                <div className="mt-2 inline-block rounded-full border border-white/[0.22] bg-white/[0.12] px-3 py-1 backdrop-blur-md">
                  <p className="font-condensed text-[0.82rem] font-bold uppercase tracking-[1.5px] text-white">
                    {pro.role}
                  </p>
                </div>
              )}
              {pro.experience && (
                <p className="mt-2 font-sans text-[0.9rem] text-white/65">
                  {pro.experience}
                </p>
              )}
            </div>
          </div>

          <div className="mx-6 mb-4 h-px bg-white/[0.15]" />

          {/* Glass cards */}
          <div className="flex flex-col gap-3 px-6 pb-4">

            {/* Lo que hace */}
            <div className="rounded-[16px] border border-white/[0.2] bg-white/[0.1] p-5">
              <Kicker className="mb-3">Lo que hace</Kicker>
              <ul className="space-y-2.5">
                {pro.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-sans text-[1rem] leading-[1.6] text-white">
                    <span
                      className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full"
                      style={{ background: copy.accent }}
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Forma de trabajo */}
            {pro.workStyle && (
              <div className="rounded-[16px] border border-white/[0.18] bg-white/[0.08] p-5">
                <Kicker className="mb-3">Forma de trabajo</Kicker>
                <p className="font-sans text-[1rem] leading-[1.7] text-white">
                  {pro.workStyle}
                </p>
              </div>
            )}

            {/* Beneficios */}
            <div className="rounded-[16px] border border-[#0cd25e]/30 bg-[#0cd25e]/10 p-5">
              <Kicker className="mb-3">Beneficios</Kicker>
              <ul className="space-y-2.5">
                {pro.whenYouNeedThem.map((w) => (
                  <li key={w} className="flex items-start gap-3 font-sans text-[1rem] leading-[1.6] text-white">
                    <span className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#0cd25e]" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 pb-6 pt-1">
            <SweepButton
              label={`${copy.ctaLabel} →`}
              href={copy.ctaHref}
              size="md"
              variant="glass"
              className="w-full"
            />
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
      className="group relative w-full overflow-hidden rounded-[24px] text-left outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] focus-visible:ring-0"
      style={{ aspectRatio: "3/4" }}
    >
      {pro.image ? (
        <>
          <Image
            src={pro.image}
            alt={pro.name ?? pro.role}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {/* Duotone — tono de marca que unifica todas las fotos */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "rgba(18,69,184,0.45)" }}
            aria-hidden="true"
          />
        </>
      ) : (
        /* Fallback texto-primero — la ausencia de foto es un diseño */
        <div
          className="absolute inset-0 flex flex-col justify-end p-6"
          style={{ background: `linear-gradient(145deg,rgba(4,14,50,0.98) 0%,rgba(10,30,80,0.96) 100%)` }}
        >
          <p
            className="font-condensed text-[clamp(2.2rem,4vw,3rem)] font-black uppercase leading-[0.88] tracking-tight"
            style={{ color: accent }}
          >
            {pro.role}
          </p>
        </div>
      )}

      {/* Gradiente inferior para legibilidad del glass tag */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,20,0.72)_0%,rgba(2,6,20,0.18)_45%,transparent_70%)]" />

      {/* Glass tag */}
      <div className="absolute bottom-3 left-3 right-3 overflow-hidden rounded-[14px] border border-white/[0.18] bg-white/[0.1] px-4 py-3 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/[0.15]">
        <p className="kicker-gradient font-sans text-[10px] font-bold uppercase tracking-[2px]">
          {pro.role}
        </p>
        <h3 className="mt-0.5 font-condensed text-[1rem] font-black uppercase leading-[1.1] text-white">
          {pro.name ?? pro.role}
        </h3>
      </div>
    </button>
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

  const [activeGroupId, setActiveGroupId] = useState<string>(groups[0].group.id);
  const [selectedPro, setSelectedPro] = useState<Professional | null>(null);

  const activeGroup = groups.find(({ group }) => group.id === activeGroupId) ?? groups[0];
  const selectedGroup = selectedPro
    ? groups.find(({ pros }) => pros.some((p) => p.id === selectedPro.id))
    : null;

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

        {/* Tabs — solo para salud (tiene 3 sub-areas) */}
        {isSalud && (
          <ScrollReveal direction="up" className="mb-10">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Sub-areas de salud deportiva"
            >
              {groups.map(({ group }) => {
                const isActive = group.id === activeGroupId;
                return (
                  <button
                    key={group.id}
                    role="tab"
                    aria-selected={String(isActive) as "true" | "false"}
                    type="button"
                    onClick={() => setActiveGroupId(group.id)}
                    className="rounded-full border px-5 py-2 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-200"
                    style={
                      isActive
                        ? {
                            borderColor: copy.accent,
                            background: `${copy.accent}18`,
                            color: copy.accent,
                          }
                        : {
                            borderColor: "rgba(255,255,255,0.18)",
                            background: "transparent",
                            color: "rgba(255,255,255,0.5)",
                          }
                    }
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>

            {/* Descripcion del tab activo */}
            <p className="mt-3 font-sans text-[0.8rem] text-white/35">
              {activeGroup.group.description}
            </p>
          </ScrollReveal>
        )}

        {/* Grilla del grupo activo */}
        <ScrollReveal direction="up">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeGroup.pros.map((pro) => (
              <ProfessionalCard
                key={pro.id}
                pro={pro}
                accent={copy.accent}
                onClick={() => setSelectedPro(pro)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {selectedPro !== null && (
        <ProfessionalModal
          pro={selectedPro}
          groupLabel={selectedGroup?.group.label ?? ""}
          copy={copy}
          onClose={() => setSelectedPro(null)}
        />
      )}
    </section>
  );
}
