import Link from "next/link";
import { Section, Eyebrow } from "./Container";
import { pricing } from "@/lib/site";
import { PricingCard } from "./PricingCard";

export function PricingTeaser() {
  return (
    <Section id="pricing" className="border-b border-[var(--color-line)] bg-[var(--color-surface-tint)]">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Start free. Pick a plan when you&apos;re convinced.
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          7-day trial, no credit card. Choose Ads or Full Suite before the trial ends.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
        <PricingCard tier={pricing.ads} />
        <PricingCard tier={pricing.full} />
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/pricing"
          className="font-mono text-sm text-[var(--color-accent-ink)] hover:underline"
        >
          See full plan comparison →
        </Link>
      </div>
    </Section>
  );
}
