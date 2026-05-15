import type { Preview } from "@storybook/nextjs-vite";
import { Geist_Mono, Noto_Sans_KR, Oxanium } from "next/font/google";

import "@/app/globals.css";
import "./preview.css";
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

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={cn(
          "font-sans antialiased",
          geistMono.variable,
          notoSansKr.variable,
          oxanium.variable
        )}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Shared UI"],
      },
    },
  },
};

export default preview;
