import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: true, // Disable image optimization for now
  },
};

export default nextConfig;
