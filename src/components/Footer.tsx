"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-6 space-y-10">
            <Link href="/" className="text-4xl font-bold tracking-tight">
              Ali Abassi
            </Link>
            <p className="max-w-md text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Engineering the future of AI interfaces through design-driven implementation.
            </p>
            <div className="flex gap-8">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" title="X (Twitter)">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" title="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" title="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@aliabassi.com" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110" title="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Navigation</h4>
            <ul className="space-y-6 text-lg font-bold">
              <li><Link href="/" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">Home <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/work" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">Work <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/tools" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">Tools <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/about" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">About <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Latest</h4>
            <ul className="space-y-6 text-lg font-bold">
              <li><Link href="/content" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">Content <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><a href="/sitemap.xml" className="group flex items-center gap-2 hover:text-foreground transition-colors no-underline text-muted-foreground font-semibold">Sitemap <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></a ></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <p className="text-center md:text-left">Designed for speed, built for the future.</p>
          <p className="text-center md:text-right">The personal site of Ali Abassi.</p>
        </div>
      </div>
    </footer>
  );
}
