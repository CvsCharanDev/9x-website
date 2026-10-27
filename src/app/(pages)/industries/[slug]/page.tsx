import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { INDUSTRIES_DATA } from "@/data/industries.data";
import CtaBanner from "@/components/sections/CtaBanner";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found | 9X Technology" };
  }

  return {
    title: `${industry.title} Solutions | 9X Technology`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <Container size="wide">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to All Industries</span>
          </Link>
        </div>

        {/* Sector Hero */}
        <div className="max-w-4xl space-y-6">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 px-3 py-1 text-xs"
          >
            Industry Practice
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            {industry.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {industry.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 font-semibold shadow-md gap-2">
                <span>Request Sector Briefing</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl border border-primary/25 bg-brand-gold-muted/20 dark:bg-card">
          {industry.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">{s.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Challenges vs Solutions Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-border/80 bg-card/60 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Critical Challenges Faced</h3>
            <ul className="space-y-4">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="size-2 rounded-full bg-destructive mt-1.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-primary/30 bg-primary/5 space-y-6">
            <h3 className="text-xl font-bold text-foreground">The 9X Solution Framework</h3>
            <ul className="space-y-4">
              {industry.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-primary mt-1 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <CtaBanner
        title={`Modernize your ${industry.title.toLowerCase()} ecosystem.`}
        description="Schedule a working session with our sector technology leads."
        buttonText="Get In Touch"
      />
    </div>
  );
}
