import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SellerConnect is the Amazon data layer for AI agents. We build the MCP server we wished existed.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="border-b border-[var(--color-line)]">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              We&apos;re building the Amazon data layer for AI agents.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                {site.name} started from a simple observation: every team trying
                to use an LLM against their Amazon data ended up writing the
                same glue. They&apos;d hit the SP-API, wait 30 minutes for a
                report, parse it, join it against three other endpoints, and
                hand the result to the model. The work that should have been a
                question became a pipeline.
              </p>
              <p>
                Model Context Protocol is the right interface — a clean,
                structured contract between an agent and the systems it
                touches. SellerConnect is the implementation we wished existed:
                ninety-two tools across the six Amazon domains, instant reads,
                audited writes, and a five-minute OAuth.
              </p>
              <p>
                We&apos;re a small team based in the US. If you&apos;re building
                with us — or against the SP-API in any way — we want to hear
                from you. Reach us at{" "}
                <a
                  href="mailto:hello@sellerconnect.ai"
                  className="text-[var(--color-accent-ink)] underline"
                >
                  hello@sellerconnect.ai
                </a>
                .
              </p>
            </div>
          </div>
        </Section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
