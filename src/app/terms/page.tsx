import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow } from "@/components/Container";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms under which you use SellerConnect.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Last updated: May 17, 2026
            </p>
            <LegalDoc>
              <h2>Using the service</h2>
              <p>
                By signing up for SellerConnect you agree to use the service
                only with Amazon Seller accounts you are authorized to operate.
                You&apos;re responsible for the actions your AI agent takes
                through your API keys.
              </p>

              <h2>Subscriptions &amp; billing</h2>
              <p>
                Plans are billed monthly. The 7-day free trial requires no
                payment method. After the trial, your card is charged on the
                anniversary date each month. Cancel anytime from the
                dashboard; your subscription remains active until the end of
                the current billing period.
              </p>

              <h2>Amazon&apos;s terms</h2>
              <p>
                SellerConnect operates as an authorized SP-API partner. Your
                use of Amazon data through SellerConnect is also subject to
                Amazon&apos;s own developer and seller policies.
              </p>

              <h2>Liability</h2>
              <p>
                SellerConnect is provided &quot;as is.&quot; We work hard to
                keep the service reliable, but we&apos;re not liable for losses
                resulting from agent actions, data inaccuracies, or service
                interruptions. Always review your audit log.
              </p>

              <h2>Changes</h2>
              <p>
                We may update these terms. We&apos;ll notify you by email
                before any material changes take effect.
              </p>

              <p className="!mt-10 !text-xs !text-[var(--color-muted)]">
                This is a starting template. Replace with reviewed legal copy
                before production launch.
              </p>
            </LegalDoc>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
