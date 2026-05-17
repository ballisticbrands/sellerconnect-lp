import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sellerconnect.ai"),
  title: {
    default: "SellerConnect — MCP server for Amazon sellers",
    template: "%s · SellerConnect",
  },
  description:
    "The Amazon data layer for AI agents. Connect Claude, ChatGPT, Cursor, or any MCP client to your Amazon Seller Central account in under five minutes.",
  openGraph: {
    title: "SellerConnect — MCP server for Amazon sellers",
    description:
      "Connect any AI agent to your Amazon Seller Central data. Ads, inventory, catalog, finance, ranking, fulfillment — one MCP endpoint.",
    url: "https://sellerconnect.ai",
    siteName: "SellerConnect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SellerConnect — MCP server for Amazon sellers",
    description:
      "Connect any AI agent to your Amazon Seller Central data in minutes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
