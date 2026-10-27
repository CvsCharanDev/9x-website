import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Dedicated Engineering Pods & Staff Augmentation | 9X Technology",
  description:
    "Scale your engineering velocity with pre-vetted senior software engineers, low-latency C++ developers, and cloud architects.",
};

const BENEFITS = [
  {
    title: "Pre-Vetted Senior Engineers Only",
    description:
      "Every engineer has passed rigorous coding interviews, algorithmic benchmarks, and system design evaluations.",
  },
  {
    title: "Rapid 14-Day Deployment",
    description:
      "Onboard dedicated pods or individual specialists into your Git repositories and Jira boards in under two weeks.",
  },
  {
    title: "Zero Overhead & Complete IP Security",
    description:
      "We handle payroll, benefits, and hardware while you maintain 100% intellectual property ownership under strict NDAs.",
  },
  {
    title: "Time-Zone Aligned Execution",
    description:
      "Seamless overlap with EMEA, US, and APAC time zones for synchronized daily standups and sprint planning.",
  },
];

export default function StaffAugmentationPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Engineering Bandwidth"
          title="Dedicated Engineering Pods on Demand"
          subtitle="Overcome technical hiring bottlenecks with specialized senior developers who hit the ground running on day one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((b) => (
            <Card key={b.title} className="p-8 border-border/80 bg-card/60 space-y-4">
              <CheckCircle2 className="size-6 text-primary" />
              <CardTitle className="text-xl font-bold text-foreground">{b.title}</CardTitle>
              <CardContent className="p-0 text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Need to augment your engineering bandwidth?"
        description="Share your role requirements and review pre-vetted engineer profiles within 48 hours."
        buttonText="Hire Pre-Vetted Talent"
      />
    </div>
  );
}
