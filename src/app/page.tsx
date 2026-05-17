import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/Comparison";
import { Clients } from "@/components/Clients";
import { Capabilities } from "@/components/Capabilities";
import { Setup } from "@/components/Setup";
import { PricingTeaser } from "@/components/PricingTeaser";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <Capabilities />
        <Clients />
        <Setup />
        <PricingTeaser />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
