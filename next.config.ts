import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export -> writes the site to ./out (what Cloudflare Pages serves)
  output: "export",
  // The default image optimizer needs a server; static export requires unoptimized images
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
