import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES_DATA } from "@/data/case-studies.data";
import CtaBanner from "@/components/sections/CtaBanner";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((c) => c.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found | 9X Technology" };
  }

  return {
    title: `${study.title} | Case Study | 9X Technology`,
    description: study.summary,
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <Container size="wide">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-primary/40 text-primary bg-primary/5 px-3 py-1 text-xs"
            >
              {study.industry}
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">
              Client: {study.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {study.title}
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
            {study.summary}
          </p>
        </div>

        {/* Quantified Impact Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl border border-primary/25 bg-brand-gold-muted/20 dark:bg-card">
          {study.impactMetrics.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">{metric.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Banner */}
        {study.testimonial && (
          <div className="mt-16 p-8 sm:p-12 rounded-3xl border border-primary/30 bg-card/60 relative overflow-hidden">
            <Quote className="size-10 text-primary/20 absolute right-8 top-8" />
            <p className="text-base sm:text-xl italic text-foreground leading-relaxed max-w-3xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-border/40">
              <div className="text-sm font-bold text-primary">{study.testimonial.author}</div>
              <div className="text-xs text-muted-foreground">
                {study.testimonial.role} &bull; {study.client}
              </div>
            </div>
          </div>
        )}

        {/* Technologies Employed */}
        <div className="mt-16 p-8 rounded-3xl border border-border/80 bg-card/40 space-y-4">
          <h3 className="text-lg font-bold text-foreground">Technologies Employed</h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-border/60 bg-muted text-xs font-semibold text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <CtaBanner
        title="Ready to achieve similar velocity and results?"
        description="Book a dedicated briefing session with our team."
        buttonText="Get In Touch"
      />
    </div>
  );
}
