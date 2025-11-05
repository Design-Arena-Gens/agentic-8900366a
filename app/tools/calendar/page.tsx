"use client";

import { useMemo, useState } from "react";

const defaultSlots = [
  { day: "Mon", time: "6pm", type: "Reel/Short" },
  { day: "Tue", time: "9am", type: "Story" },
  { day: "Wed", time: "6pm", type: "Reel/Short" },
  { day: "Thu", time: "12pm", type: "Community post" },
  { day: "Fri", time: "6pm", type: "Reel/Short" },
  { day: "Sat", time: "10am", type: "Carousel" },
  { day: "Sun", time: "Rest / plan" },
];

export default function CalendarPage() {
  const [niche, setNiche] = useState("");
  const [product, setProduct] = useState("");
  const [goal, setGoal] = useState("awareness");

  const plan = useMemo(() => buildPlan({ niche, product, goal }), [niche, product, goal]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Content Calendar</h1>
      <div className="card p-5 grid gap-3 sm:grid-cols-3">
        <div>
          <label className="label">Niche</label>
          <input className="input" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., fitness, gadgets" />
        </div>
        <div>
          <label className="label">Product</label>
          <input className="input" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="e.g., smartwatch" />
        </div>
        <div>
          <label className="label">Goal</label>
          <select className="select" value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="awareness">Awareness</option>
            <option value="consideration">Consideration</option>
            <option value="conversion">Conversion</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plan.map((slot, idx) => (
          <div key={idx} className="card p-5 space-y-2">
            <div className="text-brand-300 text-sm font-medium">{slot.day} ? {slot.time} ? {slot.type}</div>
            <div className="text-lg font-semibold">{slot.title}</div>
            <div className="text-slate-400 text-sm">Hook: {slot.hook}</div>
            <div className="text-slate-400 text-sm">CTA: {slot.cta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function buildPlan({ niche, product, goal }: { niche: string; product: string; goal: string; }) {
  return defaultSlots.map((s, i) => ({
    ...s,
    title: choose([
      `Do this if you're in ${niche || "this niche"}`,
      `${product || "This tool"} vs old way` ,
      `3 reasons ${product || "this"} works` ,
      `How I use ${product || "it"} daily` ,
      `POV: ${benefitFromGoal(goal)}` ,
    ], i),
    hook: choose([
      `Stop scrolling if you ${painFromNiche(niche)}`,
      `The budget way to ${benefitFromGoal(goal)}`,
      `I tried ${product || "this"} so you don't have to`,
    ], i),
    cta: choose([
      `Tap link to try ${product || "it"}`,
      `DM me '${keyword(goal)}' for the link` ,
      `Full link in bio` ,
    ], i),
  }));
}

function choose<T>(arr: T[], i: number): T { return arr[i % arr.length]; }
function painFromNiche(n: string) { return n ? `struggle with ${n}` : "struggle with this"; }
function benefitFromGoal(g: string) {
  switch (g) {
    case "consideration": return "decide faster";
    case "conversion": return "save time and money";
    default: return "get results";
  }
}
function keyword(g: string) { return g === "conversion" ? "BUY" : g === "consideration" ? "INFO" : "START"; }
