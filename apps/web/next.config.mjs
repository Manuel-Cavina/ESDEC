/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
