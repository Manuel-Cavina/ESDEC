"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
    subtext: "Seleccioná la especialidad y elegí con quién querés trabajar.",
    ctaLabel: "Conectar con este especialista",
    ctaHref: "/deportistas",
  },
  bienestar: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE SOSTIENEN.",
    subtext: "Encontra al especialista que necesitas y conecta directamente.",
    ctaLabel: "Conectar con este especialista",
    ctaHref: "/deportistas",
  },
} as const;

// Clases de acento derivadas del area — sin inline styles
function getAccentClasses(area: BienestarSaludArea) {
  return area === "salud"
    ? {
        text: "text-[var(--p1)]",
        bg: "bg-[var(--p1)]",
        bgLight: "bg-[var(--p1)]/10",
        border: "border-[var(--p1)]",
      }
    : {
        text: "text-[var(--p2)]",
        bg: "bg-[var(--p2)]",
        bgLight: "bg-[var(--p2)]/10",
        border: "border-[var(--p2)]",
      };
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProfessionalModal({
  pro,
  accentBg,
  accentText,
  ctaLabel,
  ctaHref,
  onClose,
}: {
  pro: Professional;
  accentBg: string;
  accentText: string;
  ctaLabel: string;
  ctaHref: string;
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
        className="pro-modal-bg relative w-full max-w-[520px] overflow-hidden rounded-[28px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-condensed text-[11px] font-bold text-white/70 transition-all hover:bg-white/20 hover:text-white"
        >
          ✕
        </button>

        <div className="flex max-h-[90svh] flex-col overflow-y-auto">
          <div className="flex items-center gap-5 px-6 pb-4 pt-6">
            {pro.image ? (
              <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-[16px]">
                <Image src={pro.image} alt={pro.name ?? pro.role} fill quality={90} sizes="110px" className="object-cover object-top" />
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
                <p className="mt-2 font-sans text-[0.9rem] text-white/65">{pro.experience}</p>
              )}
            </div>
          </div>

          <div className="mx-6 mb-4 h-px bg-white/[0.15]" />

          <div className="flex flex-col gap-3 px-6 pb-4">
            <div className="rounded-[16px] border border-white/[0.2] bg-white/[0.1] p-5">
              <Kicker className="mb-3">Lo que hace</Kicker>
              <ul className="space-y-2.5">
                {pro.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-sans text-[1rem] leading-[1.6] text-white">
                    <span className={cn("mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full", accentBg)} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {pro.workStyle && (
              <div className="rounded-[16px] border border-white/[0.18] bg-white/[0.08] p-5">
                <Kicker className="mb-3">Forma de trabajo</Kicker>
                <p className="font-sans text-[1rem] leading-[1.7] text-white">{pro.workStyle}</p>
              </div>
            )}

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

          <div className="px-6 pb-6 pt-1">
            <SweepButton label={`${ctaLabel} →`} href={ctaHref} size="md" variant="glass" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProfessionalCard({
  pro,
  accentText,
  onClick,
}: {
  pro: Professional;
  accentText: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver perfil de ${pro.name ?? pro.role}`}
      className="group relative w-full overflow-hidden rounded-[24px] text-left outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)]"
      style={{ aspectRatio: "3/4" }}
    >
      {pro.image ? (
        <>
          <Image
            src={pro.image}
            alt={pro.name ?? pro.role}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 85vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[rgba(18,69,184,0.45)] mix-blend-multiply" aria-hidden="true" />
        </>
      ) : (
        <div className="pro-card-fallback absolute inset-0 flex flex-col justify-end p-6">
          <p className={cn("font-condensed text-[clamp(2.2rem,4vw,3rem)] font-black uppercase leading-[0.88] tracking-tight", accentText)}>
            {pro.role}
          </p>
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,20,0.72)_0%,rgba(2,6,20,0.18)_45%,transparent_70%)]" />

      <div className="absolute bottom-3 left-3 right-3 overflow-hidden rounded-[14px] border border-white/[0.18] bg-white/[0.1] px-4 py-3 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/[0.15]">
        <p className="kicker-gradient font-sans text-[10px] font-bold uppercase tracking-[2px]">{pro.role}</p>
        <h3 className="mt-0.5 font-condensed text-[1rem] font-black uppercase leading-[1.1] text-white">
          {pro.name ?? pro.role}
        </h3>
      </div>
    </button>
  );
}

// ─── Sección principal ────────────────────────────────────────────────────────

export default function ProfessionalsSection({ area }: Props) {
  const copy = SECTION_COPY[area];
  const accent = getAccentClasses(area);
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

  const [activeGroupId, setActiveGroupId] = useState(groups[0].group.id);
  const [selectedPro, setSelectedPro] = useState<Professional | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeGroup = groups.find(({ group }) => group.id === activeGroupId) ?? groups[0];

  const handleTabChange = (id: string) => {
    setActiveGroupId(id);
    carouselRef.current?.scrollTo({ left: 0, behavior: "instant" });
  };

  const scroll = (dir: "left" | "right") => {
    carouselRef.current?.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section id="profesionales" className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28">
      <div className="pro-section-grid pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-landing px-6">

        {/* Header */}
        <ScrollReveal direction="up" className="mb-10">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-3">{copy.kicker}</Kicker>
          <h2 className="font-condensed text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {copy.headline}{" "}
            <span className={accent.text}>{copy.headlineAccent}</span>
          </h2>
          <p className="mt-4 max-w-[48ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">
            {copy.subtext}
          </p>
        </ScrollReveal>

        {/* Tabs — solo para salud */}
        {isSalud && (
          <ScrollReveal direction="up" className="mb-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sub-areas de salud deportiva">
              {groups.map(({ group }) => {
                const isActive = group.id === activeGroupId;
                return (
                  <button
                    key={group.id}
                    role="tab"
                    aria-selected={String(isActive) as "true" | "false"}
                    type="button"
                    onClick={() => handleTabChange(group.id)}
                    className={cn(
                      "rounded-full border px-5 py-2 font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-200",
                      isActive
                        ? cn(accent.border, accent.bgLight, accent.text)
                        : "border-white/[0.18] bg-transparent text-white/50"
                    )}
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 font-sans text-[0.8rem] text-white/35">
              {activeGroup.group.description}
            </p>
          </ScrollReveal>
        )}

        {/* Carrusel del grupo activo */}
        <ScrollReveal direction="up">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-sans text-[0.8rem] text-white/40">
              {activeGroup.pros.length} especialistas
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] font-condensed text-[1.2rem] text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Siguiente"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] font-condensed text-[1.2rem] text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {activeGroup.pros.map((pro) => (
              <div key={pro.id} className="w-[75vw] max-w-[300px] shrink-0 snap-start sm:w-[280px] lg:w-[300px]">
                <ProfessionalCard
                  pro={pro}
                  accentText={accent.text}
                  onClick={() => setSelectedPro(pro)}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {selectedPro !== null && (
        <ProfessionalModal
          pro={selectedPro}
          accentBg={accent.bg}
          accentText={accent.text}
          ctaLabel={copy.ctaLabel}
          ctaHref={copy.ctaHref}
          onClose={() => setSelectedPro(null)}
        />
      )}
    </section>
  );
}
