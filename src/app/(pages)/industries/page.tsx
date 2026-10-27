import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { INDUSTRIES_DATA } from "@/data/industries.data";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Industries We Empower | 9X Technology",
  description:
    "Tailored digital engineering solutions for Financial Services & FinTech, E-Commerce, Healthcare, and Logistics.",
};

export default function IndustriesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Domain Expertise"
          title="Deep Industry Specialization"
          subtitle="We tailor specialized architectural frameworks designed around the unique regulatory and operational realities of each vertical."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <Card
              key={ind.id}
              className="flex flex-col justify-between border-border/80 bg-card/60 hover:border-primary/50 transition-all p-6 sm:p-8"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Sector
                  </span>
                  <CardTitle className="text-2xl font-bold mt-1 text-foreground">
                    {ind.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {ind.description}
                  </CardDescription>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-muted/40 border border-border/60 text-center">
                  {ind.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-base sm:text-lg font-extrabold text-primary">
                        {s.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground line-clamp-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Challenges Solved:
                  </div>
                  {ind.challenges.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore Sector Solutions</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Don't see your specific vertical listed?"
        description="Our software engineering models are highly extensible across telecom, energy, and government sectors."
        buttonText="Discuss Your Industry Requirements"
      />
    </div>
  );
}
