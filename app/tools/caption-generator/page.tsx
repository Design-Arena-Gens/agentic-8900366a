"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function buildCaption({ product, benefit, link, hashtags }: { product: string; benefit: string; link: string; hashtags: string[] }) {
  const lines = [
    benefit ? `? ${benefit}` : `? This changed my routine`,
    product ? `?? Tried: ${product}` : `?? Tool I use daily`,
    link ? `?? Get it here: ${link}` : `?? Link in bio`,
    hashtags.length ? hashtags.join(" ") : "",
  ].filter(Boolean);
  return lines.join("\n\n");
}

export default function CaptionGeneratorPage() {
  const [product, setProduct] = useState("");
  const [benefit, setBenefit] = useState("");
  const [link, setLink] = useState("");
  const [niche, setNiche] = useState("");

  const hashtags = useMemo(() => generateHashtags(niche, product), [niche, product]);
  const caption = useMemo(() => buildCaption({ product, benefit, link, hashtags }), [product, benefit, link, hashtags]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Caption + CTA Generator</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Product</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., budget fitness smartwatch" />
        </div>
        <div>
          <label className="label">Core benefit</label>
          <input className="input" value={benefit} onChange={(e) => setBenefit(e.target.value)} placeholder="e.g., get fit without a gym" />
        </div>
        <div>
          <label className="label">Affiliate link (optional)</label>
          <input className="input" value={link} onChange={(e) => setLink(e.target.value)} placeholder="e.g., https://example.com/?ref=you" />
        </div>
        <div>
          <label className="label">Niche</label>
          <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., fitness, gadgets" />
        </div>
      </div>
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Caption</h2>
          <CopyButton text={caption} />
        </div>
        <textarea className="textarea min-h-[180px]" readOnly value={caption} />
        <div>
          <div className="label">Suggested hashtags</div>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((h) => (
              <span key={h} className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-sm">{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function generateHashtags(niche: string, product: string): string[] {
  const base = (niche + " " + product).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const unique = Array.from(new Set(base)).slice(0, 5);
  const broad = ["#fyp", "#viral", "#reels", "#shorts"];
  const nicheTags = unique.map((k) => `#${k}`).slice(0, 6);
  const combo = [
    ...nicheTags,
    ...unique.map((k) => `#${k}tips`).slice(0, 4),
    ...unique.map((k) => `#best${k}`).slice(0, 2),
  ];
  const final = Array.from(new Set([...combo, ...broad])).slice(0, 15);
  return final;
}
