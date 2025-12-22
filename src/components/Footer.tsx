"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Ali Abassi
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground font-medium">
              Senior AI Implementation Engineer focusing on the intersection of AI, design, and technical engineering.
            </p>
            <div className="flex gap-5">
              <a href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@aliabassi.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Home</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Work</Link></li>
              <li><Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Tools</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors no-underline">About</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/content" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Content</Link></li>
              <li><a href="/sitemap.xml" className="text-muted-foreground hover:text-foreground transition-colors no-underline">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Abassi. All rights reserved.</p>
          <p>Built with Next.js, Shadcn, and Three.js.</p>
        </div>
      </div>
    </footer>
  );
}

