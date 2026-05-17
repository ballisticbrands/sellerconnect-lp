import { Section, Eyebrow } from "./Container";
import { toolDomains } from "@/lib/site";

const total = toolDomains.reduce((s, t) => s + t.count, 0);

const descriptions: Record<string, string> = {
  Ads: "Campaigns, ad groups, keywords, negative keywords, search-term reports, bid adjustments with audit trail, SQP, TACOS.",
  Inventory: "FBA inventory, inbound shipments, restock recommendations, stranded inventory, age tiers, reimbursements.",
  Catalog: "Listings, variations, attributes, images, A+ content references, listing-quality issues.",
  Finance: "Settlement reports, fee breakdowns, reimbursements, profitability rollups.",
  Ranking: "Organic rank history, search volume, share of voice, search-term performance.",
  Fulfillment: "Orders, returns, MCF (Multi-Channel Fulfillment), shipment status.",
};

export function Capabilities() {
  return (
    <Section id="features" className="border-b border-[var(--color-line)] bg-[var(--color-surface-tint)]">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>What your agent gets</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          {total} tools across {toolDomains.length} domains.
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Reads return structured, pre-joined data. Writes pre-read the current
          value and log every change, so you can audit anything your agent did.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolDomains.map((d) => (
          <div
            key={d.name}
            className="rounded-2xl border border-[var(--color-line)] bg-white p-6"
          >
            <div className="flex items-baseline justify-between">
              <div className="text-base font-semibold text-[var(--color-ink)]">
                {d.name}
              </div>
              <div className="font-mono text-xs text-[var(--color-muted)]">
                {d.count} tools
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {descriptions[d.name]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
