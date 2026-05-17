import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-[var(--color-ink)]">
          <Logo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[var(--color-ink-soft)] md:flex">
          <Link href="/#features" className="hover:text-[var(--color-ink)]">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-[var(--color-ink)]">
            Pricing
          </Link>
          <a href={site.docsUrl} className="hover:text-[var(--color-ink)]">
            Docs
          </a>
          <Link href="/about" className="hover:text-[var(--color-ink)]">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.signinUrl}
            className="hidden text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] sm:inline"
          >
            Sign in
          </a>
          <a
            href={site.signupUrl}
            className="inline-flex h-9 items-center rounded-full bg-[var(--color-ink)] px-4 text-sm font-medium text-white transition hover:bg-[var(--color-ink-soft)]"
          >
            Start trial
          </a>
        </div>
      </div>
    </header>
  );
}
