import { thoughts } from "@/data/thoughts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ExternalLink, Calendar, Clock, ArrowLeft } from "lucide-react";
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
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16 space-y-12">
        <Link 
          href="/content" 
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors no-underline group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Content
        </Link>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {thought.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 5 min read
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest leading-[0.95]">
            {thought.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
            {thought.excerpt}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-[3rem] border border-border/50 shadow-2xl shadow-black/5">
          <img 
            src={thought.image} 
            alt={thought.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row gap-16 relative">
        <article 
          className="prose prose-zinc dark:prose-invert prose-xl max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-p:text-muted-foreground prose-p:font-normal prose-p:leading-relaxed
          prose-strong:text-foreground prose-strong:font-black
          prose-blockquote:border-l-4 prose-blockquote:border-foreground prose-blockquote:bg-muted/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl
          flex-1"
          dangerouslySetInnerHTML={{ __html: thought.content }}
        />
      </div>

      {/* FAQs & Sources */}
      <div className="max-w-3xl mx-auto px-6 pt-32 space-y-32">
        {thought.faqs.length > 0 && (
          <section className="space-y-12 border-t border-border/50 pt-24">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground font-medium">Deep-dives and clarifications on the topics covered above.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {thought.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/30 py-4">
                  <AccordionTrigger className="text-left font-bold text-xl hover:no-underline group py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg font-medium leading-relaxed pb-8 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {thought.sources.length > 0 && (
          <section className="space-y-8 border-t border-border/50 pt-24">
            <h2 className="text-2xl font-bold tracking-tight uppercase tracking-widest text-foreground/40">Sources & References</h2>
            <div className="grid grid-cols-1 gap-4">
              {thought.sources.map((source) => (
                <a 
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 border border-border/50 rounded-2xl bg-muted/5 hover:border-foreground transition-all no-underline group"
                >
                  <span className="font-bold text-lg">{source.label}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

