import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, ShieldCheck, Clock, CheckCircle2, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact 9X Technology | Schedule an Architecture Briefing",
  description:
    "Connect with our principal software architects in Hyderabad and Dubai. Inquire about custom software development, FinTech engines, and dedicated engineering pods.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Direct Engagement"
          title="Connect With Our Principal Architects"
          subtitle="Schedule a technical scope review. We sign NDAs upfront and provide senior architectural feedback within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Office Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl border border-primary/25 bg-brand-gold-muted/20 dark:bg-card space-y-6">
              <h3 className="text-xl font-bold text-foreground">Corporate Hubs & Inquiries</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="font-bold text-foreground">Hyderabad, India</div>
                    <div className="text-muted-foreground">
                      9th Floor, Tech Hub Towers, HITEC City, Hyderabad 500081
                    </div>
                    <div className="text-primary font-medium">{siteConfig.contact.phoneIndia}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="size-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="font-bold text-foreground">Dubai, UAE</div>
                    <div className="text-muted-foreground">
                      Level 14, Boulevard Plaza Tower 1, Downtown Dubai
                    </div>
                    <div className="text-primary font-medium">{siteConfig.contact.phoneDubai}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="size-9 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="text-muted-foreground">General Communications</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Guarantees */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                <Clock className="size-4" />
                <span>Our Engagement SLA</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Mutual NDA executed within 4 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Principal architect scoping call within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Transparent sprint estimates & technical feasibility audit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Brief Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="border-border/80 bg-card/70 p-6 sm:p-10 shadow-xl backdrop-blur-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Project Brief & Architecture Consultation
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Fill in your requirements below and our technical leads will reach out directly.
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Your Name *</label>
                      <Input placeholder="e.g. Alex Mercer" className="bg-background/80" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Business Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="alex@company.com"
                        className="bg-background/80"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Company Name</label>
                      <Input placeholder="e.g. Acme FinTech Corp" className="bg-background/80" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Phone Number</label>
                      <Input placeholder="+1 (555) 000-0000" className="bg-background/80" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Primary Service Interest
                    </label>
                    <select className="w-full rounded-md border border-input bg-background/80 px-3 py-2 text-xs sm:text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>FinTech & Trading Platforms</option>
                      <option>Custom Software Engineering</option>
                      <option>Cloud Architecture & DevOps</option>
                      <option>AI & Intelligent Automation</option>
                      <option>Mobile App Development</option>
                      <option>Cybersecurity & Compliance</option>
                      <option>Dedicated Engineering Pods / Staff Augmentation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Project Scope & Technical Details *
                    </label>
                    <Textarea
                      rows={5}
                      placeholder="Briefly describe your requirements, timeline, target volume or scale, and existing technology stack..."
                      className="bg-background/80 resize-none"
                    />
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full rounded-full font-semibold gap-2 shadow-md"
                  >
                    <Send className="size-4" />
                    <span>Send Architecture Inquiry</span>
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground pt-1">
                    <ShieldCheck className="size-3.5 text-primary" />
                    <span>Strict confidentiality assured. No spam or unsolicited marketing.</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
