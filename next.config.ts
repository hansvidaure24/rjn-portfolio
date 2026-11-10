import type { NextConfig } from "next";
import path from "path";
type NextConfigWithTurbopack =
  NextConfig & { turbopack?: { root?: string }; experimental?: { appDir?: boolean } };

const isDev = process.env.NODE_ENV === "development";
// Vercel preview deployments inject the Vercel toolbar from vercel.live.
const toolbar = process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";

// Only what the site uses: its own files, Instagram's embed script and reel
// frames, YouTube's privacy-enhanced player, and EmailJS for the contact
// form. Inline scripts stay allowed because Next streams page data in them.
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.instagram.com${toolbar}`,
  `connect-src 'self' https://api.emailjs.com${toolbar}`,
  `frame-src https://www.youtube-nocookie.com https://www.instagram.com${toolbar}`,
  `img-src 'self' data: blob:${toolbar}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

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
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
