import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https", // Railway te lo sirve por http, no https — ojo con esto
        hostname: "backendportafolio20-production.up.railway.app",
        pathname: "/media/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
