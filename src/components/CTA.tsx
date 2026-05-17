import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Five minutes from OAuth to your first agent query.
          </h2>
          <p className="mt-4 text-white/70">
            Start the trial — no credit card. Cancel before day seven and pay nothing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.signupUrl}
              className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[var(--color-ink)] transition hover:bg-white/90"
            >
              Start 7-day free trial
            </a>
            <a
              href={site.docsUrl}
              className="inline-flex h-11 items-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:border-white/40"
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
