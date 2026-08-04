"use client";

// components/Footer.tsx

import Link from "next/link";
import { FOOTER } from "@/content/landing";
import { cn } from "@/lib/utils";
import StickerIcon from "@/components/StickerIcon";
import Logo from "@/components/Logo";
import Kicker from "@/components/ui/Kicker";
import { trackCTAClick } from "@/lib/analytics";

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
  if (icon === "wa" || icon === "whatsapp") return <IconWhatsApp />;
  return null;
}

export default function Footer() {
  const whatsappHref =
    FOOTER.social.find((item) => item.icon === "whatsapp")?.href ?? "#";

  return (
    <footer className="relative overflow-hidden bg-[#295ab4]">
      <div className="footer-brand-line absolute inset-x-0 top-0 z-10 h-[1px]" aria-hidden="true" />
      <div className="footer-dot-texture pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="footer-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2" aria-hidden="true" />

      <div className="relative">
        <div className="relative overflow-hidden bg-white/[0.06] pb-8 pt-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
          <div className="relative mx-auto max-w-landing px-6 md:px-14">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

              {/* Brand block
                  Mobile: logo (left) + social/contact (right) en row
                  Desktop lg: stacked verticalmente */}
              <div className="lg:col-span-2">
                <div className="flex flex-row items-start gap-8 lg:flex-col lg:gap-0">

                  {/* Logo */}
                  <Logo className="h-[46px] w-auto shrink-0 lg:mb-7 lg:h-[64px]" />

                  {/* Social + Contact — columna derecha en mobile, bloque propio en lg */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex flex-wrap gap-2 lg:mb-7 lg:gap-2.5">
                      {FOOTER.social.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          onClick={
                            s.icon === "whatsapp"
                              ? () => trackCTAClick("footer_social_whatsapp")
                              : undefined
                          }
                          className={cn(
                            "btn-shimmer relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full lg:h-10 lg:w-10",
                            "border border-white/[0.18] bg-white/[0.07] text-white",
                            "transition-all duration-300",
                            "hover:-translate-y-1 hover:border-[var(--p1)] hover:bg-[var(--p1)]/10 hover:text-[var(--p1)]",
                            "hover:shadow-[0_0_14px_rgba(90,200,255,0.22),0_6px_18px_rgba(90,200,255,0.14)]"
                          )}
                        >
                          <SocialIcon icon={s.icon} />
                        </a>
                      ))}
                    </div>

                    <div className="space-y-2.5 lg:space-y-3">
                      <a
                        href={`mailto:${FOOTER.contact.email}`}
                        className="contact-link flex items-center gap-2 font-sans text-[0.8rem] text-white transition-colors hover:text-[var(--p1)] lg:text-[0.875rem]"
                      >
                        <StickerIcon name="mail" size="xs" className="contact-link__icon shrink-0 text-[var(--p1)]" />
                        {FOOTER.contact.email}
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCTAClick("footer_contact_whatsapp")}
                        className="contact-link flex items-center gap-2 font-sans text-[0.8rem] text-white transition-colors hover:text-[var(--p1)] lg:text-[0.875rem]"
                      >
                        <StickerIcon name="whatsapp" size="xs" className="contact-link__icon shrink-0 text-[var(--p1)]" />
                        {FOOTER.contact.phone}
                      </a>
                      <p className="flex items-center gap-2 font-sans text-[0.8rem] text-white lg:text-[0.875rem]">
                        <StickerIcon name="maps" size="xs" className="shrink-0 text-[var(--p1)]" />
                        {FOOTER.contact.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link groups — 2 col en mobile, 3 col en lg */}
              <div className="grid grid-cols-2 gap-6 gap-y-8 lg:col-span-3 lg:grid-cols-3">
                {FOOTER.groups.map((group) => (
                  <div key={group.label}>
                    <div className="mb-4">
                      <Kicker withLine>{group.label}</Kicker>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="group flex items-center gap-0 font-sans text-[0.8rem] text-white transition-colors duration-200 hover:text-[var(--p1)] lg:text-[0.875rem]"
                          >
                            <span className="block h-px w-0 bg-[var(--p1)] transition-[width] duration-300 group-hover:mr-2 group-hover:w-3" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col items-start gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-sans text-[0.75rem] text-white/45">
                {FOOTER.copy}
              </p>
              <div className="flex items-center gap-5">
                {FOOTER.legal.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-sans text-[0.75rem] text-white/45 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
