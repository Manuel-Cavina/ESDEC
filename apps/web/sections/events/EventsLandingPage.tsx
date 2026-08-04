"use client";

// sections/events/EventsLandingPage.tsx
// Narrative landing page for the ESDEC events experience.

import Image from "next/image";
import { useEffect, useState } from "react";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import SharedCTASection from "@/components/SharedCTASection";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import StepCard from "@/components/ui/StepCard";
import SweepButton from "@/components/ui/SweepButton";
import FAQSection from "@/components/FAQSection";
import RelatedGuides from "@/components/RelatedGuides";
import { EVENTS_PAGE, type PastEvent } from "@/content/eventos";
import { GUIDES } from "@/content/guias";
import { trackCTAClick, trackScrollDepth, trackSectionView } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const eventosGuides = GUIDES.filter((guide) => guide.pillar === "eventos-deportivos-cordoba");

// EVENTS_PAGE.nextEvent.startsAt es contenido estatico — se calcula una sola vez
// al cargar el modulo, en vez de en cada render (evita leer Date.now() en render).
const hasUpcomingEvent =
  new Date(EVENTS_PAGE.nextEvent.startsAt).getTime() > Date.now();

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  align?: "left" | "center";
}

function SectionHeading({ eyebrow, title, titleAccent, align = "left" }: SectionHeadingProps) {
  return (
    <ScrollReveal
      direction="up"
      className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}
    >
      <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
        <BrandLines size="sm" animated />
        <Kicker>{eyebrow}</Kicker>
      </div>
      <h2 className="font-condensed text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase leading-[0.88] tracking-tight text-[var(--t1)]">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="ecos-title-accent">{titleAccent}</span>
          </>
        )}
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

function StampWord({ word, delay }: { word: string; delay: number }) {
  return (
    <>
      <span
        className="animate-stamp inline-block"
        style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
      >
        {word}
      </span>
      {" "}
    </>
  );
}

function HeroSection() {
  const { hero } = EVENTS_PAGE;
  const WORD_DELAY = 110;

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
        className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,10,24,0.62)_65%,rgba(0,10,24,0.88)_100%)]"
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
                <Kicker>{hero.eyebrow}</Kicker>
              </div>
            </ScrollReveal>

            <h1 className="max-w-[12ch] font-condensed text-[clamp(4.4rem,10.5vw,9.8rem)] font-black uppercase leading-[0.75] tracking-tight text-white">
              <span className="block">
                {hero.headlineLine1.trim().split(/\s+/).map((word, i) => (
                  <StampWord key={`h1-${i}`} word={word} delay={i * WORD_DELAY} />
                ))}
              </span>
              <span
                className="animate-stamp block"
                style={{
                  animationDelay: `${hero.headlineLine1.trim().split(/\s+/).length * WORD_DELAY}ms`,
                  animationFillMode: "both",
                  background: "linear-gradient(90deg, #5ac8ff 0%, #0cd25e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {hero.headlineLine2}
              </span>
            </h1>

            <ScrollReveal direction="up" delay={110}>
              <h2 className="mt-4 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.28em] text-white/60 md:text-[0.85rem]">
                {hero.keyword}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-7 max-w-[55ch] font-sans text-[1rem] font-medium leading-[1.9] text-white/82 md:text-[1.08rem]">
                {hero.body}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                {hero.ctas.map((cta, i) => (
                  <div key={cta.trackingLabel} onClick={() => trackCTAClick(cta.trackingLabel)}>
                    <SweepButton
                      label={cta.label}
                      href={cta.href}
                      external={cta.external}
                      size="md"
                      variant={i === 0 ? "glass" : "ghost"}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        <div className="relative border-t border-white/12 pb-14 pt-7 md:pb-20">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {hero.words.map((word) => (
              <div key={word.label}>
                <Kicker>{word.label}</Kicker>
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
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,10,24,0.4)_0%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-landing">
        <SectionHeading eyebrow={transition.eyebrow} title={transition.title} titleAccent={transition.titleAccent} />

        <ScrollReveal
          cascade
          cascadeDelay={100}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {transition.steps.map((step, index) => (
            <StepCard
              key={step.id}
              number={String(index + 1).padStart(2, "0")}
              title={step.title}
              body={step.body}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

interface EventModalSection {
  id: string;
  kicker: string;
  body?: string;
  list?: readonly string[];
  chips?: readonly string[];
}

interface EventModalInfoRow {
  label: string;
  value: string;
}

interface EventModalCta {
  label: string;
  href: string;
  trackingLabel: string;
}

interface EventModalProps {
  image: string;
  imageAlt: string;
  name: string;
  eyebrow?: string;
  intro?: string;
  infoRows: EventModalInfoRow[];
  sections: EventModalSection[];
  cta: EventModalCta;
  onClose: () => void;
}

// Modal compartido para el evento proximo y los eventos pasados —
// mismo lenguaje visual que ProfessionalModal (pro-modal-bg + Kicker + SweepButton).
function EventModal({
  image,
  imageAlt,
  name,
  eyebrow,
  intro,
  infoRows,
  sections,
  cta,
  onClose,
}: EventModalProps) {
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
      className="fixed inset-0 z-[980] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-label={name}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[980px] overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,#3269c7_0%,#2a56ab_100%)] shadow-[0_40px_120px_-24px_rgba(14,28,61,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] [--card-bd:rgba(255,255,255,0.35)] [--card-bg:rgba(255,255,255,0.2)] [--card-bg2:rgba(255,255,255,0.3)] [--t1:#ffffff] [--t2:rgba(255,255,255,0.85)] [--t3:rgba(255,255,255,0.6)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.1)_100%)]"
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-bg)] font-condensed text-[13px] font-bold text-[var(--t2)] backdrop-blur-md transition-all hover:bg-[var(--card-bg2)] hover:text-[var(--t1)]"
        >
          ✕
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.15fr)_380px]">
          <div className="relative min-h-[280px] lg:min-h-[580px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              quality={94}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {eyebrow && <Kicker>{eyebrow}</Kicker>}

              <h3 className="font-condensed text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-[0.92] text-[var(--t1)]">
                {name}
              </h3>

              {intro && (
                <p className="font-sans text-[0.9rem] leading-[1.75] text-[var(--t2)]">{intro}</p>
              )}

              <div className="divide-y divide-[var(--card-bd)]">
                {infoRows.map((row) => (
                  <div key={row.label} className="py-3">
                    <p className="font-condensed text-[8px] font-black uppercase tracking-[3px] text-[var(--t3)]">
                      {row.label}
                    </p>
                    <p className="mt-1 font-condensed text-[0.96rem] font-semibold uppercase leading-none text-[var(--t1)]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              {sections.map((section) => (
                <div
                  key={section.id}
                  className="rounded-[16px] border border-[var(--card-bd)] bg-[var(--card-bg)] p-5 backdrop-blur-md"
                >
                  <Kicker className="mb-3">{section.kicker}</Kicker>

                  {section.body && (
                    <p className="font-sans text-[0.88rem] leading-[1.6] text-[var(--t2)]">{section.body}</p>
                  )}

                  {section.list && (
                    <ul className="space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-sans text-[0.88rem] leading-[1.6] text-[var(--t2)]"
                        >
                          <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--p1)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.chips && (
                    <div className="flex flex-wrap gap-2">
                      {section.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-[var(--card-bd)] bg-[var(--card-bg2)] px-3 py-1.5 font-condensed text-[0.68rem] font-black uppercase tracking-[1.6px] text-[var(--t1)] backdrop-blur-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-6 pb-6 pt-1">
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick(cta.trackingLabel)}
                className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-white font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-[#0e1c3d] no-underline shadow-[0_18px_46px_-24px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-px hover:brightness-95 hover:no-underline"
              >
                {cta.label}
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

  if (!hasUpcomingEvent) {
    return null;
  }

  return (
    <section
      id="proximo-evento"
      data-event-section="next-event"
      className="relative scroll-mt-36 overflow-hidden bg-[var(--bg2)]"
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
                <Kicker>{nextEvent.eyebrow}</Kicker>
              </div>
              <h2 className="mt-5 max-w-[14ch] font-condensed text-[clamp(3rem,6.5vw,6rem)] font-black uppercase leading-[0.8] tracking-tight text-white">
                {nextEvent.name}
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-condensed text-[0.88rem] font-medium uppercase tracking-[0.16em] text-white/70">
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

      {modalOpen && (
        <EventModal
          image={nextEvent.modalImage ?? nextEvent.image}
          imageAlt={nextEvent.imageAlt}
          name={nextEvent.name}
          eyebrow={nextEvent.eyebrow}
          intro={nextEvent.about ?? nextEvent.summary}
          infoRows={[
            { label: "Fecha", value: nextEvent.dateLabel },
            { label: "Lugar", value: `${nextEvent.venue}, ${nextEvent.city}` },
            { label: "Recepcion", value: nextEvent.receptionTime },
            { label: "Inicio", value: nextEvent.startTime },
          ]}
          sections={(
            [
              nextEvent.highlights && nextEvent.highlights.length > 0
                ? { id: "highlights", kicker: "Que incluye", list: nextEvent.highlights }
                : null,
              nextEvent.benefit
                ? { id: "benefit", kicker: "Beneficio exclusivo", body: nextEvent.benefit }
                : null,
              nextEvent.spotsWarning
                ? { id: "spots", kicker: "Importante", body: nextEvent.spotsWarning }
                : null,
            ] as (EventModalSection | null)[]
          ).filter((section): section is EventModalSection => section !== null)}
          cta={nextEvent.cta}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}

function ExperienceSection() {
  const { experience } = EVENTS_PAGE;

  return (
    <section
      id="experiencia"
      data-event-section="experience"
      className="relative isolate scroll-mt-36 overflow-hidden bg-[var(--bg)] px-6 py-20 md:py-28"
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
            <Kicker>{experience.eyebrow}</Kicker>
          </div>
          <h2 className="max-w-[860px] font-condensed text-[clamp(2.4rem,5vw,4.2rem)] font-black uppercase leading-[0.88] text-white">
            {experience.title}{" "}
            <span className="ecos-title-accent">{experience.titleAccent}</span>
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          <ScrollReveal
            cascade
            cascadeDelay={120}
            className="grid gap-10 md:grid-cols-3 md:gap-8"
          >
            {experience.phases.map((phase, index) => (
              <StepCard
                key={phase.id}
                number={String(index + 1).padStart(2, "0")}
                title={phase.title}
                body={phase.body}
              />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function EventsEcosystemSection() {
  const { ecosystem } = EVENTS_PAGE;

  return (
    <section
      data-event-section="ecosystem"
      className="relative overflow-hidden bg-[var(--bg2)] px-6 py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-landing">
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{ecosystem.eyebrow}</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="text-[var(--t1)]">{ecosystem.title}</span>{" "}
            <span className="ecos-title-accent">{ecosystem.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-[56ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {ecosystem.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={80} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ecosystem.items.map((item) => (
            <IconFeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </ScrollReveal>
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
      className="relative scroll-mt-36 overflow-hidden bg-[var(--bg2)] px-6 py-18 md:py-24"
    >
      <div className="mx-auto max-w-landing">
        <SectionHeading eyebrow={pastEvents.eyebrow} title={pastEvents.title} titleAccent={pastEvents.titleAccent} />

        <ScrollReveal direction="up" className="mt-12">
          <div className="-mx-6 overflow-hidden px-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
              {carouselEvents.map((event, index) => (
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  key={`${event.id}-${index}`}
                  className="group relative flex min-h-[420px] w-[min(82vw,360px)] shrink-0 flex-col overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.2)] text-left outline-none backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/50 hover:bg-[rgba(255,255,255,0.28)] focus:outline-none focus-visible:outline-none focus-visible:ring-0"
                  aria-label={`Ver detalle de ${event.name}`}
                >
                  <div className="relative h-[210px] w-full shrink-0 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,24,0.05)_0%,rgba(0,10,24,0.5)_100%)]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    <Kicker>{event.tag} · {event.date}</Kicker>
                    <h3 className="mt-2 font-condensed text-[1.35rem] font-bold uppercase leading-[1.05] text-[var(--t1)]">
                      {event.name}
                    </h3>

                    <p className="mt-3 font-sans text-[0.86rem] leading-[1.7] text-[var(--t2)]">
                      {event.summary}
                    </p>

                    <div className="flex-1" />

                    <span className="mt-5 inline-flex items-center gap-2 font-condensed text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[var(--t1)] transition-colors duration-200 group-hover:text-[var(--p1)]">
                      {event.ctaLabel}
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {selectedEvent && (
        <EventModal
          image={selectedEvent.modalImage ?? selectedEvent.image}
          imageAlt={selectedEvent.imageAlt}
          name={selectedEvent.name}
          eyebrow={selectedEvent.tag}
          intro={selectedEvent.summary}
          infoRows={[
            { label: pastEvents.modalLabels.date, value: selectedEvent.date },
            { label: pastEvents.modalLabels.format, value: selectedEvent.tag },
          ]}
          sections={[
            { id: "description", kicker: pastEvents.modalLabels.description, body: selectedEvent.description },
            { id: "pillars", kicker: pastEvents.modalLabels.pillars, chips: selectedEvent.pillars },
            { id: "benefits", kicker: pastEvents.modalLabels.benefits, list: selectedEvent.benefits },
            { id: "evolution", kicker: pastEvents.modalLabels.evolution, list: selectedEvent.evolution },
          ]}
          cta={{
            label: selectedEvent.ctaLabel,
            href: selectedEvent.ctaHref,
            trackingLabel: `events_past_${selectedEvent.id}`,
          }}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}

function EventsClosingCtaSection() {
  const { finalCta, nextEvent } = EVENTS_PAGE;

  if (!hasUpcomingEvent) {
    const { waitlist } = nextEvent;
    return (
      <SharedCTASection
        id="proximo-evento"
        eyebrow={waitlist.eyebrow}
        headline={waitlist.title}
        body={waitlist.body}
        primaryCtaLabel={waitlist.cta.label}
        primaryCtaHref={waitlist.cta.href}
        primaryCtaExternal={waitlist.cta.external}
        secondaryCtaLabel={waitlist.secondaryCta.label}
        secondaryCtaHref={waitlist.secondaryCta.href}
        secondaryCtaExternal={waitlist.secondaryCta.external}
      />
    );
  }

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

  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <HeroSection />
      <TransitionSection />
      <PastEventsSection />
      <NextEventSection />
      <ExperienceSection />
      <EventsEcosystemSection />
      <FAQSection
        id="preguntas-frecuentes"
        eyebrow="Preguntas frecuentes"
        headline="EVENTOS DEPORTIVOS,"
        headlineAccent="SIN VUELTAS."
        items={EVENTS_PAGE.faq}
      />
      <RelatedGuides guides={eventosGuides} />
      <EventsClosingCtaSection />
    </main>
  );
}
