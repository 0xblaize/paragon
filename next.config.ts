import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // recommended for Next.js
  eslint: {
    // Ignore ESLint errors only during build (so Vercel deploys succeed)
    ignoreDuringBuilds: true,
  },
  images: {
    // Optional: allow remote images if using Next.js <Image />
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
