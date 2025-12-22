import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ali Abassi, Senior AI Implementation Engineer. Explore FAQs, media mentions, and career background.",
};

const faqs = [
  {
    question: "Who is Ali Abassi?",
    answer: "Ali Abassi is a Senior AI Implementation Engineer at Lindy AI, specializing in building production-grade AI agents and human-centric interfaces. He has a track record of founding and scaling AI-driven platforms.",
  },
  {
    question: "What is Ali Abassi's expertise?",
    answer: "Ali specializes in Prompt Engineering, LLM Infrastructure, and UI/UX design for AI applications. He bridges the gap between complex technical architectures and intuitive user experiences.",
  },
  {
    question: "What companies has Ali Abassi worked for?",
    answer: "Ali has held senior and leadership roles at Lindy AI, Bland AI, and IBM, where he focused on Watson's cognitive computing and conversational AI deployment.",
  },
  {
    question: "Where can I find Ali Abassi's latest projects?",
    answer: "You can explore Ali's work on the 'Work' page of this site, check out technical experiments in the 'Tools' section, or follow him on GitHub and LinkedIn.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-24">
      <div className="space-y-8">
        <h1 className="text-center md:text-left">About Me</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-lg">
          <p>
            I'm Ali Abassi, a design-driven engineer focused on the intersection of AI, technical engineering, and user interfaces.
          </p>
          <p>
            With a background in both marketing and implementation engineering, I believe that the best products are built with a deep understanding of both human psychology and technical architecture. My work is characterized by simplicity, functional elegance, and a relentless focus on the user experience.
          </p>
          <p>
            Currently, I'm a Senior AI Implementation Engineer at Lindy AI, where I work on building production-grade AI agents that actually solve complex business workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">In the Media</h2>
          <div className="space-y-4">
            <div className="p-6 border rounded-3xl bg-muted/5 group hover:border-foreground transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Article</span>
              <h3 className="text-lg font-bold mt-1">Acquisition of AI for Work</h3>
              <p className="text-sm mt-2">Detailing the growth and eventual exit of the world's largest prompt library.</p>
            </div>
            <div className="p-6 border rounded-3xl bg-muted/5 group hover:border-foreground transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Podcast</span>
              <h3 className="text-lg font-bold mt-1">The Future of AI Agents</h3>
              <p className="text-sm mt-2">Discussing the shift from chat-interfaces to fully autonomous agents.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Interests</h2>
          <ul className="space-y-3 text-muted-foreground font-medium">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-foreground" /> Snowboarding & Outdoors</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-foreground" /> Building Products</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-foreground" /> Stock Market & Business Strategy</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-foreground" /> Coding & Technical Architecture</li>
          </ul>
        </section>
      </div>

      <section className="space-y-12 border-t pt-24">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-muted-foreground font-medium">Common inquiries about my work, philosophy, and background.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-border py-2">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="space-y-6 pt-12 text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <div className="space-y-2 text-muted-foreground font-medium">
          <p>Based in Vancouver, Canada</p>
          <a href="mailto:hello@aliabassi.com" className="inline-block text-foreground underline underline-offset-8 decoration-muted hover:decoration-foreground transition-all">hello@aliabassi.com</a>
        </div>
      </section>
    </main>
  );
}
