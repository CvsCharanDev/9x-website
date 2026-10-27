import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CaseStudyCards from "@/components/sections/CaseStudyCards";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies & Client Portfolio | 9X Technology",
  description:
    "Explore how 9X Technology delivers mission-critical software engineering, trading systems, and cloud infrastructure for market leaders.",
};

export default function CaseStudiesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Case Studies"
          title="Engineered for Measurable Impact"
          subtitle="Real-world case studies detailing architectures, quantitative metrics, and business outcomes."
        />
      </Container>

      <CaseStudyCards limit={10} />

      <CtaBanner
        title="Ready to achieve similar engineering milestones?"
        description="Let our architects review your technical requirements."
        buttonText="Discuss Your Project"
      />
    </div>
  );
}
