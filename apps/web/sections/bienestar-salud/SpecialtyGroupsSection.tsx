"use client";

// sections/bienestar-salud/SpecialtyGroupsSection.tsx
// Replacement for ProfessionalsSection — shows specialty groups as text cards, no photos.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";
import { SALUD_PROFESSIONAL_GROUPS, SALUD_PROFESSIONALS } from "@/content/bienestar-salud";

export default function SpecialtyGroupsSection() {
  return (
    <section className="bg-[var(--bg2)] py-20 md:py-28">
      <div className="mx-auto max-w-landing px-6">

        <ScrollReveal direction="up">
          <div className="mb-4 flex items-center gap-3">
            <BrandLines size="md" animated />
            <Kicker>Equipo interdisciplinario</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase leading-[0.82] tracking-tight text-white">
            TRES ÁREAS.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #5ac8ff 0%, #0cd25e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              UN EQUIPO.
            </span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-[1rem] leading-[1.85] text-white/70">
            Cada área trabaja de forma integrada. No son servicios aislados — son partes del mismo sistema de cuidado.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SALUD_PROFESSIONAL_GROUPS.map((group, i) => {
            const roles = SALUD_PROFESSIONALS.filter((p) =>
              group.professionalIds.includes(p.id)
            ).map((p) => p.role);

            return (
              <ScrollReveal key={group.id} direction="up" delay={i * 80}>
                <StepCard
                  number={String(i + 1).padStart(2, "0")}
                  title={group.label}
                  body={group.description}
                  className="h-full"
                >
                  {roles.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {roles.map((role) => (
                        <li
                          key={role}
                          className="flex items-start gap-2 font-sans text-[0.82rem] text-[var(--t2)]"
                        >
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[var(--p1)]" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  )}
                </StepCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
