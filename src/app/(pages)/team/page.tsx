import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/card";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Executive Leadership Team | 9X Technology",
  description:
    "Meet the leadership and engineering architects guiding 9X Technology's global FinTech, AI, and software operations.",
};

const LEADERS = [
  {
    name: "Yatin Kukreja",
    role: "Co-Founder & Executive Director",
    bio: "Visionary technology executive with over 15 years steering enterprise engineering operations, FinTech platforms, and international scaling.",
    focus: "Global Strategy & Institutional Partnerships",
  },
  {
    name: "Harsh Agarwal",
    role: "Co-Founder & Chief Operating Officer",
    bio: "Expert in organizational scaling, international client delivery, and quantitative systems execution across India and EMEA.",
    focus: "Operations, Governance & Global Delivery",
  },
  {
    name: "Principal FinTech Architect",
    role: "Head of Quantitative Trading Systems",
    bio: "Pioneering ultra-low latency C++ order execution engines and broker connectivity bridges across global exchanges.",
    focus: "Low-Latency Execution & FIX Gateways",
  },
  {
    name: "Head of AI & Cloud Infrastructure",
    role: "VP of Enterprise AI & Distributed Systems",
    bio: "Spearheading enterprise RAG systems, Kubernetes cloud modernization, and zero-trust security perimeters.",
    focus: "Applied AI, LLMs & Multi-Cloud Architecture",
  },
];

export default function TeamPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Leadership"
          title="Guided by Elite Technical Architects"
          subtitle="Our founders and technical leaders combine decades of quantitative systems heritage with modern enterprise delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERS.map((leader) => (
            <Card
              key={leader.name}
              className="border-border/80 bg-card/60 p-8 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary font-bold text-lg">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/25">
                    {leader.focus}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <div className="text-xs font-semibold text-primary">{leader.role}</div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Want to collaborate with our leadership team?"
        description="Schedule a high-level briefing to align on your organization's technical strategy."
        buttonText="Schedule a Meeting"
      />
    </div>
  );
}
