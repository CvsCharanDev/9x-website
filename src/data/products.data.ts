export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  metrics?: { label: string; value: string };
}

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "9x-trader",
    title: "9X Trader",
    category: "(Own products)",
    description:
      "High-frequency algorithmic trading application and multi-asset brokerage bridge delivering sub-millisecond execution, custom indicators, and real-time market depth visualization.",
    image: "/images/products/9x-trader.jpg",
    href: "/services/fintech",
    metrics: { label: "Execution Speed", value: "<850µs" },
  },
  {
    id: "moneyplant-fx",
    title: "Moneyplant FX",
    category: "(Own product)",
    description:
      "Institutional foreign exchange liquidity aggregator and margin management platform engineered for Tier-1 brokers and prop trading desks globally.",
    image: "/images/products/moneyplant-fx.jpg",
    href: "/services/fintech",
    metrics: { label: "Daily Turnover", value: "$1.8B+" },
  },
  {
    id: "project-2",
    title: "Project 2",
    category: "(Client product)",
    description:
      "Enterprise asset-tracking and algorithmic order routing infrastructure deployed across multi-cloud Kubernetes clusters with zero-trust perimeter defense.",
    image: "/images/products/project-2.jpg",
    href: "/case-studies",
    metrics: { label: "Uptime SLA", value: "99.999%" },
  },
  {
    id: "alpharisk-core",
    title: "AlphaRisk Core",
    category: "(Client product)",
    description:
      "Pre-trade risk mitigation and automated margin liquidation engine handling 50k+ transactions per second with real-time portfolio risk scoring.",
    image: "/images/products/9x-trader.jpg",
    href: "/services/software-development",
    metrics: { label: "Throughput", value: "50k req/s" },
  },
];
