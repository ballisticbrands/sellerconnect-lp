export const site = {
  name: "SellerConnect",
  domain: "sellerconnect.ai",
  url: "https://sellerconnect.ai",
  appUrl: "https://app.sellerconnect.ai",
  docsUrl: "https://docs.sellerconnect.ai",
  signupUrl: "https://app.sellerconnect.ai/sign-up",
  signinUrl: "https://app.sellerconnect.ai/sign-in",
  tagline: "MCP server for Amazon sellers",
} as const;

export const pricing = {
  trial: {
    name: "Free trial",
    price: "$0",
    period: "for 7 days",
    description: "Full access. No credit card. Pick a plan when the trial ends.",
    features: [
      "All 92 tools across Ads, Inventory, Catalog, Finance, Ranking, Fulfillment",
      "Connect one Amazon Seller account",
      "Up to one API key with full tool scope",
      "Email support",
    ],
    cta: { label: "Start 7-day free trial", href: "https://app.sellerconnect.ai/sign-up" },
    highlight: false,
  },
  ads: {
    name: "Ads",
    price: "$29",
    period: "per month",
    description: "Everything an Amazon Ads operator needs to let an agent manage spend.",
    features: [
      "39 advertising tools — reads, writes, live SP-API",
      "Campaign, keyword, and search-term analytics",
      "Bid management with full audit trail",
      "TACOS and Search Query Performance",
      "Daily data sync",
      "One Amazon Ads profile included",
      "Data retained from the day you connect",
    ],
    cta: { label: "Start 7-day free trial", href: "https://app.sellerconnect.ai/sign-up" },
    highlight: false,
  },
  full: {
    name: "Full Suite",
    price: "$79",
    period: "per month",
    description: "Every tool we expose. The agent runs the whole account.",
    features: [
      "Everything in Ads",
      "Inventory, listings, and FBA analytics",
      "Orders, returns, and reimbursements",
      "Catalog management",
      "Multi-Channel Fulfillment",
      "Settlement economics and profitability review",
      "Priority email support",
    ],
    cta: { label: "Start 7-day free trial", href: "https://app.sellerconnect.ai/sign-up" },
    highlight: true,
  },
} as const;

export const toolDomains = [
  { name: "Ads", count: 39 },
  { name: "Inventory", count: 29 },
  { name: "Catalog", count: 13 },
  { name: "Finance", count: 4 },
  { name: "Fulfillment", count: 4 },
  { name: "Ranking", count: 3 },
] as const;

export const clients = [
  { name: "Claude", href: "https://docs.sellerconnect.ai/quickstart/claude" },
  { name: "Claude Code", href: "https://docs.sellerconnect.ai/quickstart/claude-code" },
  { name: "ChatGPT", href: "https://docs.sellerconnect.ai/quickstart/chatgpt" },
  { name: "Cursor", href: "https://docs.sellerconnect.ai/quickstart/cursor" },
  { name: "OpenClaw", href: "https://docs.sellerconnect.ai/quickstart/openclaw" },
  { name: "Hermes", href: "https://docs.sellerconnect.ai/quickstart/hermes" },
] as const;
