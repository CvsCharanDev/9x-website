import { ServiceData } from "@/types/index.types";

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "software-dev",
    slug: "software-development",
    title: "Custom Software Engineering",
    shortDescription:
      "Enterprise-grade custom web and distributed platforms engineered with modern modular architectures.",
    fullDescription:
      "We design, build, and scale bespoke enterprise software ecosystems. From distributed microservices to high-throughput data pipelines, our solutions deliver zero-downtime reliability and future-proof extensibility.",
    iconName: "Code2",
    features: [
      {
        title: "Distributed Microservices",
        description:
          "Decoupled domain-driven design ensuring independent scalability and rapid continuous deployment.",
      },
      {
        title: "Enterprise API Gateways",
        description:
          "RESTful, GraphQL, and gRPC endpoints fortified with rate-limiting, OAuth2/OIDC, and observability.",
      },
      {
        title: "Legacy Modernization",
        description:
          "Refactoring monolithic infrastructure into cloud-native, high-performance distributed systems.",
      },
    ],
    techStack: ["Next.js", "React", "Node.js", "Go", "PostgreSQL", "Kafka", "Docker", "Kubernetes"],
    deliverables: [
      "Architecture Blueprints",
      "Full Source Code",
      "CI/CD Pipelines",
      "Automated Test Suites",
      "API Documentation",
    ],
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Execution Latency", value: "<15ms" },
      { label: "Throughput", value: "50k+ req/sec" },
    ],
  },
  {
    id: "fintech",
    slug: "fintech",
    title: "FinTech & Trading Systems",
    shortDescription:
      "Ultra-low-latency execution engines, brokerage bridges, FIX protocols, and institutional algorithmic trading platforms.",
    fullDescription:
      "Engineered for the stringent demands of high-frequency trading and algorithmic brokerages. We build ultra-low latency order matching engines, FIX 4.2/4.4 protocol gateways, risk managers, and institutional crypto & FX liquidity routers.",
    iconName: "TrendingUp",
    badge: "Core Specialty",
    features: [
      {
        title: "Sub-Millisecond Order Routing",
        description:
          "Optimized C++ & Go execution engines designed for minimum tick-to-trade latency.",
      },
      {
        title: "Brokerage & FIX Protocol Bridges",
        description:
          "Direct integration with global exchanges, liquidity providers, MT4/MT5 gateways, and cTrader APIs.",
      },
      {
        title: "Real-time Risk & Margin Engines",
        description:
          "Pre-trade and post-trade automated risk mitigation, liquidation engines, and margin call alerts.",
      },
    ],
    techStack: ["C++", "Go", "Rust", "Python", "FIX Protocol", "WebSocket", "Redis", "TimescaleDB"],
    deliverables: [
      "Order Routing Engine",
      "FIX Gateways",
      "Risk Management Dashboard",
      "Compliance Auditing Tools",
    ],
    metrics: [
      { label: "Tick-to-Trade", value: "<850µs" },
      { label: "Daily Volume Managed", value: "$2.5B+" },
      { label: "Exchange Integrations", value: "40+" },
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    shortDescription:
      "Multi-cloud architectures, Kubernetes orchestration, zero-trust infrastructure, and automated GitOps CI/CD pipelines.",
    fullDescription:
      "Accelerate release cycles and ensure infrastructure resilience. We design hardened AWS, GCP, and Azure cloud topologies utilizing Terraform Infrastructure as Code (IaC) and declarative Kubernetes workflows.",
    iconName: "Cloud",
    features: [
      {
        title: "Kubernetes & Container Orchestration",
        description:
          "Production-grade EKS, GKE, and self-hosted clusters with automated autoscaling and self-healing.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Deterministic infrastructure provisioning using Terraform, OpenTofu, and Pulumi.",
      },
      {
        title: "GitOps CI/CD Pipelines",
        description:
          "Automated pipelines powered by ArgoCD, GitHub Actions, and canary deployment rollouts.",
      },
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Kubernetes",
      "Terraform",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    deliverables: [
      "Terraform Scripts",
      "Cluster Helm Charts",
      "Automated CI/CD Workflows",
      "Disaster Recovery Playbook",
    ],
    metrics: [
      { label: "Deployment Frequency", value: "10x Faster" },
      { label: "Cloud Cost Reduction", value: "Up to 38%" },
      { label: "MTTR (Mean Time to Recovery)", value: "<3 mins" },
    ],
  },
  {
    id: "ai-ml",
    slug: "artificial-intelligence",
    title: "AI & Intelligent Automation",
    shortDescription:
      "Enterprise Generative AI agents, predictive machine learning models, computer vision, and workflow automation.",
    fullDescription:
      "Transform business processes with cutting-edge artificial intelligence. We develop custom LLM workflows, RAG knowledge retrieval systems, neural predictive analytics, and automated decision-making engines.",
    iconName: "Cpu",
    badge: "Innovations",
    features: [
      {
        title: "Enterprise RAG & Knowledge Systems",
        description:
          "Vector-indexed LLM search across internal company knowledge bases with citation accuracy.",
      },
      {
        title: "Predictive Analytics & Forecasting",
        description:
          "Custom deep learning architectures for anomaly detection, customer churn, and market movements.",
      },
      {
        title: "Autonomous Agentic Workflows",
        description:
          "Multi-agent systems executing autonomous operations, customer support, and business workflows.",
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenAI",
      "Anthropic",
      "LangChain",
      "Pinecone",
      "Qdrant",
      "FastAPI",
    ],
    deliverables: [
      "Trained Model Weights",
      "Inference REST/gRPC APIs",
      "Vector Database Pipeline",
      "Monitoring Telemetry",
    ],
    metrics: [
      { label: "Model Accuracy", value: "98.4%" },
      { label: "Manual Effort Saved", value: "72%" },
      { label: "Response Latency", value: "<350ms" },
    ],
  },
  {
    id: "mobile-dev",
    slug: "mobile-development",
    title: "Mobile App Development",
    shortDescription:
      "High-performance native and cross-platform mobile apps for iOS and Android with fluid 120fps interactions.",
    fullDescription:
      "Delivering premium mobile experiences. From intuitive consumer apps to high-security financial trading interfaces, our mobile development combines pixel-perfect UI with offline-first synchronization.",
    iconName: "Smartphone",
    features: [
      {
        title: "React Native & Flutter Apps",
        description:
          "Unified cross-platform codebases with native performance and platform-specific capabilities.",
      },
      {
        title: "Native Swift & Kotlin",
        description:
          "Mission-critical applications built directly on Apple Metal, CoreAnimation, and Android Jetpack.",
      },
      {
        title: "Biometric & Secure Storage",
        description:
          "Hardware-level Secure Enclave storage, biometric authentication, and end-to-end payload encryption.",
      },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "GraphQL", "SQLite"],
    deliverables: [
      "App Store & Play Store Submissions",
      "Native Codebases",
      "Design System UI Kit",
      "Crashlytics Integration",
    ],
    metrics: [
      { label: "Frame Rate", value: "Solid 120fps" },
      { label: "App Store Rating", value: "4.8+ Avg" },
      { label: "Crash-free Sessions", value: "99.95%" },
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    shortDescription:
      "Zero-trust security architecture, automated penetration testing, vulnerability remediation, and regulatory compliance.",
    fullDescription:
      "Safeguard enterprise infrastructure against advanced persistent threats. We provide comprehensive threat modeling, SOC2 / ISO 27001 readiness audits, and zero-trust perimeter defense.",
    iconName: "ShieldCheck",
    features: [
      {
        title: "Zero-Trust Architecture",
        description:
          "Identity-based microsegmentation ensuring continuous validation across all network segments.",
      },
      {
        title: "Penetration Testing & Red Teaming",
        description:
          "Rigorous ethical hacking simulating advanced adversary attack vectors across web, API, and cloud.",
      },
      {
        title: "Regulatory Compliance (SOC2 / ISO)",
        description:
          "Full audit preparation, automated compliance monitoring, and data privacy governance.",
      },
    ],
    techStack: ["Wazuh", "Vault", "Cloudflare", "OpenVAS", "OWASP ZAP", "SonarQube", "Trivy"],
    deliverables: [
      "Vulnerability Assessment Report",
      "Hardened Configurations",
      "Audit Evidence Pack",
      "Incident Response SOP",
    ],
    metrics: [
      { label: "Vulnerabilities Resolved", value: "100%" },
      { label: "Compliance Pass Rate", value: "100%" },
      { label: "Threat Detection Time", value: "<60 secs" },
    ],
  },
];
