import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service | 9X Technology",
  description: "Terms and conditions governing the use of the 9X Technology website and services.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow" className="space-y-8">
        <SectionHeading
          badge="Legal & Governance"
          title="Terms of Service"
          subtitle="Last updated: October 2026"
          align="left"
        />

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            Welcome to 9X Technology. By accessing our website (`9xtechnology.com`) or engaging with
            our engineering services, you agree to comply with and be bound by the following terms
            and conditions.
          </p>

          <h3 className="text-lg font-bold text-foreground">1. Intellectual Property</h3>
          <p>
            All content, graphics, layouts, and brand trademarks on this site are the exclusive
            property of 9X Technology. Custom software code developed for clients is transferred and
            assigned according to the specific Statement of Work (SOW) executed between the parties.
          </p>

          <h3 className="text-lg font-bold text-foreground">2. Professional Engagements</h3>
          <p>
            Our software engineering, consulting, and staff augmentation services are governed by
            formal Master Services Agreements (MSA) and Statement of Work (SOW) documents detailing
            deliverables, milestones, and warranties.
          </p>

          <h3 className="text-lg font-bold text-foreground">3. Governing Law</h3>
          <p>
            These terms are governed by and construed in accordance with the laws of Telangana,
            India and the Emirate of Dubai, United Arab Emirates, without regard to conflict of law
            principles.
          </p>
        </div>
      </Container>
    </div>
  );
}
