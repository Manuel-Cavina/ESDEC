"use client";

// sections/events/EventsLandingPage.tsx
// Commercial landing page for the ESDEC events vertical.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { EVENTS_PAGE, type EsdecEvent } from "@/content/eventos";
import { trackCTAClick, trackScrollDepth, trackSectionView } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function handleTrackedClick(label: string) {
  trackCTAClick(label);
}

interface TrackedLinkProps {
  href: string;
  label: string;
  trackingLabel: string;
  className: string;
  external?: boolean;
  style?: CSSProperties;
}

function TrackedLink({
  href,
  label,
  trackingLabel,
  className,
  external = false,
  style,
}: TrackedLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleTrackedClick(trackingLabel)}
        className={className}
        style={style}
      >
        {label}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={() => handleTrackedClick(trackingLabel)}
        className={className}
        style={style}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={() => handleTrackedClick(trackingLabel)}
      className={className}
      style={style}
    >
      {label}
    </Link>
  );
}

interface SectionTitleProps {
  eyebrow: string;
  headlinePre: string;
  headlineAccent: string;
  headlinePost: string;
  body: string;
  align?: "left" | "center";
}

function SectionTitle({
  eyebrow,
  headlinePre,
  headlineAccent,
  headlinePost,
  body,
  align = "left",
}: SectionTitleProps) {
  return (
    <ScrollReveal
      direction="up"
      className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}
    >
      <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
        <BrandLines size="sm" animated />
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="ecos-title-compact">
        <span className="block">{headlinePre}</span>
        <span className="ecos-title-accent block">{headlineAccent}</span>
        <span className="block">{headlinePost}</span>
      </h2>
      <p className={cn("mt-6 max-w-[58ch] font-sans text-[0.98rem] leading-[1.95] text-[var(--t2)]", align === "center" && "mx-auto")}>
        {body}
      </p>
    </ScrollReveal>
  );
}

function SocialEventModal({
  event,
  onClose,
}: {
  event: EsdecEvent;
  onClose: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/eventos-deportivos-cordoba#proximo-evento`
      : "/eventos-deportivos-cordoba#proximo-evento";
  const shareTitle = `${event.name} | ESDEC`;
  const shareText = `Sumate a ${event.name}: ${event.headline}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(`${shareText} ${shareUrl}`);
  const encodedShareSubject = encodeURIComponent(shareTitle);
  const encodedShareBody = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
  const socialComments = event.socialComments ?? [
    ...event.details.map((detail, index) => ({
      author: detail.label.toLowerCase(),
      body: detail.value,
      icon: ["FMT", "OK", "IN"][index] ?? "ES",
    })),
    ...event.modalBullets.map((item, index) => ({
      author: `momento 0${index + 1}`,
      body: item,
      icon: ["RUN", "TEC", "REC"][index] ?? `0${index + 1}`,
    })),
  ];
  const experienceTabs = event.experienceTabs ?? [];
  const selectedExperience = experienceTabs[activeExperience];

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      });
      handleTrackedClick(`share_native_${event.slug}`);
      return;
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      handleTrackedClick(`share_copy_${event.slug}`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-[rgba(0,12,28,0.72)] px-4 py-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[1060px] overflow-hidden rounded-[30px] border border-white/14 bg-[linear-gradient(180deg,#071f4b_0%,#061833_100%)] shadow-[0_28px_90px_-38px_rgba(0,0,0,0.85)]"
        onMouseDown={(eventClick) => eventClick.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-[#061833]/80 font-condensed text-[16px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/14"
          aria-label="Cerrar detalle del evento"
        >
          X
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.78fr)]">
          <div className="relative min-h-[520px] overflow-hidden border-b border-white/12 bg-[#f1eadc] lg:min-h-full lg:border-b-0 lg:border-r">
            <div className="hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--p1),var(--p2))] font-condensed text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#06275f]">
                  ES
                </div>
                <div>
                  <p className="font-condensed text-[0.92rem] font-black uppercase tracking-[0.18em] text-white">
                    esdec.eventos
                  </p>
                  <p className="font-sans text-[0.78rem] font-medium text-white/56">
                    {event.venue} · {event.city}
                  </p>
                </div>
              </div>
              <p className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[var(--p1)]">
                En vivo
              </p>
            </div>

            <div className="group relative min-h-[520px] overflow-hidden lg:h-full lg:min-h-[700px]">
              <Image
                src={event.modalImage ?? event.image}
                alt={event.imageAlt}
                fill
                quality={94}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center opacity-100 saturate-100 contrast-100 transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="hidden absolute inset-0 bg-[linear-gradient(90deg,rgba(241,234,220,0.92)_0%,rgba(241,234,220,0.76)_39%,rgba(7,31,75,0.18)_64%,rgba(7,31,75,0.58)_100%)]" />
              <div className="hidden absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(0,26,51,0.18)_1px,transparent_1px)] [background-size:5px_5px]" />
              <p className="hidden pointer-events-none absolute -left-10 top-[-2rem] font-condensed text-[23rem] font-black uppercase leading-none tracking-[-0.08em] text-[#001a33]/[0.045]">
                ES
              </p>
              <div className="hidden pointer-events-none absolute right-[-16%] bottom-[8%] w-[360px] opacity-[0.2] [--fps:rgba(90,200,255,0.92)] [--fpg:rgba(90,200,255,0.04)]">
                <FingerprintSVG animate={false} className="w-full" />
              </div>
              <div className="hidden absolute left-6 right-6 top-7 items-start justify-between gap-5 sm:left-10 sm:right-10 sm:top-10">
                <Image
                  src="/images/Logo2.png"
                  alt="ESDEC"
                  width={190}
                  height={56}
                  className="h-auto w-[190px] object-contain opacity-95"
                />
                <div className="hidden text-right sm:block">
                  <p className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[#0b2b65]/70">
                    Performance
                  </p>
                  <p className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[#0b2b65]/70">
                    Recovery
                  </p>
                  <p className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[#0b2b65]/70">
                    Community
                  </p>
                </div>
              </div>
              <div className="hidden absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="mb-5 max-w-[24ch] font-sans text-[clamp(1rem,2vw,1.55rem)] font-semibold uppercase leading-[1.18] tracking-[-0.02em] text-[#0b2b65]">
                  Este 9 de mayo no venis solo a correr. Venis a vivir una experiencia.
                </p>
                <h3
                  id="event-modal-title"
                  className="font-condensed text-[clamp(4.5rem,12vw,8.6rem)] font-black uppercase leading-[0.78] tracking-[-0.04em] text-[#08275a]"
                >
                  CORRE.
                </h3>
                <p className="font-condensed text-[clamp(4.2rem,11vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.04em] text-[#08275a]">
                  RECUPERA.
                </p>
                <p className="font-condensed text-[clamp(4.2rem,11vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.04em] text-[#08275a]">
                  CONECTA.
                </p>
                <div className="mt-7 grid gap-4 border-t-4 border-[#f4b31a] pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="font-condensed text-[clamp(2.3rem,6vw,4.8rem)] font-black uppercase leading-none tracking-tight text-[#f4b31a]">
                      {event.dateDay ?? event.dateLabel} de {event.dateMonth ?? ""}
                    </p>
                    <p className="mt-2 font-condensed text-[clamp(1.2rem,3vw,2rem)] font-black uppercase tracking-[0.18em] text-[#08275a]">
                      {event.timeLabel ?? event.dateLabel}
                    </p>
                  </div>
                  <p className="font-condensed text-[1.35rem] font-black uppercase leading-none text-[#08275a]">
                    {event.venue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-[520px] flex-col bg-[#1b1e24]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--p1),var(--p2))] font-condensed text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#06275f]">
                  ES
                </div>
                <div>
                  <p className="font-sans text-[0.86rem] font-bold text-white">
                    <a
                      href={event.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`instagram_profile_${event.slug}`)}
                      className="transition-colors hover:text-[var(--p1)]"
                    >
                      esdec.ar
                    </a>
                    <span className="ml-2 font-medium text-[var(--p1)]">Seguir</span>
                  </p>
                  <p className="font-sans text-[0.74rem] font-medium text-white/48">
                    {event.venue} - {event.city}
                  </p>
                </div>
              </div>
              <span className="font-sans text-[1rem] font-bold text-white">...</span>
            </div>
            <div className="hidden border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-[1.35rem] text-white">
                  <span aria-hidden="true">♡</span>
                  <span aria-hidden="true">◇</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <span className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[var(--p1)]">
                  Guardar
                </span>
              </div>
              <p className="mt-4 font-sans text-[0.82rem] font-bold text-white">
                1094 Me gusta
              </p>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              <div className="flex gap-3">
                <div className="mt-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--p1)] font-condensed text-[0.72rem] font-black text-[#06275f]">
                  ES
                </div>
                <div>
                  <p className="font-sans text-[0.88rem] leading-[1.55] text-white/88">
                    <a
                      href={event.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`instagram_caption_${event.slug}`)}
                      className="font-bold text-white transition-colors hover:text-[var(--p1)]"
                    >
                      esdec.ar
                    </a>{" "}
                    {event.modalBody}
                  </p>
                  <p className="mt-2 font-condensed text-[9px] font-black uppercase tracking-[3px] text-white/38">
                    Fijado · {event.instagram.handle}
                  </p>
                </div>
              </div>

              {socialComments.map((comment) => (
                <div key={`${comment.author}-${comment.body}`} className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--p1)]/40 bg-[#071f4b] font-condensed text-[0.62rem] font-black uppercase tracking-[0.08em] text-[var(--p1)] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.04)]">
                    {comment.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[0.84rem] leading-[1.55] text-white/82">
                      <span className="font-bold text-white">{comment.author} </span>
                      {comment.body}
                    </p>
                    <p className="mt-1 font-sans text-[0.7rem] text-white/38">
                      2 sem   Me gusta   Responder
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t border-white/10 pt-4">
                <p className="font-sans text-[0.84rem] font-bold text-white">
                  Instagram · {event.instagram.handle}
                </p>
                <p className="mt-1 font-sans text-[0.84rem] leading-[1.55] text-white/78">
                  {event.instagram.note}
                </p>
                <a
                  href={event.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTrackedClick(`instagram_${event.slug}`)}
                  className="mt-3 inline-flex font-sans text-[0.78rem] font-bold text-[var(--p1)] transition-colors hover:text-white"
                >
                  {event.instagram.label} →
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 p-5">
              <div className="hidden mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-[1.35rem] text-white">
                    <button
                      type="button"
                      onClick={() => setLiked((current) => !current)}
                      aria-pressed={liked}
                      aria-label={liked ? "Quitar me gusta" : "Dar me gusta"}
                      className={cn(
                        "transition-transform hover:scale-110",
                        liked ? "text-red-500" : "text-white"
                      )}
                    >
                      {liked ? "♥" : "♡"}
                    </button>
                    <span aria-hidden="true">○</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="hidden gap-4 text-[1.35rem] text-white">
                    <span aria-hidden="true">♡</span>
                    <span aria-hidden="true">○</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <span aria-hidden="true" className="text-[1.15rem] text-white">
                    ▱
                  </span>
                </div>
                <p className="hidden mt-3 font-sans text-[0.82rem] font-bold text-white">
                  Les gusta a _maximotorres y 35 personas mas
                </p>
              </div>
              <div className="hidden mb-4 items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[var(--p2)] shadow-[0_0_18px_rgba(125,232,168,0.8)]" />
                <p className="font-sans text-[0.82rem] font-medium text-white/48">
                  Anade un comentario...
                </p>
              </div>
              <div className="hidden mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-[1.35rem] text-white">
                    <button
                      type="button"
                      onClick={() => setLiked((current) => !current)}
                      aria-pressed={liked}
                      aria-label={liked ? "Quitar me gusta" : "Dar me gusta"}
                      className={cn(
                        "transition-transform hover:scale-110",
                        liked ? "text-red-500" : "text-white"
                      )}
                    >
                      {liked ? "♥" : "♡"}
                    </button>
                    <span aria-hidden="true">○</span>
                    <button
                      type="button"
                      onClick={() => setShareOpen((current) => !current)}
                      aria-expanded={shareOpen}
                      className="transition-colors hover:text-[var(--p1)]"
                    >
                      ↗
                    </button>
                  </div>
                  <span aria-hidden="true" className="text-[1.15rem] text-white">
                    ▱
                  </span>
                </div>

                {shareOpen && (
                  <div className="mt-4 grid gap-2 rounded-[18px] border border-white/10 bg-white/[0.045] p-3 sm:grid-cols-2">
                    <a
                      href={`https://wa.me/?text=${encodedShareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`share_whatsapp_${event.slug}`)}
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-[0.82rem] font-bold text-white transition-colors hover:bg-white/[0.08]"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&su=${encodedShareSubject}&body=${encodedShareBody}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`share_gmail_${event.slug}`)}
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-[0.82rem] font-bold text-white transition-colors hover:bg-white/[0.08]"
                    >
                      Gmail
                    </a>
                    <a
                      href={event.instagram.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`share_instagram_${event.slug}`)}
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-[0.82rem] font-bold text-white transition-colors hover:bg-white/[0.08]"
                    >
                      Instagram
                    </a>
                    <button
                      type="button"
                      onClick={() => void handleNativeShare()}
                      className="rounded-[14px] border border-[var(--p1)]/30 bg-[var(--p1)]/[0.12] px-4 py-3 text-left font-sans text-[0.82rem] font-bold text-white transition-colors hover:bg-[var(--p1)]/[0.18]"
                    >
                      Mas apps
                    </button>
                    <a
                      href={`https://t.me/share/url?url=${encodedShareUrl}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleTrackedClick(`share_telegram_${event.slug}`)}
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-[0.82rem] font-bold text-white transition-colors hover:bg-white/[0.08] sm:col-span-2"
                    >
                      Telegram
                    </a>
                  </div>
                )}
              </div>
              <div className="mb-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-4 text-[1.35rem] text-white">
                    <button
                      type="button"
                      onClick={() => setLiked((current) => !current)}
                      aria-pressed={liked}
                      aria-label={liked ? "Quitar me gusta" : "Dar me gusta"}
                      className={cn(
                        "transition-transform hover:scale-110",
                        liked ? "text-red-500" : "text-white"
                      )}
                    >
                      {liked ? "♥" : "♡"}
                    </button>
                    <span aria-hidden="true">○</span>
                  </div>
                  <span aria-hidden="true" className="text-[1.15rem] text-white">
                    ▱
                  </span>
                </div>

                {experienceTabs.length > 0 && selectedExperience && (
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {experienceTabs.map((tab, index) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveExperience(index)}
                          className={cn(
                            "rounded-full border px-3 py-2 font-condensed text-[10px] font-black uppercase tracking-[0.18em] transition-colors",
                            activeExperience === index
                              ? "border-[var(--p1)] bg-[var(--p1)] text-[#06275f]"
                              : "border-white/10 bg-white/[0.03] text-white/62 hover:bg-white/[0.08]"
                          )}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 font-sans text-[0.84rem] font-bold text-white">
                      {selectedExperience.title}
                    </p>
                    <p className="mt-2 font-sans text-[0.82rem] leading-[1.55] text-white/68">
                      {selectedExperience.body}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href={event.cta.href}
                  label={event.cta.label}
                  trackingLabel={event.cta.trackingLabel}
                  external={event.cta.external}
                  className="btn-shimmer inline-flex min-h-[52px] flex-1 items-center justify-center rounded-[18px] bg-[var(--btn-bg)] px-6 py-3 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.24em] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-[18px] border border-white/14 bg-white/[0.03] px-6 py-3 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/[0.08]"
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventModal({
  event,
  onClose,
}: {
  event: EsdecEvent | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!event) return;

    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return <SocialEventModal event={event} onClose={onClose} />;

  /*
  return (
    <div
      className="fixed inset-0 z-[980] flex items-center justify-center bg-[rgba(0,12,28,0.72)] px-4 py-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92svh] w-full max-w-[980px] overflow-y-auto rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,#0f2d67_0%,#092044_100%)] shadow-[0_28px_90px_-38px_rgba(0,0,0,0.8)]"
        onMouseDown={(eventClick) => eventClick.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 font-condensed text-[16px] font-bold text-white transition-colors hover:bg-white/14"
          aria-label="Cerrar detalle del evento"
        >
          X
        </button>

        <div className="grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={event.image}
              alt={event.imageAlt}
              fill
              quality={92}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover opacity-90 saturate-[0.82]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,18,42,0.08)_0%,rgba(2,18,42,0.72)_100%)]" />
          </div>

          <div className="p-6 md:p-8">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {event.eyebrow}
            </p>
            <h3
              id="event-modal-title"
              className="mt-4 max-w-[14ch] font-condensed text-[clamp(2.4rem,5vw,4.6rem)] font-black uppercase leading-[0.9] tracking-tight text-white"
            >
              {event.name}
            </h3>
            <p className="mt-5 max-w-[58ch] font-sans text-[0.98rem] leading-[1.9] text-white/76">
              {event.modalBody}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {event.details.map((detail) => (
                <div key={detail.label} className="border-t border-white/12 pt-3">
                  <p className="font-condensed text-[9px] font-bold uppercase tracking-[3px] text-white/42">
                    {detail.label}
                  </p>
                  <p className="mt-2 font-condensed text-[1rem] font-semibold uppercase leading-[1.05] text-white">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-l-2 border-[var(--p1)]/60 pl-5">
              <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                {event.modalTitle}
              </p>
              <div className="mt-4 space-y-3">
                {event.modalBullets.map((item) => (
                  <p key={item} className="font-sans text-[0.94rem] leading-[1.75] text-white/80">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
              <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p2)]">
                Instagram · {event.instagram.handle}
              </p>
              <p className="mt-3 font-sans text-[0.92rem] leading-[1.75] text-white/74">
                {event.instagram.note}
              </p>
              <a
                href={event.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleTrackedClick(`instagram_${event.slug}`)}
                className="mt-4 inline-flex font-condensed text-[11px] font-bold uppercase tracking-[3px] text-[var(--p1)] transition-colors hover:text-white"
              >
                {event.instagram.label} →
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={event.cta.href}
                label={event.cta.label}
                trackingLabel={event.cta.trackingLabel}
                external={event.cta.external}
                className="btn-shimmer inline-flex min-h-[52px] items-center justify-center rounded-[18px] bg-[var(--btn-bg)] px-6 py-3 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.24em] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
              />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[52px] items-center justify-center rounded-[18px] border border-white/14 bg-white/[0.03] px-6 py-3 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/[0.08]"
              >
                Volver a eventos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  */
}

export default function EventsLandingPage() {
  const [selectedEvent, setSelectedEvent] = useState<EsdecEvent | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-event-section]"));
    const seen = new Set<string>();
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionId = entry.target.getAttribute("data-event-section");
          if (!sectionId || seen.has(sectionId)) return;
          seen.add(sectionId);
          trackSectionView(sectionId);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.round((scrollTop / maxScroll) * 100);
      thresholds.forEach((threshold) => {
        if (progress >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
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

  const { hero, nextEvent, evolution, manifesto, pastEvents, finalCta } = EVENTS_PAGE;

  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <section
        data-event-section="hero"
        className="relative isolate overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#0f295a_0%,#214da6_65%,#2f67c8_100%)]"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center opacity-40 saturate-[0.7] contrast-[0.9]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,18,42,0.88) 0%, rgba(10,27,61,0.76) 34%, rgba(18,53,121,0.42) 62%, rgba(38,86,184,0.24) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,18,44,0.38) 0%, rgba(11,30,68,0.18) 45%, rgba(41,90,180,0.28) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden="true"
        />
        <div className="hero-orb-1 absolute left-[-8%] top-[10%] h-[380px] w-[380px]" aria-hidden="true" />
        <div className="hero-orb-2 absolute bottom-[-10%] right-[-5%] h-[320px] w-[320px]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-2%] top-[10%] hidden opacity-[0.18] lg:block [--fps:rgba(90,200,255,0.42)] [--fpg:rgba(90,200,255,0.03)]" aria-hidden="true">
          <FingerprintSVG animate className="w-[400px] rotate-[4deg]" />
        </div>

        <div className="relative z-10 mx-auto max-w-landing px-6 pb-12 pt-28 md:pb-14 md:pt-32">
          <div className="max-w-4xl">
            <ScrollReveal direction="up">
              <div className="mb-7 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <p className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {hero.eyebrow}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={60}>
              <h1 className="font-condensed text-[clamp(3.2rem,8vw,6.5rem)] font-black uppercase leading-[0.86] tracking-tight text-[var(--t1)]">
                <span className="block">{hero.headlinePre}</span>
                <span className="ecos-title-accent block">{hero.headlineAccent}</span>
                <span className="block">{hero.headlinePost}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <p className="mt-6 max-w-[56ch] font-sans text-[1rem] leading-[1.95] text-[var(--t1)]">
                {hero.body}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={220}>
              <div className="mt-9 flex flex-col gap-4 md:max-w-[760px] md:flex-row">
                <TrackedLink
                  href={hero.primaryCta.href}
                  label={hero.primaryCta.label}
                  trackingLabel={hero.primaryCta.trackingLabel}
                  external={hero.primaryCta.external}
                  className="btn-shimmer inline-flex min-h-[54px] w-full items-center justify-center rounded-[20px] px-7 py-4 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.34em] transition-all duration-200 hover:-translate-y-px hover:brightness-110 md:flex-1"
                  style={{
                    background: "#77c7f3",
                    color: "#12367f",
                  }}
                />
                <TrackedLink
                  href={hero.secondaryCta.href}
                  label={hero.secondaryCta.label}
                  trackingLabel={hero.secondaryCta.trackingLabel}
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[20px] px-7 py-4 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.34em] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:flex-1"
                  style={{
                    background: "#1cde5f",
                    color: "#05213d",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-3 md:gap-8 md:pt-8">
            {hero.pillars.map((item, index) => (
              <ScrollReveal key={item.titleAccent} direction="up" delay={index * 80}>
                <article className="max-w-none">
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                    {item.eyebrow}
                  </p>
                  <div className="mt-3 h-px w-10 bg-gradient-to-r from-[var(--p1)]/90 to-transparent" />
                  <h3 className="mt-4 max-w-[28ch] font-condensed text-[20px] font-semibold uppercase leading-[1.08] tracking-[0.02em] text-white md:tracking-[0.03em]">
                    <span className="block">{item.title}</span>
                    <span className="block">{item.titleAccent}</span>
                  </h3>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proximo-evento"
        data-event-section="next-event"
        className="relative overflow-hidden bg-[linear-gradient(180deg,var(--bg)_0%,var(--bg2)_100%)] py-24 md:py-28"
      >
        <div className="pointer-events-none absolute right-[-5%] top-10 hidden opacity-[0.12] lg:block [--fps:rgba(90,200,255,0.34)] [--fpg:rgba(90,200,255,0.02)]">
          <FingerprintSVG animate={false} className="w-[380px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--p1)]/40 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-landing px-6">
          <ScrollReveal direction="up">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-4xl">
                <div className="mb-5 flex items-center gap-3">
                  <BrandLines size="sm" animated />
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                    {nextEvent.eyebrow}
                  </p>
                </div>
                <h2 className="ecos-title-compact">
                  <span className="block">PROXIMO</span>
                  <span className="ecos-title-accent block">EVENTO.</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <article className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(135deg,rgba(1,37,71,0.98),rgba(21,86,212,0.82))] shadow-[0_34px_90px_-48px_rgba(0,0,0,0.86)] md:rounded-[46px]">
              <Image
                src={nextEvent.image}
                alt={nextEvent.imageAlt}
                fill
                quality={94}
                sizes="(min-width: 1024px) 1120px, 100vw"
                className="pointer-events-none object-cover object-right opacity-82 saturate-[0.92] contrast-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(1,18,48,0.96)_0%,rgba(4,28,70,0.88)_38%,rgba(5,36,88,0.32)_68%,rgba(21,86,212,0.08)_100%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-14 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(21,86,212,0.18))]" />
              <div className="pointer-events-none absolute -right-24 top-8 hidden w-[360px] opacity-[0.18] md:block [--fps:rgba(90,200,255,0.9)] [--fpg:rgba(90,200,255,0.04)]">
                <FingerprintSVG animate={false} className="w-full" />
              </div>

              <div className="relative min-h-[620px] p-6 sm:p-8 lg:p-10">
                <div className="flex min-h-[560px] flex-col justify-between sm:min-h-[540px] lg:min-h-[560px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-condensed text-[10px] font-black uppercase tracking-[4px] text-[var(--p2)]">
                        {nextEvent.campaignLabel ?? nextEvent.eyebrow}
                      </p>
                      <p className="mt-3 inline-flex rounded-full border border-[var(--p1)]/35 bg-[var(--p1)]/[0.12] px-4 py-2 font-condensed text-[10px] font-black uppercase tracking-[3px] text-white">
                        {nextEvent.campaignNote ?? nextEvent.dateLabel}
                      </p>
                    </div>
                    <Image
                      src="/images/Logo2.png"
                      alt="ESDEC"
                      width={112}
                      height={60}
                      className="h-auto w-[82px] object-contain opacity-90 sm:w-[110px]"
                    />
                  </div>

                  <div className="max-w-[640px]">
                    <div className="mb-7 flex flex-wrap items-end gap-x-5 gap-y-3 border-b border-white/18 pb-5">
                      <div className="flex items-end gap-3">
                        <span className="font-condensed text-[4.8rem] font-black leading-[0.78] text-[var(--p1)] sm:text-[6rem]">
                          {nextEvent.dateDay ?? nextEvent.dateLabel}
                        </span>
                        <span className="pb-1 font-condensed text-[1.15rem] font-black uppercase leading-none tracking-[0.18em] text-white">
                          {nextEvent.dateMonth ?? nextEvent.city}
                        </span>
                      </div>
                      <div className="pb-1">
                        <p className="font-condensed text-[10px] font-black uppercase tracking-[3px] text-[var(--p2)]">
                          {nextEvent.venue}
                        </p>
                        <p className="mt-2 font-sans text-[0.96rem] font-semibold leading-snug text-white/82">
                          {nextEvent.city} - {nextEvent.timeLabel ?? nextEvent.dateLabel}
                        </p>
                      </div>
                    </div>

                    <p className="font-condensed text-[clamp(3.4rem,8vw,6.6rem)] font-black uppercase leading-[0.78] tracking-tight text-white">
                      Corre.
                      <span className="block text-[var(--p1)]">Recupera.</span>
                      <span className="block">Conecta.</span>
                    </p>
                    <p className="mt-5 max-w-[34rem] font-sans text-[1rem] font-semibold leading-[1.75] text-white/84 sm:text-[1.08rem]">
                      {nextEvent.campaignBody ?? nextEvent.summary}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {nextEvent.details.map((detail) => (
                        <span
                          key={detail.label}
                          className="rounded-full border border-white/16 bg-white/[0.075] px-3 py-2 font-condensed text-[9px] font-black uppercase tracking-[2.5px] text-white/86"
                        >
                          {detail.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <TrackedLink
                      href={nextEvent.cta.href}
                      label={nextEvent.cta.label}
                      trackingLabel={nextEvent.cta.trackingLabel}
                      external={nextEvent.cta.external}
                      className="btn-shimmer inline-flex min-h-[60px] flex-1 items-center justify-center rounded-full bg-[var(--p1)] px-8 py-3 font-condensed text-[0.84rem] font-black uppercase tracking-[0.24em] text-[#06275f] shadow-[0_18px_46px_-24px_rgba(90,200,255,0.85)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 sm:flex-none sm:min-w-[270px]"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(nextEvent)}
                      className="inline-flex min-h-[60px] flex-1 items-center justify-center rounded-full border border-white/22 bg-white/[0.085] px-7 py-3 font-condensed text-[0.8rem] font-black uppercase tracking-[0.24em] text-white backdrop-blur-sm transition-colors hover:bg-white/[0.14] sm:flex-none sm:min-w-[250px]"
                    >
                      {nextEvent.posterCtaLabel ?? nextEvent.cta.label}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(nextEvent)}
                  className="hidden"
                  aria-label={`Ver detalle de ${nextEvent.name}`}
                >
                  <div>
                    <p className="font-condensed text-[10px] font-black uppercase tracking-[4px] text-[var(--p2)]">
                      {nextEvent.headline}
                    </p>
                    <h4 className="mt-6 font-condensed text-[3.4rem] font-black uppercase leading-[0.84] text-white">
                      {nextEvent.campaignTitle ?? nextEvent.posterTitle}
                      <span className="mt-2 block text-[var(--p1)]">
                        {nextEvent.campaignAccent ?? nextEvent.posterKicker}
                      </span>
                    </h4>
                  </div>

                  <div>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {nextEvent.details.map((detail) => (
                        <span
                          key={detail.label}
                          className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 font-condensed text-[9px] font-black uppercase tracking-[2.5px] text-white/78"
                        >
                          {detail.value}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-condensed text-[0.84rem] font-black uppercase tracking-[0.24em] text-[var(--p1)] transition-transform group-hover:translate-x-1">
                      Ver historia del evento →
                    </span>
                  </div>
                </button>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section
        data-event-section="evolution"
        className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28"
      >
        <div className="mx-auto max-w-landing px-6">
          <SectionTitle
            eyebrow={evolution.eyebrow}
            headlinePre={evolution.headlinePre}
            headlineAccent={evolution.headlineAccent}
            headlinePost={evolution.headlinePost}
            body={evolution.body}
          />

          <div className="mt-14 grid gap-0 border-y border-white/10 md:grid-cols-3">
            {evolution.steps.map((step, index) => (
              <ScrollReveal key={step.id} direction="up" delay={index * 90}>
                <article className="relative min-h-[260px] border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                  <p className="font-display text-[5rem] leading-none text-white/12">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                    {step.label}
                  </p>
                  <h3 className="mt-5 max-w-[16ch] font-condensed text-[2rem] font-semibold uppercase leading-[0.96] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-[34ch] font-sans text-[0.94rem] leading-[1.85] text-[var(--t2)]">
                    {step.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-event-section="manifesto"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#01305c_0%,#012547_100%)] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute right-[-4%] top-8 hidden opacity-[0.12] lg:block [--fps:rgba(90,200,255,0.28)] [--fpg:rgba(90,200,255,0.02)]">
          <FingerprintSVG animate={false} className="w-[360px]" />
        </div>
        <div className="mx-auto max-w-landing px-6">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] xl:items-end">
            <SectionTitle
              eyebrow={manifesto.eyebrow}
              headlinePre={manifesto.headlinePre}
              headlineAccent={manifesto.headlineAccent}
              headlinePost={manifesto.headlinePost}
              body={manifesto.body}
            />
            <ScrollReveal direction="up" delay={120}>
              <blockquote className="border-l-2 border-[var(--p1)]/55 pl-6 font-condensed text-[clamp(1.6rem,3vw,2.6rem)] font-semibold uppercase leading-[1.04] text-white">
                "{manifesto.quote}"
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        data-event-section="past-events"
        className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28"
      >
        <div className="mx-auto max-w-landing px-6">
          <SectionTitle
            eyebrow={pastEvents.eyebrow}
            headlinePre={pastEvents.headlinePre}
            headlineAccent={pastEvents.headlineAccent}
            headlinePost={pastEvents.headlinePost}
            body={pastEvents.body}
          />

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {pastEvents.items.map((eventItem, index) => (
              <ScrollReveal key={eventItem.slug} direction="up" delay={index * 90}>
                <button
                  type="button"
                  onClick={() => setSelectedEvent(eventItem)}
                  className="group grid w-full gap-6 py-7 text-left transition-colors hover:bg-white/[0.035] md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-center md:px-4"
                >
                  <div className="relative aspect-[1.35/1] overflow-hidden rounded-[18px]">
                    <Image
                      src={eventItem.image}
                      alt={eventItem.imageAlt}
                      fill
                      quality={88}
                      sizes="180px"
                      className="object-cover opacity-88 saturate-[0.84] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div>
                    <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                      {eventItem.dateLabel} · {eventItem.venue}
                    </p>
                    <h3 className="mt-3 font-condensed text-[clamp(1.8rem,3vw,2.7rem)] font-semibold uppercase leading-[0.95] text-white">
                      {eventItem.name}
                    </h3>
                    <p className="mt-3 max-w-[56ch] font-sans text-[0.94rem] leading-[1.8] text-[var(--t2)]">
                      {eventItem.summary}
                    </p>
                  </div>
                  <span className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-white/52 transition-colors group-hover:text-[var(--p1)]">
                    Ver detalle →
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-event-section="system-cta"
        className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,var(--bg2)_0%,#0f2d67_100%)] py-24 md:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1] [--fps:rgba(255,255,255,0.92)] [--fpg:rgba(255,255,255,0.04)]">
          <FingerprintSVG animate={false} className="w-[46vw] max-w-[420px] animate-heartbeat" />
        </div>
        <div className="relative z-10 mx-auto max-w-landing px-6">
          <SectionTitle
            eyebrow={finalCta.eyebrow}
            headlinePre={finalCta.headlinePre}
            headlineAccent={finalCta.headlineAccent}
            headlinePost={finalCta.headlinePost}
            body={finalCta.body}
            align="center"
          />

          <ScrollReveal direction="up" delay={140}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <TrackedLink
                href={finalCta.primaryCta.href}
                label={finalCta.primaryCta.label}
                trackingLabel={finalCta.primaryCta.trackingLabel}
                external={finalCta.primaryCta.external}
                className="btn-shimmer inline-flex min-h-[54px] items-center justify-center rounded-[18px] bg-[var(--btn-bg)] px-7 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.24em] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
              />
              <TrackedLink
                href={finalCta.secondaryCta.href}
                label={finalCta.secondaryCta.label}
                trackingLabel={finalCta.secondaryCta.trackingLabel}
                className="inline-flex min-h-[54px] items-center justify-center rounded-[18px] border border-white/16 bg-white/[0.03] px-7 py-3 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.24em] text-white transition-all duration-200 hover:border-[var(--p1)]/42 hover:bg-white/[0.06]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </main>
  );
}
