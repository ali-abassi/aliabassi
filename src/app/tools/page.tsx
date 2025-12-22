import { Metadata } from "next";
import { ToolsGrid } from "@/app/tools/ToolsGrid";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "A curated set of tools by Ali Abassi — tools and brands built with a design-forward, minimal approach.",
};

export default function ToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest">
          Tools
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
          A grid of tools with filters. Each one has a category and a cost model.
        </p>
      </header>

      <ToolsGrid tools={tools} />
    </main>
  );
}
