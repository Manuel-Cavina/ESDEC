"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/ScrollReveal.tsx
// Wrapper que anima sus hijos al entrar al viewport.
// Soporta fade-up, fade-left, fade-right, cascade.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, ReactNode } from "react";

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
            children.forEach((child, i) => {
              child.style.opacity = "1";
              child.style.transform = "none";
              // Despues de la entrada, se sueltan los inline styles: si quedan
              // fijados por JS (aunque sea en "none"), le ganan por specificity
              // a cualquier hover:scale/translate de Tailwind y lo bloquean.
              window.setTimeout(() => {
                child.style.transform = "";
                child.style.transition = "";
              }, i * cascadeDelay + delay + 550);
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
          // Soltar el inline transform despues de la entrada, para no bloquear
          // hover:scale/translate de Tailwind en el contenido de adentro.
          window.setTimeout(() => {
            el.style.transform = "";
            el.style.transition = "";
          }, delay + 750);
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
