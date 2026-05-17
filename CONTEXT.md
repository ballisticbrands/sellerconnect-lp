# CONTEXT.md — sellerconnect-lp (landing page)

This repo is the marketing site for SellerConnect. Domain: `sellerconnect.ai`.

## What this repo is

The public marketing site — landing page, pricing, "how it works", blog (optional), legal pages. Drives sign-ups; the actual product lives at `app.sellerconnect.ai`; the developer docs live at `docs.sellerconnect.ai` (see `sellerconnect-docs` repo). This site does NOT host docs — it links to them.

## What to build

**Clone `agentcentral.to`'s marketing pages one-for-one.** Same structure, same hero pattern, same pricing layout. Different copy where needed (our brand voice, our domain name, our Amazon-seller positioning), same skeleton. Their `/docs` section is OUT OF SCOPE for this repo — it lives in `sellerconnect-docs`.

## How to gather the spec

The marketing site is fully public — no auth needed. Crawl directly:

```
https://agentcentral.to/
https://agentcentral.to/pricing   (if exists)
https://agentcentral.to/blog      (if exists)
```

(The `/docs/*` tree is handled by `sellerconnect-docs`. Don't duplicate that crawl here.)

For richer signal — exact CSS, full HTML structure, image assets, font choices — there's a HAR file from a real browser session on the operator's machine:

```
/Users/gershonballas/Desktop/agentcentral.to.har
```

The HAR captures every asset loaded during a real browse, including:
- The full rendered HTML of marketing pages
- CSS files (note class names, layout patterns)
- Font URLs (Google Fonts? self-hosted?)
- Image assets (logo, hero illustrations, screenshots)
- Any in-page JS that drives the marketing site

**Steps for the implementing agent:**

1. Pull the HAR. Extract the list of unique URLs visited.
2. Group URLs by type: HTML pages, CSS, JS, images, fonts. Filter to marketing pages only (`/`, `/pricing`, etc.) — skip `/docs/*` since those are handled in `sellerconnect-docs`.
3. For each HTML page in scope, capture the structure (sections, hero, CTAs, footer).
4. Note the design system: color palette, spacing scale, typography choices, button styles. Share the design tokens with `sellerconnect-frontend` and `sellerconnect-docs` so all three sites feel cohesive.
5. **Do not commit the HAR file.** It's operator-local.
6. Do not copy proprietary illustrations / images verbatim — note the style and commission/generate fresh assets. Copy is fine to adapt; pixel-identical visuals invite legal trouble.

## Stack

- **Framework**: Next.js (App Router) + TypeScript — static export OR server-rendered, your choice; static export gives easier CDN deployment.
- **Styling**: Tailwind (match the rest of the SellerConnect stack)
- **Content**: MDX for docs and blog. Marketing pages can be plain `.tsx` for now.
- **Hosting**: Vercel or Cloudflare Pages — pick whichever the operator prefers.

## Domain layout

- `sellerconnect.ai` — this site (root)
- `app.sellerconnect.ai` — dashboard (see `sellerconnect-frontend` repo)
- `api.sellerconnect.ai` — backend MCP server (see `sellerconnect` repo)
- `docs.sellerconnect.ai` — documentation (see `sellerconnect-docs` repo)

## Pages to ship (v1 sitemap)

- `/` — hero, value prop, "how it works" diagram, supported clients (Claude Desktop, Cursor, etc.), pricing summary, footer. CTA buttons point at `app.sellerconnect.ai` (sign up) and `docs.sellerconnect.ai` (developer entry point).
- `/pricing` — Free trial / Ads plan / Full Suite tiers, feature comparison. AgentCentral's plan structure was $29/$79 at time of writing; match unless the operator says otherwise.
- `/about`, `/privacy`, `/terms` — boilerplate.

Defer until needed: `/blog`, `/changelog`, `/customers`.

Everything under `/docs/*` lives in `sellerconnect-docs` — link out, don't host.

## What "done" looks like for v1

`sellerconnect.ai` is live, mobile-responsive, fast (CDN-hosted). The hero clearly communicates "MCP server for Amazon sellers — connect any AI agent to your Amazon data." Pricing is unambiguous. Clicking "Get started" lands users at `app.sellerconnect.ai`; clicking "Docs" lands them at `docs.sellerconnect.ai`. From the LP alone, a developer can decide to sign up in under a minute.