## Encapsulate Coffee & Tea Capsules — Premium Landing Site

A single, high-craft landing experience at `/` (the app's home route), built as a luxury magazine-style scroll with motion in every section. Cart/checkout will be presented as polished UI with local state (no payment backend yet) so the page feels like a real store without extra setup.

### Look and feel
- Palette: espresso black `#0F0F0F`, gold `#D4AF37`, warm gold accent `#C89B3C`, warm cream background, coffee brown. Soft gold gradients, glass surfaces, dark/light mode.
- Type: Playfair Display headings, Inter body, wide letter-spacing, generous white space.
- Motion: Framer Motion + Lenis smooth scroll — fade-up reveals, parallax, text reveal, magnetic buttons, 3D card tilt, floating beans, CSS coffee steam, slow capsule rotation, scroll progress bar. All motion respects `prefers-reduced-motion`.

### Sections (in order)
1. Loading screen + glass sticky navbar with mega menu, search, wishlist, cart drawer, theme toggle
2. Hero — fullscreen, "Coffee Worth Every Sip.", floating beans + steam, Shop Capsules / Browse Machines
3. Trust bar — animated counters (4500+, 36+, 24/7, 100%)
4. Product categories — 6 large animated cards
5. Why Encapsulate — 7 interactive benefit cards
6. Compatibility — Nespresso vs Dolce Gusto comparison + machine compatibility checker with capsule-drop animation
7. Featured products — luxury cards, quick add, wishlist, ratings, best-seller / low-stock badges
8. Flavor experience — horizontal scroll of 9 flavors with intensity / roast / sweetness / body / acidity bars
9. Subscription — Monthly Coffee Club with animated membership card
10. Reviews — verified carousel (Embla) with star animations
11. Instagram grid — static curated tiles with Follow CTA (live API needs credentials; can add later)
12. About — founders story, women-owned badge, Dubai based
13. Delivery — animated UAE map + timeline
14. FAQ — animated accordion
15. Final CTA — Shop Now + WhatsApp
16. Mega footer — newsletter, socials, contact, policies

### Conversion + sales layer
Floating WhatsApp button, sticky mobile bottom CTA, back-to-top, exit-intent first-order discount popup, newsletter capture, recently viewed, bundles/upsell in cart drawer, scarcity and trending badges, social-proof "recently purchased" toasts.

### Technical notes
- Stack in this project is React 19 + TanStack Start + Vite + Tailwind v4 + shadcn/ui + Lucide (equivalent to the Next.js stack requested; routing stays TanStack).
- Design tokens go into `src/styles.css` as semantic variables; no hardcoded colors in components.
- Fonts loaded via `<link>` in the root route head.
- SEO: unique title/description, Open Graph + Twitter cards, canonical, JSON-LD (Organization, Product, FAQPage), semantic headings, alt text, robots.txt + sitemap.
- Accessibility: WCAG AA contrast, keyboard nav, visible focus, ARIA labels, single `<main>`, 44px tap targets.
- Performance: code-split heavy sections, lazy-loaded imagery, no heavy 3D libraries.
- Product photography and hero visuals generated as premium coffee imagery.

### Placeholders to confirm later
WhatsApp number, real product names/prices, Instagram handle, and delivery zones will use realistic placeholders you can swap in one content file (`src/data/`).
