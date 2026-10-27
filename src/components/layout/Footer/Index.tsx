import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import { FOOTER_NAV } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Container from "@/components/layout/Container";
import Logo from "@/components/header/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card/60 border-t border-border/80 backdrop-blur-xl mt-20 sm:mt-32 transition-colors">
      <Container size="wide" className="py-16 sm:py-20 lg:py-24">
        {/* Top Newsletter & Consultation Strip */}
        <div className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 via-brand-gold-muted/30 to-background/90 p-8 sm:p-12 lg:p-16 mb-16 overflow-hidden shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Scale Your Enterprise Engineering
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Ready to build mission-critical technology?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Schedule a confidential consultation with our principal architects. We respond
                within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md active:scale-95"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background/80 text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-border/60">
          {/* Col 1: Brand & Contact Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Global software engineering and FinTech consultancy. We partner with fast-growing
              scaleups and multinational institutions to engineer resilient, low-latency platforms.
            </p>

            {/* Global Offices */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Hyderabad, India:</span> HITEC
                  City, Telangana 500081
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Dubai, UAE:</span> Boulevard Plaza
                  Tower 1, Downtown Dubai
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Engineering Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.services.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Industries</h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.industries.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Company & Legal
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              {FOOTER_NAV.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground/80 hover:text-foreground hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>ISO 27001 & SOC2 Aligned</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-muted-foreground font-medium">All Systems Operational</span>
            </div>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="size-3 text-red-500 fill-red-500 inline" /> globally
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
