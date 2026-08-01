"use client";

// sections/bienestar-salud/ProfessionalsConcepts.tsx
// TEMPORAL: 4 conceptos para elegir como mostrar profesionales individuales.
// El objetivo es que el usuario elija CON QUIEN quiere trabajar — es un directorio de personas.

import { useState } from "react";
import Image from "next/image";
import FingerprintSVG from "@/components/FingerprintSVG";
import StickerIcon from "@/components/StickerIcon";
import { SALUD_PROFESSIONALS } from "@/content/bienestar-salud";

const ACCENT = "#5ac8ff";
const pros = SALUD_PROFESSIONALS;

function ConceptLabel({ letter, title, description }: { letter: string; title: string; description: string }) {
  return (
    <div className="mb-10 border-l-2 border-[rgba(90,200,255,0.4)] pl-5">
      <p className="font-condensed text-[0.58rem] font-black uppercase tracking-[3px] text-[#5ac8ff]/60">
        Concepto {letter}
      </p>
      <h3 className="font-condensed text-[1.3rem] font-black uppercase text-white">{title}</h3>
      <p className="mt-1 font-sans text-[0.78rem] text-white/45">{description}</p>
    </div>
  );
}

// ─── A: Roster — lista + foto featured ───────────────────────────────────────
// Elegis una persona de la lista, su foto y datos aparecen a la derecha.

function ConceptA() {
  const [active, setActive] = useState(0);
  const pro = pros[active];

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(7,22,60,0.6)]">
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Lista de personas */}
        <div className="border-b border-white/[0.08] lg:border-b-0 lg:border-r">
          {pros.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-4 border-b border-white/[0.05] px-5 py-4 text-left transition-colors duration-200 last:border-b-0 ${
                i === active ? "bg-[rgba(90,200,255,0.1)]" : "hover:bg-white/[0.03]"
              }`}
            >
              {/* Mini foto */}
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15">
                {p.image ? (
                  <Image src={p.image} alt={p.name ?? p.role} fill className="object-cover saturate-75 opacity-80" />
                ) : (
                  <div className="h-full w-full bg-[rgba(90,200,255,0.15)] flex items-center justify-center" style={{ color: ACCENT }}>
                    <StickerIcon name={p.icon} size="xxs" />
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-condensed text-[0.85rem] font-bold uppercase leading-tight text-white truncate">
                  {p.name ?? p.role}
                </p>
                <p className="mt-0.5 font-condensed text-[0.58rem] text-white/38 truncate">{p.role}</p>
              </div>
              {i === active && <span className="ml-auto shrink-0 text-[#5ac8ff]">→</span>}
            </button>
          ))}
        </div>

        {/* Foto + info del elegido */}
        <div className="relative min-h-[440px]">
          {pro.image && (
            <Image key={pro.id} src={pro.image} alt={pro.name ?? pro.role} fill className="object-cover opacity-75 saturate-75" />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,14,44,0.1)_0%,rgba(4,14,44,0.65)_52%,rgba(4,14,44,0.96)_100%)]" />
          <div className="absolute bottom-0 right-0 top-0 flex w-full flex-col justify-end p-8 lg:w-[58%]">
            <p className="mb-1 font-condensed text-[0.58rem] font-black uppercase tracking-[3px] text-[rgba(90,200,255,0.7)]">
              {pro.role}
            </p>
            <h4 className="font-condensed text-[clamp(1.8rem,3vw,2.6rem)] font-black uppercase leading-[0.92] text-white">
              {pro.name ?? pro.role}
            </h4>
            <p className="mt-3 font-sans text-[0.86rem] leading-[1.7] text-white/58">{pro.valueProp}</p>
            <button
              type="button"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-[rgba(90,200,255,0.35)] bg-[rgba(90,200,255,0.1)] px-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[#5ac8ff] transition-all hover:bg-[rgba(90,200,255,0.2)]"
            >
              Trabajar con {(pro.name ?? pro.role).split(" ")[pro.name ? 1 : 0]} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── B: Grid de perfiles — reveal hover ──────────────────────────────────────
// Cards limpias que al hover revelan la foto. El nombre siempre visible.

function ConceptB() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pros.map((pro) => (
        <div
          key={pro.id}
          className="group relative min-h-[340px] cursor-pointer overflow-hidden rounded-[20px] border border-white/[0.08] bg-[rgba(7,22,60,0.85)]"
        >
          {/* Foto sube desde abajo en hover */}
          {pro.image && (
            <div className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
              <Image src={pro.image} alt={pro.name ?? pro.role} fill className="object-cover opacity-75 saturate-75" />
              <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(4,14,44,0.05)_0%,rgba(4,14,44,0.65)_55%,rgba(4,14,44,0.97)_100%)]" />
            </div>
          )}
          <span
            className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: `linear-gradient(90deg, ${ACCENT} 0%, transparent 100%)` }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full min-h-[340px] flex-col p-6">
            <div style={{ color: ACCENT }}>
              <StickerIcon name={pro.icon} size="sm" className="opacity-55 group-hover:opacity-100 transition-opacity duration-300 [&>svg]:drop-shadow-[0_0_8px_currentColor]" />
            </div>
            <div className="flex-1" />
            <p className="mb-1 font-condensed text-[0.58rem] font-black uppercase tracking-[2.5px]" style={{ color: ACCENT }}>
              {pro.role}
            </p>
            <h4 className="font-condensed text-[1.2rem] font-black uppercase leading-tight text-white">
              {pro.name ?? pro.role}
            </h4>
            <p className="mt-2 font-sans text-[0.76rem] leading-[1.5] text-white/50 group-hover:text-white/70 transition-colors">
              {pro.valueProp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── C: Selector con foto grande ─────────────────────────────────────────────
// Grid de personas a la derecha. La foto del seleccionado domina la izquierda.

function ConceptC() {
  const [active, setActive] = useState(0);
  const pro = pros[active];

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-start">
      {/* Foto grande del profesional activo */}
      <div className="relative min-h-[520px] overflow-hidden rounded-[24px]">
        {pro.image ? (
          <Image key={pro.id} src={pro.image} alt={pro.name ?? pro.role} fill className="object-cover opacity-82 saturate-75 transition-opacity duration-300" />
        ) : (
          <div className="absolute inset-0 bg-[rgba(7,22,60,0.95)]" />
        )}
        <div
          className="pointer-events-none absolute inset-0 [--fps:rgba(90,200,255,0.1)] [--fpg:rgba(90,200,255,0.02)]"
          style={{ opacity: pro.image ? 0.2 : 0.3 }}
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(4,14,44,0.06)_0%,rgba(4,14,44,0.5)_40%,rgba(4,14,44,0.97)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="mb-2 font-condensed text-[0.6rem] font-black uppercase tracking-[3px]" style={{ color: ACCENT }}>
            {pro.role}
          </p>
          <h4 className="font-condensed text-[clamp(2.2rem,4vw,3.2rem)] font-black uppercase leading-[0.9] text-white">
            {pro.name ?? pro.role}
          </h4>
          <p className="mt-3 max-w-[38ch] font-sans text-[0.88rem] leading-[1.7] text-white/58">
            {pro.valueProp}
          </p>
          <button
            type="button"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#5ac8ff] px-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-[#06275f] transition-all hover:brightness-110"
          >
            Conectar →
          </button>
        </div>
      </div>

      {/* Lista de selección */}
      <div className="space-y-2">
        {pros.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            className={`flex w-full items-center gap-3 rounded-[14px] border p-3 text-left transition-all duration-200 ${
              i === active
                ? "border-[rgba(90,200,255,0.45)] bg-[rgba(90,200,255,0.1)]"
                : "border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06]"
            }`}
          >
            {/* Mini avatar */}
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/15">
              {p.image ? (
                <Image src={p.image} alt={p.name ?? p.role} fill className="object-cover saturate-50 opacity-80" />
              ) : (
                <div className="h-full w-full bg-[rgba(90,200,255,0.12)]" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate font-condensed text-[0.78rem] font-bold uppercase text-white leading-tight">
                {p.name ?? p.role}
              </p>
              <p className="truncate font-condensed text-[0.55rem] text-white/36">{p.role}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── D: Tarjeta de perfil limpia ──────────────────────────────────────────────
// Foto de la persona + nombre + especialidad + CTA directo. Simple, directorial.

function ConceptD() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pros.map((pro) => (
        <div
          key={pro.id}
          className="group relative overflow-hidden rounded-[22px] border border-white/[0.09] bg-[rgba(7,22,60,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
        >
          {/* Foto */}
          <div className="relative h-56 overflow-hidden">
            {pro.image ? (
              <Image
                src={pro.image}
                alt={pro.name ?? pro.role}
                fill
                className="object-cover opacity-82 saturate-75 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="h-full w-full bg-[rgba(7,22,60,0.95)] flex items-center justify-center" style={{ color: ACCENT }}>
                <StickerIcon name={pro.icon} size="lg" className="opacity-20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,22,60,1)] to-transparent" />
          </div>

          {/* Info */}
          <div className="px-5 pb-5">
            <p className="mb-1 font-condensed text-[0.58rem] font-black uppercase tracking-[2.5px]" style={{ color: ACCENT }}>
              {pro.role}
            </p>
            <h4 className="font-condensed text-[1.25rem] font-black uppercase leading-tight text-white">
              {pro.name ?? pro.role}
            </h4>
            <p className="mt-2 font-sans text-[0.78rem] leading-[1.55] text-white/50">
              {pro.valueProp}
            </p>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center rounded-[12px] border border-white/12 bg-white/[0.06] py-2.5 font-condensed text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70 transition-all hover:border-[rgba(90,200,255,0.35)] hover:bg-[rgba(90,200,255,0.1)] hover:text-[#5ac8ff]"
            >
              Ver perfil →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Wrapper ──────────────────────────────────────────────────────────────────

export default function ProfessionalsConcepts() {
  const concepts = [
    {
      letter: "A",
      title: "Roster — lista + foto featured",
      description: "Elegis una persona de la lista, su foto aparece a la derecha con un CTA personalizado.",
      Component: ConceptA,
    },
    {
      letter: "B",
      title: "Grid con reveal al hover",
      description: "Ves los nombres siempre. Al hacer hover, la foto de la persona aparece desde abajo.",
      Component: ConceptB,
    },
    {
      letter: "C",
      title: "Selector con foto dominante",
      description: "La foto del profesional seleccionado ocupa todo el panel izquierdo. Lista compacta a la derecha.",
      Component: ConceptC,
    },
    {
      letter: "D",
      title: "Tarjeta de perfil directa",
      description: "Foto + nombre + especialidad + boton. Como un directorio de personas, sin interaccion compleja.",
      Component: ConceptD,
    },
  ];

  return (
    <div className="bg-[var(--bg2)]">
      {concepts.map(({ letter, title, description, Component }, i) => (
        <div
          key={letter}
          className={`mx-auto max-w-landing px-6 py-20 ${i !== concepts.length - 1 ? "border-b border-white/[0.06]" : ""}`}
        >
          <ConceptLabel letter={letter} title={title} description={description} />
          <Component />
        </div>
      ))}
    </div>
  );
}
