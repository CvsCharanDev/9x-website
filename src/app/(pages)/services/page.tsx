import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering Services & Solutions | 9X Technology",
  description:
    "Explore our complete suite of software engineering services: Custom Software, FinTech Trading Systems, Cloud & DevOps, AI Automation, Mobile, and Cybersecurity.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container size="wide">
        <SectionHeading
          badge="What We Do"
          title="World-Class Engineering Capabilities"
          subtitle="From algorithmic execution engines to enterprise generative AI, we architect systems built to scale with highest fidelity."
        />
      </Container>

      <ServicesGrid
        showAll={true}
        title="All Specialized Domains"
        subtitle="Select a domain below to review architecture specifications and deliverables."
      />

      <CtaBanner
        title="Need a dedicated engineering pod or custom solution?"
        description="Our teams can deploy within two weeks to augment your existing roadmap or lead full greenfield development."
        buttonText="Consult an Architect"
      />
    </div>
  );
}
