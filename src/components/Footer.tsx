import Link from "next/link";
import { site } from "@/lib/site";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Supported clients", href: "/#clients" },
];

const resourceLinks = [
  { label: "Docs", href: site.docsUrl, external: true },
  { label: "Quickstart — Claude", href: `${site.docsUrl}/quickstart/claude`, external: true },
  { label: "Quickstart — ChatGPT", href: `${site.docsUrl}/quickstart/chatgpt`, external: true },
  { label: "Tool reference", href: `${site.docsUrl}/tools`, external: true },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:hello@sellerconnect.ai" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
        {links.map((l) =>
          l.external ? (
            <li key={l.label}>
              <a href={l.href} className="hover:text-[var(--color-ink)]">
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.label}>
              <Link href={l.href} className="hover:text-[var(--color-ink)]">
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface-tint)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold tracking-tight text-[var(--color-ink)]">
              {site.name}
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-muted)]">
              The Amazon data layer for AI agents. One MCP endpoint, every tool you need.
            </p>
          </div>
          <Column title="Product" links={productLinks} />
          <Column title="Resources" links={resourceLinks} />
          <Column title="Company" links={companyLinks} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} SellerConnect. All rights reserved.</div>
          <div className="font-mono">{site.domain}</div>
        </div>
      </div>
    </footer>
  );
}
