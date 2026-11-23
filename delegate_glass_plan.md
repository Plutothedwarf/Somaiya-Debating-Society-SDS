# Delegate Glass — Implementation Plan

## Part 1: Design System Extension

### New CSS tokens (added to `:root` and `[data-theme="dark"]`)
| Token | Light value | Dark value | Mapped to |
|---|---|---|---|
| `--color-cobalt` | `#2C5FAA` | `#4A7FCC` | Logistics |
| `--color-violet` | `#6B4E9E` | `#8B6EC0` | Creatives |
| `--color-teal` | `#1B8A8A` | `#2AADAD` | PR and Marketing |
| `--color-gold` | `#C9A227` | `#DDBA40` | Council / Mentors |
| Chamber Red (`--color-red`) | existing | existing | Executive Team |

### Tier-to-accent mapping (in theme.js)
```
leadership → --color-gold
debate     → --color-red (Chamber Red)
creatives  → --color-violet
pr         → --color-teal
logistics  → --color-cobalt
mentors    → --color-gold
```

### Glass treatment CSS class `.glass`
- `backdrop-filter: blur(14px)`
- `background: rgba(252,252,250,0.72)` (light) / `rgba(28,25,23,0.75)` (dark)
- `border: 1px solid rgba(216,210,196,0.4)` (light) / `rgba(48,44,40,0.6)` (dark)
- Applied ONLY to: Navbar (scrolled), upcoming event card (Home), Team member cards

### Fallback for low-end mobile
```css
@supports not (backdrop-filter: blur(14px)) {
  .glass { background: rgba(252,252,250,0.95); }
}
```

### `prefers-reduced-motion` respect
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Part 2: File-by-file changes

### 1. `index.css` — Design system additions
- Add committee accent tokens to `:root` and `[data-theme="dark"]`
- Add `.glass` class
- Add `.section-marker` class (short color rule + sentence-case label)
- Add `.btn-pill` class (rounded-pill CTA, departure from sharp aesthetic)
- Add `.motion-ticker` class (thin bar, continuous scroll)
- Add `prefers-reduced-motion` media query
- Push headline sizes slightly larger
- Add `.counter-animate` for stat counters

### 2. `theme.js` — Accent color map
- Export `TIER_ACCENTS` map (tier key → CSS variable name)

### 3. `components/MotionTicker.jsx` — NEW component
- Thin bar, Chamber Red bg, Paper text
- Continuously scrolling real motion titles from `motions.js`
- Placed at top of every page (in `App.jsx`)

### 4. `components/Navbar.jsx` — Glass treatment on scroll
- When `scrolled` is true, add `.glass` class + remove solid bg
- No structural changes

### 5. `components/Footer.jsx` — Dark Ink treatment
- Change from `--color-paper` bg to `section-dark` (Ink bg)
- Large wordmark treatment
- Back-to-top button
- Paper-white text, vivid accent colors for social icons

### 6. `pages/Home.jsx` — Major visual pass
- **Hero**: Add layered line-art background (SVG debate chamber silhouettes, two parallax layers), larger Fraunces heading
- **Stats band**: Change from `section-red-tint` to `section-dark`, add animated counters (count up from 0 on scroll into view)
- **Upcoming event card**: Apply `.glass` treatment (it sits on `section-warm` which has contrast)
- **CTA buttons**: Pill shape for "Register" and "Apply to Join"
- **Section markers**: Replace current label patterns with short colored rule + sentence-case label
- **Explore links**: Keep as-is (clean, works well)

### 7. `pages/About.jsx` — Pull-quote + dark section
- Add one dark Ink section with a pull-quote in Fraunces italic, Brass-colored
- Section markers for each major section

### 8. `pages/Team.jsx` — Full redesign of accent system
- Replace current `tierColors` map with new Delegate Glass accents
- Each KanbanColumn: top border in department accent, accent-colored tag for department name
- KanbanCard: accent-colored left bar for heads, accent-tinted hover glow
- Glass treatment on member cards (they sit on slightly dark column backgrounds = contrast)
- Modal: accent-colored border/accent line matching the selected member's tier

### 9. `pages/Gallery.jsx` — Editorial polish
- Add accent-color-tinted overlay on hover (Chamber Red default)
- Smooth crossfade transition into lightbox
- Lazy loading (already has `loading="lazy"`)

### 10. `App.jsx` — Add MotionTicker
- Insert `<MotionTicker />` above `<Navbar />`

### Files NOT touched (per spec):
- Resources.jsx — stays on plain hairline-and-paper treatment
- Contact.jsx — stays on plain hairline-and-paper treatment
- JoinUs.jsx — minimal (only pill CTA button if applicable)
- Events.jsx — minimal (section markers, pill CTA for Register)
- csvParser.js, driveHelper.js, dataSources.js — untouched
- debateFormats.js, munRules.js — untouched

---

## Execution order
1. `index.css` — all new tokens, classes, and utilities
2. `theme.js` — accent map export
3. `components/MotionTicker.jsx` — new file
4. `App.jsx` — wire MotionTicker
5. `components/Navbar.jsx` — glass on scroll
6. `components/Footer.jsx` — dark treatment
7. `pages/Home.jsx` — full beauty pass
8. `pages/About.jsx` — pull-quote + dark section
9. `pages/Team.jsx` — accent system + glass cards
10. `pages/Gallery.jsx` — editorial overlay
11. `pages/Events.jsx` — section markers + pill CTA
12. Build verification + push
