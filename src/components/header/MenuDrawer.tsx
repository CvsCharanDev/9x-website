"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
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
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";

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

export const MenuDrawer: React.FC = () => {
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
    <div className="fixed inset-0 z-[999] flex flex-col bg-white dark:bg-[#0A0A0A] text-foreground animate-in fade-in-0 duration-200">
      {/* Top Bar */}
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/80 px-6 sm:px-8 bg-white dark:bg-[#0A0A0A]">
        <Logo variant="compact" />
        <button
          type="button"
          onClick={closeMenu}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-muted/40 p-2 text-muted-foreground hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-6 max-w-4xl mx-auto w-full">
        {/* Top Callout */}
        <div className="rounded-2xl border border-[#C5A059]/30 bg-gradient-to-r from-[#FAF3E0] to-[#F5E6BE] dark:from-[#18181B] dark:to-[#121212] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-[#C5A059] shrink-0" />
            <div>
              <div className="text-sm font-bold text-foreground">
                9X Technology Global Solutions
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise software engineering, FinTech trading architecture, and AI cloud systems.
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 px-5 py-2.5 text-xs font-bold border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-black transition-colors shrink-0 shadow-sm"
          >
            <PhoneCall className="size-3.5" />
            <span>Schedule Consultation</span>
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-4 pt-2">
          {/* Services Accordion */}
          <div className="rounded-2xl border border-border/80 bg-[#FAF3E0]/20 dark:bg-neutral-900/30 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between p-4 sm:p-5 text-sm sm:text-base font-semibold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Code2 className="size-5 text-[#C5A059]" />
                Services & Capabilities
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180 text-[#C5A059]" : ""
                }`}
              />
            </button>

            {openSection === "services" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 sm:p-4 bg-white/70 dark:bg-neutral-900/50 border-t border-border/60">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 transition-colors text-xs sm:text-sm font-medium text-foreground hover:text-[#C5A059]"
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
          <div className="rounded-2xl border border-border/80 bg-[#FAF3E0]/20 dark:bg-neutral-900/30 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="flex w-full items-center justify-between p-4 sm:p-5 text-sm sm:text-base font-semibold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Building2 className="size-5 text-[#C5A059]" />
                Company, People & Careers
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 ${
                  openSection === "company" ? "rotate-180 text-[#C5A059]" : ""
                }`}
              />
            </button>

            {openSection === "company" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 sm:p-4 bg-white/70 dark:bg-neutral-900/50 border-t border-border/60">
                {COMPANY_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl p-3 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 text-xs sm:text-sm font-medium text-foreground hover:text-[#C5A059] transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 text-muted-foreground" />
                        <span>{link.title}</span>
                      </span>
                      {link.badge && (
                        <span className="rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 px-2 py-0.5 text-[10px] font-semibold text-[#A37D2C] dark:text-[#E5C158]">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Direct Links */}
          <div className="divide-y divide-border/60 rounded-2xl border border-border/80 bg-[#FAF3E0]/15 dark:bg-neutral-900/30 overflow-hidden">
            <Link
              href="/industries"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
            >
              <span>Industries</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/case-studies"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
            >
              <span>Case Studies & Portfolio</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/insights"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
            >
              <span>Insights & Tech Articles</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between p-4 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-border/80 p-4 sm:p-5 bg-muted/40 dark:bg-black flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">9X Technology &bull; Enterprise Solutions</span>
        <span className="text-[#C5A059] font-semibold">Worldwide</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Circular Hamburger Button visible on mobile only */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 shadow-sm text-foreground hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-all duration-200 cursor-pointer shrink-0 active:scale-95"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="flex flex-col gap-1 items-center justify-center size-5">
          <span className="w-4 h-0.5 rounded-full bg-current transition-all" />
          <span className="w-4 h-0.5 rounded-full bg-current transition-all" />
          <span className="w-4 h-0.5 rounded-full bg-current transition-all" />
        </span>
      </button>

      {/* Portal Drawer Overlay */}
      {isOpen && mounted && createPortal(drawerContent, document.body)}
    </>
  );
};

export default MenuDrawer;
