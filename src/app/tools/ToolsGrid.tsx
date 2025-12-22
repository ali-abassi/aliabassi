"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Tool, ToolCostKey } from "@/data/tools";

const costStyles: Record<ToolCostKey, string> = {
  tool: "bg-emerald-50/60 text-emerald-700/80 dark:bg-emerald-500/10 dark:text-emerald-300/80",
  brand: "bg-slate-50/60 text-slate-700/80 dark:bg-slate-500/10 dark:text-slate-300/80",
};

const filterLabels: Record<"all" | ToolCostKey, string> = {
  all: "All",
  tool: "Tools",
  brand: "Brands",
};

export function ToolsGrid({ tools }: { tools: Tool[] }) {
  const [filter, setFilter] = useState<"all" | ToolCostKey>("all");

  const counts = useMemo(() => {
    const c: Record<"all" | ToolCostKey, number> = {
      all: tools.length,
      tool: 0,
      brand: 0,
    };
    for (const t of tools) c[t.costKey] += 1;
    return c;
  }, [tools]);

  const visible = useMemo(() => {
    if (filter === "all") return tools;
    return tools.filter((t) => t.costKey === filter);
  }, [filter, tools]);

  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(Object.keys(filterLabels) as Array<"all" | ToolCostKey>).map((key) => {
          const active = filter === key;
          return (
            <Button
              key={key}
              type="button"
              variant={active ? "default" : "outline"}
              size="sm"
              className={[
                "rounded-full px-4",
                active
                  ? "shadow-lg shadow-black/10"
                  : "border-border/40 text-muted-foreground hover:text-foreground",
              ].join(" ")}
              onClick={() => setFilter(key)}
            >
              {filterLabels[key]}
              <span className="text-xs opacity-60 tabular-nums">{counts[key]}</span>
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visible.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group block no-underline"
          >
            <div className="rounded-[2.5rem] border border-border/40 bg-muted/[0.01] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500 p-8 md:p-10 space-y-8 h-full card-surface">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-border/40 bg-background flex items-center justify-center text-sm font-medium text-foreground/70 shadow-sm">
                    {tool.logoText}
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/90">
                      {tool.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-md text-[11px] px-2.5 py-0.5 border border-border/30 bg-background text-muted-foreground/80 shadow-none font-normal">
                        {tool.category}
                      </Badge>
                      <Badge
                        className={`rounded-md text-[11px] px-2.5 py-0.5 border-none shadow-none font-normal ${
                          costStyles[tool.costKey]
                        }`}
                      >
                        {tool.costLabel}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-10 h-10 rounded-full border border-border/40 bg-background flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-border/70 transition-all">
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </div>
              </div>

              <p className="text-lg text-muted-foreground/80 font-normal leading-relaxed">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


