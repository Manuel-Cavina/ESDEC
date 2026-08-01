// sections/ecosistema/CTASection.tsx
// Cierre del home — frase de marca + un unico CTA, mismo patron que el resto del sitio.

import SharedCTASection from "@/components/SharedCTASection";
import { ECOSISTEMA_OVERVIEW } from "@/content/ecosistema";

export default function CTASection() {
  const { cta } = ECOSISTEMA_OVERVIEW;

  return (
    <SharedCTASection
      bg="var(--bg2)"
      eyebrow={cta.eyebrow}
      headline={cta.headline}
      headlineAccent={cta.headlineAccent}
      body={cta.body}
      primaryCtaLabel={cta.primaryCtaLabel}
      primaryCtaHref={cta.primaryCtaHref}
      primaryCtaExternal={cta.primaryCtaExternal}
      secondaryCtaLabel={cta.secondaryCtaLabel}
      secondaryCtaHref={cta.secondaryCtaHref}
      trustText={cta.trustText}
    />
  );
}
