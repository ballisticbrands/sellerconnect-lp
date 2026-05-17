import { Section, Eyebrow } from "./Container";

const faqs = [
  {
    q: "How is this different from Amazon's own MCP server?",
    a: "We do the work Amazon's server leaves to you: reads are instant instead of async reports, writes log a diff so you can audit anything, and we keep your history from the day you connect.",
  },
  {
    q: "How fresh is the data?",
    a: "Live SP-API reads on every request, plus a daily background sync that builds the joined views (TACOS, rank history, SQP) your agent uses to reason.",
  },
  {
    q: "How do you handle security and data isolation?",
    a: "Each account is fully isolated. API keys are scoped per-tool, so you can mint a read-only key for one project and a write-capable key for another. We never store your Amazon credentials — we hold the OAuth refresh token.",
  },
  {
    q: "Can my agent actually write back to Amazon?",
    a: "Yes — bid changes, listing edits, inbound shipments, all the destructive operations. Every write pre-reads the current state and logs the diff, so a bad agent decision is reversible.",
  },
  {
    q: "What MCP clients work with SellerConnect?",
    a: "Anything that speaks MCP: Claude (desktop + claude.ai), Claude Code, ChatGPT, Cursor, OpenClaw, Hermes, custom Python/TypeScript clients via the official SDK.",
  },
  {
    q: "Which marketplaces are supported?",
    a: "US at launch. Canada and Mexico are next. UK and EU follow once the SP-API regional setup is done.",
  },
  {
    q: "Do I need Amazon API credentials?",
    a: "No. You just OAuth in like you would for any other Seller Central app. We're an authorized SP-API partner — you don't need to apply for anything.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Questions, answered.
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)] bg-[var(--color-elevated)]">
        {faqs.map((f, i) => (
          <details key={f.q} className="group px-6 py-5" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
              <span className="text-base font-semibold text-[var(--color-ink)]">
                {f.q}
              </span>
              <span
                aria-hidden
                className="mt-1 font-mono text-sm text-[var(--color-muted)] transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
