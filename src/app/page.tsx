"use client";

import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-16 items-center text-center lg:text-left">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tightest leading-[0.9]">
                Ali Abassi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                Senior AI Implementation Engineer. Building production-grade AI interfaces and scalable LLM infrastructure.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-bold uppercase tracking-widest shadow-xl shadow-black/10 hover:shadow-black/20 transition-all">
                <Link href="/work" className="no-underline">
                  Explore Work <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-10 h-14 text-base font-bold uppercase tracking-widest hover:bg-muted">
                <Link href="/about" className="no-underline">About</Link>
              </Button>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start pt-4 text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="GitHub">
                <Github className="w-7 h-7 group-hover:scale-110" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="X (Twitter)">
                <Twitter className="w-7 h-7 group-hover:scale-110" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="LinkedIn">
                <Linkedin className="w-7 h-7 group-hover:scale-110" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all group" title="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 group-hover:scale-110"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-[500px] aspect-square relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-[3rem] blur-3xl group-hover:opacity-75 transition-opacity" />
            <div className="w-full h-full border border-border rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 bg-background relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <ThreeScene />
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border rounded-2xl text-[10px] font-black uppercase tracking-widest pointer-events-none">
                Interactive 3D
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 border-t space-y-16">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tightest">
              A design-driven approach to engineering.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Specializing in taking complex LLM capabilities and turning them into production-grade interfaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href="/work" className="group no-underline block p-12 border rounded-[3rem] hover:border-foreground transition-all bg-muted/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowRight className="w-24 h-24 -rotate-45" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-700 border-none rounded-full uppercase text-[10px] font-black tracking-widest px-3 py-1">AI</Badge>
                  <Badge className="bg-purple-100 text-purple-700 border-none rounded-full uppercase text-[10px] font-black tracking-widest px-3 py-1">Implementation</Badge>
                </div>
                <h3 className="text-3xl font-black tracking-tight">Work History</h3>
                <p className="text-lg text-muted-foreground font-medium">Detailed history of roles at Lindy AI, Bland AI, and IBM.</p>
                <div className="pt-4 flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                  View Experience <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link href="/tools" className="group no-underline block p-12 border rounded-[3rem] hover:border-foreground transition-all bg-muted/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowRight className="w-24 h-24 -rotate-45" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex gap-2">
                  <Badge className="bg-green-100 text-green-700 border-none rounded-full uppercase text-[10px] font-black tracking-widest px-3 py-1">3D</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-none rounded-full uppercase text-[10px] font-black tracking-widest px-3 py-1">Experiments</Badge>
                </div>
                <h3 className="text-3xl font-black tracking-tight">Tools & Lab</h3>
                <p className="text-lg text-muted-foreground font-medium">Technical prototypes, mini-projects, and 3D experiments.</p>
                <div className="pt-4 flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                  Enter Laboratory <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="py-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-muted-foreground uppercase tracking-widest">
          <p className="tracking-tighter">Designed for speed, built for the future.</p>
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
