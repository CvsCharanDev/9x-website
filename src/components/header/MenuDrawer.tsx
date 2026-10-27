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

export const MenuDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("services");
  const mounted = React.useSyncExternalStore(emptySubscribe, getIsMounted, getServerIsMounted);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = React.useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 240);
  }, [isClosing]);

  const handleToggle = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsClosing(false);
      setIsOpen(true);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isClosing) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isOpen, isClosing, closeMenu]);

  const drawerContent = (
    <div className="fixed inset-0 z-[999] overflow-hidden">
      {/* Dimmed backdrop - click outside to close */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs ${
          isClosing ? "backdrop-fade-out" : "backdrop-fade-in"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel from the Right */}
      <aside
        className={`fixed inset-y-0 right-0 z-[1000] w-[85vw] max-w-[360px] sm:max-w-[400px] bg-white dark:bg-[#0A0A0A] text-foreground flex flex-col shadow-[-12px_0_40px_rgba(0,0,0,0.25)] dark:shadow-[-12px_0_40px_rgba(0,0,0,0.7)] border-l border-border/80 ${
          isClosing ? "drawer-slide-out-right" : "drawer-slide-in-right"
        }`}
      >
        {/* Top Header of Right Drawer */}
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-border/80 px-5 bg-white dark:bg-[#0A0A0A]">
          <Logo variant="compact" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-muted/40 p-2 text-muted-foreground hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
          {/* Top Primary Action: Connect Us */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#B8860B] via-[#DFB76C] to-[#C5A059] hover:from-[#A7760A] hover:to-[#B59048] px-5 py-3 text-sm font-bold text-neutral-950 border border-[#F3E5AB]/40 shadow-md shadow-[#C5A059]/20 transition-all duration-200"
          >
            <PhoneCall className="size-4 text-neutral-950" />
            <span>Connect Us</span>
          </Link>

          {/* Navigation Accordions */}
          <div className="space-y-3.5 pt-1">
            {/* Services Accordion */}
            <div className="rounded-2xl border border-border/80 bg-[#FAF3E0]/20 dark:bg-neutral-900/30 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("services")}
                className="flex w-full items-center justify-between p-4 text-sm font-semibold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Code2 className="size-4.5 text-[#C5A059]" />
                  Services & Solutions
                </span>
                <ChevronDown
                  className={`size-4 text-muted-foreground transition-transform duration-200 ${
                    openSection === "services" ? "rotate-180 text-[#C5A059]" : ""
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
                        className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 transition-colors text-xs font-medium text-foreground hover:text-[#C5A059]"
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
                className="flex w-full items-center justify-between p-4 text-sm font-semibold text-foreground bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Building2 className="size-4.5 text-[#C5A059]" />
                  Company & Culture
                </span>
                <ChevronDown
                  className={`size-4 text-muted-foreground transition-transform duration-200 ${
                    openSection === "company" ? "rotate-180 text-[#C5A059]" : ""
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
                        className="flex items-center justify-between rounded-xl p-2.5 hover:bg-[#FAF3E0]/60 dark:hover:bg-neutral-800 text-xs font-medium text-foreground hover:text-[#C5A059] transition-colors"
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

            {/* Direct Links */}
            <div className="divide-y divide-border/60 rounded-2xl border border-border/80 bg-[#FAF3E0]/15 dark:bg-neutral-900/30 overflow-hidden">
              <Link
                href="/industries"
                onClick={closeMenu}
                className="flex items-center justify-between p-3.5 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
              >
                <span>Industries</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
              <Link
                href="/case-studies"
                onClick={closeMenu}
                className="flex items-center justify-between p-3.5 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
              >
                <span>Case Studies & Portfolio</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
              <Link
                href="/insights"
                onClick={closeMenu}
                className="flex items-center justify-between p-3.5 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
              >
                <span>Insights & Articles</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-between p-3.5 text-sm font-medium text-foreground hover:text-[#C5A059] hover:bg-muted/40 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="shrink-0 border-t border-border/80 p-4 bg-muted/40 dark:bg-black flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-foreground">9X Technology &bull; Gold Standards</span>
          <span className="text-[#C5A059] font-semibold">Worldwide</span>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      {/* Circular Hamburger Button visible on mobile only */}
      <button
        type="button"
        onClick={handleToggle}
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

      {/* Portal Right Slide Drawer */}
      {isOpen && mounted && createPortal(drawerContent, document.body)}
    </>
  );
};

export default MenuDrawer;
