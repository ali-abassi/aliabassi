import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Detailed work history of Ali Abassi - Senior AI Implementation Engineer.",
};

const skillColors: Record<string, string> = {
  "Prompt Engineering": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "LLM Infrastructure": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Conversational AI": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Python": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Growth Marketing": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "E-commerce": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Product Strategy": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "LLMs": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Community Building": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Sales Leadership": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Supply Chain": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  "Amazon Ads": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Enterprise Sales": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Cognitive Computing": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Programming": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "Shopify": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const roles = [
  {
    company: "Lindy AI",
    url: "https://lindy.ai",
    logo: "/logos/lindy-ai.svg",
    title: "Senior AI Implementation Engineer",
    startDate: "May 2025",
    endDate: "Present",
    duration: "8 mos",
    location: "San Francisco Bay Area",
    type: "Hybrid",
    description: "Leading the design and deployment of production-grade AI agents that power complex business workflows. Focused on creating reliable, human-sounding conversational experiences deeply integrated with enterprise ecosystems.",
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
    title: "AI Solutions Engineer",
    startDate: "Dec 2024",
    endDate: "May 2025",
    duration: "6 mos",
    location: "San Francisco Bay Area",
    type: "Remote",
    description: "Led the design, implementation, and deployment of conversational AI agents that power millions of live conversations every day. Delivered production-grade, customer-facing AI experiences taking complex requirements and turning them into engaging, human-sounding, hallucination-free voice agents.",
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
    title: "Marketing Consultant",
    startDate: "Apr 2023",
    endDate: "Nov 2024",
    duration: "1 yr 8 mos",
    location: "Vancouver, Canada",
    type: "Remote",
    description: "Growth Marketing Consultant on a portfolio of 10+ E-commerce Brands. Leading projects in audience management, advertising, and brand management. Since the acquisition of grace & stella, I have been consulting 15+ CPG brand owners on growth marketing.",
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
    title: "National Account Executive",
    startDate: "2017",
    endDate: "2020",
    description: "Achieved 100% Club status with 136% quota attainment for IBM's Watson Customer Engagement portfolio. Opened new logo enterprise clients and led opportunities at several of the largest organizations in Canada.",
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
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-20">
      <div className="space-y-6 text-center md:text-left max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tightest">Work</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          Building and scaling at the intersection of AI engineering, growth marketing, and technical implementation.
        </p>
      </div>

      <div className="space-y-16">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="group border-t pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
              <div className="space-y-6">
                <a 
                  href={role.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-32 h-16 bg-muted/20 rounded-2xl flex items-center justify-center p-4 hover:bg-muted/40 transition-all border border-transparent hover:border-border no-underline group/logo"
                >
                  <img
                    src={role.logo}
                    alt={`${role.company} logo`}
                    className="max-h-full max-w-full group-hover/logo:scale-105 transition-transform"
                  />
                </a>
                
                <div className="space-y-1">
                  <div className="text-sm font-black uppercase tracking-widest text-foreground">
                    {role.startDate} — {role.endDate}
                  </div>
                  {role.duration && (
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {role.duration}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {role.location}
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none group-hover:text-primary transition-colors">
                      {role.title}
                    </h2>
                    <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-xl font-bold text-muted-foreground/80 tracking-tight">
                    {role.company}
                  </p>
                </div>

                <div className="space-y-6 max-w-none">
                  <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                    {role.description}
                  </p>

                  {role.achievements.length > 0 && (
                    <ul className="space-y-4">
                      {role.achievements.map((item) => (
                        <li key={item} className="text-lg flex gap-4 text-muted-foreground leading-relaxed">
                          <span className="text-foreground font-black mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {role.skills?.map((skill) => (
                    <Badge 
                      key={skill} 
                      className={`rounded-full font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 border-none shadow-sm transition-transform hover:scale-105 ${skillColors[skill] || 'bg-muted text-muted-foreground'}`}
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
