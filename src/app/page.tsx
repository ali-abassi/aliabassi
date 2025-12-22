import ThreeScene from "@/components/ThreeScene";
import AIChat from "@/components/AIChat";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tighter">
              ALI <span className="text-primary italic">ABASSI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Design-driven engineer building the future of AI interfaces. 
              Currently exploring Three.js, React, and LLM applications.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full gap-2">
                View Projects
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <ThreeScene />
          </div>
        </div>

        {/* AI Section */}
        <section className="py-20 border-t">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Interactive AI Demo</h2>
            <p className="text-muted-foreground">
              A quick example of integrating the Vercel AI SDK with this site.
            </p>
          </div>
          <AIChat />
        </section>

        {/* Footer */}
        <footer className="py-12 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Abassi. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
