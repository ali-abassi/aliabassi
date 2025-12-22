"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", path: "/work" },
  { name: "Tools", path: "/tools" },
  { name: "About", path: "/about" },
  { name: "Content", path: "/content" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between p-2 rounded-full border transition-all duration-500 ease-in-out",
          scrolled ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-2xl shadow-black/5 px-6" : "bg-transparent border-transparent px-2"
        )}>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            AliAbassi
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium px-5 py-2 rounded-full transition-all duration-300",
                    active 
                      ? "bg-foreground text-background shadow-lg shadow-black/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              "md:hidden p-3 rounded-full transition-colors",
              scrolled ? "bg-muted/50" : "bg-background shadow-xl border"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-6" /> : <Menu className="w-5 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "fixed inset-0 top-0 left-0 right-0 bottom-0 bg-background z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden",
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <button
          type="button"
          className="absolute top-8 right-6 p-4 rounded-full bg-muted"
          onClick={() => setOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center gap-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold tracking-tight"
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                "text-4xl font-bold tracking-tight",
                pathname === item.path ? "text-foreground underline decoration-4 underline-offset-8" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
