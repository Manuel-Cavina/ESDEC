// app/preview-app-features/page.tsx
// Pagina temporal para comparar 5 variantes de la seccion de funciones de la app — se borra despues de elegir.

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppFeaturesVariantsPreview from "@/sections/ecosistema/AppFeaturesVariantsPreview";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewAppFeaturesPage() {
  return (
    <>
      <div className="nav-visible">
        <Navbar audience={null} />
      </div>
      <main className="bg-[var(--bg)] pt-28">
        <AppFeaturesVariantsPreview />
      </main>
      <Footer />
    </>
  );
}
