"use client";

import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-16 items-center text-center lg:text-left">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tightest leading-[0.9]">
                Ali Abassi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-2xl leading-relaxed">
                AI Forward Deployed Engineer. Building production-grade AI interfaces and scalable LLM infrastructure.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-medium shadow-xl shadow-black/5 hover:shadow-black/10 transition-all">
                <Link href="/work" className="no-underline">
                  Explore Work <ArrowRight className="ml-3 w-5 h-5 opacity-50" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-10 h-14 text-base font-medium hover:bg-muted">
                <Link href="/about" className="no-underline">About</Link>
              </Button>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start pt-4 text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="GitHub">
                <Github className="w-7 h-7 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="X (Twitter)">
                <Twitter className="w-7 h-7 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="LinkedIn">
                <Linkedin className="w-7 h-7 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 group-hover:scale-110 opacity-60 group-hover:opacity-100"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-[500px] aspect-square relative group">
            <div className="absolute -inset-4 bg-muted/5 rounded-[3rem] blur-2xl group-hover:opacity-75 transition-opacity" />
            <div className="w-full h-full border border-border/30 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 bg-background relative z-10 transition-transform duration-700 group-hover:scale-[1.01]">
              <ThreeScene />
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/30 rounded-2xl text-[10px] font-medium uppercase tracking-widest text-muted-foreground/40 pointer-events-none">
                Interactive 3D
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 border-t border-border/30 space-y-16">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              A design-driven approach to engineering.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
              Specializing in taking complex LLM capabilities and turning them into production-grade interfaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href="/work" className="group no-underline block p-12 border border-border/30 rounded-[3rem] hover:border-foreground/30 transition-all bg-muted/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <ArrowRight className="w-24 h-24 -rotate-45" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex gap-2">
                  <Badge className="bg-blue-50/50 text-blue-600 border-none rounded-md font-medium text-xs px-2 py-0.5 shadow-none">AI</Badge>
                  <Badge className="bg-purple-50/50 text-purple-600 border-none rounded-md font-medium text-xs px-2 py-0.5 shadow-none">Implementation</Badge>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight">Work Experience</h3>
                <p className="text-lg text-muted-foreground font-normal">Detailed history of roles at Lindy AI, Bland AI, and IBM.</p>
                <div className="pt-4 flex items-center gap-2 font-medium text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                  View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-50" />
                </div>
              </div>
            </Link>

            <Link href="/tools" className="group no-underline block p-12 border border-border/30 rounded-[3rem] hover:border-foreground/30 transition-all bg-muted/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <ArrowRight className="w-24 h-24 -rotate-45" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex gap-2">
                  <Badge className="bg-green-50/50 text-green-600 border-none rounded-md font-medium text-xs px-2 py-0.5 shadow-none">3D</Badge>
                  <Badge className="bg-orange-50/50 text-orange-600 border-none rounded-md font-medium text-xs px-2 py-0.5 shadow-none">Experiments</Badge>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight">Tools & Lab</h3>
                <p className="text-lg text-muted-foreground font-normal">Technical prototypes, mini-projects, and 3D experiments.</p>
                <div className="pt-4 flex items-center gap-2 font-medium text-sm text-foreground/60 group-hover:text-foreground transition-colors">
                  Enter Laboratory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-50" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="py-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-muted-foreground/40 uppercase tracking-[0.3em]">
          <p>Designed for speed, built for the future.</p>
          <div className="flex gap-10">
            <Link href="/work" className="hover:text-foreground no-underline transition-colors">Work</Link>
            <Link href="/tools" className="hover:text-foreground no-underline transition-colors">Tools</Link>
            <Link href="/about" className="hover:text-foreground no-underline transition-colors">About</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
