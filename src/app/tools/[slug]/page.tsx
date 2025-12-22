import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getTool, tools } from "@/data/tools";

type Props = {
  params: Promise<{ slug: string }>;
};

const costBadgeStyles: Record<string, string> = {
  Free: "bg-emerald-50/60 text-emerald-700/80 dark:bg-emerald-500/10 dark:text-emerald-300/80",
  Brand: "bg-slate-50/60 text-slate-700/80 dark:bg-slate-500/10 dark:text-slate-300/80",
};

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};

  return {
    title: `${tool.title}`,
    description: tool.description,
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: "article",
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <main className="min-h-screen bg-background pb-32">
      <div className="max-w-6xl mx-auto px-6 pt-32 space-y-16">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Tools
        </Link>

        <header className="space-y-8 text-center max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-2xl border border-border/40 bg-background flex items-center justify-center text-sm font-medium text-foreground/70 shadow-sm mx-auto">
            {tool.logoText}
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">
            {tool.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            {tool.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Badge className="rounded-md text-[11px] px-2.5 py-0.5 border border-border/30 bg-background text-muted-foreground/80 shadow-none font-normal">
              {tool.category}
            </Badge>
            <Badge
              className={`rounded-md text-[11px] px-2.5 py-0.5 border-none shadow-none font-normal ${
                tool.costKey === "free"
                  ? costBadgeStyles.Free
                  : tool.costKey === "brand"
                    ? costBadgeStyles.Brand
                    : "bg-blue-50/60 text-blue-700/80 dark:bg-blue-500/10 dark:text-blue-300/80"
              }`}
            >
              {tool.costLabel}
            </Badge>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-0 space-y-10 border-t border-border/40 pt-16">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Status
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
              This is a placeholder tool page template. Next we can build the actual
              tool UI and wire it into this route.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              What you’ll see here
            </h2>
            <ul className="space-y-3 text-lg md:text-xl text-muted-foreground/85 font-normal leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span>A clean, minimal tool interface</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span>Simple inputs and immediate output</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span>SEO-friendly copy and structured sections</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}


