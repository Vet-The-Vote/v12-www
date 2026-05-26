# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See [AGENTS.md](./AGENTS.md) for full framework documentation (commands, architecture, Tailwind v4, content collections, image handling).

---

## This Project

This is the public website for **Vet The Vote / V12** at [vee12.com](https://vee12.com). It is a static Astro site built on the AstroWind template.

## Key Commands

```bash
pnpm dev          # Dev server at http://localhost:4321
pnpm build        # Production build to dist/
pnpm check        # astro check + ESLint + Prettier
./scripts/deploy.sh             # Build + deploy to production
./scripts/deploy.sh --skip-build  # Deploy existing dist/ without rebuilding
```

## Deployment

Production host: `root@jonin1.root` at `/opt/tacticalao.com/www/public_html/vee12.com` via rsync over SSH. SSH config is in `~/.ssh/config` (no key path needed in the script).

## V12-Specific Customizations

### Colors (`src/components/CustomStyles.astro`)
- Primary/Secondary: original AstroWind blue (`rgb(1 97 239)` / `rgb(1 84 207)`)
- Accent: `rgb(176 32 32)` (red — used for CTA highlights)

### Navigation (`src/navigation.ts`)
- Header CTA "Buy a Witness Node" links to the Square Payment Link (not an internal page)
- Header nav breakpoint: `min-[1205px]:` — below this width the hamburger menu appears. This is a custom value; do not change it to a standard Tailwind breakpoint without testing.
- Mobile menu: nav links + Buy button + theme/RSS toggle are all rendered inside `<nav>` as `<li>` items with `min-[1205px]:hidden`. The actions div (desktop-only) is suppressed on mobile via CSS in `tailwind.css`.

### Mobile Menu CSS (`src/assets/styles/tailwind.css`)
The `#header.expanded nav` rule positions the mobile nav as a fixed overlay (`top: 70px; bottom: 0`). A `@media (max-width: 1204px)` rule forcibly hides the desktop actions div. Both are load-bearing — do not remove them.

### Icons
- All Tabler icons are included via `tabler: ['*']` in `astro.config.ts`
- Custom Truth Social icon: `src/icons/brand-truthsocial.svg` (local icon, referenced as `brand-truthsocial`)
- Flat-color-icons are allowlisted individually in `astro.config.ts` — add new ones there if needed

### Content Collections Cache
If a build fails with a content collection error after deleting a post, delete `node_modules/.astro/data-store.json` and rebuild.

### Blog Posts (`src/data/post/`)
MDX files require imports **after** the closing `---` of frontmatter, not inside it. Components with `<script>` tags must be extracted to `.astro` files and imported — MDX parses inline scripts as JSX.

### OG / Social Sharing
Default OG image: `src/assets/images/default.png` (1200×630). Blog post images are set via `image:` in frontmatter and referenced as absolute paths under `public/images/blog/`. The site URL `https://vee12.com` is set in `src/config.yaml` and used to build absolute OG image URLs.

### Social Media Content
Social media posts for V12 are saved in `../v12-marketing/social_media/` with filename format `YYYY-MM-DD-HH-MM-am|pm_Platform_Title.md`. Do not use em dashes in V12 blog or social content. X posts must stay under 280 characters (URLs count as 23 chars).
