"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { Thought } from "@/data/thoughts";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function ThoughtsFeed({ thoughts }: { thoughts: Thought[] }) {
  const categories = ["All", "Business", "Tech", "Learnings", "Off topic", "AI"] as const;
  type Category = (typeof categories)[number];

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const map = new Map<Category, number>();
    for (const c of categories) map.set(c, 0);
    map.set("All", thoughts.length);
    for (const t of thoughts) {
      map.set(t.category, (map.get(t.category) ?? 0) + 1);
    }
    return map as Map<Category, number>;
  }, [thoughts]);

  const filtered = useMemo(() => {
    const query = normalize(q);
    return thoughts.filter((t) => {
      const matchesCategory = activeCategory === "All" ? true : t.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const hay = normalize(`${t.title} ${t.excerpt} ${t.category} ${(t.tags ?? []).join(" ")}`);
      return hay.includes(query);
    });
  }, [thoughts, activeCategory, q]);

  return (
    <section className="space-y-8">
      <div className="rounded-[2.75rem] border border-border/40 bg-muted/[0.01] card-surface p-6 md:p-10 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {categories.map((cat) => {
              const active = cat === activeCategory;
              const count = counts.get(cat) ?? 0;
              return (
                <Button
                  key={cat}
                  type="button"
                  variant={active ? "default" : "outline"}
                  size="sm"
                  className={[
                    "rounded-full px-4",
                    active
                      ? "shadow-lg shadow-black/10"
                      : "border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/[0.06]",
                  ].join(" ")}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  <span className="text-xs opacity-60 tabular-nums">{count}</span>
                </Button>
              );
            })}
          </div>

          <div className="w-full lg:w-[420px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search thoughts..."
                className="h-11 rounded-full pl-11 pr-11 border-border/40 bg-background"
              />
              {q ? (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-muted/[0.08] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground/70 text-center lg:text-left">
          Showing <span className="text-foreground/70 tabular-nums">{filtered.length}</span> of{" "}
          <span className="text-foreground/70 tabular-nums">{thoughts.length}</span>
        </div>
      </div>

      <div className="space-y-6">
        {filtered.map((thought) => (
          <Link
            key={thought.slug}
            href={`/thoughts/${thought.slug}`}
            className="group no-underline block rounded-[2.75rem] border border-border/40 bg-muted/[0.01] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500 card-surface"
          >
            <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-14 p-6 md:p-12 items-center">
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden rounded-[2.25rem] border border-border/40 shadow-2xl shadow-black/5 bg-background">
                  <img
                    src={thought.image}
                    alt={thought.title}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="space-y-5 px-2 md:px-0">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-sm text-muted-foreground/70 font-normal">
                    {thought.date}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-md text-[11px] px-2.5 py-0.5 border-none shadow-none font-normal bg-foreground/5 text-foreground/70">
                      {thought.category}
                    </Badge>
                    {thought.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        className="rounded-md text-[11px] px-2.5 py-0.5 border border-border/30 bg-background text-muted-foreground/80 shadow-none font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-foreground/90 group-hover:text-foreground transition-colors">
                  {thought.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground/80 font-normal leading-relaxed max-w-2xl">
                  {thought.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors">
                  Read{" "}
                  <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


