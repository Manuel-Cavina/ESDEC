"use client";

// sections/ProblemSection.tsx
// Diagnostic + process section with a calmer, clearer ESDEC journey.

import { PROBLEM, PROFESSIONAL_PROBLEM } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type ProblemData = typeof PROBLEM | typeof PROFESSIONAL_PROBLEM;

interface ProblemSectionProps {
  audience?: Audience;
}

interface ProblemCardProps {
  problem: ProblemData["problems"][number];
  index: number;
}

interface JourneyStepProps {
  step: ProblemData["journey"][number];
  index: number;
  prefix: string;
}

function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <article className="group relative overflow-hidden border-t-2 border-[var(--p1)]/20 py-10 transition-colors duration-300 hover:border-[var(--p1)]/70">
        <div
          className={cn(
            "pointer-events-none absolute -bottom-10 -right-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            "[--fps:rgba(90,200,255,0.18)] dark:[--fps:rgba(5,128,211,0.18)]",
            "[--fpg:rgba(90,200,255,0.04)]"
          )}
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-36" />
        </div>

        <span
          className="mb-2 block select-none font-condensed text-[var(--p1)]/18 transition-colors duration-300 group-hover:text-[var(--p1)]/30"
          style={{ fontSize: "clamp(72px, 9vw, 108px)", lineHeight: "1" }}
          aria-hidden="true"
        >
          {problem.number}
        </span>
        <div className="mb-5 h-[2px] w-6 bg-[var(--p1)]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--p1)]" />
        <h3 className="font-condensed text-[clamp(20px,2.4vw,34px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
          {problem.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-[1.8] text-[var(--t2)]">
          {problem.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

function JourneyStep({ step, index, prefix }: JourneyStepProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <article className="spec-card-accent relative h-full overflow-hidden rounded-[24px] border border-[var(--card-bd)] bg-[var(--card-bg)] p-6">
        <span className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
          {prefix} {step.step}
        </span>
        <h3 className="mt-3 font-condensed text-[24px] font-black uppercase leading-[0.95] tracking-tight text-[var(--t1)]">
          {step.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-[1.8] text-[var(--t2)]">
          {step.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

function JourneySection({ data }: { data: ProblemData }) {
  return (
    <div className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" className="mb-12 max-w-3xl">
          <BrandLines animated className="mb-5" />
          <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
            {data.journeyLabel}
          </p>
          <h2 className="text-clamp-journey mt-4 font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {data.journeyHeadlinePre}{" "}
            <span className="text-[var(--p1)]">{data.journeyHeadlineAccent}</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {data.journey.map((step, index) => (
            <JourneyStep
              key={step.step}
              step={step}
              index={index}
              prefix={data.journeyStepPrefix}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={120}>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl font-sans text-sm leading-[1.85] text-[var(--t2)]">
              {data.journeySupport}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function ProblemSection({
  audience = "deportista",
}: ProblemSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_PROBLEM : PROBLEM;

  return (
    <section id="problem" className="overflow-hidden">
      <div className="bg-[var(--bg2)] pb-24 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-landing px-6">
          <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal direction="up">
              <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                {data.eyebrow}
              </p>
              <h2 className="text-clamp-problem mb-8 font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
                {data.headline}{" "}
                <span className="text-[var(--p1)]">{data.headlineAccent}</span>
              </h2>
              <blockquote className="max-w-lg font-sans text-base leading-[1.9] text-[var(--t2)]">
                {data.quote.replace(/"/g, "")}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div
                className={cn(
                  "relative flex h-[280px] items-center justify-center overflow-hidden lg:h-[360px]",
                  "[--fps:rgba(90,200,255,0.14)] dark:[--fps:rgba(5,128,211,0.14)]",
                  "[--fpg:rgba(90,200,255,0.04)]"
                )}
                aria-hidden="true"
              >
                <FingerprintSVG
                  animate={false}
                  className="w-[82%] max-w-[360px]"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {data.problems.map((problem, index) => (
              <ProblemCard
                key={problem.number}
                problem={problem}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[var(--bg)] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(90,200,255,0.1)] [--fpg:rgba(90,200,255,0.03)]">
          <FingerprintSVG
            animate={false}
            className="w-[54vw] max-w-[500px] opacity-70"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-landing px-6 text-center">
          <ScrollReveal direction="up">
            <BrandLines animated centered className="mx-auto mb-8" />
            <div className="text-clamp-pivot font-condensed font-black uppercase leading-[0.88] tracking-tight">
              <span className="block text-[var(--t1)]">{data.pivotPre}</span>
              <span className="block text-[var(--p1)]">{data.pivotAccent1}</span>
              <span className="mt-2 block text-[0.55em] font-bold tracking-normal text-[var(--t2)]">
                Â·
              </span>
              <span className="block text-[var(--t1)]">{data.pivotConnector}</span>
              <span className="block text-[var(--p2)]">{data.pivotAccent2}</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <JourneySection data={data} />
    </section>
  );
}
