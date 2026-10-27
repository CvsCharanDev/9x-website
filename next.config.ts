import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is only for self-hosted Docker environments, not Vercel
  ...(process.env.BUILD_STANDALONE === "true" ? { output: "standalone" } : {}),
};

export default nextConfig;
