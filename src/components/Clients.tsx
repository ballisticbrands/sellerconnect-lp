import { Section, Eyebrow } from "./Container";
import { clients } from "@/lib/site";

export function Clients() {
  return (
    <Section id="clients" className="border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Connect your agent</Eyebrow>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Works with the MCP client you already use.
        </h2>
        <p className="mt-4 text-[var(--color-ink-soft)]">
          Copy a config snippet. Paste it. Done. Same API key, every client.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-6 transition hover:-translate-y-0.5 hover:border-[var(--color-ink-soft)]"
          >
            <ClientGlyph name={c.name} />
            <div className="text-sm font-medium text-[var(--color-ink)]">
              {c.name}
            </div>
            <div className="text-[11px] text-[var(--color-muted)] group-hover:text-[var(--color-accent-ink)]">
              Connect →
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function ClientGlyph({ name }: { name: string }) {
  const initial = name[0];
  return (
    <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--color-surface-tint)] font-mono text-sm font-semibold text-[var(--color-ink)]">
      {initial}
    </div>
  );
}
