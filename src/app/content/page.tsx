import { Github, Twitter, Linkedin, ExternalLink, Youtube, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { thoughts } from "@/data/thoughts";

export const metadata: Metadata = {
  title: "Content & Thoughts",
  description: "Connect with Ali Abassi and follow his latest thoughts, experiments, and updates on AI engineering.",
};

const platforms = [
  { name: "X (Twitter)", icon: Twitter, url: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/aliabassi1/" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
];

export default function ContentPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
      {/* Socials Section */}
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Content</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal">
              Learnings, experiments, and updates across the technical landscape.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {platforms.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-muted/5 border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 shadow-sm group"
                title={social.name}
              >
                <social.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Thoughts Section */}
      <section className="space-y-16 border-t border-border/50 pt-24">
        <div className="space-y-4 text-center md:text-left max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Thoughts</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            Deep-dives into AI orchestration, design systems, and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {thoughts.map((thought) => (
            <Link 
              key={thought.slug} 
              href={`/thoughts/${thought.slug}`}
              className="group no-underline block space-y-8 p-6 rounded-[2.5rem] hover:bg-muted/5 transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl shadow-black/5 bg-background relative">
                <img 
                  src={thought.image} 
                  alt={thought.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl text-[10px] font-medium text-muted-foreground pointer-events-none">
                  {thought.date}
                </div>
              </div>
              <div className="space-y-4 px-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {thought.title}
                </h3>
                <p className="text-lg text-muted-foreground line-clamp-2 font-normal leading-relaxed">
                  {thought.excerpt}
                </p>
                <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-widest pt-2 opacity-40 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
