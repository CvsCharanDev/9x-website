"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  TrendingUp,
  Cloud,
  Cpu,
  Smartphone,
  ShieldCheck,
  Building2,
  Users,
  Briefcase,
  ArrowRight,
  PhoneCall,
  GraduationCap,
} from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const SERVICES = [
  { title: "Custom Software Engineering", href: "/services/software-development", icon: Code2 },
  { title: "FinTech & Trading Systems", href: "/services/fintech", icon: TrendingUp },
  { title: "Cloud & DevOps Solutions", href: "/services/cloud-devops", icon: Cloud },
  { title: "AI & Intelligent Automation", href: "/services/artificial-intelligence", icon: Cpu },
  { title: "Mobile App Development", href: "/services/mobile-development", icon: Smartphone },
  { title: "Cybersecurity & Compliance", href: "/services/cybersecurity", icon: ShieldCheck },
];

const COMPANY_LINKS = [
  { title: "About 9X Tech", href: "/about", icon: Building2 },
  { title: "Leadership Team", href: "/team", icon: Users },
  { title: "Careers", href: "/careers", icon: Briefcase, badge: "Hiring" },
  { title: "Culture & Life", href: "/culture", icon: GraduationCap },
];

function emptySubscribe() {
  return () => {};
}
function getIsMounted() {
  return true;
}
function getServerIsMounted() {
  return false;
}

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("services");
  const mounted = React.useSyncExternalStore(emptySubscribe, getIsMounted, getServerIsMounted);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const drawerContent = (
    <div className="fixed inset-0 z-[999] flex flex-col bg-white dark:bg-card text-foreground animate-in fade-in-0 duration-200">
      {/* Top Bar of Drawer */}
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/80 px-5 bg-white dark:bg-card">
        <Logo variant="compact" />
        <button
          type="button"
          onClick={closeMenu}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-muted/40 p-2 text-muted-foreground hover:text-primary hover:border-[#C5A059]/40 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 bg-white dark:bg-card">
        {/* Primary Action Button in Metallic Gold & Black */}
        <Link
          href="/contact"
          onClick={closeMenu}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#B8860B] via-[#DFB76C] to-[#C5A059] hover:from-[#A7760A] hover:to-[#B59048] px-4 py-3.5 text-sm font-bold text-neutral-950 border border-[#F3E5AB]/40 shadow-md shadow-[#C5A059]/20 transition-all duration-200"
        >
          <PhoneCall className="size-4 text-neutral-950" />
          <span>Let&apos;s Talk / Schedule Consultation</span>
        </Link>

        {/* Navigation Sections */}
        <div className="space-y-3.5 pt-1">
          {/* Services Accordion */}
          <div className="rounded-2xl border border-border/80 bg-[#FAF3E0]/30 dark:bg-neutral-900/40 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between p-4 text-sm font-semibold text-foreground bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Code2 className="size-4.5 text-primary" />
                Services & Solutions
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {openSection === "services" && (
              <div className="p-2 space-y-1 bg-white/70 dark:bg-neutral-900/50 border-t border-border/60">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 transition-colors text-xs font-medium text-foreground hover:text-primary"
                    >
                      <Icon className="size-4 text-muted-foreground" />
                      <span>{service.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Company Accordion */}
          <div className="rounded-2xl border border-border/80 bg-[#FAF3E0]/30 dark:bg-neutral-900/40 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="flex w-full items-center justify-between p-4 text-sm font-semibold text-foreground bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Building2 className="size-4.5 text-primary" />
                Company & Culture
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${
                  openSection === "company" ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {openSection === "company" && (
              <div className="p-2 space-y-1 bg-white/70 dark:bg-neutral-900/50 border-t border-border/60">
                {COMPANY_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl p-2.5 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 text-muted-foreground" />
                        <span>{link.title}</span>
                      </span>
                      {link.badge && (
                        <span className="rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 px-2 py-0.5 text-[9px] font-semibold text-[#A37D2C] dark:text-[#E5C158]">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Direct links */}
          <div className="divide-y divide-border/60 rounded-2xl border border-border/80 bg-[#FAF3E0]/20 dark:bg-neutral-900/40 overflow-hidden">
            <Link
              href="/industries"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/40 transition-colors"
            >
              <span>Industries</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/case-studies"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/40 transition-colors"
            >
              <span>Case Studies & Portfolio</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/insights"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/40 transition-colors"
            >
              <span>Insights & Articles</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/40 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Footer Status */}
      <div className="shrink-0 border-t border-border/80 p-4 bg-muted/40 dark:bg-black flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">9X Technology &bull; Gold Standards</span>
        <span className="text-primary font-semibold">Worldwide</span>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden flex items-center gap-2">
      <ThemeToggle />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-background/80 p-2 text-muted-foreground hover:text-primary hover:border-[#C5A059]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/40 transition-colors cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Render via Portal so it covers full screen on top of everything */}
      {isOpen && mounted && createPortal(drawerContent, document.body)}
    </div>
  );
};

export default MobileNav;
