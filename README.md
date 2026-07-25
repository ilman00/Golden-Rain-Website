# Golden Rain Car Care — Website Source

Drop these into your existing React + TypeScript + Tailwind project (`src/`).
This is components + pages only, no build tooling, as requested.

## 1. Design concept (read before you tweak colors)

Theme: **premium garage** — near-black charcoal, warm off-white, and a
*muted brass gold* (deliberately desaturated, never neon/metallic-shiny).
The name "Golden Rain" is echoed structurally, not literally: thin diagonal
gold hairlines ("rain streaks") are used as section dividers and a hero
background texture, instead of generic straight `<hr>` lines or gradient
blobs.

Fonts:
- **Display** — `Oswald` (condensed, industrial — headlines only)
- **Body** — `Work Sans` (clean, readable)
- **Mono** — `JetBrains Mono` (used sparingly for phone numbers / hours / specs — technical, garage-ticket feel)

## 2. Tailwind config — merge this into your `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      charcoal: {
        DEFAULT: '#15161B',
        soft: '#1E2027',
      },
      cream: '#F7F5F0',
      gold: {
        light: '#D4AF6A',
        DEFAULT: '#B68A35',
        dark: '#8C6A28',
      },
      steel: {
        DEFAULT: '#6B6D76',
        light: '#9A9CA5',
      },
      rain: '#3A4550',
    },
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['"Work Sans"', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
  },
}
```

## 3. Fonts — add to your `index.html` `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## 4. Router

`App.tsx` assumes `react-router-dom` is installed and wraps this tree in a
`<BrowserRouter>` at your entry point (`main.tsx`). If you're already
routing elsewhere, just lift the `<Routes>` block out.

## 5. Structure

```
components/
  ui/         Button, SectionHeading, RainDivider (shared primitives)
  layout/     Navbar, Footer
  home/       Hero, Stats, ServicesPreview, WhyChooseUs, Testimonials, CTASection
  services/   ServiceCard, ServiceList
  about/      Story, Gallery
  contact/    ContactForm, ContactInfo
data/         services.ts, testimonials.ts (edit copy/prices here)
pages/        Home, Services, About, Contact
App.tsx       Route definitions
```

All copy (service descriptions, testimonials, hours, address) is placeholder
— search for the `data/` files and `Contact` page first, that's where you'll
want to drop in real business details.