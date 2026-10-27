import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Life at 9X Technology | Culture & Values",
  description:
    "Discover the engineering culture, continuous learning ethos, and collaborative spirit that define life at 9X Technology.",
};

const PILLARS = [
  {
    title: "Engineering Autonomy",
    description:
      "Small, autonomous pods with direct client exposure and zero bureaucratic red tape.",
  },
  {
    title: "Rigor over Hype",
    description:
      "We benchmark before we claim. Technical decisions are grounded in profiling, data, and reproducible results.",
  },
  {
    title: "Continuous Upskilling",
    description:
      "Dedicated stipends for advanced certifications, conferences, and internal brown-bag architecture reviews.",
  },
  {
    title: "Global Mobility",
    description:
      "Opportunities to collaborate across our Hyderabad R&D facility and Dubai regional hub.",
  },
];

export default function CulturePage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Our DNA"
          title="Where Engineering Excellence Thrives"
          subtitle="We have cultivated an environment where curious, ambitious engineers build groundbreaking systems without friction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl border border-border/80 bg-card/60 space-y-3"
            >
              <Sparkles className="size-5 text-primary" />
              <h3 className="text-base font-bold text-foreground">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Ready to build your career with 9X?"
        description="Explore our open positions in systems engineering, AI, and cloud architecture."
        buttonText="View Careers"
        buttonHref="/careers"
      />
    </div>
  );
}
