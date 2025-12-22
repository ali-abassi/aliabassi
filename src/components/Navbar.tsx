"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="no-underline font-black uppercase tracking-tight hover:opacity-70 transition-opacity"
          >
            Ali Abassi
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "no-underline hover:opacity-70 transition-opacity",
                    active && "underline underline-offset-8 decoration-2",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-foreground bg-background"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground">
          <div className="px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "no-underline text-sm font-black uppercase tracking-widest",
                    active ? "underline underline-offset-8 decoration-2" : "opacity-70",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

