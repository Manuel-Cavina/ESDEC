// sections/ecosistema/AppFeaturesVariantsPreview.tsx
// Preview temporal — 5 formas distintas de mostrar las funciones de la app, sin foto de fondo.
// No es codigo final: una vez elegida la variante, esto se borra.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { ECOSISTEMA_APP_FEATURES } from "@/content/ecosistema";

type Feature = (typeof ECOSISTEMA_APP_FEATURES.items)[number];

function SectionLabel({ n, title }: { n: number; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-display text-[2rem] leading-none text-[var(--p1)] opacity-60">0{n}</span>
      <h3 className="font-condensed text-[1.3rem] font-black uppercase tracking-tight text-[var(--t1)]">{title}</h3>
    </div>
  );
}

function Header() {
  const { eyebrow, headline, headlineAccent, subtext } = ECOSISTEMA_APP_FEATURES;
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <BrandLines size="sm" animated />
        <Kicker>{eyebrow}</Kicker>
      </div>
      <h2 className="text-clamp-problem font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
        {headline} <span className="ecos-title-accent">{headlineAccent}</span>
      </h2>
      <p className="mt-4 max-w-[52ch] font-sans text-[0.95rem] leading-[1.85] text-[var(--t2)]">{subtext}</p>
    </div>
  );
}

/* ─── Variante 1 — Grid de feature cards ─────────────────────────────────────── */
function V1({ items }: { items: readonly Feature[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[var(--bg2)] p-8">
      <Header />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-[18px] border border-black/10 bg-[var(--card-bg)] p-5 dark:border-white/12">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--p1)]/15 text-[var(--p1)]">
              <StickerIcon name={item.icon} size="sm" />
            </span>
            <h4 className="mt-3 font-condensed text-[1rem] font-bold uppercase tracking-[0.02em] text-[var(--t1)]">{item.title}</h4>
            <p className="mt-1.5 font-sans text-[0.85rem] leading-[1.6] text-[var(--t2)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Variante 2 — Lista numerada vertical ───────────────────────────────────── */
function V2({ items }: { items: readonly Feature[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[var(--bg2)] p-8">
      <Header />
      <div className="divide-y divide-white/10">
        {items.map((item, i) => (
          <div key={item.id} className="flex items-center gap-5 py-5">
            <span className="font-display text-[2.2rem] leading-none text-[var(--t1)] opacity-20">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--p1)]/15 text-[var(--p1)]">
              <StickerIcon name={item.icon} size="sm" />
            </span>
            <div>
              <h4 className="font-condensed text-[1rem] font-bold uppercase tracking-[0.02em] text-[var(--t1)]">{item.title}</h4>
              <p className="mt-1 font-sans text-[0.85rem] leading-[1.6] text-[var(--t2)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Variante 3 — Chips minimalistas ────────────────────────────────────────── */
function V3({ items }: { items: readonly Feature[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[var(--bg2)] p-8">
      <Header />
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3">
            <span className="text-[var(--p1)]">
              <StickerIcon name={item.icon} size="xs" />
            </span>
            <span className="font-condensed text-[0.85rem] font-bold uppercase tracking-[0.02em] text-[var(--t1)]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Variante 4 — Antes / Con la app ────────────────────────────────────────── */
function V4({ items }: { items: readonly Feature[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[var(--bg2)] p-8">
      <Header />
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-[16px] border border-white/10 bg-[var(--card-bg)] p-4">
            <p className="font-sans text-[0.85rem] leading-[1.5] text-[var(--t2)] line-through decoration-white/30">{item.problem}</p>
            <span className="text-[var(--p2)]" aria-hidden="true">→</span>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--p2)]/15 text-[var(--p2)]">
                <StickerIcon name={item.icon} size="xs" />
              </span>
              <p className="font-condensed text-[0.85rem] font-bold uppercase tracking-[0.01em] text-[var(--t1)]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Variante 5 — Bento asimetrico ──────────────────────────────────────────── */
function V5({ items }: { items: readonly Feature[] }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[var(--bg2)] p-8">
      <Header />
      <div className="grid auto-rows-[140px] gap-4 sm:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between rounded-[18px] border border-black/10 bg-[var(--card-bg)] p-5 dark:border-white/12 ${
              i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <span
              className={`flex items-center justify-center rounded-full bg-[var(--p1)]/15 text-[var(--p1)] ${
                i === 0 ? "h-12 w-12" : "h-9 w-9"
              }`}
            >
              <StickerIcon name={item.icon} size={i === 0 ? "md" : "xs"} />
            </span>
            <div>
              <h4 className={`font-condensed font-bold uppercase tracking-[0.02em] text-[var(--t1)] ${i === 0 ? "text-[1.3rem]" : "text-[0.9rem]"}`}>
                {item.title}
              </h4>
              {i === 0 && (
                <p className="mt-2 max-w-[28ch] font-sans text-[0.85rem] leading-[1.6] text-[var(--t2)]">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppFeaturesVariantsPreview() {
  const { items } = ECOSISTEMA_APP_FEATURES;

  return (
    <div className="mx-auto max-w-landing px-6 py-16">
      <h2 className="mb-12 font-condensed text-[2rem] font-black uppercase text-[var(--t1)]">
        Comparar variantes — funciones de la app
      </h2>

      <ScrollReveal direction="up" className="mb-14">
        <SectionLabel n={1} title="Grid de feature cards" />
        <V1 items={items} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mb-14">
        <SectionLabel n={2} title="Lista numerada vertical" />
        <V2 items={items} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mb-14">
        <SectionLabel n={3} title="Chips minimalistas" />
        <V3 items={items} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mb-14">
        <SectionLabel n={4} title='Antes / Con la app' />
        <V4 items={items} />
      </ScrollReveal>

      <ScrollReveal direction="up" className="mb-14">
        <SectionLabel n={5} title="Bento asimetrico" />
        <V5 items={items} />
      </ScrollReveal>
    </div>
  );
}
