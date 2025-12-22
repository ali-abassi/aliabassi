# Ali Abassi — Personal Site

High-end minimalist personal site built with **Next.js (App Router)** + **Tailwind CSS v4** + **shadcn/ui**.  
Core positioning keyword: **AI Forward Deployed Engineer**.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-first `@import "tailwindcss"`)
- **UI**: shadcn/ui, Radix primitives
- **Typography**: Geist Sans + Geist Mono (via `next/font`)
- **Charts**: Recharts (About “Professional Matrix”)
- **3D**: React Three Fiber / Drei (Home hero)
- **SEO**: Metadata, JSON-LD, sitemap, robots

## Getting started
Install deps and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts
```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run production server
npm run lint     # eslint
```

## Site structure (routes)
- **Home**: `/`
- **Work**: `/work`
- **Tools**: `/tools`
- **About**: `/about`
- **Content + Thoughts**: `/content`
- **Thought detail**: `/thoughts/[slug]`

## Editing content
### Thoughts (blog-style posts)
Thoughts are defined in:
- `src/data/thoughts.ts`

Each post includes:
- `title`, `excerpt`, `date`, `image`
- `content` (HTML string rendered into the post template)
- `faqs` (minimum 5 per post)
- `sources` (links rendered in the Sources section)

### Work experience
- `src/app/work/page.tsx` (role content + backlinks + logos under `public/logos/`)

## Design system
Design rules live in:
- `DESIGN_GUIDE.md`

Quick rules:
- **Sophisticated minimalism**: clean, breathable, premium
- **No all-caps** for headings/labels
- **Avoid heavy bold** (prefer `font-normal` / `font-medium`)
- Keep tags colorful but subtle (soft backgrounds, low contrast)

## SEO
Implemented SEO pieces:
- Global metadata + JSON-LD: `src/app/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`

## Deploy
Recommended: **Vercel** (zero-maintenance hosting).

Build command: `npm run build`  
Output: Next.js default
