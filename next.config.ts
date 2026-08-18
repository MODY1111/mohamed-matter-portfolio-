import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  // Lets the phone (reached via the LAN IP) load dev-mode JS/HMR
  // resources instead of Next.js blocking them as cross-origin.
  allowedDevOrigins: ["192.168.100.176"],
};

export default nextConfig;
