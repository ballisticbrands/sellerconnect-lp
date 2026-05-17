import { Section, Eyebrow } from "./Container";

const rows = [
  {
    label: "Reads",
    us: "Instant. Pre-joined data, ready to answer the question.",
    them: "Async reports — minutes, sometimes never.",
  },
  {
    label: "Write transparency",
    us: "Pre-reads the current value, logs every change.",
    them: "Fire and forget.",
  },
  {
    label: "Data history",
    us: "Retained from the day you connect — yours forever.",
    them: "60–90 days, then gone.",
  },
  {
    label: "Joined data",
    us: "TACOS, rank + search volume, SQP — pre-joined.",
    them: "Raw API responses you stitch together.",
  },
  {
    label: "Setup",
    us: "OAuth, copy API key, paste into your client. Under 5 minutes.",
    them: "Apply for API partner credentials. 30–60 minutes, if you're lucky.",
  },
] as const;

export function Comparison() {
  return (
    <Section id="compare" className="border-b border-[var(--color-line)] bg-[var(--color-surface-tint)]">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>How we compare</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Why not just use Amazon&apos;s MCP server?
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          You can. We built SellerConnect because the first thing every team
          discovers is that the raw SP-API isn&apos;t an agent surface — it&apos;s a
          batch pipeline.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
        <div className="grid grid-cols-1 divide-y divide-[var(--color-line)] md:grid-cols-[1fr_1.4fr_1.4fr] md:divide-y-0 md:divide-x">
          <div className="hidden bg-[var(--color-surface-tint)] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] md:block">
            &nbsp;
          </div>
          <div className="hidden bg-[var(--color-surface-tint)] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-ink)] md:block">
            SellerConnect
          </div>
          <div className="hidden bg-[var(--color-surface-tint)] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] md:block">
            Amazon&apos;s MCP server
          </div>
        </div>
        <div className="divide-y divide-[var(--color-line)]">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-0 md:px-0 md:py-0"
            >
              <div className="text-sm font-semibold text-[var(--color-ink)] md:px-6 md:py-5">
                {r.label}
              </div>
              <div className="text-sm text-[var(--color-ink-soft)] md:border-l md:border-[var(--color-line)] md:px-6 md:py-5">
                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-ink)]">
                  SellerConnect ·{" "}
                </span>
                {r.us}
              </div>
              <div className="text-sm text-[var(--color-muted)] md:border-l md:border-[var(--color-line)] md:px-6 md:py-5">
                <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                  Amazon MCP ·{" "}
                </span>
                {r.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
