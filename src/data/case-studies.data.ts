import { CaseStudyData } from "@/types/index.types";

export const CASE_STUDIES_DATA: CaseStudyData[] = [
  {
    id: "case-1",
    slug: "institutional-trading-engine",
    title: "Sub-Millisecond Institutional Order Routing Platform",
    client: "Global Tier-1 Prime Brokerage",
    industry: "FinTech & Financial Markets",
    summary:
      "Re-engineered a legacy trading infrastructure into an ultra-low latency execution engine, achieving 850-microsecond execution speeds and scaling daily volume to $2.5B+.",
    impactMetrics: [
      { label: "Execution Speed", value: "850µs" },
      { label: "Daily Volume", value: "$2.5B+" },
      { label: "System Availability", value: "99.999%" },
    ],
    technologies: ["C++20", "Go", "FIX 4.4", "TimescaleDB", "Redis", "Kernel Bypass"],
    testimonial: {
      quote:
        "9X Technology delivered a level of engineering excellence and quantitative precision that sets the gold standard in institutional FinTech.",
      author: "Chief Technology Officer",
      role: "Global Prime Brokerage",
    },
  },
  {
    id: "case-2",
    slug: "enterprise-cloud-migration",
    title: "Multi-Region Cloud Modernization & Zero-Downtime Migration",
    client: "Fortune 500 Logistics Enterprise",
    industry: "Logistics & Supply Chain",
    summary:
      "Migrated 120+ monolithic services to Kubernetes on AWS and GCP with GitOps automation, reducing infrastructure spend by 35% while doubling release velocity.",
    impactMetrics: [
      { label: "Infrastructure Savings", value: "35%" },
      { label: "Release Velocity", value: "4x Faster" },
      { label: "Downtime during Migration", value: "0 mins" },
    ],
    technologies: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "ArgoCD", "Kafka"],
    testimonial: {
      quote:
        "The migration was seamless. We went from quarterly deployments to multiple daily production releases without a single minute of customer-facing downtime.",
      author: "VP of Engineering",
      role: "Fortune 500 Enterprise",
    },
  },
  {
    id: "case-3",
    slug: "genai-knowledge-retrieval",
    title: "Enterprise Agentic RAG & Decision Intelligence System",
    client: "Multinational Asset Management Firm",
    industry: "Banking & Asset Management",
    summary:
      "Built a secure vector-indexed GenAI intelligence platform that synthesizes tens of thousands of regulatory filings and quarterly reports with citation verification.",
    impactMetrics: [
      { label: "Analyst Time Saved", value: "18 hrs/wk" },
      { label: "Fact Retrieval Accuracy", value: "99.2%" },
      { label: "Indexed Documents", value: "5M+" },
    ],
    technologies: ["Python", "FastAPI", "Anthropic Claude", "Pinecone", "LangChain", "Docker"],
    testimonial: {
      quote:
        "Our analysts can query decades of filings and get verifiable, hallucination-free answers within seconds. It transformed our research velocity.",
      author: "Head of Quantitative Research",
      role: "Asset Management Firm",
    },
  },
];
