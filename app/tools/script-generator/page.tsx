"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

function generateScript({ product, niche, benefit, proof }: { product: string; niche: string; benefit: string; proof: string; }) {
  const lines = [
    { t: "0-3s", text: `Hook: ${benefit ? benefit : `If you're in ${niche}, you need to see this`}` },
    { t: "3-10s", text: `Pain: Tired of struggling with ${niche || "this"}?` },
    { t: "10-18s", text: `Promise: Here's how ${product || "this tool"} helps you ${benefit || "get results"}.` },
    { t: "18-25s", text: `Proof: ${proof || `I tested it for a week?results surprised me.`}` },
    { t: "25-30s", text: `CTA: Tap the link to try ${product || "it"} today.` },
  ];
  return lines;
}

export default function ScriptGeneratorPage({ searchParams }: { searchParams?: { product?: string; niche?: string } }) {
  const [product, setProduct] = useState(searchParams?.product ?? "");
  const [niche, setNiche] = useState(searchParams?.niche ?? "");
  const [benefit, setBenefit] = useState("");
  const [proof, setProof] = useState("");

  const script = useMemo(() => generateScript({ product, niche, benefit, proof }), [product, niche, benefit, proof]);

  const scriptText = script.map((l) => `${l.t} ? ${l.text}`).join("\n");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">30?45s Script Generator</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Product</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., budget fitness smartwatch" />
        </div>
        <div>
          <label className="label">Niche / audience</label>
          <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., students, busy professionals" />
        </div>
        <div>
          <label className="label">Core benefit</label>
          <input className="input" value={benefit} onChange={(e) => setBenefit(e.target.value)} placeholder="e.g., get fit without a gym" />
        </div>
        <div>
          <label className="label">Proof angle</label>
          <input className="input" value={proof} onChange={(e) => setProof(e.target.value)} placeholder="e.g., lost 2kg in 10 days" />
        </div>
      </div>
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Script</h2>
          <CopyButton text={scriptText} />
        </div>
        <div className="space-y-2">
          {script.map((l, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 min-w-[56px] text-center">{l.t}</div>
              <div className="text-slate-200">{l.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
