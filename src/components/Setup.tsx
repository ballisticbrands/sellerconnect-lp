import { Section, Eyebrow } from "./Container";
import { site } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Sign up",
    body: "Create an account on app.sellerconnect.ai. You get an API key and a default project right away.",
  },
  {
    n: "02",
    title: "Connect Amazon",
    body: "Click through the SP-API OAuth. Your seller data is queryable the moment the handshake finishes.",
  },
  {
    n: "03",
    title: "Hand off to your agent",
    body: "Paste your API key into Claude, ChatGPT, Cursor, or any MCP client. Ask it a question.",
  },
];

export function Setup() {
  return (
    <Section id="how-it-works" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Three steps. Five minutes.
        </h2>
      </div>
      <ol className="mt-12 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-elevated)] p-6"
          >
            <div className="font-mono text-xs text-[var(--color-accent-ink)]">
              {s.n}
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-ink)]">
              {s.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {s.body}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex justify-center">
        <a
          href={site.docsUrl}
          className="inline-flex h-10 items-center rounded-full border border-[var(--color-line)] bg-[var(--color-elevated)] px-5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-ink-soft)]"
        >
          Read the docs →
        </a>
      </div>
    </Section>
  );
}
