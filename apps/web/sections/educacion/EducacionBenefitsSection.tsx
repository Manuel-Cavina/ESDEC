// sections/educacion/EducacionBenefitsSection.tsx
// 5 beneficios editoriales: numero grande + icono + statement, en fila.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { EDUCACION_BENEFITS, type EducacionBenefitItem } from "@/content/educacion";

function BenefitRow({ item, index }: { item: EducacionBenefitItem; index: number }) {
  return (
    <ScrollReveal direction="left" delay={index * 55}>
      <div className="group grid grid-cols-[64px_1fr] items-center gap-6 border-b border-white/[0.08] py-8 transition-colors duration-200 hover:border-white/[0.14] md:grid-cols-[100px_56px_1fr] md:gap-8">
        {/* Numero */}
        <div
          className="select-none self-center text-right font-condensed font-black leading-none tracking-tight text-[var(--t1)] opacity-[0.15]"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
          aria-hidden="true"
        >
          {item.number}
        </div>

        {/* Icono */}
        <div className="hidden self-center md:block">
          <StickerIcon name={item.icon} size="md" />
        </div>

        {/* Contenido */}
        <div className="self-center">
          <h3 className="ecos-title-accent font-condensed text-[1.15rem] font-black uppercase leading-[1.1] tracking-[0.02em]">
            {item.title}
          </h3>
          <p className="mt-2.5 max-w-[58ch] font-sans text-base leading-[1.82] text-[var(--t2)]">
            {item.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function EducacionBenefitsSection() {
  const { eyebrow, headline, headlineAccent, intro, items } = EDUCACION_BENEFITS;

  return (
    <section className="bg-[var(--bg2)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-12 max-w-3xl">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-4">{eyebrow}</Kicker>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline}{" "}
            <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[56ch] font-sans text-base leading-[1.9] text-[var(--t2)]">
            {intro}
          </p>
        </ScrollReveal>

        {/* Filas de beneficios */}
        <div className="border-t border-white/[0.08]">
          {items.map((item, i) => (
            <BenefitRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
