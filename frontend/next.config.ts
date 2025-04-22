import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const nextConfig = {
  // ...
  experimental: {
    allowedDevOrigins: [
      "http://localhost:3001",
      "http://192.168.0.27:3001"
    ]
  }
} as NextConfig;

export default nextConfig;
