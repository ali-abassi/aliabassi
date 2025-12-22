"use client";

import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl tracking-tightest">
                Ali Abassi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl">
                Senior AI Implementation Engineer. Building the intersection of AI, design, and technical engineering.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold">
                <Link href="/work" className="no-underline">
                  View Work <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8 font-semibold">
                <Link href="/about" className="no-underline">About Me</Link>
              </Button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4 text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="X (Twitter)">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-[400px] aspect-square relative">
            <div className="absolute inset-0 bg-muted/20 rounded-3xl blur-3xl -z-10" />
            <div className="w-full h-full border border-border rounded-3xl overflow-hidden shadow-2xl shadow-black/5 bg-background">
              <ThreeScene />
            </div>
          </div>
        </section>

        {/* Featured Projects / Intro Section */}
        <section className="py-24 border-t space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              A design-driven approach to AI.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl font-medium">
              I specialize in taking complex LLM capabilities and turning them into production-grade, human-sounding interfaces that solve real business problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/work" className="group no-underline block p-8 border rounded-3xl hover:border-foreground transition-all">
              <h3 className="text-2xl font-bold mb-4 group-hover:underline">Work</h3>
              <p className="text-muted-foreground">Detailed history of roles at Lindy AI, Bland AI, and IBM.</p>
            </Link>
            <Link href="/tools" className="group no-underline block p-8 border rounded-3xl hover:border-foreground transition-all">
              <h3 className="text-2xl font-bold mb-4 group-hover:underline">Tools</h3>
              <p className="text-muted-foreground">Mini projects and experiments in the AI/3D space.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
