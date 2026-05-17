import { Section, Eyebrow } from "./Container";

const points = [
  {
    title: "Reports take 30 minutes. Agents won't wait.",
    body: "The SP-API reports endpoint is async. Most ad-hoc questions never get answered because the loop is too slow for a conversation.",
  },
  {
    title: "CAPTCHAs and multi-tab UIs break automation.",
    body: "Seller Central was built for humans clicking through five tabs. Agents need direct, structured data — not screen-scrapes.",
  },
  {
    title: "Bid changes overnight should be cheap.",
    body: "If your agent can adjust bids while you sleep and catch a stockout at 6am, it pays for itself the first week.",
  },
];

export function Problem() {
  return (
    <Section id="why" className="border-b border-[var(--color-line)]">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Eyebrow>Why this exists</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Seller Central wasn&apos;t built for agents.
          </h2>
          <p className="mt-4 max-w-md text-[var(--color-ink-soft)]">
            The platform assumes a human at a keyboard. Give an agent direct
            access to the same data — through one MCP endpoint — and the work
            that used to take an afternoon becomes a sentence.
          </p>
        </div>
        <ul className="space-y-6">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-6"
            >
              <div className="text-base font-semibold text-[var(--color-ink)]">
                {p.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {p.body}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
