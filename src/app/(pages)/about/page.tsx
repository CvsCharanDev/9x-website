import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Target, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About 9X Technology | Mission, Heritage & Leadership",
  description:
    "Learn about 9X Technology's mission, quantitative software heritage, and our global presence across Hyderabad and Dubai.",
};

const VALUES = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every line of code and architectural decision is guided by performance profiling and zero-downtime reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Integrity",
    description:
      "We uphold bank-grade security protocols, strict NDA compliance, and full intellectual property protection.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description:
      "Operating across India and the UAE, our engineering teams provide 24/7 continuous delivery and on-site alignment.",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description:
      "We integrate directly with your teams through open Git repositories, daily standups, and transparent sprint metrics.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <Container size="wide">
        <SectionHeading
          badge="Company Heritage"
          title="Engineering Without Compromise"
          subtitle="9X Technology was founded with a singular conviction: complex, high-throughput digital platforms require elite architectural craftsmanship."
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              From Low-Latency Trading to Enterprise Digital Transformation
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Rooted in the rigorous, sub-millisecond world of financial exchanges and algorithmic
              trading systems, 9X Technology brings mathematical precision to custom software
              development.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Today, global enterprises and visionary scaleups rely on our cross-functional
              engineering pods to architect microservices, build generative AI pipelines, and deploy
              mission-critical cloud infrastructure.
            </p>
            <div className="pt-2">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <span>Meet Our Leadership Team</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl border border-primary/30 bg-brand-gold-muted/20 dark:bg-card space-y-6">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">
              Global Presence
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-border/80 bg-background/80 space-y-1">
                <div className="font-bold text-foreground">Hyderabad, India Hub</div>
                <div className="text-xs text-muted-foreground">
                  HITEC City &bull; Engineering & Quantitative Systems R&D
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-border/80 bg-background/80 space-y-1">
                <div className="font-bold text-foreground">Dubai, UAE Corporate Office</div>
                <div className="text-xs text-muted-foreground">
                  Downtown Dubai &bull; EMEA Client Operations & FinTech Advisory
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 space-y-10">
          <SectionHeading
            badge="Operating Principles"
            title="What Governs Our Work"
            subtitle="The core values embedded into every sprint, architecture review, and deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3"
                >
                  <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground">{val.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <CtaBanner
        title="Ready to collaborate with 9X Technology?"
        description="Book a direct conversation with our leadership and architecture teams."
        buttonText="Get In Touch"
      />
    </div>
  );
}
