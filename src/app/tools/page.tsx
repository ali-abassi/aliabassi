import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Free tools, brand builds, and pay-as-you-use utilities by Ali Abassi — AI Forward Deployed Engineer.",
};

const tagStyles: Record<string, string> = {
  AI: "bg-blue-50/60 text-blue-700/80 dark:bg-blue-500/10 dark:text-blue-300/80",
  "Design Systems":
    "bg-purple-50/60 text-purple-700/80 dark:bg-purple-500/10 dark:text-purple-300/80",
  "Voice/Agents":
    "bg-green-50/60 text-green-700/80 dark:bg-green-500/10 dark:text-green-300/80",
  "SEO/Growth":
    "bg-orange-50/60 text-orange-700/80 dark:bg-orange-500/10 dark:text-orange-300/80",
  "Utilities":
    "bg-slate-50/60 text-slate-700/80 dark:bg-slate-500/10 dark:text-slate-300/80",
  "3D":
    "bg-pink-50/60 text-pink-700/80 dark:bg-pink-500/10 dark:text-pink-300/80",
};

type ToolCard = {
  title: string;
  description: string;
  tags: (keyof typeof tagStyles)[];
  href: string;
  cta: string;
  external?: boolean;
};

const freeTools: ToolCard[] = [
  {
    title: "Prompt QA Checklist",
    description:
      "A quick rubric for validating prompts and agent behaviors before shipping.",
    tags: ["AI", "Utilities"],
    href: "/tools",
    cta: "Open",
  },
  {
    title: "Onboarding Message Generator",
    description:
      "Generate clean, non-cringey onboarding messages for product + sales flows.",
    tags: ["SEO/Growth", "Utilities"],
    href: "/tools",
    cta: "Open",
  },
  {
    title: "System Prompt Templates",
    description:
      "A small set of battle-tested templates for tool calling, policies, and tone.",
    tags: ["AI", "Design Systems"],
    href: "/tools",
    cta: "Open",
  },
];

const brands: ToolCard[] = [
  {
    title: "AI for Work",
    description:
      "Built and exited. SEO-first distribution and a workflow-based prompt product.",
    tags: ["AI", "SEO/Growth"],
    href: "/work/ai-for-work",
    cta: "View case study",
  },
  {
    title: "AliAbassi.com",
    description:
      "This site: minimal design, technical SEO, and an editorial Thoughts system.",
    tags: ["Design Systems", "SEO/Growth"],
    href: "/",
    cta: "Visit",
  },
];

const payAsYouUseTools: ToolCard[] = [
  {
    title: "Voice Agent Starter Pack",
    description:
      "Pay-per-deployment implementation of a voice agent with QA + launch support.",
    tags: ["Voice/Agents", "AI"],
    href: "/content",
    cta: "Learn more",
  },
  {
    title: "Forward Deployed Audit",
    description:
      "A scoped, pay-as-you-use review of your agent architecture and failure modes.",
    tags: ["AI", "Utilities"],
    href: "/content",
    cta: "Learn more",
  },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-10">
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground/90">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function ToolCardItem({ item }: { item: ToolCard }) {
  const inner = (
    <div className="rounded-[2.5rem] border border-border/40 bg-muted/[0.01] hover:bg-muted/[0.03] hover:border-border/60 transition-all duration-500 p-8 md:p-10 space-y-8">
      <div className="space-y-3">
        <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/90">
          {item.title}
        </div>
        <p className="text-lg text-muted-foreground/80 font-normal leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge
            key={tag}
            className={`rounded-md text-[11px] px-2.5 py-0.5 border-none shadow-none font-normal ${
              tagStyles[tag] ?? "bg-muted text-muted-foreground"
            }`}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors">
        {item.cta} <ExternalLink className="w-4 h-4 opacity-35" />
      </div>
    </div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block no-underline"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className="group block no-underline">
      {inner}
    </Link>
  );
}

export default function ToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-24">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">
          Tools
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
          A small set of utilities and builds—organized by pricing model and intent.
        </p>
      </header>

      <Section
        title="Free tools"
        description="Small utilities you can use immediately. Built to be fast, simple, and low-maintenance."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {freeTools.map((t) => (
            <ToolCardItem key={t.title} item={t} />
          ))}
        </div>
      </Section>

      <Section
        title="Brands"
        description="Larger builds and product work. These are the things I’ve shipped with real distribution and outcomes."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brands.map((t) => (
            <ToolCardItem key={t.title} item={t} />
          ))}
        </div>
      </Section>

      <Section
        title="Pay as you use tools"
        description="Scoped tools and implementations where pricing maps cleanly to usage or outcomes."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {payAsYouUseTools.map((t) => (
            <ToolCardItem key={t.title} item={t} />
          ))}
        </div>
      </Section>
    </main>
  );
}
