import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow } from "@/components/Container";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SellerConnect handles your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Last updated: May 17, 2026
            </p>
            <LegalDoc>
              <h2>What we collect</h2>
              <p>
                When you create an account we store your email address and a
                hashed password. When you connect Amazon Seller Central we
                store an OAuth refresh token so we can call the SP-API on your
                behalf. We never see or store your Amazon username or password.
              </p>

              <h2>What we do with it</h2>
              <p>
                We use your account information to authenticate you and to
                contact you about your subscription. We use your Amazon
                connection only to execute tool calls your agent makes. We log
                each tool call so you can audit what your agent did.
              </p>

              <h2>What we don&apos;t do</h2>
              <p>
                We don&apos;t sell your data. We don&apos;t train models on
                your data. We don&apos;t share your data with third parties
                except sub-processors strictly necessary to operate the service
                (hosting, payments, transactional email).
              </p>

              <h2>Retention &amp; deletion</h2>
              <p>
                You can revoke your Amazon connection or delete your account at
                any time from the dashboard. When you delete your account we
                purge your data within 30 days. Backups roll off within 90 days.
              </p>

              <h2>Contact</h2>
              <p>
                Questions? Email{" "}
                <a href="mailto:privacy@sellerconnect.ai">privacy@sellerconnect.ai</a>.
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
