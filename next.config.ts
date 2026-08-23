import type { NextConfig } from "next";
import path from "path";
type NextConfigWithTurbopack =
  NextConfig & { turbopack?: { root?: string }; experimental?: { appDir?: boolean } };

const nextConfig: NextConfigWithTurbopack = {
  reactStrictMode: true,
  turbopack: {
    // keeps the workspace root correct after flattening
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
