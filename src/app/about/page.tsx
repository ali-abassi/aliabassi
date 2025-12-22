"use client";

import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const faqs = [
  {
    question: "What is an AI Forward Deployed Engineer?",
    answer: "A Forward Deployed Engineer (FDE) works at the intersection of engineering and the customer. In the AI context, this means building tailored technical solutions—like production-grade agents—that solve high-impact business problems using LLMs and complex API orchestrations.",
  },
  {
    question: "How does Ali Abassi approach AI implementation?",
    answer: "Ali uses a design-driven approach, ensuring that complex AI systems are not only technically sound but also intuitive and human-sounding. He focuses on building robust infrastructure that guarantees reliability and eliminates hallucinations.",
  },
  {
    question: "What makes a voice agent 'production-grade'?",
    answer: "A production-grade voice agent must have sub-second latency, zero-hallucination guarantees, deep CRM/API integration, and a personality that aligns with the brand. It needs to handle complex turn-taking and edge cases without breaking character.",
  },
  {
    question: "How do you handle hallucinations in conversational AI?",
    answer: "Hallucinations are mitigated through rigorous verification loops, RAG (Retrieval-Augmented Generation) with trusted data sources, and 'critic' agents that validate output before it reaches the user.",
  },
  {
    question: "What is Ali's experience with LLM orchestration?",
    answer: "Ali has built multi-agent systems where specialized models collaborate to execute tasks. This involves managing context, state, and tool-calling across various LLM providers like OpenAI, Anthropic, and Groq.",
  },
  {
    question: "How does Ali bridge the gap between technical architecture and growth?",
    answer: "With a background in growth marketing, Ali builds code that moves the needle. He prioritizes features and implementations that directly impact conversion, user retention, and business value.",
  },
  {
    question: "What platforms does Ali use for building voice agents?",
    answer: "Ali has extensive experience with platforms like Bland AI and Lindy AI, where he led the design and deployment of agents powering millions of conversations.",
  },
  {
    question: "What is the 'Implementation Experience' (IX)?",
    answer: "IX is the focus on how seamlessly an AI solution is adopted by a team. It's about reducing friction from the moment a tool is deployed until it's an essential part of the workflow.",
  },
  {
    question: "How does prompt engineering differ for enterprise vs. consumer apps?",
    answer: "Enterprise prompt engineering requires much stricter constraints, safety guardrails, and deterministic outputs. It's less about creativity and more about reliable tool execution and adherence to business logic.",
  },
  {
    question: "What role does UI design play in AI tools?",
    answer: "UI design is critical because AI is often a 'black box.' Good UI builds trust by showing the AI's reasoning steps and providing clear paths for human intervention.",
  },
  {
    question: "How does Ali ensure data privacy in AI implementations?",
    answer: "By utilizing SOC2-compliant providers, implementing local data anonymization, and ensuring that sensitive information never enters the training set of public models.",
  },
  {
    question: "What is the typical timeline for an AI agent deployment?",
    answer: "A prototype can be built in days, but a production-grade implementation typically takes 4-8 weeks to allow for rigorous testing, edge-case mapping, and integration.",
  },
  {
    question: "How do you measure the ROI of an AI implementation?",
    answer: "ROI is measured by reduced handle time, increased lead qualification rates, cost savings on manual operations, and improvements in user satisfaction scores.",
  },
  {
    question: "What are 'zero-hallucination' guarantees?",
    answer: "These are systemic architectures where the AI is physically unable to output facts not present in its retrieval context, often enforced by regex matching, structured output schemas, and multi-step verification.",
  },
  {
    question: "How does Ali stay current with rapidly evolving AI models?",
    answer: "By active involvement in the AI research community, constant benchmarking of new models (like o1, Claude 3.5), and building tools that are model-agnostic.",
  },
  {
    question: "What is the impact of multi-agent systems on productivity?",
    answer: "Multi-agent systems allow for parallel processing of complex tasks, where each agent handles a specific domain, leading to faster and more accurate outcomes than a single model could provide.",
  },
  {
    question: "Why is design-driven engineering critical for AI?",
    answer: "Because the best technology fails if it's too difficult to use. Design-driven engineering ensures that the most powerful AI capabilities are accessible to the average user.",
  },
  {
    question: "How can businesses get started with AI agents?",
    answer: "Start with a high-friction, repetitive task. Map the workflow, identify the necessary tool-calls, and build a focused agent before scaling to more complex systems.",
  },
  {
    question: "What are the key challenges in scaling LLM infrastructure?",
    answer: "The main challenges are managing rate limits, optimizing token costs through caching, and ensuring low latency across global regions.",
  },
  {
    question: "How does Ali handle complex API integrations for AI agents?",
    answer: "By building middleware that translates between natural language and structured API requirements, allowing agents to navigate complex systems with precision.",
  },
];

const personalityData = [
  { trait: "Technical Depth", value: 95 },
  { trait: "Design", value: 90 },
  { trait: "Growth", value: 85 },
  { trait: "Strategy", value: 92 },
  { trait: "Pragmatism", value: 88 },
  { trait: "Curiosity", value: 98 },
];

const chartConfig = {
  value: {
    label: "Trait Level",
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

const interests = [
  { 
    title: "Steph Curry", 
    image: "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Stock Market", 
    image: "https://images.unsplash.com/photo-1611974714024-4607a5a48191?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Snowboarding", 
    image: "https://images.unsplash.com/photo-1520629032902-b61822a44973?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2" 
  },
  { 
    title: "Building Products", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1" 
  },
  { 
    title: "Family", 
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1" 
  },
];

const tags = [
  { name: "Snowboarding", color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" },
  { name: "Outdoors", color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400" },
  { name: "Building Products", color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" },
  { name: "Business Strategy", color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400" },
  { name: "Coding", color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400" },
  { name: "Stocks", color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400" },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-32">
      {/* Intro Section */}
      <div className="space-y-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tightest leading-none">About</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
            <p>
              I'm <span className="text-foreground font-bold">Ali Abassi</span>, a design-driven <span className="text-foreground">AI Forward Deployed Engineer</span> focused on the intersection of AI, technical engineering, and user interfaces.
            </p>
            <p>
              With a background spanning <span className="text-foreground">growth marketing</span> and <span className="text-foreground">technical implementation</span>, I believe that the best products are built with a deep understanding of both human psychology and technical architecture.
            </p>
            <p>
              Currently, I'm an <span className="text-foreground">AI Forward Deployed Engineer at Lindy AI</span>, where I work on building production-grade AI agents that actually solve complex business workflows.
            </p>
          </div>

          {/* Personality Graph */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-center">Personality Matrix</h3>
            <div className="aspect-square w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <RadarChart data={personalityData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarAngleAxis dataKey="trait" tick={{ fontSize: 10, fontWeight: 600 }} />
                  <PolarGrid />
                  <Radar
                    dataKey="value"
                    fill="var(--foreground)"
                    fillOpacity={0.1}
                    stroke="var(--foreground)"
                    strokeWidth={2}
                  />
                </RadarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Canvas (Hobbies & Interests) */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Visual Canvas</h2>
          <p className="text-xl text-muted-foreground font-medium">A glimpse into the things that inspire me and keep me moving.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {interests.map((interest) => (
            <div 
              key={interest.title} 
              className={`relative overflow-hidden rounded-[2rem] group border border-border/50 ${interest.className}`}
            >
              <img 
                src={interest.image} 
                alt={interest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-lg">{interest.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-8">
          {tags.map((tag) => (
            <Badge 
              key={tag.name} 
              className={`rounded-md font-medium text-sm px-3.5 py-1 border-none shadow-none ${tag.color}`}
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-16 border-t border-border/50 pt-32">
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tightest">Expertise FAQ</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">Everything you need to know about AI implementation and forward deployed engineering.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-4xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/30 py-4">
              <AccordionTrigger className="text-left font-bold text-xl md:text-2xl hover:no-underline group py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed pb-8 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Media Section */}
      <section className="space-y-12 border-t border-border/50 pt-32">
        <h2 className="text-4xl font-bold tracking-tight">In the Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-border/50 rounded-[2rem] bg-muted/5 group hover:border-foreground transition-all relative overflow-hidden">
            <div className="absolute top-6 right-8 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">Article</div>
            <h3 className="text-2xl font-bold mt-1">Acquisition of AI for Work</h3>
            <p className="text-lg mt-4 text-muted-foreground font-normal leading-relaxed">Detailing the growth and eventual exit of the world's largest prompt library.</p>
          </div>
          <div className="p-8 border border-border/50 rounded-[2rem] bg-muted/5 group hover:border-foreground transition-all relative overflow-hidden">
            <div className="absolute top-6 right-8 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">Podcast</div>
            <h3 className="text-2xl font-bold mt-1">The Future of AI Agents</h3>
            <p className="text-lg mt-4 text-muted-foreground font-normal leading-relaxed">Discussing the shift from chat-interfaces to fully autonomous agents.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8 border-t border-border/50 pt-32 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Connect</h2>
        <div className="space-y-6">
          <p className="text-xl text-muted-foreground font-medium">Based in Vancouver, Canada. Open for high-impact AI implementation partnerships.</p>
          <a href="mailto:hello@aliabassi.com" className="text-2xl md:text-4xl font-bold text-foreground hover:text-foreground/70 transition-all border-b-2 border-foreground inline-block pb-2">
            hello@aliabassi.com
          </a>
        </div>
      </section>
    </main>
  );
}
