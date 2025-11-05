"use client";

import { useMemo, useState } from "react";
import { encodeBase64Url } from "@/lib/base64url";
import { CopyButton } from "@/components/CopyButton";

interface LinkItem { label: string; href: string }

export default function LinkInBioBuilder() {
  const [handle, setHandle] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accent, setAccent] = useState("#22d3ee");
  const [links, setLinks] = useState<LinkItem[]>([{ label: "Shop the Deal", href: "" }]);

  function updateLink(i: number, key: keyof LinkItem, value: string) {
    setLinks((prev) => prev.map((l, idx) => (idx === i ? { ...l, [key]: value } : l)));
  }

  const payload = useMemo(() => ({ handle, bio, avatar, accent, links: links.filter(l => l.label && l.href) }), [handle, bio, avatar, accent, links]);

  const shareUrl = useMemo(() => {
    if (!payload.handle || payload.links.length === 0) return "";
    const encoded = encodeBase64Url(payload);
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/l/${encoded}`;
  }, [payload]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Link-in-bio Builder</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card p-5 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">Handle / name</label>
              <input className="input" value={handle} onChange={(e) => setHandle(e.target.value)} placeholder="@yourhandle" />
            </div>
            <div>
              <label className="label">Accent color</label>
              <input className="input" type="color" value={accent} onChange={(e) => setAccent(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Short bio</label>
              <input className="input" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="I test budget gadgets so you don?t have to" />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Avatar image URL (optional)</label>
              <input className="input" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="https://...jpg" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="section-title">Links</div>
            {links.map((l, i) => (
              <div key={i} className="grid gap-2 sm:grid-cols-2">
                <input className="input" placeholder="Button label" value={l.label} onChange={(e) => updateLink(i, "label", e.target.value)} />
                <div className="flex gap-2">
                  <input className="input flex-1" placeholder="https://your-affiliate-link" value={l.href} onChange={(e) => updateLink(i, "href", e.target.value)} />
                  <button className="btn btn-muted" onClick={() => setLinks((prev) => prev.filter((_, idx) => idx !== i))}>Remove</button>
                </div>
              </div>
            ))}
            <button className="btn btn-muted" onClick={() => setLinks((prev) => [...prev, { label: "Another link", href: "" }])}>Add link</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-5 text-center" style={{ borderColor: accent }}>
            {avatar && <img src={avatar} alt="avatar" className="mx-auto h-24 w-24 rounded-full object-cover border border-slate-700" />}
            <div className="mt-4 text-2xl font-bold">{handle || "@yourhandle"}</div>
            <div className="mt-1 text-slate-300">{bio || "Your short bio goes here"}</div>
            <div className="mt-4 space-y-3">
              {payload.links.length === 0 && <div className="text-sm text-slate-400">Add links to preview</div>}
              {payload.links.map((l, i) => (
                <div key={i} className="px-4 py-3 rounded-lg font-medium bg-slate-800 border border-slate-700" style={{ boxShadow: `0 0 0 2px ${accent}20` }}>{l.label}</div>
              ))}
            </div>
          </div>
          <div className="card p-5 space-y-2">
            <div className="label">Share URL</div>
            <div className="flex gap-2">
              <input className="input" readOnly value={shareUrl} placeholder="Complete details to get a shareable URL" />
              <CopyButton text={shareUrl} />
            </div>
            <div className="helper">This URL loads your mini page on {typeof window !== "undefined" ? window.location.host : "this domain"}.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
