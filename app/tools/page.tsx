export default function ToolsLanding() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Creator Toolkit</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <a key={t.href} href={t.href} className="card p-5 hover:border-brand-500/50 transition-colors">
            <div className="text-sm text-brand-300 font-medium">{t.kicker}</div>
            <div className="text-xl font-semibold mt-1">{t.title}</div>
            <p className="text-slate-400 mt-2 text-sm">{t.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

const tools = [
  { href: "/tools/utm-builder", kicker: "Tracking", title: "Affiliate UTM Link Builder", desc: "Add UTM to your links to measure results." },
  { href: "/tools/hook-generator", kicker: "Hook", title: "Scroll-Stopping Hooks", desc: "Templated hooks that adapt to niche and offer." },
  { href: "/tools/script-generator", kicker: "Script", title: "30?45s Script Generator", desc: "Structure that sells without sounding salesy." },
  { href: "/tools/caption-generator", kicker: "Caption", title: "Caption + CTA Generator", desc: "Captions optimized for Reels/Shorts descriptions." },
  { href: "/tools/hashtag-generator", kicker: "Discovery", title: "Hashtag Generator", desc: "Smart mix of broad/medium/niche tags." },
  { href: "/tools/link-in-bio", kicker: "Conversion", title: "Link-in-bio Builder", desc: "Create a clean micro-landing in minutes." },
  { href: "/tools/calendar", kicker: "Consistency", title: "Content Calendar", desc: "Simple weekly posting plan that compounds." },
  { href: "/tools/thumbnail-ideas", kicker: "CTR", title: "Thumbnail & Cover Ideas", desc: "Headline and visual angles that pop." },
];
