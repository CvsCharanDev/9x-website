import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, Cpu, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      <Container size="wide">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Subtle Live Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-foreground text-xs sm:text-sm font-medium shadow-xs">
            <span className="flex size-2 rounded-full bg-primary animate-ping" />
            <span className="text-primary font-semibold">9X Gold Standard</span>
            <span className="text-muted-foreground">
              &bull; Enterprise Software & FinTech Engineering
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
            Architecting the next generation of{" "}
            <span className="bg-gradient-to-r from-primary via-brand-gold to-primary/80 bg-clip-text text-transparent">
              Mission-Critical
            </span>{" "}
            digital platforms.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From ultra-low latency FinTech execution engines to enterprise AI and resilient cloud
            ecosystems, 9X Technology transforms ambitious vision into high-throughput reality.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full font-semibold px-8 h-12 shadow-md gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full font-semibold px-8 h-12 border-border/80"
              >
                <span>Explore Services</span>
              </Button>
            </Link>
          </div>

          {/* Trust & Capability Badges */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
              <Zap className="size-4 text-primary shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">&lt;1ms Latency</div>
                <div className="text-[10px] text-muted-foreground">High-Speed Execution</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Zero-Trust</div>
                <div className="text-[10px] text-muted-foreground">Bank-Grade Security</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
              <Cpu className="size-4 text-primary shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Agentic AI</div>
                <div className="text-[10px] text-muted-foreground">Production RAG & ML</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
              <Terminal className="size-4 text-primary shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Cloud-Native</div>
                <div className="text-[10px] text-muted-foreground">Kubernetes & DevOps</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
