// sections/ecosistema/AppTeaserSection.tsx
// Adelanto de la app en desarrollo — copy de venta + paso a paso real, separado por deportista y profesional.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import SweepButton from "@/components/ui/SweepButton";
import { ECOSISTEMA_APP_TEASER } from "@/content/ecosistema";

export default function AppTeaserSection() {
  const { eyebrow, badge, headline, headlineAccent, body, benefits, journeys, ctaLabel, ctaHref } =
    ECOSISTEMA_APP_TEASER;

  return (
    <section className="bg-[var(--bg)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-landing">
        {/* Copy de venta */}
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
            <BrandLines size="sm" animated centered />
            <Kicker>{eyebrow}</Kicker>
            <span className="rounded-full border border-[rgba(125,232,168,0.4)] bg-[rgba(125,232,168,0.1)] px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#7de8a8]">
              {badge}
            </span>
          </div>

          <h2 className="text-clamp-problem font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline} <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[50ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {body}
          </p>

          {/* Beneficios — checklist */}
          <ul className="mx-auto mt-6 inline-flex flex-col items-start gap-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.6rem] font-black"
                  style={{ backgroundColor: "rgba(125,232,168,0.18)", color: "#7de8a8" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="font-sans text-[0.9rem] text-[var(--t1)]">{benefit}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Paso a paso — deportista / profesional */}
        <ScrollReveal cascade cascadeDelay={100} className="mt-12 grid gap-6 md:grid-cols-2">
          {journeys.map((journey) => (
            <div
              key={journey.id}
              className="rounded-[22px] border border-black/10 bg-[var(--card-bg)] p-7 dark:border-white/12"
            >
              <p
                className="font-condensed text-[0.85rem] font-bold uppercase tracking-[0.06em]"
                style={{ color: journey.accent }}
              >
                {journey.label}
              </p>

              <div className="mt-5 space-y-5">
                {journey.steps.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-condensed text-[0.75rem] font-bold"
                      style={{ backgroundColor: `${journey.accent}1f`, color: journey.accent }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-condensed text-[0.95rem] font-bold uppercase leading-tight tracking-[0.01em] text-[var(--t1)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-sans text-[0.85rem] leading-[1.65] text-[var(--t2)]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal direction="up" delay={140} className="mt-10 text-center">
          <SweepButton label={ctaLabel} href={ctaHref} external size="lg" />
        </ScrollReveal>
      </div>
    </section>
  );
}
