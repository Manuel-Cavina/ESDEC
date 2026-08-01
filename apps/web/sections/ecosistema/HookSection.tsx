// sections/ecosistema/HookSection.tsx
// Puente entre el Hero y los pilares — statement grande que se revela palabra por palabra al llegar al scroll.

import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_HOOK } from "@/content/ecosistema";

export default function HookSection() {
  const { roles, punch } = ECOSISTEMA_HOOK;
  const words = punch.trim().split(/\s+/);

  return (
    <section className="relative overflow-hidden bg-[var(--bg2)] px-6 py-20 md:py-24">
      {/* Textura de fondo — grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-landing text-center">
        <ScrollReveal direction="up">
          <div className="mb-7 flex items-center justify-center gap-3">
            <BrandLines size="sm" animated centered />
          </div>

          <p className="mx-auto max-w-[52ch] font-condensed text-[clamp(0.9rem,2vw,1.15rem)] font-bold uppercase tracking-[0.12em] text-[var(--t2)]">
            {roles.map((role) => role.label).join("  ·  ")}
          </p>
        </ScrollReveal>

        {/* Palabra por palabra, se revela al entrar al viewport (no al montar la pagina) */}
        <ScrollReveal
          cascade
          cascadeDelay={100}
          className="text-clamp-problem ecos-title-accent mx-auto mt-5 flex max-w-[22ch] flex-wrap justify-center gap-x-[0.32em] font-condensed font-black uppercase leading-[0.9] tracking-tight"
        >
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>{word}</span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
