import React from "react";
import { Shield, Zap, Code, Users, Award, Lock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const PILLARS = [
  {
    icon: Zap,
    title: "Low-Latency Engineering DNA",
    description:
      "Born from high-frequency trading requirements, we build every layer with profiling, memory efficiency, and throughput in mind.",
  },
  {
    icon: Users,
    title: "Principal-Led Execution",
    description:
      "No junior hand-offs. Every project is architected and overseen by battle-tested engineers with 10+ years of domain experience.",
  },
  {
    icon: Code,
    title: "100% IP & Code Ownership",
    description:
      "You retain full ownership of all source code, infrastructure scripts, and documentation with zero vendor lock-in.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Zero-Trust",
    description:
      "Strict isolation, end-to-end encryption, and continuous automated vulnerability scanning baked into every deployment pipeline.",
  },
  {
    icon: Shield,
    title: "SOC2 & ISO 27001 Ready",
    description:
      "Built strictly to institutional compliance standards, making audits frictionless for global enterprise clients.",
  },
  {
    icon: Award,
    title: "Global Delivery from Hyderabad & Dubai",
    description:
      "Dual-hub presence providing follow-the-sun engineering bandwidth and rapid on-site consultation.",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          badge="The 9X Advantage"
          title="Why Global Enterprises Partner With Us"
          subtitle="We eliminate engineering risk with deep quantitative rigor, elite talent, and transparent execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-xs hover:border-primary/40 transition-colors"
              >
                <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
