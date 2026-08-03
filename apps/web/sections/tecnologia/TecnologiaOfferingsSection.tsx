// sections/tecnologia/TecnologiaOfferingsSection.tsx
// 4 funciones concretas de la tecnologia ESDEC.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import { TECNOLOGIA_OFFERINGS } from "@/content/tecnologia";

export default function TecnologiaOfferingsSection() {
  const { eyebrow, headline, headlineAccent, intro, features } = TECNOLOGIA_OFFERINGS;

  return (
    <section className="bg-[var(--bg)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="text-[var(--t1)]">{headline}</span>{" "}
            <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[56ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {intro}
          </p>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={80} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <IconFeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              body={feature.description}
              size="md"
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
