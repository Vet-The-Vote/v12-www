# vee12.com — Public Website

The public-facing website for [Vet The Vote (V12)](https://vee12.com) — a decentralized blockchain network for election integrity and payment processing.

Built with [Astro v6](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/) using the [AstroWind](https://github.com/arthelokyo/astrowind) template.

---

## Stack

| Tool | Purpose |
|---|---|
| Astro v6 | Static site generator |
| Tailwind CSS v4 | Styling |
| AstroWind | Component library & layout |
| pnpm | Package manager |
| astro-compress | HTML/CSS compression (build only) |
| nginx | Production web server (IONOS VPS) |

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`. `astro-compress` is disabled in development to prevent slow page reloads.

---

## Build & Deploy

**Build:**
```bash
pnpm build
```
Output goes to `dist/`.

**Deploy to production:**
```bash
rsync -avz --delete dist/ user@server:/var/www/vee12.com/
```

**nginx config** (key directive):
```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}
```

---

## Project Structure

```
src/
├── pages/
│   ├── index.astro                          # Homepage
│   ├── technology/
│   │   ├── antelope.astro                   # ANTELOPE Leap 5.0
│   │   ├── evm.astro                        # EVM compatibility
│   │   └── quantum-resistant-encryption.astro
│   ├── evidence/
│   │   └── payments-data.astro              # Federal Reserve payments data
│   ├── [...blog]/                           # Blog (Astro content collection)
│   ├── privacy.md
│   └── terms.md
├── data/
│   └── post/                                # Blog posts (*.md / *.mdx)
├── components/
│   └── widgets/
│       └── Announcement.astro               # Top announcement bar
├── navigation.ts                            # Header & footer nav links
├── config.yaml                              # Site metadata, SEO, blog config
└── assets/
    ├── images/
    │   └── default.png                      # OG image (1200×630)
    └── favicons/
public/
└── images/
    ├── logo/                                # V12 logo assets
    ├── products/v12_node/                   # Node product photos
    └── payments-study/                      # Federal Reserve study figures
```

---

## Key Configuration

**`src/config.yaml`** — site name, URL, SEO metadata, OG image, Twitter handle, blog settings.

**`src/navigation.ts`** — all header nav links, footer columns, social links, and the header CTA button.

**`src/components/CustomStyles.astro`** — brand colors:
- `--aw-color-accent`: `#B02020` (red)
- `--aw-color-primary`: `rgb(1 97 239)` (blue, buttons)

---

## Adding a Blog Post

Create a new `.md` or `.mdx` file in `src/data/post/`:

```md
---
title: 'Your Post Title'
excerpt: 'One-sentence summary shown in listings and RSS.'
publishDate: 2026-06-01
tags: ['election-integrity', 'blockchain']
---

Post content here.
```

The post will automatically appear in `/blog`, the RSS feed, sitemap, and category/tag pages.

---

## Adding a Product to the Store

1. Create a Square Payment Link at [squareup.com](https://squareup.com) for the new product.
2. Add a product card to the `#buy-node` section in `src/pages/index.astro`.
3. Use `?src=embed` on the Square URL for analytics tracking.

---

## Important Notes

- **`astro-compress`** only runs during `pnpm build`, not `pnpm dev`. This is intentional — it caused dev server hangs.
- **Flat Color Icons** used in pages must be explicitly allowlisted in `astro.config.ts` under the `flat-color-icons` include array. Tabler icons use a `'*'` wildcard and need no allowlisting.
- **Content collection cache** lives at `node_modules/.astro/data-store.json`. If blog posts show stale data after deletion, remove this file and rebuild.

---

## Live Site

[https://vee12.com](https://vee12.com)
