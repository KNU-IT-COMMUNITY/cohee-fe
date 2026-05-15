import type { Metadata } from "next";
import {
  Geist_Mono,
  Noto_Sans_KR,
  Oxanium,
} from "next/font/google";

import "@/app/globals.css";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
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
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        geistMono.variable,
        notoSansKr.variable,
        oxanium.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
