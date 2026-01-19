import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Transpile @incuera/sdk (installed from local tarball or npm)
  transpilePackages: ['@incuera/sdk'],
};

export default nextConfig;
