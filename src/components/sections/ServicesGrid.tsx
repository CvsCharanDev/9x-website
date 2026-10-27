import React from "react";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Cloud,
  Cpu,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
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
import { SERVICES_DATA } from "@/data/services.data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  TrendingUp,
  Cloud,
  Cpu,
  Smartphone,
  ShieldCheck,
};

interface ServicesGridProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  showAll = true,
  title = "Engineered for Extreme Performance",
  subtitle = "End-to-end technology solutions built on battle-tested architectures and modern paradigms.",
}) => {
  const displayedServices = showAll ? SERVICES_DATA : SERVICES_DATA.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading badge="Core Capabilities" title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Code2;

            return (
              <Card
                key={service.id}
                className="group relative flex flex-col justify-between border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon className="size-6" />
                      </div>
                      {service.badge && (
                        <Badge
                          variant="outline"
                          className="border-primary/40 text-primary bg-primary/5"
                        >
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-2">
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feat) => (
                        <div
                          key={feat.title}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-4 border-t border-border/40">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
