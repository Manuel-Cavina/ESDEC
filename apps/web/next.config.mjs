/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Next 14's built-in `next lint` step can't drive ESLint 9's flat config —
    // lint runs separately via `npm run lint` (eslint.config.mjs) instead.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ]
  },
}

export default nextConfig
