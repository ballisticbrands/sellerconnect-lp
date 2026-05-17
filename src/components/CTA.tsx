import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface-tint)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-elevated)] p-10 text-center sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/3 left-1/2 h-72 w-[140%] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(20,212,208,0.22),transparent_70%)]"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Five minutes from OAuth to your first agent query.
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Start the trial — no credit card. Cancel before day seven and pay nothing.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.signupUrl}
                className="inline-flex h-11 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-[var(--color-surface)] transition hover:bg-[var(--color-accent-ink)]"
              >
                Start 7-day free trial
              </a>
              <a
                href={site.docsUrl}
                className="inline-flex h-11 items-center rounded-full border border-[var(--color-line)] bg-[var(--color-elevated-2)] px-6 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-ink-soft)]"
              >
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
