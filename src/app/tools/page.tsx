import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Box, Code, Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tools & Experiments",
  description: "A collection of mini-projects and technical experiments by Ali Abassi.",
};

const toolTags: Record<string, string> = {
  "3D": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "AI": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "React": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Next.js": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Prompts": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Automation": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Utilities": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
};

const tools = [
  {
    title: "3D Playground",
    description: "Interactive 3D environments exploring React Three Fiber and Three.js.",
    icon: Box,
    status: "Active",
    tags: ["3D", "React", "Next.js"],
    link: "#",
  },
  {
    title: "AI Workflows",
    description: "A collection of custom LLM prompts and automated business workflows.",
    icon: Sparkles,
    status: "Beta",
    tags: ["AI", "Prompts", "Automation"],
    link: "#",
  },
  {
    title: "Code Snippets",
    description: "Useful technical components and utility functions for Next.js projects.",
    icon: Code,
    status: "Ongoing",
    tags: ["React", "Utilities"],
    link: "#",
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-20">
      <div className="space-y-6 text-center md:text-left max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tightest">Tools & Experiments</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          Technical prototypes, mini-projects, and experiments in the AI/3D space.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card key={tool.title} className="group overflow-hidden border-border hover:border-foreground transition-all duration-500 rounded-[2.5rem] shadow-none bg-muted/5 flex flex-col h-full">
            <CardHeader className="p-10 pb-4">
              <div className="w-16 h-16 rounded-3xl bg-background border border-border flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-500 shadow-sm">
                <tool.icon className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight mb-2">{tool.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    className={`rounded-full font-bold uppercase tracking-widest text-[9px] px-3 py-1 border-none ${toolTags[tag] || 'bg-muted text-muted-foreground'}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-10 pt-0 space-y-8 flex flex-col justify-between flex-1">
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">{tool.description}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-muted rounded-full">
                  {tool.status}
                </span>
                <a href={tool.link} className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:underline group/link">
                  Coming soon <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
