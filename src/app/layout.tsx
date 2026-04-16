import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";

import "@/app/globals.css";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        oxanium.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
