"use client";

import { useMemo, useState } from "react";

export default function ThumbnailIdeasPage() {
  const [product, setProduct] = useState("");
  const [benefit, setBenefit] = useState("");
  const [niche, setNiche] = useState("");

  const ideas = useMemo(() => buildIdeas(product, benefit, niche), [product, benefit, niche]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Thumbnail & Cover Ideas</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-3">
        <div>
          <label className="label">Product</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., smartwatch" />
        </div>
        <div>
          <label className="label">Benefit</label>
          <input className="input" value={benefit} onChange={(e) => setBenefit(e.target.value)} placeholder="e.g., get fit without a gym" />
        </div>
        <div>
          <label className="label">Niche</label>
          <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., fitness, productivity" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((i, idx) => (
          <div key={idx} className="card p-5 space-y-2">
            <div className="text-brand-300 text-sm font-medium">Angle {idx + 1}</div>
            <div className="text-lg font-semibold">{i.headline}</div>
            <div className="text-slate-400 text-sm">Visual: {i.visual}</div>
            <div className="text-slate-400 text-sm">Text overlay: {i.overlay}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function buildIdeas(product: string, benefit: string, niche: string) {
  const p = product || "this";
  const b = benefit || "do more with less";
  const n = niche || "your routine";
  return [
    {
      headline: `I replaced ${n} with ${p}`,
      visual: "Before/after split with expressions",
      overlay: `${b}`,
    },
    {
      headline: `${p} in 30 seconds` ,
      visual: "Handheld close-up, fast cuts",
      overlay: `Why it helps you ${b}`,
    },
    {
      headline: `Why I stopped using X for ${n}`,
      visual: `Throw old item off frame, reveal ${p}`,
      overlay: `${p} vs Old Way`,
    },
    {
      headline: `Top 3 reasons ${p} is worth it`,
      visual: "Count-up with oversized numbers",
      overlay: `${b}`,
    },
    {
      headline: `The budget way to ${b}`,
      visual: "Price tag vs result",
      overlay: `${p}`,
    },
    {
      headline: `POV: ${b}`,
      visual: "First-person usage, natural lighting",
      overlay: `${p}`,
    },
  ];
}
