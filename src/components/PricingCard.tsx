import { clsx } from "@/lib/cx";

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  cta: { label: string; href: string };
  highlight: boolean;
};

export function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={clsx(
        "relative flex flex-col rounded-2xl border bg-[var(--color-elevated)] p-7",
        tier.highlight
          ? "border-[var(--color-accent)] shadow-[0_30px_60px_-30px_rgba(20,212,208,0.35)]"
          : "border-[var(--color-line)]",
      )}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[var(--color-accent)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-surface)]">
          Most popular
        </div>
      )}
      <div className="flex items-baseline justify-between">
        <div className="text-lg font-semibold text-[var(--color-ink)]">{tier.name}</div>
        <div className="text-right">
          <div className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            {tier.price}
          </div>
          <div className="text-xs text-[var(--color-muted)]">{tier.period}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{tier.description}</p>
      <ul className="mt-6 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 flex-none rounded-full bg-[var(--color-accent)]"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={tier.cta.href}
        className={clsx(
          "mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition",
          tier.highlight
            ? "bg-[var(--color-ink)] text-[var(--color-surface)] hover:bg-white"
            : "border border-[var(--color-line)] bg-[var(--color-elevated)] text-[var(--color-ink)] hover:border-[var(--color-ink-soft)]",
        )}
      >
        {tier.cta.label}
      </a>
    </div>
  );
}
