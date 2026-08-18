import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VhsBurst from "@/components/VhsBurst";
import DevTools from "@/components/DevTools";
import { site } from "@/data/content";
import { cheltenham } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cheltenham.variable}>
      <body className="bg-white font-sans text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VhsBurst>
            <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6">
              <Header />
              <main className="grow py-12">{children}</main>
              <Footer />
            </div>
          </VhsBurst>
          <DevTools />
        </ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="3c0fc7e3-f5f3-4d8c-8c19-89580371bb1c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
