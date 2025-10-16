import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // optional, can disable strict mode to reduce warnings
  eslint: {
    // ✅ ignore all ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  images: {
    // optional: allow remote images if using Next.js <Image />
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
