import { decodeBase64Url } from "@/lib/base64url";

export const dynamic = "force-static";

export default function LinkInBioPage({ params }: { params: { data: string } }) {
  const data = decodeBase64Url<LinkData>(params.data);
  if (!data) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Invalid Link</h1>
        <p className="text-slate-300">The shared link is invalid or expired. Ask the creator to resend.</p>
      </div>
    );
  }

  const accent = data.accent || "#22d3ee";

  return (
    <div className="mx-auto max-w-md w-full">
      <div className="card p-6 text-center" style={{ borderColor: accent }}>
        {data.avatar && (
          <img src={data.avatar} alt="avatar" className="mx-auto h-24 w-24 rounded-full object-cover border border-slate-700" />
        )}
        <h1 className="mt-4 text-2xl font-bold">{data.handle || "Creator"}</h1>
        {data.bio && <p className="mt-2 text-slate-300">{data.bio}</p>}
        <div className="mt-6 space-y-3">
          {data.links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="block w-full">
              <div className="px-4 py-3 rounded-lg font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700" style={{ boxShadow: `0 0 0 2px ${accent}20` }}>
                {l.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

interface LinkData {
  handle: string;
  bio?: string;
  avatar?: string;
  accent?: string;
  links: { label: string; href: string }[];
}
