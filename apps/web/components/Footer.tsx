"use client";

// components/Footer.tsx
// Footer principal: glass card sobre fondo var(--bg), misma estetica que SharedCTASection.

import Link from "next/link";
import { FOOTER } from "@/content/landing";
import { cn } from "@/lib/utils";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";
import StickerIcon from "@/components/StickerIcon";
import Logo from "@/components/Logo";

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.737-8.859L2.11 2.25H8.08l4.274 5.651 5.89-5.651zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "ig" || icon === "instagram") return <IconInstagram />;
  if (icon === "tt" || icon === "tiktok") return <IconTikTok />;
  if (icon === "x") return <IconX />;
  if (icon === "wa" || icon === "whatsapp") return <IconWhatsApp />;
  return null;
}

export default function Footer() {
  const whatsappHref =
    FOOTER.social.find((item) => item.icon === "whatsapp")?.href ?? "#";

  return (
    <footer className="relative overflow-hidden bg-[var(--bg)]">
      <div className="footer-dot-texture pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="footer-glow pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2" aria-hidden="true" />

      {/* Glass card — full width */}
      <div className="relative">
        <div className="relative overflow-hidden border-y border-white/[0.18] bg-white/[0.075] pb-6 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md">

          {/* Huella watermark */}
          <div
            className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.06] [--fps:rgba(255,255,255,1)] [--fpg:rgba(255,255,255,0.04)]"
            aria-hidden="true"
          >
            <FingerprintSVG animate={false} className="w-[380px]" />
          </div>

          <div className="relative mx-auto max-w-landing px-6 md:px-14">

          {/* Fila principal */}
          <div className="grid grid-cols-1 gap-10 border-b border-white/[0.1] pb-8 sm:grid-cols-2 lg:grid-cols-5">

            {/* Brand block — 2 cols */}
            <div className="sm:col-span-2">
              <div className="mb-5">
                <Logo className="w-[200px] sm:w-[220px]" />
              </div>

              <p className="mb-1 font-condensed text-[1.05rem] font-bold uppercase leading-snug text-white">
                {FOOTER.tagline}
              </p>
              <p className="mb-5 font-condensed text-[0.78rem] font-bold uppercase tracking-[2.5px] text-white/60">
                {FOOTER.location}
              </p>

              <div className="mb-6 space-y-3">
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="contact-link flex items-center gap-2.5 font-sans text-base text-white transition-colors hover:text-white"
                >
                  <StickerIcon name="mail" size="xs" className="contact-link__icon text-[var(--p1)]" />
                  {FOOTER.contact.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link flex items-center gap-2.5 font-sans text-base text-white transition-colors hover:text-white"
                >
                  <StickerIcon
                    name="whatsapp"
                    size="xs"
                    className="contact-link__icon text-[var(--p1)]"
                  />
                  {FOOTER.contact.phone}
                </a>
                <p className="contact-link flex items-center gap-2.5 font-sans text-base text-white">
                  <StickerIcon name="maps" size="xs" className="contact-link__icon text-[var(--p1)]" />
                  {FOOTER.contact.location}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {FOOTER.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "border border-white/[0.2] bg-white/[0.07] text-white/70",
                      "transition-all duration-200",
                      "hover:-translate-y-px hover:border-[var(--p1)]/60 hover:bg-[var(--p1)]/10 hover:text-white"
                    )}
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Grupos de links */}
            {FOOTER.groups.map((group) => (
              <div key={group.label}>
                <p className="mb-4 font-condensed text-[0.65rem] font-black uppercase tracking-[3.5px] text-white/50">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-0 font-sans text-base text-white transition-colors duration-200 hover:text-white"
                      >
                        <span className="block h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Columna brand */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 font-condensed text-[0.65rem] font-black uppercase tracking-[3.5px] text-white/50">
                  ESDEC
                </p>
                <div className="mb-4">
                  <BrandLines animated size="md" />
                </div>
                <p className="font-condensed text-[1.15rem] font-black uppercase leading-[0.95] text-white">
                  Elite Sports
                  <br />
                  Development
                </p>
                <p className="mt-2 font-sans text-base text-white">
                  Cordoba, Argentina
                </p>
              </div>
            </div>
          </div>

          {/* Fila inferior */}
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {FOOTER.legal.map((item, i) => (
                <span key={item.label} className="flex items-center gap-5">
                  <a
                    href={item.href}
                    className="font-sans text-[0.9rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                  {i < FOOTER.legal.length - 1 && (
                    <span className="text-white/25" aria-hidden="true">
                      &middot;
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="font-sans text-[0.9rem] text-white/60">
              {FOOTER.copy}
            </p>
          </div>

          </div>{/* end max-w-landing */}
        </div>
      </div>
    </footer>
  );
}
