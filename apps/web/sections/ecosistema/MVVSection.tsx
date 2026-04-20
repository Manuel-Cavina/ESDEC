"use client";

// sections/ecosistema/MVVSection.tsx
// Manifiesto tipográfico + acordeón Objetivo / Visión / Misión.

import { useState } from "react";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_MVV } from "@/content/ecosistema";

export default function MVVSection() {
  const { eyebrow, manifestoLines, closing, columns } = ECOSISTEMA_MVV;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-[#050e1a] px-6 py-28">
      <div className="mx-auto max-w-landing">

        {/* Eyebrow */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-14 flex items-center gap-3">
            <BrandLines size="sm" animated className="[&_[data-line]]:bg-[#7de8a8]" />
            <p className="font-condensed text-[10px] font-semibold uppercase tracking-[4px] text-[#7de8a8]">
              {eyebrow}
            </p>
          </div>
        </ScrollReveal>

        {/* Manifiesto — texto display enorme */}
        <ScrollReveal direction="up" delay={80}>
          <div className="mb-16">
            {manifestoLines.map((line, i) => (
              <p
                key={i}
                className="font-condensed text-[clamp(3.4rem,9vw,8rem)] uppercase leading-[0.88] tracking-[-0.04em]"
              >
                {line.accent ? (
                  <span className="bg-[linear-gradient(90deg,#7cc8ff_0%,#6fd4db_45%,#7de8a8_100%)] bg-clip-text text-transparent">
                    {line.text}
                  </span>
                ) : (
                  <span className="text-[#eef4ff]">{line.text}</span>
                )}
              </p>
            ))}

            {/* Frase de cierre */}
            <p className="mt-8 max-w-[52ch] font-sans text-[0.95rem] leading-[1.9] text-[#4a6a84]">
              {closing}
            </p>
          </div>
        </ScrollReveal>

        {/* Separador */}
        <div className="mb-0 h-px bg-white/[0.08]" />

        {/* Acordeón — Objetivo / Visión / Misión */}
        <div>
          {columns.map((col) => {
            const isOpen = openId === col.id;
            return (
              <div key={col.id} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  className="group flex w-full items-center gap-6 py-7 text-left transition-colors duration-200 hover:bg-white/[0.015] md:gap-10"
                  onClick={() => setOpenId(isOpen ? null : col.id)}
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  {/* Número */}
                  <span className="w-10 flex-shrink-0 font-condensed text-[0.75rem] font-semibold uppercase tracking-[2px] text-[#7de8a8] opacity-60">
                    {col.number}
                  </span>

                  {/* Label */}
                  <span className="flex-shrink-0 font-condensed text-[10px] uppercase tracking-[4px] text-[#7de8a8]/60 md:w-24">
                    {col.label}
                  </span>

                  {/* Título */}
                  <span className="flex-1 font-condensed text-[clamp(1.4rem,3vw,2.2rem)] uppercase leading-none tracking-[-0.02em] text-[#c0cdd8] transition-colors duration-200 group-hover:text-[#eef4ff]">
                    {col.headlinePre}{" "}
                    <span className="bg-[linear-gradient(90deg,#7cc8ff,#7de8a8)] bg-clip-text text-transparent">
                      {col.headlineAccent}
                    </span>
                    {col.headlinePost}
                  </span>

                  {/* Icono +/- */}
                  <span
                    className="ml-auto flex-shrink-0 font-light leading-none text-[#5ac8ff] transition-transform duration-300 text-[1.2rem]"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Descripción expandible */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-8 pl-[4rem] font-sans text-[0.9rem] leading-[1.9] text-[#4a6a84] md:pl-[8.5rem]">
                    {col.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
