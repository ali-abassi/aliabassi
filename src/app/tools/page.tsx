import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Box, Code, Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tools & Experiments",
  description: "A collection of mini-projects and technical experiments by Ali Abassi.",
};

const toolTags: Record<string, string> = {
  "3D": "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  "AI": "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  "React": "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
  "Next.js": "bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  "Prompts": "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  "Automation": "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  "Utilities": "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Tools & Experiments</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          Technical prototypes, mini-projects, and experiments in the AI/3D space.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card key={tool.title} className="group overflow-hidden border-border/50 hover:border-foreground transition-all duration-500 rounded-[2rem] shadow-none bg-muted/5 flex flex-col h-full">
            <CardHeader className="p-10 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-sm">
                <tool.icon className="w-7 h-7" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight mb-4">{tool.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    className={`rounded-md font-medium text-xs px-2.5 py-0.5 border-none shadow-none ${toolTags[tag] || 'bg-muted text-muted-foreground'}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-10 pt-4 space-y-8 flex flex-col justify-between flex-1">
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">{tool.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <span className="text-xs font-semibold text-muted-foreground">
                  {tool.status}
                </span>
                <a href={tool.link} className="flex items-center gap-2 text-sm font-bold hover:underline group/link">
                  Coming soon <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
