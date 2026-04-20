"use client";

// components/Logo.tsx
// Logo real de ESDEC reutilizable en navbar, hero y footer.

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/Logo.png"
      alt="ESDEC"
      width={180}
      height={52}
      priority={priority}
      quality={100}
      sizes="180px"
      style={{ mixBlendMode: "multiply" }}
      className={cn("h-[38px] w-auto object-contain", className)}
    />
  );
}
