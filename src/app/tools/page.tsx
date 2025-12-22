import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Box, Code, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools & Experiments",
  description: "A collection of mini-projects and technical experiments by Ali Abassi.",
};

const tools = [
  {
    title: "3D Playground",
    description: "Interactive 3D environments exploring React Three Fiber and Three.js.",
    icon: Box,
    status: "Active",
    link: "#",
  },
  {
    title: "AI Workflows",
    description: "A collection of custom LLM prompts and automated business workflows.",
    icon: Sparkles,
    status: "Beta",
    link: "#",
  },
  {
    title: "Code Snippets",
    description: "Useful technical components and utility functions for Next.js projects.",
    icon: Code,
    status: "Ongoing",
    link: "#",
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <div className="space-y-4 text-center md:text-left">
        <h1>Tools & Experiments</h1>
        <p className="max-w-xl text-muted-foreground">
          A space where I share mini-projects, technical prototypes, and things I'm currently tinkering with.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card key={tool.title} className="group overflow-hidden border-border hover:border-foreground transition-all duration-300 rounded-3xl shadow-none bg-muted/10">
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <tool.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <p className="text-muted-foreground font-medium">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-muted rounded-full">
                  {tool.status}
                </span>
                <span className="text-sm font-bold underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Coming soon
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
