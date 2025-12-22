import { Github, Twitter, Linkedin, ExternalLink, Youtube, Instagram } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content & Socials",
  description: "Connect with Ali Abassi and follow his latest content and updates.",
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
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <div className="space-y-4 text-center md:text-left">
        <h1>Content & Socials</h1>
        <p className="max-w-xl text-muted-foreground">
          Where I share my learnings, experiments, and professional updates.
        </p>
      </div>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group no-underline block p-8 border rounded-3xl hover:border-foreground transition-all bg-muted/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <social.icon className="w-6 h-6" />
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{social.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">{social.username}</p>
              <p className="pt-2 text-sm text-muted-foreground/80 font-medium">{social.description}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="py-16 border-t space-y-8 text-center md:text-left">
        <h2 className="text-2xl font-bold">Latest Updates</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">No recent posts or videos found.</p>
        </div>
      </section>
    </main>
  );
}
