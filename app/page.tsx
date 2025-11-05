"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [product, setProduct] = useState("");
  const [niche, setNiche] = useState("");

  return (
    <div className="space-y-12">
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Launch affiliate content in minutes, not days
          </h1>
          <p className="text-slate-300 text-lg">
            Generate scroll-stopping hooks, short-form scripts, captions, hashtags, and a link-in-bio that converts. Optimized for Instagram and YouTube.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/tools" className="btn btn-primary">Explore Tools</Link>
            <Link href="/tools/caption-generator" className="btn btn-muted">Start with Captions</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="space-y-3">
            <div>
              <label className="label">Your product or offer</label>
              <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., Budget fitness smartwatch" />
            </div>
            <div>
              <label className="label">Niche / audience</label>
              <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., busy professionals, students, home workouts" />
            </div>
            <Link href={{ pathname: "/tools/script-generator", query: { product, niche } }} className="btn btn-primary w-full">Generate a 30s script</Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link key={f.href} href={f.href} className="card p-5 hover:border-brand-500/50 transition-colors">
            <div className="text-sm text-brand-300 font-medium">{f.kicker}</div>
            <div className="text-xl font-semibold mt-1">{f.title}</div>
            <p className="text-slate-400 mt-2 text-sm">{f.desc}</p>
          </Link>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="section-title">How it works</h2>
        <ol className="mt-4 space-y-2 text-slate-300 list-decimal list-inside">
          <li>Enter your product and niche</li>
          <li>Generate hooks, scripts, and captions tailored to Reels/Shorts</li>
          <li>Build a clean link-in-bio with your affiliate links</li>
          <li>Post consistently using the content calendar</li>
        </ol>
      </section>
    </div>
  );
}

const features = [
  {
    href: "/tools/utm-builder",
    kicker: "Traffic tracking",
    title: "Affiliate UTM Link Builder",
    desc: "Create clean, trackable links for Instagram and YouTube descriptions.",
  },
  {
    href: "/tools/hook-generator",
    kicker: "Hook starter",
    title: "Scroll-Stopping Hooks",
    desc: "50+ templates adapted to your niche and product.",
  },
  {
    href: "/tools/script-generator",
    kicker: "Video script",
    title: "30?45s Reels/Shorts Script",
    desc: "Intro, pain, promise, proof, CTA?timed lines included.",
  },
  {
    href: "/tools/caption-generator",
    kicker: "Caption + CTA",
    title: "High-Conversion Captions",
    desc: "Captions with CTAs, emojis, and clean link placements.",
  },
  {
    href: "/tools/hashtag-generator",
    kicker: "Discovery",
    title: "Niche Hashtags",
    desc: "Mix of broad, mid, and long-tail tags that avoid spammy look.",
  },
  {
    href: "/tools/link-in-bio",
    kicker: "Conversion",
    title: "Link-in-bio Builder",
    desc: "Fast, no-login page with buttons and branding. Shareable URL.",
  },
];
