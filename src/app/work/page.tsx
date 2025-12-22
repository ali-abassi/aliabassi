import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Detailed work history of Ali Abassi - AI Forward Deployed Engineer.",
};

const skillColors: Record<string, string> = {
  "Prompt Engineering": "bg-blue-50/50 text-blue-600/80 dark:bg-blue-900/10 dark:text-blue-400/80",
  "LLM Infrastructure": "bg-purple-50/50 text-purple-600/80 dark:bg-purple-900/10 dark:text-purple-400/80",
  "Conversational AI": "bg-green-50/50 text-green-600/80 dark:bg-green-900/10 dark:text-green-400/80",
  "Python": "bg-yellow-50/50 text-yellow-600/80 dark:bg-yellow-900/10 dark:text-yellow-400/80",
  "Growth Marketing": "bg-orange-50/50 text-orange-600/80 dark:bg-orange-900/10 dark:text-orange-400/80",
  "E-commerce": "bg-pink-50/50 text-pink-600/80 dark:bg-pink-900/10 dark:text-pink-400/80",
  "Product Strategy": "bg-indigo-50/50 text-indigo-600/80 dark:bg-indigo-900/10 dark:text-indigo-400/80",
  "LLMs": "bg-cyan-50/50 text-cyan-600/80 dark:bg-cyan-900/10 dark:text-cyan-400/80",
  "Community Building": "bg-emerald-50/50 text-emerald-600/80 dark:bg-emerald-900/10 dark:text-emerald-400/80",
  "Sales Leadership": "bg-red-50/50 text-red-600/80 dark:bg-red-900/10 dark:text-red-400/80",
  "Supply Chain": "bg-slate-50/50 text-slate-600/80 dark:bg-slate-800/10 dark:text-slate-300/80",
  "Amazon Ads": "bg-orange-50/50 text-orange-600/80 dark:bg-orange-900/10 dark:text-orange-400/80",
  "Enterprise Sales": "bg-blue-50/50 text-blue-600/80 dark:bg-blue-900/10 dark:text-blue-400/80",
  "Cognitive Computing": "bg-violet-50/50 text-violet-600/80 dark:bg-violet-900/10 dark:text-violet-400/80",
  "Programming": "bg-zinc-50/50 text-zinc-600/80 dark:bg-zinc-800/10 dark:text-zinc-300/80",
  "Shopify": "bg-green-50/50 text-green-600/80 dark:bg-green-900/10 dark:text-green-400/80",
};

const industryColors: Record<string, string> = {
  "AI": "bg-blue-100/30 text-blue-700/70 dark:bg-blue-500/5 dark:text-blue-300/70",
  "SaaS": "bg-purple-100/30 text-purple-700/70 dark:bg-purple-500/5 dark:text-purple-300/70",
  "Marketing": "bg-orange-100/30 text-orange-700/70 dark:bg-orange-500/5 dark:text-orange-300/70",
  "E-commerce": "bg-pink-100/30 text-pink-700/70 dark:bg-pink-500/5 dark:text-pink-300/70",
  "Enterprise": "bg-slate-100/30 text-slate-700/70 dark:bg-slate-500/5 dark:text-slate-300/70",
};

const expertise = [
  "AI Agent Orchestration",
  "Prompt Engineering Systems",
  "LLM Infrastructure & Scaling",
  "Conversational UX Design",
  "Forward Deployed Implementation",
  "Technical Growth Strategy",
  "Enterprise Solution Architecture",
  "Rapid Prototyping (Next.js/Python)"
];

const roles = [
  {
    company: "Lindy AI",
    url: "https://lindy.ai",
    logo: "/logos/lindy-ai.svg",
    industry: "AI",
    title: "Senior AI Implementation Engineer",
    startDate: "May 2025",
    endDate: "Present",
    duration: "8 mos",
    location: "San Francisco Bay Area",
    type: "Hybrid",
    description: "Leading the design and deployment of production-grade AI agents that power complex business workflows. Focused on creating reliable, human-sounding conversational experiences deeply integrated with enterprise ecosystems as a forward deployed engineer.",
    achievements: [
      "Building the next generation of conversational AI infrastructure for global enterprise clients",
      "Scaling AI implementation workflows to handle millions of interactions with zero-hallucination guarantees"
    ],
    skills: ["Prompt Engineering", "LLM Infrastructure", "Conversational AI"],
  },
  {
    company: "Bland AI",
    url: "https://bland.ai",
    logo: "/logos/bland-ai.svg",
    industry: "AI",
    title: "AI Solutions Engineer",
    startDate: "Dec 2024",
    endDate: "May 2025",
    duration: "6 mos",
    location: "San Francisco Bay Area",
    type: "Remote",
    description: "Led the design, implementation, and deployment of conversational AI agents that power millions of live conversations every day. Delivered production-grade, customer-facing AI experiences taking complex requirements and turning it into engaging, human-sounding, hallucination-free voice agents.",
    achievements: [
      "Launched AI agents for multiple high-volume enterprise use cases",
      "Collaborated across engineering, product, and client teams to meet aggressive timelines",
      "Implemented advanced techniques using multi-agent coordination, memory, and deep reasoning",
      "Empowered client teams through hands-on training and enablement, driving adoption and scale",
    ],
    skills: ["Prompt Engineering", "Conversational AI", "Python", "Programming"],
  },
  {
    company: "Gravitiq",
    url: "https://gravitiq.com",
    logo: "/logos/gravitiq.svg",
    industry: "Marketing",
    title: "Marketing Consultant",
    startDate: "Apr 2023",
    endDate: "Nov 2024",
    duration: "1 yr 8 mos",
    location: "Vancouver, Canada",
    type: "Remote",
    description: "Growth Marketing Consultant on a portfolio of 10+ E-commerce Brands. Leading projects in audience management, advertising, and brand management. Specialized in growth-focused technical implementation.",
    achievements: [
      "Advised 15+ CPG brand owners on growth and automation strategies post-acquisition",
      "Optimized advertising spend and audience targeting across diverse product categories"
    ],
    skills: ["Growth Marketing", "E-commerce", "Product Strategy"],
  },
  {
    company: "AI for Work",
    url: "https://aiforwork.co",
    logo: "/logos/ai-for-work.svg",
    industry: "SaaS",
    title: "Founder",
    startDate: "Jul 2023",
    endDate: "Jan 2024",
    duration: "7 mos",
    location: "Vancouver, Canada",
    type: "Remote",
    description: "Founded and successfully sold AI for Work, a platform designed to empower knowledge workers with job-specific AI prompts and tools. Developed an advanced prompting framework and curated a database of 2000+ practical resources.",
    achievements: [
      "Achieved 500k+ visits and 40k+ user sign-ups through purely organic marketing channels",
      "Developed a proprietary prompt engineering framework for professional use cases",
      "Successfully exited the business within 7 months of launch",
    ],
    skills: ["Product Strategy", "LLMs", "Community Building", "Prompt Engineering"],
  },
  {
    company: "grace & stella",
    url: "https://graceandstella.com",
    logo: "/logos/grace-and-stella.svg",
    industry: "E-commerce",
    title: "Director of Marketing & Sales",
    startDate: "Apr 2020",
    endDate: "Sep 2022",
    duration: "2 yrs 6 mos",
    location: "Vancouver, Canada",
    description: "Joined at the start of the pandemic and helped grow revenue by over 100% by establishing new lines of business, developing new products, and optimizing sales channels.",
    achievements: [
      "Secured partnerships with major beauty subscriptions boxes including FabFitFun, Ipsy, and BoxyCharm",
      "Grew direct-to-consumer sales channel with $0 in external ad spend using organic loops",
      "Managed Amazon BSR to under 1000 in Health & Beauty for several top-tier products",
      "Implemented SMS feedback surveys and leveraged data to significantly improve CX",
    ],
    skills: ["Sales Leadership", "Supply Chain", "Amazon Ads", "Shopify", "E-commerce"],
  },
  {
    company: "IBM",
    url: "https://ibm.com",
    logo: "/logos/ibm.svg",
    industry: "Enterprise",
    title: "National Account Executive",
    startDate: "2017",
    endDate: "2020",
    description: "Achieved 100% Club status with 136% quota attainment for IBM's Watson Customer Engagement portfolio. Worked as a forward deployed specialist for cognitive computing solutions.",
    achievements: [
      "Graduated from IBM's Global Sales School with distinction (Top 10%)",
      "Represented IBM as a thought leader and sales coach at international events",
      "Consistently exceeded performance targets in the cognitive computing sector",
    ],
    skills: ["Enterprise Sales", "Cognitive Computing"],
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
      <div className="space-y-6 text-center md:text-left max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">Work</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
          AI Forward Deployed Engineer building and scaling at the intersection of AI engineering, growth marketing, and technical implementation.
        </p>
      </div>

      {/* Areas of Expertise */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Areas of Expertise</h2>
          <p className="text-muted-foreground font-normal">Core competencies developed through years of engineering and growth leadership.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item) => (
            <div key={item} className="flex items-center gap-4 p-6 rounded-3xl bg-muted/5 border border-border/50 hover:border-foreground/30 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-2xl bg-background border border-border/50 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shadow-sm">
                <CheckCircle2 className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-32">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="group relative border-t border-border/50 pt-24">
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <a 
                    href={role.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-32 h-16 bg-muted/20 rounded-2xl flex items-center justify-center p-4 hover:bg-muted/50 transition-all border border-border/50 no-underline group/logo shadow-sm"
                  >
                    <img
                      src={role.logo}
                      alt={`${role.company} logo`}
                      className="max-h-full max-w-full group-hover/logo:scale-105 transition-transform grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </a>
                  
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-foreground/80">
                      {role.startDate} — {role.endDate}
                    </div>
                    {role.duration && (
                      <div className="text-[10px] font-medium text-muted-foreground bg-muted/20 px-2 py-1 rounded-md inline-block">
                        {role.duration}
                      </div>
                    )}
                    <div className="text-[10px] font-medium text-muted-foreground tracking-widest font-mono">
                      {role.location}
                    </div>
                    <div>
                      <Badge className={`rounded-md font-medium text-[10px] px-2 py-0 border-none shadow-none ${industryColors[role.industry]}`}>
                        {role.industry}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                      {role.title}
                    </h2>
                    <a href={role.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-xl font-medium text-muted-foreground/60 tracking-tight">
                    {role.company}
                  </p>
                </div>

                <div className="space-y-10 max-w-4xl">
                  <p className="text-xl md:text-2xl text-foreground/80 font-normal leading-relaxed">
                    {role.description}
                  </p>

                  {role.achievements.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-medium tracking-[0.25em] text-foreground/20 uppercase font-mono">Highlights</h4>
                      <ul className="space-y-6">
                        {role.achievements.map((item) => (
                          <li key={item} className="text-lg md:text-xl flex gap-6 text-muted-foreground/80 font-normal leading-relaxed">
                            <span className="text-foreground/10 mt-3 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-6">
                  {role.skills?.map((skill) => (
                    <Badge 
                      key={skill} 
                      className={`rounded-md font-normal text-xs px-3 py-0.5 border-none shadow-none transition-all hover:bg-opacity-80 ${skillColors[skill] || 'bg-muted text-muted-foreground'}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
