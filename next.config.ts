import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Speaker photos are served from the client's existing site.
    remotePatterns: [
      { protocol: "https", hostname: "ircc.world", pathname: "/uploads/**" },
      { protocol: "https", hostname: "www.ircc.world", pathname: "/uploads/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
