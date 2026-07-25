// sections/EntrySection.tsx
// Audience-aware opening hero — thin wrapper over SharedHeroSection so both
// deportistas and profesionales get the same stamp + gradient + fingerprint effects.

import { ENTRY } from "@/content/landing";
import SharedHeroSection from "@/components/SharedHeroSection";

type Audience = "deportista" | "profesional";

interface EntrySectionProps {
  audience?: Audience;
}

export default function EntrySection({
  audience = "deportista",
}: EntrySectionProps) {
  const content = ENTRY[audience];

  return (
    <SharedHeroSection
      id="entry"
      image={content.image}
      imageAlt=""
      eyebrow={content.eyebrow}
      headlinePre={content.headlinePre}
      headlineAccent={content.headlineAccent}
      body={content.body}
      ctaLabel={content.cta}
      ctaHref={content.ctaHref}
      stats={[...content.stats]}
    />
  );
}
