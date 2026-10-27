import React from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES_DATA } from "@/data/case-studies.data";

export const CaseStudyCards: React.FC<{ limit?: number }> = ({ limit = 3 }) => {
  const items = CASE_STUDIES_DATA.slice(0, limit);

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <Container size="wide">
        <SectionHeading
          badge="Proven Track Record"
          title="Featured Case Studies"
          subtitle="Explore how our engineering teams deliver transformational impact for market leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((study) => (
            <Card
              key={study.id}
              className="flex flex-col justify-between border-border/80 bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary/30 text-[11px]">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold leading-snug">{study.title}</CardTitle>
                  <CardDescription className="text-xs text-primary font-medium mt-1">
                    Client: {study.client}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{study.summary}</p>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-muted/40 border border-border/50 text-center">
                    {study.impactMetrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-sm font-extrabold text-primary">{metric.value}</div>
                        <div className="text-[10px] text-muted-foreground line-clamp-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <div className="text-xs italic text-muted-foreground bg-primary/5 p-3 rounded-xl border border-primary/15 relative">
                      <Quote className="size-3 text-primary/40 inline mr-1 -mt-1" />
                      &ldquo;{study.testimonial.quote}&rdquo;
                      <div className="mt-1 font-semibold text-foreground not-italic text-[11px]">
                        &mdash; {study.testimonial.role}
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>

              <CardFooter className="pt-2 border-t border-border/40">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyCards;
