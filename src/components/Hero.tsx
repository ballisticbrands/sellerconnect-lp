import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(12,140,138,0.10),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            Now in beta · US marketplace
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-6xl">
            Let your AI agent run Seller Central.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
            {site.name} is the Amazon data layer for AI agents. Connect Claude,
            ChatGPT, Cursor, or any MCP client to your Seller Central account —
            ads, inventory, catalog, finance, ranking, and fulfillment — through
            one endpoint.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-muted)]">
            Connect Amazon in under five minutes. Ninety-two tools, ready the
            moment you OAuth in.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.signupUrl}
              className="inline-flex h-11 items-center rounded-full bg-[var(--color-ink)] px-6 text-sm font-medium text-white transition hover:bg-[var(--color-ink-soft)]"
            >
              Start 7-day free trial
            </a>
            <Link
              href="#features"
              className="inline-flex h-11 items-center rounded-full border border-[var(--color-line)] bg-white px-6 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-ink-soft)]"
            >
              See what your agent can do →
            </Link>
          </div>
          <div className="mt-6 text-xs text-[var(--color-muted)]">
            No credit card. Cancel anytime.
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <TerminalPreview />
        </div>
      </div>
    </section>
  );
}

function TerminalPreview() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_30px_80px_-30px_rgba(11,15,19,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-surface-tint)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#fa6258]" />
          <span className="size-2.5 rounded-full bg-[#fab43e]" />
          <span className="size-2.5 rounded-full bg-[#39c759]" />
        </div>
        <div className="font-mono text-[11px] text-[var(--color-muted)]">
          claude · sellerconnect
        </div>
        <div className="w-12" />
      </div>
      <div className="space-y-4 px-6 py-6 font-mono text-[13px] leading-relaxed">
        <div>
          <span className="text-[var(--color-muted)]">user ›</span>{" "}
          <span className="text-[var(--color-ink)]">
            Which of my ASINs lost rank for the top 10 search terms this week?
          </span>
        </div>
        <div className="text-[var(--color-ink-soft)]">
          <span className="text-[var(--color-accent-ink)]">claude</span> calling{" "}
          <span className="rounded bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-[var(--color-accent-ink)]">
            sellerconnect.ranking.search_term_history
          </span>
          …
        </div>
        <div className="text-[var(--color-ink-soft)]">
          <span className="text-[var(--color-accent-ink)]">claude</span> calling{" "}
          <span className="rounded bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-[var(--color-accent-ink)]">
            sellerconnect.catalog.list_asins
          </span>
          …
        </div>
        <div className="rounded-lg border border-dashed border-[var(--color-line)] bg-[var(--color-surface-tint)] p-3 text-[var(--color-ink)]">
          3 ASINs dropped &gt;5 positions on tracked terms:
          <div className="mt-1.5 text-[var(--color-ink-soft)]">
            B0CXX1 · &quot;wireless earbuds&quot; · #4 → #11 (−7)
            <br />
            B0CXX2 · &quot;sleep mask&quot; · #2 → #9 (−7)
            <br />
            B0CXX3 · &quot;collagen powder&quot; · #6 → #14 (−8)
          </div>
        </div>
        <div className="text-[var(--color-muted)]">
          → want me to raise bids on the affected campaigns?
        </div>
      </div>
    </div>
  );
}
