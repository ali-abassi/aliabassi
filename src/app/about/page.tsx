import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ali Abassi, Senior AI Implementation Engineer. Explore FAQs, media mentions, and career background.",
};

const faqs = [
  {
    question: "Who is Ali Abassi?",
    answer: "Ali Abassi is a Senior AI Implementation Engineer at Lindy AI, specializing in building production-grade AI agents and human-centric interfaces. He has a track record of founding and scaling AI-driven platforms like AI for Work.",
  },
  {
    question: "What is Ali Abassi's expertise?",
    answer: "Ali specializes in Prompt Engineering, LLM Infrastructure, and UI/UX design for AI applications. He bridges the gap between complex technical architectures and intuitive user experiences, with a focus on zero-hallucination conversational agents.",
  },
  {
    question: "What companies has Ali Abassi worked for?",
    answer: "Ali has held senior and leadership roles at Lindy AI, Bland AI, and IBM, where he focused on Watson's cognitive computing and high-volume conversational AI deployment.",
  },
  {
    question: "Where can I find Ali Abassi's latest projects?",
    answer: "You can explore Ali's work on the 'Work' page of this site, check out technical experiments in the 'Tools' section, or follow him on X (Twitter), LinkedIn, and GitHub.",
  },
];

const interests = [
  { name: "Snowboarding", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "Outdoors", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { name: "Building Products", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  { name: "Business Strategy", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  { name: "Coding", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
  { name: "Stocks", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-32">
      <div className="space-y-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-none">About</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-4xl space-y-8 text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
          <p>
            I'm <span className="text-foreground font-black">Ali Abassi</span>, a design-driven engineer focused on the intersection of AI, technical engineering, and user interfaces.
          </p>
          <p>
            With a background spanning <span className="text-foreground">growth marketing</span> and <span className="text-foreground">implementation engineering</span>, I believe that the best products are built with a deep understanding of both human psychology and technical architecture.
          </p>
          <p>
            Currently, I'm a <span className="text-foreground">Senior AI Implementation Engineer at Lindy AI</span>, where I work on building production-grade AI agents that actually solve complex business workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <section className="space-y-10">
          <h2 className="text-4xl font-black tracking-tight">In the Media</h2>
          <div className="space-y-6">
            <div className="p-8 border rounded-[2.5rem] bg-muted/5 group hover:border-foreground transition-all relative overflow-hidden">
              <div className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Article</div>
              <h3 className="text-2xl font-black mt-1">Acquisition of AI for Work</h3>
              <p className="text-lg mt-4 text-muted-foreground font-medium">Detailing the growth and eventual exit of the world's largest prompt library.</p>
            </div>
            <div className="p-8 border rounded-[2.5rem] bg-muted/5 group hover:border-foreground transition-all relative overflow-hidden">
              <div className="absolute top-4 right-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Podcast</div>
              <h3 className="text-2xl font-black mt-1">The Future of AI Agents</h3>
              <p className="text-lg mt-4 text-muted-foreground font-medium">Discussing the shift from chat-interfaces to fully autonomous agents.</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-4xl font-black tracking-tight">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <Badge 
                key={interest.name} 
                className={`rounded-full font-black uppercase tracking-widest text-[10px] px-5 py-2 border-none shadow-sm transition-transform hover:scale-105 ${interest.color}`}
              >
                {interest.name}
              </Badge>
            ))}
          </div>
          <div className="space-y-6 pt-10">
            <h2 className="text-4xl font-black tracking-tight">Contact</h2>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground font-medium italic">Based in Vancouver, Canada</p>
              <a href="mailto:hello@aliabassi.com" className="text-2xl md:text-3xl font-black text-foreground underline underline-offset-[12px] decoration-muted hover:decoration-foreground transition-all">
                hello@aliabassi.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="space-y-16 border-t pt-32">
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tightest">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">Common inquiries about my work, philosophy, and technical background.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-4xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 py-4">
              <AccordionTrigger className="text-left font-black text-xl md:text-2xl hover:no-underline group py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed pb-8 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
