import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "Twitter / X", icon: Twitter, url: "https://twitter.com" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Mail, url: "https://linkedin.com" },
];

export default function ContentPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 space-y-12">
      <h1 className="text-4xl font-bold tracking-tighter uppercase">Content</h1>
      
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b pb-2">Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border-2 hover:bg-muted transition-colors group"
            >
              <div className="flex items-center gap-3">
                <social.icon className="w-5 h-5" />
                <span className="font-medium">{social.name}</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b pb-2">Recent</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">No recent posts or videos found.</p>
        </div>
      </section>
    </main>
  );
}

