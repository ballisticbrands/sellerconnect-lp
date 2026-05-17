import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow } from "@/components/Container";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { pricing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start with a 7-day free trial. Then $29/mo for Ads, $79/mo for the Full Suite.",
};

const comparison = [
  {
    group: "Tools",
    rows: [
      { label: "Ads tools (campaigns, bids, SQP, TACOS)", trial: "✓", ads: "✓", full: "✓" },
      { label: "Inventory & FBA tools", trial: "✓", ads: "—", full: "✓" },
      { label: "Catalog & listings tools", trial: "✓", ads: "—", full: "✓" },
      { label: "Finance & settlement tools", trial: "✓", ads: "—", full: "✓" },
      { label: "Ranking & search-term tools", trial: "✓", ads: "—", full: "✓" },
      { label: "Fulfillment & MCF tools", trial: "✓", ads: "—", full: "✓" },
    ],
  },
  {
    group: "Data & access",
    rows: [
      { label: "Daily data sync", trial: "✓", ads: "✓", full: "✓" },
      { label: "History retained from connect date", trial: "✓", ads: "✓", full: "✓" },
      { label: "Per-key tool scoping", trial: "✓", ads: "✓", full: "✓" },
      { label: "Audit log of every write", trial: "✓", ads: "✓", full: "✓" },
      { label: "Amazon Seller accounts", trial: "1", ads: "1", full: "Up to 3" },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Email support", trial: "✓", ads: "✓", full: "✓" },
      { label: "Priority response", trial: "—", ads: "—", full: "✓" },
    ],
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="border-b border-[var(--color-line)]">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Simple plans. Cancel anytime.
            </h1>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Start with a 7-day free trial. No credit card. Pick Ads or Full
              Suite before the trial ends.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <PricingCard tier={pricing.trial} />
            <PricingCard tier={pricing.ads} />
            <PricingCard tier={pricing.full} />
          </div>
        </Section>

        <Section className="border-b border-[var(--color-line)] bg-[var(--color-surface-tint)]">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Compare</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              What&apos;s in each plan.
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[var(--color-line)] bg-[var(--color-surface-tint)] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              <div />
              <div className="text-center">Trial</div>
              <div className="text-center">Ads</div>
              <div className="text-center text-[var(--color-accent-ink)]">Full Suite</div>
            </div>
            {comparison.map((g) => (
              <div key={g.group}>
                <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[var(--color-line)] bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent-ink)]">
                  <div>{g.group}</div>
                  <div />
                  <div />
                  <div />
                </div>
                {g.rows.map((r) => (
                  <div
                    key={r.label}
                    className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-[var(--color-line)] px-6 py-3.5 text-sm last:border-b-0"
                  >
                    <div className="text-[var(--color-ink)]">{r.label}</div>
                    <div className="text-center text-[var(--color-ink-soft)]">{r.trial}</div>
                    <div className="text-center text-[var(--color-ink-soft)]">{r.ads}</div>
                    <div className="text-center font-medium text-[var(--color-ink)]">{r.full}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
