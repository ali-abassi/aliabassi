import { Metadata } from "next";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Detailed work history of Ali Abassi - AI Forward Deployed Engineer.",
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
    description: "Growth Marketing Consultant on a portfolio of 10+ E-commerce Brands. Leading projects in audience management, advertising, and brand management. Specialized in growth-focused technical implementation.",
    achievements: [
      "Advised 15+ CPG brand owners on growth and automation strategies post-acquisition",
      "Optimized advertising spend and audience targeting across diverse product categories"
    ],
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
  },
  {
    company: "IBM",
    url: "https://ibm.com",
    logo: "/logos/ibm.svg",
    title: "National Account Executive",
    startDate: "2017",
    endDate: "2020",
    description: "Achieved 100% Club status with 136% quota attainment for IBM's Watson Customer Engagement portfolio. Worked as a forward deployed specialist for cognitive computing solutions.",
    achievements: [
      "Graduated from IBM's Global Sales School with distinction (Top 10%)",
      "Represented IBM as a thought leader and sales coach at international events",
      "Consistently exceeded performance targets in the cognitive computing sector",
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 md:py-32 space-y-32">
      <div className="space-y-6 text-center md:text-left max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Work</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
          AI Forward Deployed Engineer building and scaling at the intersection of AI engineering, growth marketing, and technical implementation.
        </p>
      </div>

      {/* Areas of Expertise */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Areas of Expertise</h2>
          <p className="text-muted-foreground font-medium">Core competencies developed through years of engineering and growth leadership.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item) => (
            <div key={item} className="flex items-center gap-4 p-6 rounded-3xl bg-muted/5 border border-border/50 hover:border-foreground transition-all duration-300 group">
              <div className="w-10 h-10 rounded-2xl bg-background border border-border/50 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-32">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="group relative">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <a 
                    href={role.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-32 h-16 bg-muted/20 rounded-2xl flex items-center justify-center p-4 hover:bg-muted/50 transition-all border border-border/50 no-underline group/logo"
                  >
                    <img
                      src={role.logo}
                      alt={`${role.company} logo`}
                      className="max-h-full max-w-full group-hover/logo:scale-105 transition-transform grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </a>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-foreground">
                    {role.startDate} — {role.endDate}
                  </div>
                  {role.duration && (
                    <div className="text-[10px] font-bold text-muted-foreground bg-muted/20 px-2 py-1 rounded-md inline-block">
                      {role.duration}
                    </div>
                  )}
                </div>

                <div className="text-[10px] font-black text-muted-foreground tracking-widest">
                  {role.location}
                </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                      {role.title}
                    </h2>
                    <a href={role.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-2xl font-semibold text-muted-foreground tracking-tight">
                    {role.company}
                  </p>
                </div>

                <div className="space-y-10 max-w-4xl">
                  <p className="text-xl md:text-2xl text-foreground/90 font-normal leading-relaxed">
                    {role.description}
                  </p>

                  {role.achievements.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-xs font-black tracking-widest text-foreground/40">Key Achievements</h4>
                      <ul className="space-y-6">
                        {role.achievements.map((item) => (
                          <li key={item} className="text-lg md:text-xl flex gap-6 text-muted-foreground leading-relaxed">
                            <span className="text-foreground/20 font-black mt-3 w-2 h-2 rounded-full bg-current shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
