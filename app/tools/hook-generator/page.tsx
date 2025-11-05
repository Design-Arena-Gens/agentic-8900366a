"use client";

import { useEffect, useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";

const templates = [
  "I tried {product} so you don't have to",
  "Stop scrolling if you {pain}",
  "{audience}: this changes everything",
  "The {timeframe} {promise} challenge",
  "3 reasons {product} is worth it (number 2!)",
  "What nobody tells you about {product}",
  "If you're tired of {pain}, watch this",
  "I swapped {old_way} for {product} for {timeframe}",
  "POV: you need {promise} on a budget",
];

function fillTemplate(t: string, vars: Record<string, string>) {
  return t.replace(/\{(.*?)\}/g, (_, k) => vars[k] || "");
}

export default function HookGeneratorPage() {
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [pain, setPain] = useState("");
  const [promise, setPromise] = useState("");
  const [oldWay, setOldWay] = useState("");
  const [timeframe, setTimeframe] = useState("30 days");
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    const s = Math.floor(Math.random() * 100000);
    setSeed(s);
  }, []);

  const hooks = useMemo(() => {
    const vars = { product, audience, pain, promise, old_way: oldWay, timeframe };
    return templates.map((t) => fillTemplate(t, vars)).filter((h) => h.trim().length > 0);
  }, [product, audience, pain, promise, oldWay, timeframe, seed]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scroll-Stopping Hooks</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Product</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., budget fitness smartwatch" />
        </div>
        <div>
          <label className="label">Audience</label>
          <input className="input" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., students, busy professionals" />
        </div>
        <div>
          <label className="label">Pain point</label>
          <input className="input" value={pain} onChange={(e) => setPain(e.target.value)} placeholder="e.g., inconsistent workouts" />
        </div>
        <div>
          <label className="label">Promise</label>
          <input className="input" value={promise} onChange={(e) => setPromise(e.target.value)} placeholder="e.g., get fit without a gym" />
        </div>
        <div>
          <label className="label">Old way (optional)</label>
          <input className="input" value={oldWay} onChange={(e) => setOldWay(e.target.value)} placeholder="e.g., expensive gym membership" />
        </div>
        <div>
          <label className="label">Timeframe</label>
          <input className="input" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} placeholder="e.g., 7 days" />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="section-title">Generated Hooks</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {hooks.map((h, i) => (
            <div key={i} className="card p-4 flex items-center justify-between gap-2">
              <div className="text-slate-200">{h}</div>
              <CopyButton text={h} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
