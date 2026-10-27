import React from "react";
import Container from "@/components/layout/Container";

const METRICS = [
  { value: "99.99%", label: "Uptime SLA", subtext: "Mission-critical fault tolerance" },
  {
    value: "$2.5B+",
    label: "Daily Trading Volume",
    subtext: "Processed across institutional engines",
  },
  { value: "<1ms", label: "Tick-to-Trade", subtext: "Sub-millisecond low latency" },
  { value: "150+", label: "Delivered Deployments", subtext: "Across FinTech, AI, & Enterprise" },
];

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-y border-border/60 bg-brand-gold-muted/15 dark:bg-card/40 relative">
      <Container size="wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {METRICS.map((item) => (
            <div key={item.label} className="space-y-2 flex flex-col items-center">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary via-brand-gold to-foreground bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground max-w-[200px]">{item.subtext}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;
