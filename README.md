# sellerconnect-lp

Marketing site for SellerConnect — `sellerconnect.ai`.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Plus Jakarta Sans (UI) + Geist Mono (numerics)
- Static-friendly — deploys to Vercel or Cloudflare Pages

## Develop

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Layout

- `src/app/page.tsx` — landing (`/`)
- `src/app/pricing/page.tsx` — pricing (`/pricing`)
- `src/app/about/page.tsx` — about (`/about`)
- `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` — legal boilerplate
- `src/components/*` — section components used by the pages
- `src/lib/site.ts` — single source of truth for site copy, URLs, pricing tiers, tool counts

## Domain layout

This site does **not** host docs or the dashboard. It links out:

- `sellerconnect.ai` — this repo
- `app.sellerconnect.ai` — dashboard (`sellerconnect-frontend`)
- `docs.sellerconnect.ai` — docs (`sellerconnect-docs`)
- `api.sellerconnect.ai` — backend MCP server (`sellerconnect`)

See [CONTEXT.md](./CONTEXT.md) for the full brief.
