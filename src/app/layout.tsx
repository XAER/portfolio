import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.handle}.dev`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.domain}`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.handle,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: siteConfig.handle, url: `https://${siteConfig.domain}` }],
  keywords: [
    "full stack engineer",
    "go developer",
    "react developer",
    "flutter developer",
    "typescript",
    "supabase",
    "xaer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#0b0a10] text-[#e6e4f0] font-sans antialiased selection:bg-accent/20 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
