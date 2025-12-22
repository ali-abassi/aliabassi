export type WorkKind = "employee" | "builder";

export type WorkTag = {
  label: string;
  className: string;
};

export type WorkItem = {
  kind: WorkKind;
  slug: string;
  name: string; // company or project name
  url?: string; // external link
  logo?: string; // /public path
  role: string;
  timeframe: string;
  location?: string;
  oneLiner: string;
  highlights: string[];
  tags?: WorkTag[];
  // Detail page content (SEO)
  overview: string;
  whatIDid: string[];
  outcomes: string[];
  tools: string[];
};

const tagStyles: Record<string, string> = {
  AI: "bg-blue-50/60 text-blue-700/80 dark:bg-blue-500/10 dark:text-blue-300/80",
  Voice: "bg-green-50/60 text-green-700/80 dark:bg-green-500/10 dark:text-green-300/80",
  Infra: "bg-purple-50/60 text-purple-700/80 dark:bg-purple-500/10 dark:text-purple-300/80",
  Growth: "bg-orange-50/60 text-orange-700/80 dark:bg-orange-500/10 dark:text-orange-300/80",
  Enterprise: "bg-slate-50/60 text-slate-700/80 dark:bg-slate-500/10 dark:text-slate-300/80",
  Product: "bg-pink-50/60 text-pink-700/80 dark:bg-pink-500/10 dark:text-pink-300/80",
};

function t(label: keyof typeof tagStyles): WorkTag {
  return { label, className: tagStyles[label] };
}

export const workItems: WorkItem[] = [
  {
    kind: "employee",
    slug: "lindy-ai-forward-deployed-engineer",
    name: "Lindy AI",
    url: "https://lindy.ai",
    logo: "/logos/lindy-ai.svg",
    role: "AI Forward Deployed Engineer",
    timeframe: "May 2025 — Present",
    location: "San Francisco Bay Area",
    oneLiner:
      "Ship production-grade agents for enterprise workflows: orchestration, tooling, reliability, and UX that feels human.",
    highlights: [
      "Designed agent architectures that remain stable under real-world edge cases",
      "Built integration patterns for CRM + internal tools with strong guardrails",
      "Tuned conversational quality and latency for voice-like interaction",
    ],
    tags: [t("AI"), t("Voice"), t("Infra"), t("Enterprise")],
    overview:
      "At Lindy AI, I build and deploy production-grade agent systems as a forward deployed engineer—working close to real customer workflows and making them reliable, measurable, and shippable.",
    whatIDid: [
      "Translated customer workflows into tool-backed agent designs (routing, state, memory, and constraints).",
      "Implemented guardrails for accuracy: structured outputs, verification loops, and safe tool execution.",
      "Partnered with product + customers to iterate on interaction design and adoption UX.",
    ],
    outcomes: [
      "Reduced failure modes by tightening schemas, validation, and tool permissions.",
      "Improved user trust by making agent behavior more observable and predictable.",
    ],
    tools: ["Next.js", "TypeScript", "Python", "LLMs", "Tool calling", "RAG patterns"],
  },
  {
    kind: "employee",
    slug: "bland-ai-solutions-engineer",
    name: "Bland AI",
    url: "https://bland.ai",
    logo: "/logos/bland-ai.svg",
    role: "AI Solutions Engineer",
    timeframe: "Dec 2024 — May 2025",
    location: "Remote",
    oneLiner:
      "Built and launched voice agents for high-volume use cases—shipping fast while keeping reliability and UX tight.",
    highlights: [
      "Delivered enterprise agent deployments under aggressive timelines",
      "Improved conversation quality with memory, routing, and constraint design",
      "Enabled client teams via playbooks, QA loops, and iteration systems",
    ],
    tags: [t("AI"), t("Voice"), t("Enterprise")],
    overview:
      "At Bland AI I led implementation and deployment of conversational/voice agents, turning messy requirements into production behavior and measurable outcomes.",
    whatIDid: [
      "Designed conversation flows that handle edge cases, interruptions, and ambiguous intents.",
      "Built repeatable deployment + QA process (test scripts, failure taxonomy, iteration loops).",
      "Integrated agent behavior with customer systems (CRMs, ticketing, scheduling, internal APIs).",
    ],
    outcomes: [
      "Faster time-to-live for customer deployments with a cleaner implementation playbook.",
      "More consistent agent behavior through stronger constraints and validation patterns.",
    ],
    tools: ["LLMs", "Voice agents", "Prompt systems", "Python", "APIs", "Observability"],
  },
  {
    kind: "employee",
    slug: "gravitiq-marketing-consultant",
    name: "Gravitiq",
    url: "https://gravitiq.com",
    logo: "/logos/gravitiq.svg",
    role: "Marketing Consultant",
    timeframe: "Apr 2023 — Nov 2024",
    location: "Vancouver, Canada",
    oneLiner:
      "Growth consulting across a portfolio of e-commerce brands—systems thinking, experimentation, and execution.",
    highlights: [
      "Owned growth strategy + performance loops across multiple brands",
      "Built repeatable experimentation frameworks and reporting",
      "Partnered with operators to align marketing with unit economics",
    ],
    tags: [t("Growth"), t("Product")],
    overview:
      "I helped e-commerce operators build growth systems: clearer metrics, smarter testing, and execution plans that compound.",
    whatIDid: [
      "Built experimentation pipelines (hypotheses → launch → measurement → iteration).",
      "Optimized funnels and creative testing with tight feedback loops.",
      "Aligned marketing output with operational constraints and margin reality.",
    ],
    outcomes: [
      "Improved decision clarity with simpler dashboards and prioritized tests.",
      "Scaled successful experiments across brands via repeatable playbooks.",
    ],
    tools: ["Analytics", "Experimentation", "Performance marketing", "Lifecycle systems"],
  },
  {
    kind: "employee",
    slug: "grace-and-stella-director-marketing-sales",
    name: "grace & stella",
    url: "https://graceandstella.com",
    logo: "/logos/grace-and-stella.svg",
    role: "Director of Marketing & Sales",
    timeframe: "Apr 2020 — Sep 2022",
    location: "Vancouver, Canada",
    oneLiner:
      "Built growth channels and partnerships, launching new products and scaling multi-channel revenue with tight ops.",
    highlights: [
      "Developed new products and distribution strategies",
      "Built partnerships and improved channel performance",
      "Executed cross-functional growth + ops initiatives",
    ],
    tags: [t("Growth"), t("Product")],
    overview:
      "I led marketing + sales strategy and execution during a high-growth period—balancing distribution, product expansion, and operational constraints.",
    whatIDid: [
      "Owned GTM strategy across marketplaces and DTC channels.",
      "Built partner programs and scaled repeatable growth loops.",
      "Improved feedback systems (surveys, CX insights) to drive product decisions.",
    ],
    outcomes: [
      "Strengthened distribution and partner pipeline while maintaining brand consistency.",
      "Improved product feedback loops and operational clarity.",
    ],
    tools: ["GTM strategy", "Partnerships", "E-commerce operations", "Lifecycle"],
  },
  {
    kind: "employee",
    slug: "ibm-national-account-executive",
    name: "IBM",
    url: "https://www.ibm.com",
    logo: "/logos/ibm.svg",
    role: "National Account Executive",
    timeframe: "2017 — 2020",
    location: "Vancouver, Canada",
    oneLiner:
      "Enterprise account leadership for Watson customer engagement—consultative selling, solution architecture, and execution.",
    highlights: [
      "Led complex enterprise sales cycles for cognitive computing products",
      "Operated as a forward-deployed specialist bridging tech and business",
      "Drove outcomes with tight discovery and stakeholder alignment",
    ],
    tags: [t("Enterprise"), t("AI")],
    overview:
      "At IBM I learned enterprise rigor: stakeholder management, solution framing, and execution across long sales cycles—skills that directly translate into forward deployed engineering.",
    whatIDid: [
      "Mapped business needs into deployable solutions and implementation plans.",
      "Aligned technical capabilities with measurable business outcomes.",
      "Worked cross-functionally to deliver customer success post-sale.",
    ],
    outcomes: [
      "Improved deal clarity with tighter discovery and solution scoping.",
      "Built strong stakeholder alignment for complex deployments.",
    ],
    tools: ["Enterprise sales", "Solution architecture", "Stakeholder alignment"],
  },
  {
    kind: "builder",
    slug: "ai-for-work",
    name: "AI for Work",
    url: "https://aiforwork.co",
    logo: "/logos/ai-for-work.svg",
    role: "Founder (Built & Exited)",
    timeframe: "Jul 2023 — Jan 2024",
    location: "Vancouver, Canada",
    oneLiner:
      "Built and sold a prompt + workflow platform for knowledge workers. Product, growth, systems, and distribution.",
    highlights: [
      "Built the world’s largest prompt library experience (job-specific workflows)",
      "Scaled through organic loops and SEO-first distribution",
      "Exited the business after proving product-market fit",
    ],
    tags: [t("Product"), t("Growth"), t("AI")],
    overview:
      "AI for Work was a product built around practical utility: job-specific prompts, tools, and workflows that made AI usable for non-technical teams.",
    whatIDid: [
      "Designed product UX + information architecture for thousands of prompt assets.",
      "Built distribution loops (SEO, content, templates) and measured retention.",
      "Packaged prompts into workflows that feel like tools, not chat.",
    ],
    outcomes: [
      "Reached meaningful scale via organic distribution and compounding content.",
      "Completed an exit after demonstrating durable demand and product value.",
    ],
    tools: ["Next.js", "SEO", "Content systems", "Analytics", "Product strategy"],
  },
];

export const employeeItems = workItems.filter((w) => w.kind === "employee");
export const builderItems = workItems.filter((w) => w.kind === "builder");

export function getWorkItem(slug: string) {
  return workItems.find((w) => w.slug === slug) ?? null;
}

