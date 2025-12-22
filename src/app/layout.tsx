import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://aliabassi.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ali Abassi | Senior AI Implementation Engineer",
    template: "%s | Ali Abassi",
  },
  description: "Personal website of Ali Abassi - Design-driven Senior AI Implementation Engineer specialized in AI, LLMs, and UI Engineering.",
  keywords: ["Ali Abassi", "AI Engineer", "Implementation Engineer", "LLM", "Next.js", "React", "Design", "UI Engineering"],
  authors: [{ name: "Ali Abassi" }],
  creator: "Ali Abassi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Ali Abassi",
    title: "Ali Abassi | Senior AI Implementation Engineer",
    description: "Design-driven engineer building the future of AI interfaces.",
    images: [
      {
        url: "/og-image.png", // We'll need to create this later or use a placeholder
        width: 1200,
        height: 630,
        alt: "Ali Abassi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Abassi | Senior AI Implementation Engineer",
    description: "Design-driven engineer building the future of AI interfaces.",
    creator: "@aliabassi", // Assuming this is your handle
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ali Abassi",
    "url": baseUrl,
    "jobTitle": "Senior AI Implementation Engineer",
    "sameAs": [
      "https://twitter.com/aliabassi",
      "https://github.com/aliabassi",
      "https://linkedin.com/in/aliabassi1/"
    ],
    "description": "Senior AI Implementation Engineer specialized in AI, LLMs, and UI Engineering."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
