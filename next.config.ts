import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/modern-portfolio",
  assetPrefix: "/modern-portfolio",
};

export default nextConfig;
