import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from '../components/SiteFooter'
import NavHeader from "@/components/NavHeader";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RJN — Photography & Videography Portfolio",
  description: "Professional photography and videography services for brands, campaigns and creators.",
  openGraph: {
    title: "RJN — Photography & Videography Portfolio",
    description: "Visual storytelling, commercial motion, and creative direction for brands and artists.",
    type: "website",
    siteName: "RJN Portfolio",
    images: ["/images/RandolfWork.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJN — Photography & Videography Portfolio",
    description: "Professional photography and videography services for brands and artists.",
    images: ["/images/RandolfWork.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="flex flex-col antialiased">
        <NavHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
