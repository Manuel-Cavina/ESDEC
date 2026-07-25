"use client";

// sections/ClosingCTASection.tsx
// Audience-aware closing CTA — same shared banner format used on the salud pages,
// with the primary action opening the WhatsApp wizard instead of navigating.

import { useState } from "react";
import { FOOTPRINT } from "@/content/landing";
import SharedCTASection from "@/components/SharedCTASection";
import WhatsAppWizardModal, { type WizardAudience } from "@/components/WhatsAppWizardModal";

interface ClosingCTASectionProps {
  audience?: WizardAudience;
}

export default function ClosingCTASection({
  audience = "deportista",
}: ClosingCTASectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const content = FOOTPRINT.variants[audience];

  return (
    <>
      <SharedCTASection
        id="footprint"
        eyebrow={FOOTPRINT.eyebrow}
        headline={content.headline}
        headlineAccent={content.headlineAccent}
        body={content.body}
        primaryCtaLabel={content.cta}
        onPrimaryCtaClick={() => setModalOpen(true)}
        trustText={content.trustText}
      />

      {modalOpen && (
        <WhatsAppWizardModal audience={audience} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
