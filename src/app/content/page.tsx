import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { thoughts } from "@/data/thoughts";

export const metadata: Metadata = {
  title: "Content & Thoughts",
  description: "Connect with Ali Abassi and follow his latest thoughts, experiments, and updates on AI engineering.",
};

const platforms = [
  { name: "X", icon: Twitter, url: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/aliabassi1/" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

export default function ContentPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-28">
      {/* Socials Section */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Content</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal">
              Learnings, experiments, and updates across the technical landscape.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            {platforms.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-muted/[0.02] border border-border/40 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 shadow-sm group"
                title={social.name}
              >
                <social.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Thoughts Section */}
      <section className="space-y-14 border-t border-border/40 pt-20">
        <div className="space-y-4 text-center md:text-left max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Thoughts</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            Deep-dives into AI orchestration, design systems, and technical leadership.
          </p>
        </div>

        <div className="space-y-6">
          {thoughts.map((thought) => (
            <Link 
              key={thought.slug} 
              href={`/thoughts/${thought.slug}`}
              className="group no-underline block rounded-[2.75rem] border border-border/40 bg-muted/[0.01] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500"
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
                  <div className="text-sm text-muted-foreground/70 font-normal">
                    {thought.date}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-foreground/90 group-hover:text-foreground transition-colors">
                    {thought.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground/80 font-normal leading-relaxed max-w-2xl">
                    {thought.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors">
                    Read <ArrowRight className="w-4 h-4 opacity-35 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
