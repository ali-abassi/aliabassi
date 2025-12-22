import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { builderItems, employeeItems } from "@/data/work";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Employee roles and builder projects by Ali Abassi — AI Forward Deployed Engineer.",
};

type Props = {
  searchParams?:
    | {
        view?: string | string[];
      }
    | Promise<{
        view?: string | string[];
      }>;
};

function TabLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "px-5 py-2.5 rounded-full text-sm font-medium no-underline transition-all",
        active
          ? "bg-foreground text-background shadow-lg shadow-black/10"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/[0.06] border border-border/40",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function WorkCard({
  slug,
  name,
  url,
  logo,
  role,
  timeframe,
  location,
  oneLiner,
  highlights,
  tags,
}: (typeof employeeItems)[number]) {
  return (
    <div className="group rounded-[2.75rem] border border-border/40 bg-muted/[0.01] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 p-6 md:p-12">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {logo ? (
                <div className="w-14 h-14 rounded-2xl border border-border/40 bg-background flex items-center justify-center p-3 shadow-sm">
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="max-h-full max-w-full"
                  />
                </div>
              ) : null}
              <div className="space-y-1">
                <div className="text-lg font-medium text-foreground/90">
                  {name}
                </div>
                <div className="text-sm text-muted-foreground/70 font-normal">
                  {timeframe}
                  {location ? ` · ${location}` : ""}
                </div>
              </div>
            </div>

            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-11 h-11 rounded-full border border-border/40 bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/70 transition-all"
                title={`Open ${name}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>

          {tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
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

        <div className="space-y-6">
          <div className="space-y-2">
            <Link href={`/work/${slug}`} className="no-underline block space-y-2">
              <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                {role}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground/80 font-normal leading-relaxed max-w-3xl">
                {oneLiner}
              </p>
            </Link>
          </div>

          <ul className="space-y-3 text-base md:text-lg text-muted-foreground/80 font-normal leading-relaxed">
            {highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/15 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <Link
            href={`/work/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors no-underline"
          >
            View details{" "}
            <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function WorkPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};
  const rawView = sp.view;
  const viewParam = Array.isArray(rawView) ? rawView[0] : rawView;
  const view = viewParam === "builder" ? "builder" : "employee";
  const items = view === "builder" ? builderItems : employeeItems;

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <header className="space-y-10">
        <div className="space-y-5 max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">
            Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            Two views: where I’ve worked (Employee) and what I’ve shipped (Builder). Each entry links to a dedicated page with deeper context.
          </p>
        </div>

        <div className="flex items-center justify-start gap-2">
          <TabLink href="/work?view=employee" active={view === "employee"}>
            Employee
          </TabLink>
          <TabLink href="/work?view=builder" active={view === "builder"}>
            Builder
          </TabLink>
        </div>
      </header>

      <section className="space-y-6">
        {items.map((item) => (
          <WorkCard key={item.slug} {...item} />
        ))}
      </section>
    </main>
  );
}
