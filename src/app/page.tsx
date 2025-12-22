import ThreeScene from "@/components/ThreeScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-8xl font-black tracking-tighter leading-none uppercase">
              Ali<br />Abassi
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
              Design-driven engineer building the future of AI interfaces. 
              Currently exploring Three.js, React, and LLM applications.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none px-12 font-bold uppercase tracking-widest border-2"
              >
                <Link href="/work" className="no-underline">
                  Work
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-12 font-bold uppercase tracking-widest border-2"
              >
                <Link href="/about" className="no-underline">
                  About
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square border-4 border-foreground overflow-hidden bg-white">
            <ThreeScene />
            <div className="absolute bottom-4 right-4 bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-tighter">
              Interactive 3D
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t text-sm font-bold uppercase tracking-widest flex justify-between items-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Abassi</p>
          <div className="flex gap-8">
            <a href="#" className="no-underline hover:underline">Twitter</a>
            <a href="#" className="no-underline hover:underline">GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
