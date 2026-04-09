"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/ScrollReveal.tsx
// Wrapper que anima sus hijos al entrar al viewport.
// Soporta fade-up, fade-left, fade-right, cascade.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;        // ms
  threshold?: number;    // 0–1
  /** Si true, los hijos directos se animan en cascade con delay escalonado */
  cascade?: boolean;
  cascadeDelay?: number; // ms entre cada hijo
  once?: boolean;        // solo animar una vez (default: true)
}

const INITIAL: Record<Direction, string> = {
  up:    "opacity-0 translate-y-5",
  left:  "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
  none:  "opacity-0",
};

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  cascade = false,
  cascadeDelay = 80,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cascade: animar hijos directos escalonados
    if (cascade) {
      const children = Array.from(el.children) as HTMLElement[];
      children.forEach((child, i) => {
        child.style.opacity = "0";
        child.style.transform = "translateY(16px) perspective(400px) rotateX(-10deg)";
        child.style.transition = `opacity 0.5s ease ${i * cascadeDelay + delay}ms, transform 0.5s ease ${i * cascadeDelay + delay}ms`;
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            children.forEach((child) => {
              child.style.opacity = "1";
              child.style.transform = "none";
            });
            if (once) observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    // Standard: animar el wrapper
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [cascade, cascadeDelay, delay, threshold, once]);

  const style = !cascade
    ? {
        opacity: 0,
        transform: direction === "up"
          ? "translateY(20px)"
          : direction === "left"
          ? "translateX(-24px)"
          : direction === "right"
          ? "translateX(24px)"
          : "none",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }
    : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
