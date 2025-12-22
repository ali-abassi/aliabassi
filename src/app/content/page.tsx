import { Github, Twitter, Linkedin, ExternalLink, Youtube, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { thoughts } from "@/data/thoughts";

export const metadata: Metadata = {
  title: "Content & Thoughts",
  description: "Connect with Ali Abassi and follow his latest thoughts, experiments, and updates on AI engineering.",
};

const platforms = [
  { 
    name: "X (Twitter)", 
    username: "@aliabassi", 
    icon: Twitter, 
    url: "https://twitter.com",
    description: "Daily thoughts on AI, SaaS, and engineering."
  },
  { 
    name: "LinkedIn", 
    username: "aliabassi1", 
    icon: Linkedin, 
    url: "https://linkedin.com/in/aliabassi1/",
    description: "Professional updates and deep-dives into AI implementation."
  },
  { 
    name: "GitHub", 
    username: "aliabassi", 
    icon: Github, 
    url: "https://github.com",
    description: "Open source experiments and project source code."
  },
  { 
    name: "YouTube", 
    username: "@AliAbassi", 
    icon: Youtube, 
    url: "https://youtube.com",
    description: "Video deep-dives into technical workflows."
  },
];

export default function ContentPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
      {/* Socials Section */}
      <div className="space-y-16">
        <div className="space-y-6 text-center md:text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Content</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            Where I share my learnings, experiments, and professional updates across the web.
          </p>
        </div>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline block p-8 border border-border/50 rounded-[2.5rem] hover:border-foreground transition-all bg-muted/5 h-full flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-sm">
                  <social.icon className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-2 -translate-y-2" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold tracking-tight">{social.name}</h3>
                <p className="text-sm font-semibold text-muted-foreground">{social.username}</p>
                <p className="pt-4 text-sm text-muted-foreground/80 font-normal leading-relaxed">{social.description}</p>
              </div>
            </a>
          ))}
        </section>
      </div>

      {/* Thoughts Section */}
      <section className="space-y-16">
        <div className="space-y-6 text-center md:text-left max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Thoughts</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            Deep-dives into AI orchestration, design systems, and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {thoughts.map((thought) => (
            <Link 
              key={thought.slug} 
              href={`/thoughts/${thought.slug}`}
              className="group no-underline block space-y-6 p-4 rounded-[3rem] hover:bg-muted/5 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-border/50 shadow-2xl shadow-black/5 bg-background relative">
                <img 
                  src={thought.image} 
                  alt={thought.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl text-[10px] font-bold text-muted-foreground pointer-events-none">
                  {thought.date}
                </div>
              </div>
              <div className="px-4 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {thought.title}
                </h3>
                <p className="text-lg text-muted-foreground line-clamp-2 font-normal leading-relaxed">
                  {thought.excerpt}
                </p>
                <div className="flex items-center gap-2 font-bold text-sm pt-2">
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
