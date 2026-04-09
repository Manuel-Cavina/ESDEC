import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MVP 0: no hay auth, no hay BD, solo posicionamiento
  // Habilitar cuando se necesite:
  // experimental: { appDir: true },

  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",        value: "DENY" },
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "Referrer-Policy",         value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
