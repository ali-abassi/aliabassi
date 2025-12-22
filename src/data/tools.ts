export type ToolCostKey = "free" | "brand" | "byok";

export type Tool = {
  slug: string;
  title: string;
  description: string;
  category: string;
  costKey: ToolCostKey;
  costLabel: string;
  // minimalist "logo" for now (until you add real assets in /public)
  logoText: string;
};

export const tools: Tool[] = [
  {
    slug: "voice-agent-prompt-builder",
    title: "Voice Agent Prompt Builder",
    description:
      "Generate and iterate on voice-agent prompts with clean structure, safety rails, and conversational tone controls.",
    category: "Voice agents",
    costKey: "free",
    costLabel: "Free",
    logoText: "VA",
  },
  {
    slug: "capitalist-culture",
    title: "Capitalist Culture",
    description:
      "A brand build: identity, web presence, and a modern content system designed to compound distribution.",
    category: "Brand",
    costKey: "brand",
    costLabel: "Brand",
    logoText: "CC",
  },
  {
    slug: "voice-agent-demo",
    title: "Voice Agent Demo",
    description:
      "Try a live voice-agent demo using your own API key (BYOK). Built to be safe, fast, and easy to evaluate.",
    category: "Voice agents",
    costKey: "byok",
    costLabel: "BYOK (API key)",
    logoText: "VD",
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug) ?? null;
}


