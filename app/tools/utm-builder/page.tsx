"use client";

import { useMemo, useState } from "react";
import { buildUtmUrl } from "@/lib/utm";
import { CopyButton } from "@/components/CopyButton";

export default function UTMBuilderPage() {
  const [base, setBase] = useState("");
  const [source, setSource] = useState("instagram");
  const [medium, setMedium] = useState("reel");
  const [campaign, setCampaign] = useState("");
  const [content, setContent] = useState("");
  const [term, setTerm] = useState("");

  const url = useMemo(() => buildUtmUrl(base, {
    utm_source: source || undefined,
    utm_medium: medium || undefined,
    utm_campaign: campaign || undefined,
    utm_content: content || undefined,
    utm_term: term || undefined,
  }), [base, source, medium, campaign, content, term]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Affiliate UTM Link Builder</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5 space-y-4">
          <div>
            <label className="label">Base affiliate link</label>
            <input className="input" value={base} onChange={(e) => setBase(e.target.value)} placeholder="https://example.com/?ref=YOURID" />
            <p className="helper mt-1">Paste your raw affiliate URL.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="label">utm_source</label>
              <input className="input" value={source} onChange={(e) => setSource(e.target.value)} placeholder="instagram, youtube" />
            </div>
            <div>
              <label className="label">utm_medium</label>
              <input className="input" value={medium} onChange={(e) => setMedium(e.target.value)} placeholder="reel, short, story, bio" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="label">utm_campaign</label>
              <input className="input" value={campaign} onChange={(e) => setCampaign(e.target.value)} placeholder="launch, top5, comparison" />
            </div>
            <div>
              <label className="label">utm_content</label>
              <input className="input" value={content} onChange={(e) => setContent(e.target.value)} placeholder="hookA, variant2" />
            </div>
            <div>
              <label className="label">utm_term</label>
              <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="keyword (optional)" />
            </div>
          </div>
        </div>
        <div className="card p-5 space-y-3">
          <label className="label">Trackable link</label>
          <div className="flex gap-2">
            <input className="input" readOnly value={url} placeholder="Your UTM link will appear here" />
            <CopyButton text={url} />
          </div>
          <div className="text-sm text-slate-400">
            Tip: For Instagram bio, shorten with a reputable shortener or use the link-in-bio page.
          </div>
        </div>
      </div>
    </div>
  );
}
