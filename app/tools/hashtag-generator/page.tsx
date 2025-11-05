"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

export default function HashtagGeneratorPage() {
  const [niche, setNiche] = useState("");
  const [product, setProduct] = useState("");

  const tags = useMemo(() => generateHashtags(niche, product), [niche, product]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hashtag Generator</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Niche</label>
          <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., fitness, gadgets" />
        </div>
        <div>
          <label className="label">Product (optional)</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., smartwatch" />
        </div>
      </div>
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Suggested Hashtags</h2>
          <CopyButton text={tags.join(" ")} />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((h) => (
            <span key={h} className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-sm">{h}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function generateHashtags(niche: string, product: string): string[] {
  const base = (niche + " " + product).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const unique = Array.from(new Set(base)).slice(0, 5);
  const broad = ["#fyp", "#viral", "#reels", "#shorts"];
  const nicheTags = unique.map((k) => `#${k}`).slice(0, 8);
  const variants = [
    ...unique.map((k) => `#${k}tips`),
    ...unique.map((k) => `#${k}review`),
    ...unique.map((k) => `#best${k}`),
  ];
  const final = Array.from(new Set([...nicheTags, ...variants, ...broad])).slice(0, 20);
  return final;
}
