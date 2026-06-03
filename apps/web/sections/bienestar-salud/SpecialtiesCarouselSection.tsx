// sections/bienestar-salud/SpecialtiesCarouselSection.tsx
// Carrusel de especialidades de salud — mismo patron visual que SportsCarouselSection en /deportistas.

import StickerIcon from "@/components/StickerIcon";
import { SALUD_HERO } from "@/content/bienestar-salud";

export default function SpecialtiesCarouselSection() {
  const chips = [...SALUD_HERO.marqueeChips, ...SALUD_HERO.marqueeChips];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[var(--bg2)] py-10">
      {/* Fade mask izquierda */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to right, var(--bg2), transparent)" }}
        aria-hidden="true"
      />
      {/* Fade mask derecha */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to left, var(--bg2), transparent)" }}
        aria-hidden="true"
      />

      {/* Label */}
      <p className="mb-4 text-center font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
        Especialidades de salud deportiva
      </p>

      {/* Strip con pausa en hover */}
      <div className="group flex animate-marquee gap-5 px-4 [animation-play-state:running] hover:[animation-play-state:paused]">
        {chips.map((chip, i) => (
          <span
            key={`${chip.label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--card-bd)] bg-[var(--card-bg)] px-4 py-2 font-condensed text-[0.82rem] font-bold uppercase tracking-widest text-[var(--t2)]"
          >
            <StickerIcon name={chip.icon} size="xxs" />
            {chip.label}
          </span>
        ))}
      </div>
    </section>
  );
}
