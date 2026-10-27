import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | 9X Technology",
  description: "9X Technology's commitment to data privacy, protection, and security compliance.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow" className="space-y-8">
        <SectionHeading
          badge="Legal & Compliance"
          title="Privacy Policy"
          subtitle="Last updated: October 2026"
          align="left"
        />

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            At 9X Technology (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take
            your privacy and security with utmost seriousness. This Privacy Policy outlines how we
            collect, store, and process personal and corporate information when you use our website
            or engage our engineering services.
          </p>

          <h3 className="text-lg font-bold text-foreground">1. Information We Collect</h3>
          <p>
            We collect personal details that you voluntarily supply via our contact forms (such as
            your name, corporate email address, phone number, and project brief) solely for the
            purpose of communicating with you and scoping software engineering engagements.
          </p>

          <h3 className="text-lg font-bold text-foreground">2. Client Confidentiality & IP</h3>
          <p>
            All technical discussions, client source code, architecture diagrams, and proprietary
            algorithms are protected under binding Mutual Non-Disclosure Agreements (NDAs). We
            adhere to zero-trust standards and do not share, sell, or disclose proprietary
            information to third parties.
          </p>

          <h3 className="text-lg font-bold text-foreground">3. Security & Compliance</h3>
          <p>
            Our systems and hosting providers comply with ISO/IEC 27001 and SOC2 standards,
            utilizing TLS 1.3 encryption in transit and AES-256 encryption at rest.
          </p>

          <h3 className="text-lg font-bold text-foreground">4. Inquiries</h3>
          <p>
            For privacy inquiries or data requests, please contact our Data Governance Officer at{" "}
            <a href="mailto:privacy@9xtechnology.com" className="text-primary underline">
              privacy@9xtechnology.com
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
