# Ali Abassi - Design Guide

## Philosophy
Super simple, high-contrast, black and white aesthetic. Focus on typography, whitespace, and subtle animations. No unnecessary colors.

## Color Palette
- **Background**: #FFFFFF (White) / #000000 (Black)
- **Foreground**: #000000 (Black) / #FFFFFF (White)
- **Muted**: #737373 (Neutral 500)
- **Border**: #E5E5E5 (Neutral 200) / #262626 (Neutral 800)
- **Accent**: No colors. Use bold weights or inverted blocks for emphasis.

## Typography
- **Headings**: Geist Sans (Sans-serif), Bold/Extrabold, tight tracking.
- **Body**: Geist Sans, Regular, leading-relaxed.
- **Monospace**: Geist Mono for technical details, tools, and code.

### Enforced in code
We enforce defaults for semantic HTML tags via `@layer base` in `src/app/globals.css`:
- `h1/h2/h3` get consistent sizing/weight/uppercase/letter-spacing
- `p` gets consistent type size and line-height
- `a` gets consistent underline style

Use semantic tags first; only add utility classes when you intentionally want to break the standard.

## Layout
- **Container**: Max-width 7xl (1280px), centered with padding.
- **Spacing**: Generous whitespace. Use multiples of 4 (Tailwind defaults).
- **Transitions**: Simple fade-ins or subtle transforms (Framer Motion).

## Components
- **Buttons**: Square or slightly rounded (md). Solid black with white text or outline.
- **Cards**: Minimalist. Simple border or very subtle shadow.
- **Navigation**: Clean text links with underline on hover.

