import { thoughts } from "@/data/thoughts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);
  if (!thought) return {};

  return {
    title: thought.title,
    description: thought.excerpt,
    openGraph: {
      title: thought.title,
      description: thought.excerpt,
      type: "article",
      publishedTime: thought.date,
      images: [thought.image],
    },
  };
}

export async function generateStaticParams() {
  return thoughts.map((thought) => ({
    slug: thought.slug,
  }));
}

export default async function ThoughtPage({ params }: Props) {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);

  if (!thought) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 space-y-16">
        <Link 
          href="/content" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Content
        </Link>

        <div className="space-y-10">
          <div className="flex flex-wrap items-center gap-8 text-sm font-normal text-muted-foreground/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-foreground/10" /> {thought.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-foreground/10" /> 5 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tightest leading-[1.1] md:leading-[0.95] max-w-4xl">
            {thought.title}
          </h1>
          <div className="max-w-2xl border-l border-border/50 pl-10 py-2">
            <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed italic">
              {thought.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border border-border/20 shadow-2xl shadow-black/[0.02] bg-muted/5">
          <img 
            src={thought.image} 
            alt={thought.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-6">
        <article 
          className="prose prose-zinc dark:prose-invert prose-base md:prose-lg max-w-none 
          prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-foreground/80
          prose-p:text-muted-foreground/90 prose-p:font-normal prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
          prose-strong:text-foreground prose-strong:font-normal
          prose-blockquote:border-l prose-blockquote:border-foreground/10 prose-blockquote:bg-muted/[0.03] prose-blockquote:py-8 prose-blockquote:px-12 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-foreground/70
          prose-li:text-muted-foreground/80 prose-li:text-base md:prose-li:text-lg
          prose-img:rounded-3xl prose-img:border prose-img:border-border/30
          flex-1"
          dangerouslySetInnerHTML={{ __html: thought.content }}
        />
      </div>

      {/* FAQs & Sources */}
      <div className="max-w-4xl mx-auto px-6 pt-48 space-y-32">
        {thought.faqs.length > 0 && (
          <section className="space-y-16 border-t border-border/50 pt-24">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Expertise FAQ</h2>
              <p className="text-lg text-muted-foreground font-normal">Clarifications and deep-dives on the topics covered above.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {thought.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/20 py-4">
                  <AccordionTrigger className="text-left font-medium text-lg md:text-xl hover:no-underline group py-6 opacity-80 hover:opacity-100 transition-opacity">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed pb-8 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {thought.sources.length > 0 && (
          <section className="space-y-10 border-t border-border/50 pt-24">
            <h2 className="text-sm font-medium text-foreground/50">Sources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {thought.sources.map((source) => (
                <a 
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-8 border border-border/50 rounded-2xl bg-muted/5 hover:border-foreground/30 transition-all no-underline group"
                >
                  <span className="font-medium text-lg text-foreground/70 group-hover:text-foreground">{source.label}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
