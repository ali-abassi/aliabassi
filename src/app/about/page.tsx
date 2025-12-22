import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ali Abassi, Senior AI Implementation Engineer.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32 space-y-16">
      <div className="space-y-8">
        <h1 className="text-center md:text-left">About Me</h1>
        
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-lg">
          <p>
            I'm Ali Abassi, a design-driven engineer focused on the intersection of AI, technical engineering, and user interfaces.
          </p>
          <p>
            With a background in both marketing and implementation engineering, I believe that the best products are built with a deep understanding of both human psychology and technical architecture. My work is characterized by simplicity, functional elegance, and a relentless focus on the user experience.
          </p>
          <p>
            Currently, I'm a Senior AI Implementation Engineer at Lindy AI, where I work on building production-grade AI agents that actually solve complex business workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Interests</h2>
          <ul className="space-y-2 text-muted-foreground font-medium">
            <li>Snowboarding & Outdoors</li>
            <li>Building Products</li>
            <li>Stock Market & Business Strategy</li>
            <li>Coding & Technical Architecture</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="space-y-2 text-muted-foreground font-medium">
            <p>Based in Vancouver, Canada</p>
            <a href="mailto:hello@aliabassi.com" className="block text-foreground underline-offset-4">hello@aliabassi.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
