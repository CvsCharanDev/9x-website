import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SERVICES_DATA } from "@/data/services.data";
import CtaBanner from "@/components/sections/CtaBanner";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found | 9X Technology" };
  }

  return {
    title: `${service.title} | 9X Technology`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      <Container size="wide">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-primary/40 text-primary bg-primary/5 px-3 py-1 text-xs"
            >
              Service Domain
            </Badge>
            {service.badge && (
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                {service.badge}
              </Badge>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 font-semibold shadow-md gap-2">
                <span>Book Scope Consultation</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl border border-primary/25 bg-brand-gold-muted/20 dark:bg-card">
          {service.metrics.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">{metric.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Core Capabilities / Features */}
        <div className="mt-20 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              What We Build & Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((feat) => (
              <Card key={feat.title} className="bg-card/70 border-border/80 p-6 space-y-3">
                <CardHeader className="p-0">
                  <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <CardTitle className="text-base font-bold">{feat.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack & Deliverables */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div className="p-8 rounded-3xl border border-border/80 bg-card/60 space-y-6">
            <div className="flex items-center gap-2.5">
              <Layers className="size-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Preferred Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-border/60 bg-muted text-xs font-semibold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-8 rounded-3xl border border-border/80 bg-card/60 space-y-6">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="size-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Standard Deliverables</h3>
            </div>
            <ul className="space-y-2.5">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <CtaBanner
        title={`Scale your ${service.title.toLowerCase()} roadmap.`}
        description="Our senior engineering pods integrate seamlessly with your internal architects to accelerate delivery."
        buttonText="Discuss Your Architecture"
      />
    </div>
  );
}
