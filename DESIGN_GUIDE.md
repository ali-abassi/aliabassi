# Ali Abassi — Design Guide

## Philosophy
High-End Minimalist. Sophisticated typography, generous whitespace, and subtle, intentional animations. A focus on readability, premium feel, and technical authority.

## Keyword Strategy
- **Core Focus**: AI Forward Deployed Engineer
- **Supporting**: AI Engineering, technical growth, design-driven implementation.

## Color Palette
- **Background**: #FFFFFF (White) / #000000 (Black)
- **Foreground**: #000000 (Black) / #FFFFFF (White)
- **Muted**: #737373 (Neutral 500)
- **Border**: #F2F2F2 (Light) / #1A1A1A (Dark)
- **Accent**: Soft, high-readability pastel tags for categorization (subtle backgrounds, no heavy borders).

## Typography
- **Headings**: Geist Sans, **Medium/Semibold**, tight tracking. **Mixed case**. No all-caps.
- **Body**: Geist Sans, **Normal/Medium**, generous line-height.
- **Monospace**: Geist Mono for technical components.
- **Editorial body**: Post pages use `.prose` with explicit spacing + list styling defined in `src/app/globals.css` (Tailwind v4 CSS-first).

## Layout
- **Container**:
  - Pages: `max-w-6xl` / `max-w-7xl` depending on density
  - Articles: `max-w-4xl` (reading width)
- **Radius**: Standard 0.5rem (8px) for small elements, large 2rem+ for sections and cards to maintain a premium look.
- **Spacing**: Significant vertical breathing room between major sections (usually `py-24+`).

## Components
- **Navbar**: Pill-style header with floating blur effect.
- **Buttons**: Rounded-full, high-contrast, premium shadows.
- **Tags**: Rounded-md, soft background colors, mixed-case text. **No all-caps. Avoid bold.**
- **Article**: Editorial spacing, clean headings, subtle blockquotes, integrated FAQ/Sources sections.

## Hard rules (enforced)
- **No all-caps**: avoid `uppercase`, `tracking-[...]` “label” styling unless explicitly requested.
- **No heavy bold**: prefer `font-normal` / `font-medium` and let hierarchy come from size + spacing.
- **Whitespace wins**: if a section feels “scrunched”, increase container width and vertical rhythm before increasing font size.
