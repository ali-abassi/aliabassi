export default function WorkPage() {
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
      description: undefined,
      achievements: undefined,
      skills: ["Prompt Engineering"],
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
      description:
        "Led the design, implementation, and deployment of conversational AI agents that power millions of live conversations every day. Delivered production-grade, customer-facing AI experiences taking complex requirements and turning it into engaging, human-sounding, hallucination-free voice agents. These agents were deeply integrated with CRMs, billing systems, scheduling tools, and proprietary APIs, enabling seamless, intelligent automation across support, sales, and service channels.",
      achievements: [
        "Launched AI agents for multiple high-volume enterprise use cases",
        "Collaborated across engineering, product, and client teams to meet aggressive timelines",
        "Scoped, built, tested, and deployed advanced agents for both inbound and outbound use cases",
        "Empowered client teams through hands-on training and enablement, driving adoption and scale",
        "Uncovered high-impact opportunities by identifying key business pain points",
        "Implemented advanced techniques using multi-agent coordination, memory, and deep reasoning",
      ],
      skills: ["Prompt Engineering", "Programming"],
    },
    {
      company: "Gravitiq",
      logo: "/logos/gravitiq.svg",
      title: "Marketing Consultant",
      startDate: "2023-04",
      endDate: "2024-11",
      duration: "1 yr 8 mos",
      location: "Vancouver, British Columbia, Canada",
      type: "Remote",
      description:
        "Growth Marketing Consultant on a portfolio of 10+ E-commerce Brands. Leading projects in audience management, advertising, and brand management. Since the acquisition of grace & stella, I have been consulting 15+ CPG brand owners on growth marketing.",
      achievements: undefined,
      skills: ["E-Commerce", "Artificial Intelligence (AI)"],
    },
    {
      company: "AI for Work",
      logo: "/logos/ai-for-work.svg",
      title: "Founder (Acquired)",
      startDate: "2023-07",
      endDate: "2024-01",
      duration: "7 mos",
      location: "Vancouver, British Columbia, Canada",
      type: "Remote",
      description:
        "AI for Work is a Prompt Library and Resource Hub designed for the workplace. The prompts are job specific and made for practical use cases. They are easy to use and built to get the absolute most out of Chat GPT.",
      achievements: [
        "Developed an advanced prompting framework",
        "Created a database of 2000+ prompts, workflows, and tools",
        "Provided educational resources to help professionals leverage AI effectively",
        "Achieved 500k+ visits and 40k+ user sign-ups through organic marketing channels",
      ],
      skills: ["Artificial Intelligence (AI)", "Prompt Engineering"],
    },
    {
      company: "grace & stella",
      logo: "/logos/grace-and-stella.svg",
      title: "Director of Marketing & Sales (Acquired)",
      startDate: "2020-04",
      endDate: "2022-09",
      duration: "2 yrs 6 mos",
      location: "Vancouver, British Columbia, Canada",
      type: undefined,
      description:
        "Joined grace and stella at the start of the COVID pandemic and helped navigate and grow the business by over 100%+ by establishing new lines of business, developing new products, optimizing current products, communication, and sales channels.",
      achievements: [
        "Helped get grace and stella products into the hands of over 1,000,000+ customers globally by partnering with the largest beauty subscriptions boxes including FabFitFun, Ipsy, BoxyCharm, AllTrue and many others",
        "Strengthened and grew wholesale partner relationships to achieve consistent, profitable, and stable revenue all year long",
        "Significantly grew brand awareness and branded search on Amazon with several products achieving under 1000 BSR in the Health and Beauty category",
        "Grew direct to consumer sales channel with $0 in external ad spend",
        "Implemented SMS feedback surveys and leveraged the data to improve customer experience",
        "Grew product portfolio by over 50%+",
        "Achieved 1k - 10k+ positive reviews for top tier products while remaining compliant, authentic, and on-brand",
      ],
      skills: ["E-Commerce", "Shopify"],
    },
    {
      company: "IBM",
      logo: "/logos/ibm.svg",
      title: "National Account Executive",
      startDate: "2017",
      endDate: "2020",
      duration: undefined,
      location: undefined,
      type: undefined,
      description:
        "Achieved 100% Club status with 136% of quota attainment focused on Canadian Enterprise accounts for IBM's Watson Customer Engagement portfolio. Opened new logo enterprise clients and led opportunities at several of the largest organizations in Canada.",
      achievements: [
        "Graduated from IBM's Global Sales School with distinction (Top 10%)",
        "Represented IBM as a thought leader, sales coach, and presenter at various international events",
        "Achieved 100% Club status - IBM's highest distinction for sales success",
      ],
      skills: undefined,
    },
  ] as const;

  return (
    <main className="max-w-5xl mx-auto px-4 py-20 space-y-14">
      <header className="space-y-4">
        <h1>Work</h1>
        <p className="text-muted-foreground max-w-2xl">
          A timeline of roles, outcomes, and experiments across AI, engineering,
          and growth.
        </p>
      </header>

      <div className="space-y-10">
        {roles.map((role) => (
          <section
            key={`${role.company}-${role.title}-${role.startDate}`}
            className="border-2 border-foreground p-6 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-6">
                <div className="w-24 h-12 border-2 border-foreground bg-background flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={`${role.company} logo`}
                    className="max-h-8 w-auto"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-black uppercase tracking-widest">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                    <span className="font-bold">{role.company}</span>
                    {role.location && (
                      <span className="text-muted-foreground">{role.location}</span>
                    )}
                    {role.type && (
                      <span className="text-muted-foreground">· {role.type}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {role.startDate} — {role.endDate}
                {role.duration ? ` · ${role.duration}` : null}
              </div>
            </div>

            {role.description && (
              <div className="mt-6">
                <p className="text-muted-foreground">{role.description}</p>
              </div>
            )}

            {role.achievements?.length ? (
              <div className="mt-6 space-y-3">
                <div className="text-xs font-black uppercase tracking-widest">
                  Highlights
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  {role.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {role.skills?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {role.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-black uppercase tracking-widest border-2 border-foreground px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}

