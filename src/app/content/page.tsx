import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { thoughts } from "@/data/thoughts";
import { ThoughtsFeed } from "@/app/content/ThoughtsFeed";

export const metadata: Metadata = {
  title: "Thoughts",
  description:
    "Long-form writing by Ali Abassi on AI orchestration, design-driven engineering, and forward deployed implementation.",
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
        <div className="space-y-10 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">
              Thoughts
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal">
              Deep-dives into AI orchestration, design systems, and technical leadership.
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

      <section className="border-t border-border/40 pt-20">
        <ThoughtsFeed thoughts={thoughts} />
      </section>
    </main>
  );
}
