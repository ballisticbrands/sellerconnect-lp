export function LegalDoc({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mt-8 max-w-none text-[var(--color-ink-soft)]
        [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[var(--color-ink)]
        [&_p]:mt-4 [&_p]:leading-relaxed
        [&_a]:text-[var(--color-accent-ink)] [&_a]:underline
      "
    >
      {children}
    </div>
  );
}
