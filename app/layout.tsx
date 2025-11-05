import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Agentic Affiliate Studio",
  description: "AI-powered tools to grow affiliate income with Reels, Shorts, and Posts.",
  metadataBase: new URL("https://agentic-8900366a.vercel.app"),
  openGraph: {
    title: "Agentic Affiliate Studio",
    description: "Generate hooks, scripts, captions, and link-in-bio in minutes.",
    url: "https://agentic-8900366a.vercel.app",
    siteName: "Agentic Affiliate Studio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Agentic Affiliate Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Affiliate Studio",
    description: "Generate hooks, scripts, captions, and link-in-bio in minutes.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
          <div className="container-slim flex items-center justify-between py-3">
            <a href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400 text-slate-900 font-bold">A</span>
              <span className="font-semibold tracking-tight">Agentic Affiliate Studio</span>
            </a>
            <nav className="hidden sm:flex items-center gap-2">
              <a href="/tools" className="btn btn-muted">Tools</a>
              <a href="/tools/link-in-bio" className="btn btn-muted">Link-in-bio</a>
              <a href="/tools/utm-builder" className="btn btn-primary">UTM Builder</a>
            </nav>
          </div>
        </header>
        <main className="container-slim py-10">{children}</main>
        <footer className="border-t border-slate-800 py-10 mt-10">
          <div className="container-slim text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>? {new Date().getFullYear()} Agentic Affiliate Studio</p>
            <p>Built for Instagram Reels, YouTube Shorts, and TikTok</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
