"use client";

// sections/events/EventsLandingPage.tsx
// Narrative landing page for the ESDEC events experience.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import EventsIntro, { EVENTS_INTRO_KEY } from "./EventsIntro";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import SharedCTASection from "@/components/SharedCTASection";
import { EVENTS_PAGE, type EventsCta, type PastEvent } from "@/content/eventos";
import { trackCTAClick, trackScrollDepth, trackSectionView } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface EventButtonProps {
  cta: EventsCta;
  className?: string;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}


function EventButton({ cta, className }: EventButtonProps) {
  const baseClass = cn(
    "group inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-full px-7 py-4 font-condensed text-[0.78rem] font-black uppercase leading-none tracking-[0.22em] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--p1)]",
    cta.variant === "primary"
      ? "bg-[var(--p1)] text-[#06275f] shadow-[0_22px_54px_-26px_rgba(90,200,255,0.9)]"
      : "bg-[var(--p2)] text-[#05213d] shadow-[0_22px_54px_-26px_rgba(125,232,168,0.82)] hover:brightness-110",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{cta.label}</span>
      <span
        className="ml-3 h-px w-7 origin-left bg-current transition-transform duration-300 group-hover:scale-x-125"
        aria-hidden="true"
      />
    </>
  );

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTAClick(cta.trackingLabel)}
        className={baseClass}
      >
        {content}
      </a>
    );
  }

  if (cta.href.startsWith("#")) {
    return (
      <a
        href={cta.href}
        onClick={() => trackCTAClick(cta.trackingLabel)}
        className={baseClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} onClick={() => trackCTAClick(cta.trackingLabel)} className={baseClass}>
      {content}
    </Link>
  );
}

function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <ScrollReveal
      direction="up"
      className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}
    >
      <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
        <BrandLines size="sm" animated />
        <Kicker>{eyebrow}</Kicker>
      </div>
      <h2 className="font-condensed text-[clamp(2.75rem,6.4vw,6.2rem)] font-black uppercase leading-[0.82] tracking-tight text-[var(--t1)]">
        {title}
      </h2>
    </ScrollReveal>
  );
}

function useEventsAnalytics() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-event-section]"));
    const seen = new Set<string>();
    const firedDepth = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionId = (entry.target as HTMLElement).dataset.eventSection;
          if (!sectionId || seen.has(sectionId)) return;
          seen.add(sectionId);
          trackSectionView(sectionId);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.round((window.scrollY / maxScroll) * 100);
      thresholds.forEach((threshold) => {
        if (progress >= threshold && !firedDepth.has(threshold)) {
          firedDepth.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

function HeroSection() {
  const { hero } = EVENTS_PAGE;

  return (
    <section
      data-event-section="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-center opacity-55 saturate-[0.85] contrast-110"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,10,24,0.92)_0%,rgba(0,26,51,0.78)_44%,rgba(0,26,51,0.42)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-28 hidden w-[42vw] max-w-[560px] opacity-25 [--fpg:rgba(90,200,255,0.06)] [--fps:rgba(90,200,255,0.45)] lg:block"
        aria-hidden="true"
      >
        <FingerprintSVG animate className="w-full animate-fp-float" strokeOpacity={0.52} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-end px-6 pb-0 pt-32 md:pt-40">
        <div className="grid gap-10 pb-12 lg:pb-16">
          <div>
            <ScrollReveal direction="up">
              <div className="mb-6 flex items-center gap-3">
                <BrandLines size="md" animated />
                <p className="font-condensed text-[11px] font-black uppercase tracking-[0.44em] text-[var(--p1)]">
                  {hero.eyebrow}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h1 className="max-w-[12ch] font-condensed text-[clamp(4.4rem,10.5vw,9.8rem)] font-black uppercase leading-[0.75] tracking-tight text-white">
                <span className="block">{hero.headlineLine1}</span>
                <span className="ecos-title-accent block">{hero.headlineLine2}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-7 max-w-[55ch] font-sans text-[1rem] font-medium leading-[1.9] text-white/82 md:text-[1.08rem]">
                {hero.body}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                {hero.ctas.map((cta) => (
                  <EventButton key={cta.trackingLabel} cta={cta} className="sm:min-w-[230px]" />
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        <div className="relative -mx-6 border-t border-white/12 bg-[#001f3f]/55 px-6 py-7 backdrop-blur-[3px] md:mx-0 md:bg-transparent md:px-0">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {hero.words.map((word) => (
              <div key={word.label}>
                <p className="font-condensed text-[12px] font-black uppercase tracking-[0.36em] text-[var(--p1)]">
                  {word.label}
                </p>
                <p className="mt-6 max-w-[17ch] font-condensed text-[clamp(1.18rem,1.8vw,1.42rem)] font-bold uppercase leading-[1.08] tracking-[0.01em] text-white">
                  {word.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TransitionSection() {
  const { transition } = EVENTS_PAGE;

  return (
    <section
      data-event-section="transition"
      className="relative overflow-hidden bg-[#3269c7] px-6 py-18 md:py-24 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)] [--card-bg:rgba(255,255,255,0.08)] [--card-bg2:rgba(255,255,255,0.12)] [--card-bd:rgba(255,255,255,0.18)]"
    >
      <div className="mx-auto max-w-landing">
        <SectionHeading eyebrow={transition.eyebrow} title={transition.title} />

        <ScrollReveal
          cascade
          cascadeDelay={100}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {transition.steps.map((step) => (
            <article
              key={step.id}
              className="group spec-card-accent relative min-h-[220px] overflow-hidden rounded-[24px] border border-[var(--card-bd)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/60 hover:bg-[var(--card-bg2)]"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="mb-3 flex items-center gap-3">
                <BrandLines size="sm" />
                <Kicker>{step.label}</Kicker>
              </div>
              <h3 className="font-condensed text-[1.5rem] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-[var(--t1)]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[34ch] font-sans text-[0.92rem] leading-[1.8] text-[var(--t2)]">
                {step.body}
              </p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

function NextEventModal({ onClose }: { onClose: () => void }) {
  const { nextEvent } = EVENTS_PAGE;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[8px]"
      role="dialog"
      aria-modal="true"
      aria-label={nextEvent.name}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[980px] overflow-hidden rounded-[26px] shadow-[0_28px_90px_-38px_rgba(0,0,0,0.9)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 font-condensed text-[14px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/14"
        >
          ✕
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.15fr)_380px]">
          <div className="relative min-h-[280px] lg:min-h-[580px]">
            <Image
              src={nextEvent.modalImage ?? nextEvent.image}
              alt={nextEvent.imageAlt}
              fill
              quality={94}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col bg-[#1b1e24]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5ac8ff,#7de8a8)] font-condensed text-[0.72rem] font-black text-[#06275f]">
                  ES
                </div>
                <div>
                  <p className="font-sans text-[0.88rem] font-bold text-white">
                    esdec.ar
                    <span className="ml-2 font-medium text-[#5ac8ff]">Seguir</span>
                  </p>
                  <p className="font-sans text-[0.74rem] text-white/45">
                    {nextEvent.venue} · {nextEvent.city}
                  </p>
                </div>
              </div>
              <span className="font-sans text-[1.1rem] font-bold text-white">···</span>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <p className="font-sans text-[0.88rem] leading-[1.7] text-white/80">
                <span className="font-bold text-white">esdec.ar </span>
                {nextEvent.about ?? nextEvent.summary}
              </p>

              <div className="divide-y divide-white/[0.07]">
                {[
                  { label: "Fecha", value: nextEvent.dateLabel },
                  { label: "Lugar", value: `${nextEvent.venue}, ${nextEvent.city}` },
                  { label: "Recepcion", value: nextEvent.receptionTime },
                  { label: "Inicio", value: nextEvent.startTime },
                ].map((item) => (
                  <div key={item.label} className="py-3">
                    <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-white/36">
                      {item.label}
                    </p>
                    <p className="mt-1 font-condensed text-[0.96rem] font-semibold uppercase leading-none text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {nextEvent.highlights && nextEvent.highlights.length > 0 && (
                <div className="border-t border-white/[0.07] pt-4">
                  <p className="mb-3 font-condensed text-[8px] font-black uppercase tracking-[3px] text-white/36">
                    Que incluye
                  </p>
                  <ul className="space-y-2">
                    {nextEvent.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-sans text-[0.84rem] leading-[1.55] text-white/76">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5ac8ff]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nextEvent.benefit && (
                <div className="rounded-[14px] border border-[#7de8a8]/25 bg-[#7de8a8]/[0.06] p-4">
                  <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#7de8a8]">
                    Beneficio exclusivo
                  </p>
                  <p className="mt-2 font-sans text-[0.84rem] leading-[1.55] text-white/76">
                    {nextEvent.benefit}
                  </p>
                </div>
              )}

              {nextEvent.spotsWarning && (
                <div className="rounded-[14px] border border-[#5ac8ff]/20 bg-[#5ac8ff]/[0.05] p-4">
                  <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#5ac8ff]">
                    Importante
                  </p>
                  <p className="mt-2 font-sans text-[0.84rem] leading-[1.55] text-white/76">
                    {nextEvent.spotsWarning}
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-5">
              <a
                href={nextEvent.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick(nextEvent.cta.trackingLabel)}
                className="btn-shimmer flex min-h-[52px] w-full items-center justify-center rounded-[18px] bg-[#5ac8ff] font-condensed text-[0.8rem] font-black uppercase tracking-[0.22em] text-[#06275f] no-underline shadow-[0_18px_46px_-24px_rgba(90,200,255,0.9)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 hover:no-underline"
              >
                {nextEvent.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextEventSection() {
  const { nextEvent } = EVENTS_PAGE;
  const [modalOpen, setModalOpen] = useState(false);
  const hasUpcomingEvent = new Date(nextEvent.startsAt).getTime() > Date.now();

  if (!hasUpcomingEvent) {
    const { waitlist } = nextEvent;

    return (
      <section
        id="proximo-evento"
        data-event-section="next-event"
        className="relative isolate scroll-mt-36 overflow-hidden bg-[#01305c] px-6 py-20 md:py-28"
      >
        <Image
          src={nextEvent.image}
          alt=""
          fill
          quality={82}
          sizes="100vw"
          className="object-cover object-center opacity-[0.08] saturate-50"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,48,92,0.98)_0%,rgba(1,48,92,0.94)_48%,rgba(0,26,51,0.98)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-120px] top-1/2 hidden -translate-y-1/2 opacity-[0.12] [--fpg:rgba(90,200,255,0.03)] [--fps:rgba(90,200,255,0.9)] lg:block"
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-[520px] animate-heartbeat" />
        </div>

        <div className="relative z-10 mx-auto max-w-landing">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-[860px] text-center">
              <div className="flex items-center justify-center gap-3">
                <BrandLines size="sm" animated />
                <p className="font-condensed text-[10px] font-black uppercase tracking-[0.42em] text-[#7de8a8]">
                  {waitlist.eyebrow}
                </p>
              </div>

              <h2 className="mx-auto mt-5 max-w-[11ch] font-condensed text-[clamp(3rem,7vw,6.4rem)] font-black uppercase leading-[0.82] tracking-tight text-white">
                {waitlist.title}
              </h2>

              <p className="mx-auto mt-6 max-w-[44ch] font-sans text-[1.05rem] font-medium leading-[1.85] text-white/70">
                {waitlist.body}
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waitlist.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick(waitlist.cta.trackingLabel)}
                  className="inline-flex min-h-[58px] items-center justify-center rounded-[20px] bg-[#0cd25e] px-8 py-4 font-condensed text-[0.84rem] font-black uppercase tracking-[0.22em] text-[#001a33] no-underline shadow-[0_22px_54px_-28px_rgba(12,210,94,0.95)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:no-underline"
                >
                  {waitlist.cta.label} {"\u2192"}
                </a>
                <a
                  href={waitlist.secondaryCta.href}
                  onClick={() => trackCTAClick(waitlist.secondaryCta.trackingLabel)}
                  className="inline-flex min-h-[58px] items-center justify-center rounded-[20px] border border-white/16 bg-white/[0.05] px-8 py-4 font-condensed text-[0.82rem] font-black uppercase tracking-[0.2em] text-white no-underline transition-all duration-300 hover:border-[#5ac8ff]/55 hover:bg-white/[0.09] hover:no-underline"
                >
                  {waitlist.secondaryCta.label}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section
      id="proximo-evento"
      data-event-section="next-event"
      className="relative scroll-mt-36 overflow-hidden bg-[var(--bg)]"
    >
      <ScrollReveal direction="up">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="group relative block min-h-[460px] w-full cursor-pointer text-left lg:min-h-[560px]"
          aria-label={`Ver detalle de ${nextEvent.name}`}
        >
          <Image
            src={nextEvent.image}
            alt={nextEvent.imageAlt}
            fill
            quality={94}
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(0,10,24,0.94)_0%,rgba(0,18,48,0.72)_40%,rgba(0,18,48,0.16)_68%,rgba(0,10,24,0.42)_100%)]"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-landing px-6 lg:px-16">
              <div className="flex items-center gap-3">
                <BrandLines size="sm" animated />
                <p className="font-condensed text-[10px] font-black uppercase tracking-[0.42em] text-[var(--p1)]">
                  {nextEvent.eyebrow}
                </p>
              </div>
              <h2 className="mt-5 max-w-[14ch] font-condensed text-[clamp(3rem,6.5vw,6rem)] font-black uppercase leading-[0.8] tracking-tight text-white">
                {nextEvent.name}
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-condensed text-[0.88rem] font-black uppercase tracking-[0.16em] text-white/70">
                <span>{nextEvent.dateDay} de {nextEvent.dateMonth}</span>
                <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />
                <span>{nextEvent.receptionTime}</span>
                <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />
                <span>{nextEvent.venue}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/42 px-5 py-2.5 font-condensed text-[0.72rem] font-black uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            Ver experiencia →
          </div>
        </button>
      </ScrollReveal>

      {modalOpen && <NextEventModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

function ExperienceSection() {
  const { experience } = EVENTS_PAGE;

  const stepClasses = [
    "[--ph:#5ac8ff]",
    "[--ph:#7de8a8]",
    "[--ph:#ffffff]",
  ] as const;

  return (
    <section
      id="experiencia"
      data-event-section="experience"
      className="relative isolate scroll-mt-36 overflow-hidden bg-[#2f68c8] px-6 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-190px] right-[-120px] opacity-[0.1] [--fpg:rgba(255,255,255,0.03)] [--fps:rgba(255,255,255,0.9)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[520px] animate-heartbeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-landing">
        <ScrollReveal direction="up">
          <div className="mb-4 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <p className="font-condensed text-[10px] font-black uppercase tracking-[5px] text-[#7de8a8]">
              {experience.eyebrow}
            </p>
          </div>
          <h2 className="max-w-[860px] font-condensed text-[clamp(2.8rem,5.7vw,5.4rem)] font-black uppercase leading-[0.84] text-white">
            {experience.title}
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          <ScrollReveal
            cascade
            cascadeDelay={120}
            className="grid gap-10 md:grid-cols-3 md:gap-8"
          >
            {experience.phases.map((phase, index) => (
              <article
                key={phase.id}
                className={cn(
                  "group relative min-h-[300px] overflow-hidden border-t border-white/82 pt-9 transition-transform duration-300 hover:-translate-y-1",
                  stepClasses[index]
                )}
              >
                <span className="relative z-10 block font-sans text-[clamp(5.8rem,9vw,7.8rem)] font-light leading-[0.78] tracking-tight text-white">
                  0{index + 1}
                </span>

                <div className="relative z-10 mt-5">
                  <div
                    className="mb-5 h-[3px] w-12 rounded-full bg-[var(--ph)] transition-all duration-300 group-hover:w-20"
                    aria-hidden="true"
                  />
                  <h3 className="font-condensed text-[clamp(2rem,3vw,2.8rem)] font-black uppercase leading-[0.9] text-white">
                    {phase.title}
                  </h3>

                  <p className="mt-4 max-w-[22ch] font-sans text-[0.98rem] font-medium leading-[1.65] text-white/78">
                    {phase.body}
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute bottom-[-26px] right-[-8px] opacity-0 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:opacity-100 [--fpg:rgba(255,255,255,0.02)] [--fps:rgba(255,255,255,0.32)]"
                  aria-hidden="true"
                >
                  <FingerprintSVG animate={false} className="w-[170px]" />
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
function PastEventsSection() {
  const { pastEvents } = EVENTS_PAGE;
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const carouselEvents = [...pastEvents.items, ...pastEvents.items];

  return (
    <section
      id="eventos-anteriores"
      data-event-section="past-events"
      className="relative scroll-mt-36 overflow-hidden bg-[var(--bg)] px-6 py-18 md:py-24"
    >
      <div className="mx-auto max-w-landing">
        <SectionHeading eyebrow={pastEvents.eyebrow} title={pastEvents.title} />

        <ScrollReveal direction="up" className="mt-12">
          <div className="-mx-6 overflow-hidden px-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
              {carouselEvents.map((event, index) => (
            <button
              type="button"
              onClick={() => setSelectedEvent(event)}
              key={`${event.id}-${index}`}
              className="group relative flex min-h-[520px] w-[min(82vw,386px)] shrink-0 flex-col overflow-hidden rounded-[28px] bg-[var(--bg2)] text-left shadow-[0_16px_48px_-24px_rgba(0,0,0,0.6)] outline-none transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:outline-none focus-visible:ring-0"
              aria-label={`Ver detalle de ${event.name}`}
            >
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-center opacity-80 saturate-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(0,10,24,0.22)_0%,rgba(0,10,24,0.68)_42%,rgba(0,10,24,0.97)_100%)]" />

              <div className="relative z-10 flex flex-1 flex-col p-6">
                <h3 className="font-sans text-[1.6rem] font-bold leading-[1.05] text-white">
                  {event.name}
                </h3>

                <div className="flex-1" />

                <div className="mt-6">
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-white/78">
                    {event.summary}
                  </p>
                  <p className="mt-5 font-condensed text-[0.65rem] font-black uppercase tracking-[2.5px] text-white/55">
                    {event.tag} · {event.date}
                  </p>
                      <span className="mt-5 block w-full rounded-full bg-white py-3.5 text-center font-sans text-[0.88rem] font-semibold text-[#001a33] transition-colors group-hover:bg-white/88">
                        {event.ctaLabel}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {selectedEvent && (
        <PastEventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}

function PastEventModal({
  event,
  onClose,
}: {
  event: PastEvent;
  onClose: () => void;
}) {
  const { modalLabels } = EVENTS_PAGE.pastEvents;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[8px]"
      role="dialog"
      aria-modal="true"
      aria-label={event.name}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[980px] overflow-hidden rounded-[26px] shadow-[0_28px_90px_-38px_rgba(0,0,0,0.9)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 font-condensed text-[14px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/14"
        >
          {"\u00d7"}
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.15fr)_380px]">
          <div className="relative min-h-[280px] lg:min-h-[580px]">
            <Image
              src={event.modalImage ?? event.image}
              alt={event.imageAlt}
              fill
              quality={94}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col bg-[#1b1e24]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5ac8ff,#7de8a8)] font-condensed text-[0.72rem] font-black text-[#06275f]">
                  ES
                </div>
                <div>
                  <p className="font-sans text-[0.88rem] font-bold text-white">
                    esdec.ar
                    <span className="ml-2 font-medium text-[#5ac8ff]">Registro</span>
                  </p>
                  <p className="font-sans text-[0.74rem] text-white/45">
                    {modalLabels.recordValue}
                  </p>
                </div>
              </div>
              <span className="font-sans text-[1.1rem] font-bold text-white">
                {"\u00b7\u00b7\u00b7"}
              </span>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <div>
                <p className="font-condensed text-[9px] font-black uppercase tracking-[3.5px] text-[#7de8a8]">
                  {event.tag}
                </p>
                <h3 className="mt-3 font-condensed text-[clamp(2.4rem,4vw,3.4rem)] font-black uppercase leading-[0.86] text-white">
                  {event.name}
                </h3>
              </div>

              <p className="font-sans text-[0.88rem] leading-[1.75] text-white/80">
                <span className="font-bold text-white">esdec.ar </span>
                {event.summary}
              </p>

              <div className="divide-y divide-white/[0.07]">
                {[
                  { label: modalLabels.date, value: event.date },
                  { label: modalLabels.format, value: event.tag },
                  { label: modalLabels.record, value: modalLabels.recordValue },
                ].map((item) => (
                  <div key={item.label} className="py-3">
                    <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-white/36">
                      {item.label}
                    </p>
                    <p className="mt-1 font-condensed text-[0.96rem] font-semibold uppercase leading-none text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[14px] border border-[#5ac8ff]/20 bg-[#5ac8ff]/[0.05] p-4">
                <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#5ac8ff]">
                  {modalLabels.description}
                </p>
                <p className="mt-2 font-sans text-[0.84rem] leading-[1.6] text-white/78">
                  {event.description}
                </p>
              </div>

              <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#7de8a8]">
                  {modalLabels.pillars}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-full border border-[#7de8a8]/25 bg-[#7de8a8]/[0.08] px-3 py-1.5 font-condensed text-[0.68rem] font-black uppercase tracking-[1.6px] text-white/82"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#5ac8ff]">
                  {modalLabels.benefits}
                </p>
                <ul className="mt-3 space-y-2">
                  {event.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 font-sans text-[0.82rem] leading-[1.55] text-white/74">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5ac8ff]" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[14px] border border-[#7de8a8]/25 bg-[#7de8a8]/[0.06] p-4">
                <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[#7de8a8]">
                  {modalLabels.evolution}
                </p>
                <ul className="mt-3 space-y-2">
                  {event.evolution.map((step) => (
                    <li key={step} className="flex items-start gap-2 font-sans text-[0.82rem] leading-[1.55] text-white/76">
                      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7de8a8]" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 p-5">
              <a
                href={event.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick(`events_past_${event.id}`)}
                className="flex min-h-[52px] w-full items-center justify-center rounded-[18px] bg-white font-condensed text-[0.8rem] font-black uppercase tracking-[0.22em] text-[#06275f] no-underline transition-all duration-200 hover:-translate-y-px hover:bg-white/88 hover:no-underline"
              >
                {event.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function FinalCtaSection() {
  const { finalCta, nextEvent } = EVENTS_PAGE;

  return (
    <section
      data-event-section="final-cta"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-[#000c1a] px-6 py-24 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_28%,rgba(90,200,255,0.13),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_38%_at_50%_72%,rgba(12,210,94,0.07),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#5ac8ff,#7de8a8,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.055] [--fpg:rgba(255,255,255,0.02)] [--fps:rgba(255,255,255,0.9)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate className="w-[65vw] max-w-[720px] animate-heartbeat" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1020px]">
        <ScrollReveal direction="up">
          <div className="mb-8 flex items-center justify-center gap-3">
            <BrandLines size="md" animated />
            <p className="font-condensed text-[10px] font-black uppercase tracking-[5px] text-[#5ac8ff]">
              {finalCta.eyebrow}
            </p>
          </div>

          <h2 className="font-condensed text-[clamp(4rem,11vw,10.5rem)] font-black uppercase leading-[0.76] tracking-tight text-white">
            <span className="block">{finalCta.headlineLine1}</span>
            <span className="block text-[#5ac8ff]">{finalCta.headlineLine2}</span>
          </h2>

          <p className="mx-auto mt-10 max-w-[40ch] font-sans text-[1.06rem] font-medium leading-[1.9] text-white/55">
            {finalCta.body}
          </p>

          <div className="mt-12">
            <a
              href={nextEvent.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("events_final_cta")}
              className="btn-shimmer inline-flex min-h-[76px] min-w-[340px] items-center justify-center rounded-[26px] bg-[#0cd25e] px-12 py-5 font-condensed text-[1rem] font-black uppercase tracking-[0.3em] text-[#001a33] no-underline shadow-[0_0_64px_rgba(12,210,94,0.44),0_28px_80px_-32px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_96px_rgba(12,210,94,0.52),0_36px_96px_-32px_rgba(0,0,0,0.9)]"
            >
              {finalCta.ctas[0].label} →
            </a>
          </div>

          <p className="mt-8 font-condensed text-[0.72rem] font-black uppercase tracking-[2.5px] text-white/28">
            {nextEvent.dateDay} de {nextEvent.dateMonth} · {nextEvent.venue} · Cupos limitados
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function RefinedFinalCtaSection() {
  const { finalCta } = EVENTS_PAGE;

  return (
    <section
      data-event-section="final-cta"
      className="relative isolate overflow-hidden bg-[#001f3f] px-6 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,200,255,0.12)_0%,transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing">
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-[30px] bg-[#224f99] px-6 py-16 text-center shadow-[0_30px_90px_-48px_rgba(0,0,0,0.9)] md:px-12 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(90,200,255,0.08)_0%,transparent_42%,rgba(125,232,168,0.06)_100%)]"
              aria-hidden="true"
            />
            <div className="relative z-10 mb-7 flex items-center justify-center gap-3">
              <BrandLines size="sm" animated />
            <p className="font-condensed text-[10px] font-black uppercase tracking-[5px] text-[#5ac8ff]">
              {finalCta.eyebrow}
            </p>
          </div>

          <h2 className="relative z-10 mx-auto max-w-[850px] font-condensed text-[clamp(3rem,7.4vw,6.8rem)] font-black uppercase leading-[0.86] tracking-tight text-white">
            <span>{finalCta.headlineLine1.replace("ECOSISTEMA", "")}</span>
            <span className="ecos-title-accent">ECOSISTEMA</span>
            <span className="block">{finalCta.headlineLine2}</span>
          </h2>

          <p className="relative z-10 mx-auto mt-7 max-w-[58ch] font-sans text-[1rem] font-medium leading-[1.85] text-white/76">
            {finalCta.body}
          </p>

          <div className="relative z-10 mx-auto mt-10 flex max-w-[720px] flex-col justify-center gap-4 sm:flex-row">
            {finalCta.ctas.map((cta) => (
              <EventButton
                key={cta.trackingLabel}
                cta={cta}
                className="w-full sm:min-w-[320px]"
              />
            ))}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EventsClosingCtaSection() {
  const { finalCta } = EVENTS_PAGE;
  const [primaryCta, secondaryCta] = finalCta.ctas;

  return (
    <SharedCTASection
      eyebrow={finalCta.eyebrow}
      headline={finalCta.headlineLine1}
      headlineAccent={finalCta.headlineLine2}
      body={finalCta.body}
      primaryCtaLabel={primaryCta.label}
      primaryCtaHref={primaryCta.href}
      primaryCtaExternal={primaryCta.external}
      secondaryCtaLabel={secondaryCta?.label}
      secondaryCtaHref={secondaryCta?.href}
      secondaryCtaExternal={secondaryCta?.external}
      trustText={finalCta.panelTrust}
    />
  );
}

export default function EventsLandingPage() {
  useEventsAnalytics();

  const [showIntro, setShowIntro] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(EVENTS_INTRO_KEY)
  );

  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      {showIntro && <EventsIntro onComplete={() => setShowIntro(false)} />}
      <HeroSection />
      <TransitionSection />
      <NextEventSection />
      <ExperienceSection />
      <PastEventsSection />
      <EventsClosingCtaSection />
    </main>
  );
}
