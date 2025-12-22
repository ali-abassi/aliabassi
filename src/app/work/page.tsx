import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Detailed work history of Ali Abassi - AI / Forward Deployed Engineer.",
};

const skillColors: Record<string, string> = {
  "Prompt Engineering": "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  "LLM Infrastructure": "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  "Conversational AI": "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  "Python": "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
  "Growth Marketing": "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  "E-commerce": "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
  "Product Strategy": "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
  "LLMs": "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
  "Community Building": "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
  "Sales Leadership": "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  "Supply Chain": "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "Amazon Ads": "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  "Enterprise Sales": "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  "Cognitive Computing": "bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400",
  "Programming": "bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
  "Shopify": "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
};

const industryColors: Record<string, string> = {
  "AI": "bg-blue-100/50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  "SaaS": "bg-purple-100/50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  "Marketing": "bg-orange-100/50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300",
  "E-commerce": "bg-pink-100/50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300",
  "Enterprise": "bg-slate-100/50 text-slate-700 dark:bg-slate-500/10 dark:text-slate-300",
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Work</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          AI / Forward Deployed Engineer building and scaling at the intersection of AI engineering, growth marketing, and technical implementation.
        </p>
      </div>

      {/* Areas of Expertise */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b border-border/50 pb-6">Areas of Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/5 border border-border/50 hover:border-foreground transition-all group">
              <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-24">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="group relative border-t border-border/50 pt-24">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-20">
              <div className="space-y-8">
                <a 
                  href={role.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-32 h-16 bg-muted/30 rounded-xl flex items-center justify-center p-4 hover:bg-muted/50 transition-all border border-border/50 no-underline group/logo"
                >
                  <img
                    src={role.logo}
                    alt={`${role.company} logo`}
                    className="max-h-full max-w-full group-hover/logo:scale-105 transition-transform grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-foreground">
                      {role.startDate} — {role.endDate}
                    </div>
                    {role.duration && (
                      <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                        {role.duration}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      {role.location}
                    </div>
                    <div>
                      <Badge className={`rounded-md font-bold uppercase tracking-tighter text-[9px] px-2 py-0 border-none shadow-none ${industryColors[role.industry]}`}>
                        {role.industry}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                      {role.title}
                    </h2>
                    <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-2xl font-semibold text-muted-foreground tracking-tight">
                    {role.company}
                  </p>
                </div>

                <div className="space-y-8 max-w-4xl">
                  <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed">
                    {role.description}
                  </p>

                  {role.achievements.length > 0 && (
                    <ul className="space-y-5">
                      {role.achievements.map((item) => (
                        <li key={item} className="text-lg md:text-xl flex gap-5 text-muted-foreground leading-relaxed">
                          <span className="text-foreground/20 font-black mt-2.5 w-2 h-2 rounded-full bg-current shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                  {role.skills?.map((skill) => (
                    <Badge 
                      key={skill} 
                      className={`rounded-md font-medium text-sm px-4 py-1 border-none shadow-none transition-all hover:bg-opacity-80 ${skillColors[skill] || 'bg-muted text-muted-foreground'}`}
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
