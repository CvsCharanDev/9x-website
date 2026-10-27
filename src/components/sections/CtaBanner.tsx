import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Accelerate your engineering roadmap today.",
  description = "Partner with 9X Technology to build resilient, high-throughput digital platforms that scale with your enterprise.",
  buttonText = "Schedule an Architecture Call",
  buttonHref = "/contact",
}) => {
  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-r from-card via-brand-gold-muted/20 to-card p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3 text-primary" />
              <span>Next Steps</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={buttonHref}>
                <Button size="lg" className="rounded-full px-8 h-12 font-semibold gap-2 shadow-md">
                  <PhoneCall className="size-4" />
                  <span>{buttonText}</span>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 font-semibold border-border/80"
                >
                  <span>Browse All Services</span>
                  <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaBanner;
