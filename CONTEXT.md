# CONTEXT.md — sellerconnect-lp (landing page)

This repo is the marketing site for SellerConnect. Domain: `sellerconnect.ai`.

## What this repo is

The public marketing site — landing page, pricing, "how it works", docs, blog (optional), legal pages. Drives sign-ups; the actual product lives at `app.sellerconnect.ai`.

## What to build

**Clone `agentcentral.to`'s marketing site one-for-one.** Same structure, same hero pattern, same pricing layout, same docs format. Different copy where needed (our brand voice, our domain name, our Amazon-seller positioning), same skeleton.

## How to gather the spec

The marketing site is fully public — no auth needed. Crawl directly:

```
https://agentcentral.to/
https://agentcentral.to/docs
https://agentcentral.to/docs/*    (all sub-pages)
https://agentcentral.to/pricing   (if exists)
https://agentcentral.to/blog      (if exists)
```

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
2. Group URLs by type: HTML pages, CSS, JS, images, fonts.
3. For each HTML page, capture the structure (sections, hero, CTAs, footer).
4. Note the design system: color palette, spacing scale, typography choices, button styles.
5. Crawl the docs structure via plain `curl` / WebFetch — these are public and don't need the HAR. Build a sitemap of every `/docs/*` page.
6. **Do not commit the HAR file.** It's operator-local.
7. Do not copy proprietary illustrations / images verbatim — note the style and commission/generate fresh assets. Copy is fine to adapt; pixel-identical visuals invite legal trouble.

## Stack

- **Framework**: Next.js (App Router) + TypeScript — static export OR server-rendered, your choice; static export gives easier CDN deployment.
- **Styling**: Tailwind (match the rest of the SellerConnect stack)
- **Content**: MDX for docs and blog. Marketing pages can be plain `.tsx` for now.
- **Hosting**: Vercel or Cloudflare Pages — pick whichever the operator prefers.

## Domain layout

- `sellerconnect.ai` — this site (root)
- `app.sellerconnect.ai` — dashboard (see `sellerconnect-frontend` repo)
- `api.sellerconnect.ai` — backend MCP server (see `sellerconnect` repo)

## Pages to ship (v1 sitemap, mirroring agentcentral.to)

- `/` — hero, value prop, "how it works" diagram, supported clients (Claude Desktop, Cursor, etc.), pricing summary, footer.
- `/pricing` — Free trial / Ads plan / Full Suite tiers, feature comparison. AgentCentral's plan structure was $29/$79 at time of writing; match unless the operator says otherwise.
- `/docs` (optional landing for docs) — table of contents.
- `/docs/getting-started`
- `/docs/clients/{claude-desktop, cursor, claude-code, chatgpt, openclaw, hermes, custom}` — each with a copy-ready MCP config snippet.
- `/docs/tools/{ads, inventory, catalog, finance, ranking, fulfillment}` — tool reference (consider auto-generating from the backend's tool registry; coordinate with `ballisticbrands/sellerconnect`).
- `/docs/api-keys` — explanation of per-key tool scoping.
- `/about`, `/privacy`, `/terms` — boilerplate.

Defer until needed: `/blog`, `/changelog`, `/customers`.

## What "done" looks like for v1

`sellerconnect.ai` is live, mobile-responsive, fast (CDN-hosted). The hero clearly communicates "MCP server for Amazon sellers — connect any AI agent to your Amazon data." Pricing is unambiguous. The docs let a developer go from `sellerconnect.ai` to "my Claude Desktop is talking to my Amazon account" in under 10 minutes.