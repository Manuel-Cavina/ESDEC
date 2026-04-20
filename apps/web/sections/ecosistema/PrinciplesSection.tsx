// sections/ecosistema/PrinciplesSection.tsx
// "Lo que define a ESDEC" — lista tipográfica grande. Sin cards. Pura tipografía.
// Hover CSS-only: description aparece debajo del item al pasar.

import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_PRINCIPLES } from "@/content/ecosistema";

export default function PrinciplesSection() {
  const { eyebrow, headline, headlineAccent, items } = ECOSISTEMA_PRINCIPLES;

  return (
    <section className="bg-[#07152a] px-6 py-24">
      <div className="mx-auto max-w-landing">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-12 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <BrandLines size="sm" animated className="[&_[data-line]]:bg-[#5ac8ff]" />
                <p className="font-condensed text-[10px] font-semibold uppercase tracking-[4px] text-[#5ac8ff]">
                  {eyebrow}
                </p>
              </div>
              <h2 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] uppercase leading-[0.9] tracking-[-0.02em] text-[#eef4ff]">
                {headline}{" "}
                <span className="bg-[linear-gradient(90deg,#7cc8ff,#7de8a8)] bg-clip-text text-transparent">
                  {headlineAccent}
                </span>
              </h2>
            </div>
            <p className="font-condensed text-[9px] uppercase tracking-[3px] text-[#2a4a60] md:text-right">
              {items.length} principios
            </p>
          </div>
        </ScrollReveal>

        {/* Lista tipográfica */}
        <ScrollReveal cascade cascadeDelay={60}>
          <ul className="divide-y divide-white/[0.06]">
            {items.map((item) => (
              <li key={item.number} className="group cursor-default">
                {/* Fila principal — siempre visible */}
                <div className="flex items-baseline gap-6 py-5 transition-all duration-300 md:gap-10 md:py-6">
                  {/* Número */}
                  <span
                    className="w-8 flex-shrink-0 font-condensed text-[0.75rem] font-semibold uppercase tracking-[2px] transition-colors duration-300 group-hover:opacity-100"
                    style={{ color: item.accent, opacity: 0.5 }}
                  >
                    {item.number}
                  </span>

                  {/* Título */}
                  <span className="flex-1 font-condensed text-[clamp(1.6rem,3.8vw,3rem)] uppercase leading-none tracking-[-0.03em] text-[#c0cdd8] transition-all duration-300 group-hover:text-[#eef4ff]">
                    {item.title}
                  </span>

                  {/* Flecha */}
                  <span
                    className="flex-shrink-0 font-condensed text-[1rem] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: item.accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                {/* Descripción — expande en hover */}
                <div className="overflow-hidden transition-all duration-400 ease-out [max-height:0] group-hover:[max-height:80px]">
                  <p className="pb-5 pl-[3.5rem] font-sans text-[0.85rem] leading-[1.75] text-[#4a6a84] md:pl-[5.5rem]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
