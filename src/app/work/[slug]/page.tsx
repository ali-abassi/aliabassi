import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getWorkItem, workItems } from "@/data/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return workItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};

  const title = `${item.name} — ${item.role}`;
  const description = item.oneLiner;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();
  const backHref = item.kind === "builder" ? "/work?view=builder" : "/work?view=employee";

  return (
    <main className="min-h-screen bg-background pb-32">
      <div className="max-w-6xl mx-auto px-6 pt-32 space-y-16">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>

        <header className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center gap-4">
                {item.logo ? (
                  <div className="w-14 h-14 rounded-2xl border border-border/40 bg-background flex items-center justify-center p-3 shadow-sm">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="max-h-full max-w-full"
                    />
                  </div>
                ) : null}
                <div className="space-y-1">
                  <div className="text-lg font-medium text-foreground/90">
                    {item.name}
                  </div>
                  <div className="text-sm text-muted-foreground/70 font-normal">
                    {item.timeframe}
                    {item.location ? ` · ${item.location}` : ""}
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-7xl font-semibold tracking-tightest leading-[1.05]">
                {item.role}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-3xl">
                {item.oneLiner}
              </p>

              {item.tags?.length ? (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag.label}
                      className={`rounded-md text-[11px] px-2.5 py-0.5 border-none shadow-none font-normal ${tag.className}`}
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>

            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border/40 bg-background text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/70 transition-all no-underline"
              >
                Visit {item.kind === "employee" ? "company" : "project"}
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
            ) : null}
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[2rem] border border-border/40 bg-muted/[0.02] p-6 space-y-2">
            <div className="text-sm text-muted-foreground/70 font-normal">Time</div>
            <div className="text-lg font-medium text-foreground/85">{item.timeframe}</div>
          </div>
          <div className="rounded-[2rem] border border-border/40 bg-muted/[0.02] p-6 space-y-2">
            <div className="text-sm text-muted-foreground/70 font-normal">Location</div>
            <div className="text-lg font-medium text-foreground/85">{item.location ?? "—"}</div>
          </div>
          <div className="rounded-[2rem] border border-border/40 bg-muted/[0.02] p-6 space-y-2">
            <div className="text-sm text-muted-foreground/70 font-normal">Focus</div>
            <div className="text-lg font-medium text-foreground/85">
              {item.kind === "employee" ? "Employee role" : "Built and shipped"}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 border-t border-border/40 pt-16">
          <div className="space-y-14">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
                {item.overview}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                What I did
              </h2>
              <ul className="space-y-4 text-lg md:text-xl text-muted-foreground/85 font-normal leading-relaxed">
                {item.whatIDid.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Outcomes
              </h2>
              <ul className="space-y-4 text-lg md:text-xl text-muted-foreground/85 font-normal leading-relaxed">
                {item.outcomes.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 h-fit">
            <div className="rounded-[2.5rem] border border-border/40 bg-muted/[0.02] p-8 space-y-6">
              <h3 className="text-lg font-medium text-foreground/80">
                Toolkit
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <Badge
                    key={tool}
                    className="rounded-md text-[11px] px-2.5 py-0.5 border border-border/30 bg-background text-muted-foreground/80 shadow-none font-normal"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-border/40 bg-muted/[0.02] p-8 space-y-4">
              <h3 className="text-lg font-medium text-foreground/80">
                Quick summary
              </h3>
              <ul className="space-y-3 text-base text-muted-foreground/80 font-normal leading-relaxed">
                {item.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}


