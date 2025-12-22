"use client";

import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { employeeItems } from "@/data/work";
import { thoughts } from "@/data/thoughts";
import { tools } from "@/data/tools";

export default function Home() {
  const featuredWork = employeeItems.slice(0, 2);
  const latestThoughts = thoughts.slice(0, 2);
  const featuredTools = tools.slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-28">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-muted/[0.08] to-transparent" />
            <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center text-center lg:text-left">
            <div className="flex-1 space-y-10">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge className="rounded-full px-3 py-1 text-[11px] border border-border/40 bg-background text-muted-foreground/80 shadow-none font-normal">
                  AI Forward Deployed Engineer
                </Badge>
                <Badge className="rounded-full px-3 py-1 text-[11px] border-none bg-blue-50/60 text-blue-700/80 dark:bg-blue-500/10 dark:text-blue-300/80 shadow-none font-normal">
                  Voice agents
                </Badge>
                <Badge className="rounded-full px-3 py-1 text-[11px] border-none bg-purple-50/60 text-purple-700/80 dark:bg-purple-500/10 dark:text-purple-300/80 shadow-none font-normal">
                  Design-driven systems
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tightest leading-[0.9]">
                  Ali Abassi
          </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  I build production-grade AI experiences—agent orchestration, voice UX, and the systems that make it reliable at scale.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 h-14 text-base font-medium shadow-xl shadow-black/5 hover:shadow-black/10 transition-all"
                >
                  <Link href="/work" className="no-underline">
                    View Work <ArrowRight className="ml-3 w-5 h-5 opacity-50" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 h-14 text-base font-medium border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/[0.06]"
                >
                  <Link href="/content" className="no-underline">
                    Read Thoughts
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 h-14 text-base font-medium hover:bg-muted/[0.06]"
                >
                  <Link href="/tools" className="no-underline">
                    Tools
                  </Link>
                </Button>
              </div>

              <div className="flex gap-7 justify-center lg:justify-start pt-2 text-muted-foreground">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all group"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all group"
                  title="X (Twitter)"
                >
                  <Twitter className="w-6 h-6 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                </a>
                <a
                  href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="hover:text-foreground transition-all group"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
          </a>
          <a
                  href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="hover:text-foreground transition-all group"
                  title="YouTube"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full max-w-[520px] aspect-square relative group">
              <div className="absolute -inset-6 bg-muted/10 rounded-[3.25rem] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-px rounded-[2.75rem] bg-gradient-to-b from-border/60 to-transparent opacity-70 pointer-events-none" />
              <div className="w-full h-full border border-border/30 rounded-[2.75rem] overflow-hidden shadow-2xl shadow-black/5 bg-background relative z-10 transition-transform duration-700 group-hover:scale-[1.01]">
                <ThreeScene />
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/30 rounded-2xl text-[11px] font-medium text-muted-foreground/60 pointer-events-none">
                  Interactive 3D
                </div>
              </div>
            </div>
          </div>

          {/* Proof strip */}
          <div className="pt-16">
            <div className="text-center text-sm text-muted-foreground/70 font-normal">
              Shipped with teams at
            </div>
            <div className="mt-6 border border-border/30 rounded-[2rem] bg-muted/[0.02] overflow-hidden">
              <div className="mask-fade-x">
                <div className="flex w-[200%] animate-marquee">
                  <div className="flex w-1/2 items-center justify-around px-10 py-8">
                    {["Lindy AI", "Bland AI", "IBM", "Gravitiq", "AI for Work"].map(
                      (x) => (
                        <div
                          key={x}
                          className="text-sm md:text-base text-foreground/60 font-medium tracking-tight"
                        >
                          {x}
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex w-1/2 items-center justify-around px-10 py-8">
                    {["Lindy AI", "Bland AI", "IBM", "Gravitiq", "AI for Work"].map(
                      (x) => (
                        <div
                          key={`${x}-dup`}
                          className="text-sm md:text-base text-foreground/60 font-medium tracking-tight"
                        >
                          {x}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="border-t border-border/30 pt-20 space-y-14">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              Design-driven implementation, shipped fast.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
              I work where product meets engineering—turning ambiguous requirements into reliable agent systems people trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <Link
                href="/work"
                className="group no-underline block rounded-[3rem] border border-border/30 bg-muted/[0.02] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500 overflow-hidden"
              >
                <div className="p-10 md:p-12 space-y-8">
                  <div className="flex items-start justify-between gap-8">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="rounded-md font-normal text-[11px] px-2.5 py-0.5 border-none shadow-none bg-blue-50/60 text-blue-700/80 dark:bg-blue-500/10 dark:text-blue-300/80">
                          Employee
                        </Badge>
                        <Badge className="rounded-md font-normal text-[11px] px-2.5 py-0.5 border-none shadow-none bg-pink-50/60 text-pink-700/80 dark:bg-pink-500/10 dark:text-pink-300/80">
                          Builder
                        </Badge>
                      </div>
                      <div className="text-3xl md:text-4xl font-medium tracking-tight text-foreground/90">
                        Work
                      </div>
                      <p className="text-lg md:text-xl text-muted-foreground/80 font-normal leading-relaxed max-w-xl">
                        Clear, scannable roles—each with a dedicated page for deeper context and SEO.
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border/40 bg-background flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-border/70 transition-all">
                      <ArrowUpRight className="w-5 h-5 opacity-60" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredWork.map((w) => (
                      <div
                        key={w.slug}
                        className="rounded-[2rem] border border-border/30 bg-background p-6 space-y-3"
                      >
                        <div className="text-sm text-muted-foreground/70">
                          {w.timeframe}
                        </div>
                        <div className="text-lg font-medium text-foreground/85">
                          {w.name}
                        </div>
                        <div className="text-base text-muted-foreground/80 leading-relaxed">
                          {w.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <Link
                href="/content"
                className="group no-underline block rounded-[3rem] border border-border/30 bg-muted/[0.02] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500"
              >
                <div className="p-10 md:p-12 space-y-8">
                  <div className="flex items-start justify-between gap-8">
                    <div className="space-y-2">
                      <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/90">
                        Thoughts
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground/80 font-normal leading-relaxed">
                        Writing on agent orchestration, UX, and pragmatic engineering.
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-full border border-border/40 bg-background flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-border/70 transition-all">
                      <ArrowUpRight className="w-5 h-5 opacity-60" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {latestThoughts.map((t) => (
                      <div
                        key={t.slug}
                        className="rounded-[2rem] border border-border/30 bg-background p-6 space-y-2"
                      >
                        <div className="text-sm text-muted-foreground/70">
                          {t.date}
                        </div>
                        <div className="text-lg font-medium text-foreground/85 leading-snug">
                          {t.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>

              <Link
                href="/tools"
                className="group no-underline block rounded-[3rem] border border-border/30 bg-muted/[0.02] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500"
              >
                <div className="p-10 md:p-12 space-y-6">
                  <div className="flex items-start justify-between gap-8">
                    <div className="space-y-2">
                      <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/90">
                        Tools
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground/80 font-normal leading-relaxed">
                        Small utilities and brand builds—organized and filterable.
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-full border border-border/40 bg-background flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-border/70 transition-all">
                      <ArrowUpRight className="w-5 h-5 opacity-60" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {featuredTools.map((tool) => (
                      <div
                        key={tool.slug}
                        className="flex items-center justify-between rounded-[2rem] border border-border/30 bg-background px-6 py-4"
                      >
                        <div className="space-y-1">
                          <div className="text-base font-medium text-foreground/85">
                            {tool.title}
                          </div>
                          <div className="text-sm text-muted-foreground/70">
                            {tool.costLabel} · {tool.category}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        </div>
      </main>
  );
}
