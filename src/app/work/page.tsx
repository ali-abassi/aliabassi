import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Detailed work history of Ali Abassi - Senior AI Implementation Engineer.",
};

const roles = [
  {
    company: "Lindy AI",
    logo: "/logos/lindy-ai.svg",
    title: "Senior AI Implementation Engineer",
    startDate: "2025-05",
    endDate: "Present",
    duration: "8 mos",
    location: "San Francisco Bay Area",
    type: "Hybrid",
    description: "Building production-grade AI agents and infrastructure.",
    achievements: [],
    skills: ["Prompt Engineering", "LLM Infrastructure"],
  },
  {
    company: "Bland AI",
    logo: "/logos/bland-ai.svg",
    title: "AI Solutions Engineer",
    startDate: "2024-12",
    endDate: "2025-05",
    duration: "6 mos",
    location: "San Francisco Bay Area",
    type: "Remote",
    description: "Led the design and deployment of conversational AI agents powering millions of conversations.",
    achievements: [
      "Launched AI agents for multiple high-volume enterprise use cases",
      "Collaborated across engineering and product to meet aggressive timelines",
      "Implemented advanced multi-agent coordination and memory",
    ],
    skills: ["Prompt Engineering", "Conversational AI", "Python"],
  },
  {
    company: "Gravitiq",
    logo: "/logos/gravitiq.svg",
    title: "Marketing Consultant",
    startDate: "2023-04",
    endDate: "2024-11",
    duration: "1 yr 8 mos",
    location: "Vancouver, Canada",
    type: "Remote",
    description: "Growth consultant for 10+ E-commerce brands.",
    achievements: [],
    skills: ["Growth Marketing", "E-commerce"],
  },
  {
    company: "AI for Work",
    logo: "/logos/ai-for-work.svg",
    title: "Founder (Acquired)",
    startDate: "2023-07",
    endDate: "2024-01",
    duration: "7 mos",
    location: "Vancouver, Canada",
    type: "Remote",
    description: "Prompt library and resource hub for the workplace.",
    achievements: [
      "Developed advanced prompting framework",
      "Created database of 2000+ practical AI prompts",
      "Gained 500k+ visits and 40k+ user sign-ups organically",
    ],
    skills: ["Product Strategy", "LLMs", "Community Building"],
  },
  {
    company: "grace & stella",
    logo: "/logos/grace-and-stella.svg",
    title: "Director of Marketing & Sales (Acquired)",
    startDate: "2020-04",
    endDate: "2022-09",
    duration: "2 yrs 6 mos",
    location: "Vancouver, Canada",
    description: "Scaled revenue by over 100% and secured multiple global retail partnerships.",
    achievements: [
      "Secured partnerships with major beauty boxes (FabFitFun, Ipsy)",
      "Grew product portfolio by over 50%",
      "Managed Amazon BSR to under 1000 in Health & Beauty",
    ],
    skills: ["Sales Leadership", "Supply Chain", "Amazon Ads"],
  },
  {
    company: "IBM",
    logo: "/logos/ibm.svg",
    title: "National Account Executive",
    startDate: "2017",
    endDate: "2020",
    description: "Top 10% performer in Watson Customer Engagement portfolio.",
    achievements: [
      "Achieved 100% Club status with 136% quota attainment",
      "IBM Global Sales School graduate with distinction",
    ],
    skills: ["Enterprise Sales", "Cognitive Computing"],
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <div className="space-y-4 text-center md:text-left">
        <h1>Work</h1>
        <p className="max-w-xl text-muted-foreground">
          A career focused on growth, engineering, and the practical application of AI.
        </p>
      </div>

      <div className="space-y-12">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="group relative">
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8">
              <div className="hidden md:block">
                <div className="w-20 h-20 bg-muted/30 rounded-2xl flex items-center justify-center p-4 transition-colors group-hover:bg-muted/50 border border-transparent group-hover:border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={`${role.company} logo`}
                    className="max-h-full max-w-full opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                    <p className="text-sm font-semibold text-foreground/80">{role.company}</p>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {role.startDate} — {role.endDate}
                  </div>
                </div>

                <p className="text-base text-muted-foreground">{role.description}</p>

                {role.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {role.achievements.map((item) => (
                      <li key={item} className="text-sm flex gap-3 text-muted-foreground">
                        <span className="text-foreground font-bold mt-1.5 w-1 h-1 rounded-full bg-foreground shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {role.skills?.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-md font-medium bg-muted/50 hover:bg-muted border-none px-2 py-0.5">
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
