"use client";

// sections/ProblemSection.tsx
// Diagnostic + process section with a calmer, clearer ESDEC journey.

import { PROBLEM, PROFESSIONAL_PROBLEM } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/ui/StepCard";

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
}

function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <StepCard number={problem.number} title={problem.title} body={problem.description} />
    </ScrollReveal>
  );
}

function JourneyStep({ step, index }: JourneyStepProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <StepCard
        number={String(index + 1).padStart(2, "0")}
        title={step.title}
        body={step.description}
      />
    </ScrollReveal>
  );
}

function JourneySection({ data }: { data: ProblemData }) {
  return (
    <div className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" className="mb-12 max-w-3xl">
          <BrandLines animated className="mb-5" />
          <Kicker className="mb-3">{data.journeyLabel}</Kicker>
          <h2 className="mt-4 font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {data.journeyHeadlinePre}{" "}
            <span className="ecos-title-accent">{data.journeyHeadlineAccent}</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {data.journey.map((step, index) => (
            <JourneyStep
              key={step.step}
              step={step}
              index={index}
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
          <div className="mb-20">
            <ScrollReveal direction="up">
              <Kicker className="mb-4">{data.eyebrow}</Kicker>
              <h2 className="text-clamp-problem mb-8 font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
                {data.headline}{" "}
                <span className="ecos-title-accent">{data.headlineAccent}</span>
              </h2>
              <blockquote className="max-w-lg font-sans text-base leading-[1.9] text-[var(--t2)]">
                {data.quote.replace(/"/g, "")}
              </blockquote>
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
                -
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
