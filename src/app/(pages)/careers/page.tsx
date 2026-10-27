import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Careers & Open Positions | 9X Technology",
  description:
    "Join our global engineering team in Hyderabad, Dubai, or remote. Build next-generation FinTech trading systems, AI, and distributed platforms.",
};

const OPENINGS = [
  {
    id: "job-1",
    title: "Senior Low-Latency C++ / Systems Engineer",
    department: "FinTech & Trading Engines",
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    summary:
      "Design and optimize high-throughput order matching engines, FIX protocol bridges, and kernel-bypass networking pipelines.",
    tags: ["C++20", "Kernel Bypass", "FIX Protocol", "Distributed Systems"],
  },
  {
    id: "job-2",
    title: "Lead Full-Stack Architect (Next.js & Go)",
    department: "Custom Software Engineering",
    location: "Hyderabad, India / Remote",
    type: "Full-Time",
    experience: "6+ Years",
    summary:
      "Lead cross-functional pods building enterprise web platforms with Next.js App Router, Go microservices, and Kafka event streams.",
    tags: ["Next.js", "React 19", "Go", "PostgreSQL", "Kafka"],
  },
  {
    id: "job-3",
    title: "Principal Cloud & DevOps Architect",
    department: "Infrastructure & Security",
    location: "Dubai, UAE / Hybrid",
    type: "Full-Time",
    experience: "7+ Years",
    summary:
      "Architect multi-cloud Kubernetes clusters on AWS/GCP, manage GitOps automation with ArgoCD, and enforce zero-trust security perimeters.",
    tags: ["Kubernetes", "Terraform", "AWS", "ArgoCD", "Zero-Trust"],
  },
  {
    id: "job-4",
    title: "Generative AI & Machine Learning Engineer",
    department: "AI & Innovation Labs",
    location: "Hyderabad, India / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    summary:
      "Develop production RAG pipelines, fine-tune domain-specific LLMs, and build autonomous agentic workflows for institutional clients.",
    tags: ["Python", "PyTorch", "LangChain", "Vector DBs", "FastAPI"],
  },
];

const PERKS = [
  "Competitive compensation with performance bonuses",
  "Premium medical, dental, and health coverage",
  "Flexible hybrid & remote working models",
  "Annual learning and certification stipend",
  "State-of-the-art hardware (Apple Silicon / Linux workstations)",
  "Relocation assistance between Hyderabad and Dubai",
];

export default function CareersPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <Container size="wide">
        <SectionHeading
          badge="Join Our Engineering Elite"
          title="Build What Others Deem Impossible"
          subtitle="At 9X Technology, you work on hard engineering problems: microsecond execution, distributed fault tolerance, and cutting-edge AI."
        />

        {/* Benefits Grid */}
        <div className="p-8 sm:p-12 rounded-3xl border border-primary/25 bg-brand-gold-muted/20 dark:bg-card">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Culture & Benefits
            </span>
            <h3 className="text-2xl font-extrabold text-foreground mt-1">
              Engineered to Support Your Best Work
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground"
              >
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mt-20 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Open Positions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Current Engineering Opportunities
            </h2>
          </div>

          <div className="space-y-4">
            {OPENINGS.map((job) => (
              <Card
                key={job.id}
                className="border-border/80 bg-card/60 p-6 sm:p-8 hover:border-primary/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-primary/40 text-primary text-xs">
                      {job.department}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="size-3" />
                      {job.location}
                    </span>
                    <span className="text-xs text-muted-foreground">&bull; {job.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link href={`/contact?job=${encodeURIComponent(job.title)}`}>
                    <Button className="rounded-full px-6 font-semibold gap-1.5 shadow-sm">
                      <span>Apply Now</span>
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <CtaBanner
        title="Don't see your exact role listed?"
        description="We are always eager to meet exceptional systems engineers, quantitative architects, and AI researchers."
        buttonText="Send General Application"
      />
    </div>
  );
}
