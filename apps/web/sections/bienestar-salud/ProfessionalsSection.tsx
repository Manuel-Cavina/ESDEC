"use client";

// sections/bienestar-salud/ProfessionalsSection.tsx
// Cards de profesionales con foto estilo eventos + modal editorial (sin estetica de redes sociales).

import { useEffect, useState } from "react";
import Image from "next/image";
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
    subtext:
      "Cada especialista tiene un rol preciso dentro de tu proceso. Hace click para conocer en detalle lo que hace y cuando lo necesitas.",
    accent: "#5ac8ff",
    areaBadge: "Salud deportiva",
    ctaLabel: "Entrar al ecosistema",
    ctaHref: "/deportistas",
  },
  bienestar: {
    kicker: "Especialistas del ecosistema",
    headline: "LOS PROFESIONALES",
    headlineAccent: "QUE TE SOSTIENEN.",
    subtext:
      "Cada especialista tiene un rol preciso dentro de tu proceso. Hace click para conocer en detalle lo que hace y cuando lo necesitas.",
    accent: "#7de8a8",
    areaBadge: "Bienestar deportivo",
    ctaLabel: "Entrar al ecosistema",
    ctaHref: "/deportistas",
  },
} as const;

// ─── Modal editorial ──────────────────────────────────────────────────────────

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
          {/* Panel visual izquierdo */}
          <div
            className="relative flex min-h-[260px] items-end overflow-hidden lg:min-h-[580px]"
            style={{
              background: "linear-gradient(145deg, rgba(4,14,44,0.98) 0%, rgba(7,28,74,0.96) 55%, rgba(5,20,56,0.99) 100%)",
            }}
          >
            {/* Foto si existe */}
            {pro.image && (
              <Image
                src={pro.image}
                alt={pro.role}
                fill
                quality={92}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover object-top opacity-80 saturate-75"
              />
            )}

            {/* Placeholder sin foto */}
            {!pro.image && (
              <>
                <div
                  className="pointer-events-none absolute inset-0 [--fps:rgba(90,200,255,0.18)] [--fpg:rgba(90,200,255,0.03)]"
                  style={{ opacity: 0.12 }}
                  aria-hidden="true"
                >
                  <FingerprintSVG animate={false} className="h-full w-full object-cover" />
                </div>
                <div
                  className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
                  style={{ color: pro.accent }}
                  aria-hidden="true"
                >
                  <StickerIcon
                    name={pro.icon}
                    size="lg"
                    className="opacity-20 [&>svg]:drop-shadow-[0_0_20px_currentColor]"
                  />
                </div>
              </>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(0,10,24,0.08)_0%,rgba(0,10,24,0.55)_40%,rgba(4,14,44,0.97)_100%)]" />

            {/* Nombre + area al pie */}
            <div className="relative z-10 w-full px-7 pb-7 pt-10">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: pro.accent }}
                  aria-hidden="true"
                />
                <span
                  className="font-condensed text-[0.62rem] font-black uppercase tracking-[3px]"
                  style={{ color: pro.accent }}
                >
                  {copy.areaBadge} · ESDEC
                </span>
              </div>
              <h3 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-black uppercase leading-[0.9] text-white">
                {pro.role}
              </h3>
            </div>
          </div>

          {/* Panel de informacion — editorial, no redes sociales */}
          <div className="flex flex-col bg-[#14181f]">
            {/* Header limpio */}
            <div className="border-b border-white/[0.08] px-6 py-5">
              <p
                className="font-condensed text-[0.68rem] font-black uppercase tracking-[2.5px]"
                style={{ color: pro.accent }}
              >
                {pro.tagline}
              </p>
              <p className="mt-2 font-sans text-[0.85rem] font-medium leading-[1.55] text-white/60">
                {pro.valueProp}
              </p>
            </div>

            {/* Contenido */}
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {/* Lo que hace */}
              <div
                className="rounded-[14px] border p-4"
                style={{ borderColor: `${pro.accent}25`, background: `${pro.accent}07` }}
              >
                <p
                  className="mb-3 font-condensed text-[8px] font-black uppercase tracking-[3px]"
                  style={{ color: pro.accent }}
                >
                  Lo que hace
                </p>
                <ul className="space-y-2">
                  {pro.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 font-sans text-[0.83rem] leading-[1.6] text-white/78"
                    >
                      <span
                        className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: pro.accent }}
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cuando lo necesitas */}
              <div className="rounded-[14px] border border-white/[0.07] bg-white/[0.04] p-4">
                <p className="mb-3 font-condensed text-[8px] font-black uppercase tracking-[3px] text-white/38">
                  Cuando lo necesitas
                </p>
                <ul className="space-y-2">
                  {pro.whenYouNeedThem.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 font-sans text-[0.83rem] leading-[1.6] text-white/70"
                    >
                      <span
                        className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/28"
                        aria-hidden="true"
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-white/[0.08] p-5">
              <Link
                href={copy.ctaHref}
                className="flex min-h-[52px] w-full items-center justify-center rounded-[18px] font-condensed text-[0.8rem] font-black uppercase tracking-[0.22em] no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                style={{
                  background: pro.accent,
                  color: area === "salud" ? "#06275f" : "#04213d",
                }}
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

// ─── Card estilo eventos — foto o placeholder editorial ───────────────────────

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
      className="group relative min-h-[300px] w-full overflow-hidden rounded-[22px] bg-[var(--bg)] text-left shadow-[0_16px_48px_-24px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2"
      style={{ "--ring-color": accent } as React.CSSProperties}
    >
      {/* Foto real si existe */}
      {pro.image && (
        <Image
          src={pro.image}
          alt={pro.role}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top opacity-80 saturate-75 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}

      {/* Placeholder cuando no hay foto */}
      {!pro.image && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(145deg, rgba(4,14,44,0.98) 0%, rgba(7,28,74,0.95) 55%, rgba(5,20,56,0.98) 100%)",
          }}
        >
          <div
            className="absolute inset-0 [--fps:rgba(255,255,255,0.4)] [--fpg:rgba(255,255,255,0.01)]"
            style={{ opacity: 0.07 }}
            aria-hidden="true"
          >
            <FingerprintSVG animate={false} className="h-full w-full object-cover" />
          </div>
          {/* Icono grande muy sutil */}
          <div
            className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
            style={{ color: accent }}
            aria-hidden="true"
          >
            <StickerIcon
              name={pro.icon}
              size="lg"
              className="opacity-[0.18] [&>svg]:drop-shadow-[0_0_16px_currentColor]"
            />
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(0,10,24,0.08)_0%,rgba(0,10,24,0.6)_45%,rgba(0,10,24,0.97)_100%)]" />

      {/* Linea de acento top — aparece en hover */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${accent} 0%, rgba(255,255,255,0.08) 100%)` }}
        aria-hidden="true"
      />

      {/* Contenido en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="mb-1.5 font-condensed text-[0.58rem] font-black uppercase tracking-[2.5px]"
          style={{ color: accent }}
        >
          {pro.tagline}
        </p>
        <h3 className="font-condensed text-[1.1rem] font-bold uppercase leading-tight text-white">
          {pro.role}
        </h3>
        <p className="mt-1.5 font-sans text-[0.76rem] leading-[1.5] text-white/52">
          {pro.valueProp}
        </p>
      </div>
    </button>
  );
}

// ─── Seccion principal ────────────────────────────────────────────────────────

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
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-14">
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

        {/* Salud: agrupado por rubro */}
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
                        className="font-condensed text-[0.7rem] font-black uppercase tracking-[3px]"
                        style={{ color: copy.accent }}
                      >
                        {group.label}
                      </p>
                      <p className="mt-0.5 font-sans text-[0.7rem] text-white/36">
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
          /* Bienestar: grid plano */
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
