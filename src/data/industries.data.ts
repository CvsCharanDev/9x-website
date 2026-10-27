import { IndustryData } from "@/types/index.types";

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: "fintech-industry",
    slug: "fintech",
    title: "Financial Services & FinTech",
    description:
      "Transforming banking, algorithmic trading, and decentralized finance with ultra-low latency, bank-grade encryption, and regulatory compliance.",
    challenges: [
      "Sub-millisecond execution requirements under heavy market volatility.",
      "Strict compliance with SEC, CFTC, FCA, and GDPR regulations.",
      "Legacy mainframe core banking integration bottlenecks.",
    ],
    solutions: [
      "Custom C++ and Rust high-speed order routers and liquidity aggregators.",
      "Multi-tenant digital wallet engines with real-time fraud scoring.",
      "Automated compliance ledgering and regulatory reporting pipelines.",
    ],
    stats: [
      { value: "$2.5B+", label: "Daily Transaction Volume" },
      { value: "<1ms", label: "Tick-to-Execution Speed" },
      { value: "99.999%", label: "Platform Availability" },
    ],
  },
  {
    id: "ecommerce-industry",
    slug: "ecommerce",
    title: "E-Commerce & Digital Retail",
    description:
      "Scaling modern headless commerce, global omnichannel marketplaces, and AI-driven personalization engines that maximize conversion rates.",
    challenges: [
      "High checkout friction leading to cart abandonment.",
      "Flash sales traffic spikes overwhelming traditional monolithic backends.",
      "Complex multi-warehouse inventory synchronization in real time.",
    ],
    solutions: [
      "Headless Next.js storefronts with sub-second page loads globally.",
      "Event-driven inventory management powered by Apache Kafka.",
      "Personalized recommendation engines increasing average order value.",
    ],
    stats: [
      { value: "3.4x", label: "Conversion Lift" },
      { value: "450ms", label: "Average Page Load Speed" },
      { value: "100k+", label: "Concurrent Shoppers Handled" },
    ],
  },
  {
    id: "healthcare-industry",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "Secure, HIPAA-compliant patient management, remote telemedicine portals, and clinical data orchestration platforms.",
    challenges: [
      "Strict HIPAA, HITECH, and patient privacy compliance requirements.",
      "Fragmented electronic health record (EHR) systems.",
      "Need for secure, high-definition real-time video telemedicine.",
    ],
    solutions: [
      "Zero-knowledge encrypted health records and patient portals.",
      "HL7 / FHIR compliant interoperability adapters.",
      "WebRTC-powered telemedicine platforms with automated transcription.",
    ],
    stats: [
      { value: "100%", label: "HIPAA & GDPR Compliance" },
      { value: "500k+", label: "Patient Consultations Powered" },
      { value: "4.9/5", label: "Patient Satisfaction Score" },
    ],
  },
  {
    id: "logistics-industry",
    slug: "logistics",
    title: "Logistics & Supply Chain",
    description:
      "Intelligent fleet management, IoT sensor tracking, route optimization algorithms, and automated freight brokerage systems.",
    challenges: [
      "Rising fuel costs and sub-optimal delivery routing.",
      "Lack of real-time visibility across multimodal shipping routes.",
      "Manual dispatching and paper-heavy bills of lading.",
    ],
    solutions: [
      "AI-driven route optimization and fuel efficiency models.",
      "Real-time IoT telemetry pipelines tracking temperature and location.",
      "Automated load matching and digital freight marketplaces.",
    ],
    stats: [
      { value: "22%", label: "Fuel Cost Reduction" },
      { value: "99.2%", label: "On-Time Delivery Rate" },
      { value: "15k+", label: "Fleet Vehicles Monitored" },
    ],
  },
];
