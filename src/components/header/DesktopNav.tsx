"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
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
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Custom Software Engineering",
    description: "Scalable web platforms, microservices architecture, and enterprise APIs.",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    title: "FinTech & Trading Systems",
    description: "Ultra-low latency execution engines, brokerage bridges, and algorithmic trading.",
    href: "/services/fintech",
    icon: TrendingUp,
    badge: "Specialty",
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Kubernetes orchestration, automated CI/CD pipelines, and cloud migrations.",
    href: "/services/cloud-devops",
    icon: Cloud,
  },
  {
    title: "AI & Intelligent Automation",
    description: "Generative AI pipelines, predictive models, and enterprise workflow automation.",
    href: "/services/artificial-intelligence",
    icon: Cpu,
    badge: "Innovations",
  },
  {
    title: "Mobile App Development",
    description: "High-performance iOS, Android, and cross-platform mobile experiences.",
    href: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Zero-trust architecture, penetration testing, and security auditing.",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
  },
];

const INDUSTRIES = [
  {
    title: "Financial Services & FinTech",
    description: "Trading platforms, digital wallets, and payment gateways.",
    href: "/industries/fintech",
  },
  {
    title: "E-Commerce & Digital Retail",
    description: "Omnichannel marketplaces and inventory intelligence.",
    href: "/industries/ecommerce",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant telemedicine and patient analytics.",
    href: "/industries/healthcare",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Fleet tracking, route optimization, and ERP integrations.",
    href: "/industries/logistics",
  },
];

const COMPANY_LINKS = [
  { title: "About 9X Tech", description: "Our mission, journey, and values.", href: "/about", icon: Building2 },
  { title: "Our Leadership", description: "Meet the executive team.", href: "/team", icon: Users },
  { title: "Careers", description: "Join our global engineering team.", href: "/careers", icon: Briefcase, badge: "We're Hiring" },
  { title: "Life at 9X", description: "Culture, benefits, and remote flexibility.", href: "/culture", icon: GraduationCap },
];

export const DesktopNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3.5 3xl:gap-5 4xl:gap-6 px-5 py-1.5 2xl:px-7 2xl:py-2.5 3xl:px-9 3xl:py-3 4xl:px-11 4xl:py-3.5 rounded-full bg-white/70 dark:bg-neutral-900/60 border border-white/80 dark:border-neutral-800 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] dark:shadow-none text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium backdrop-blur-md"
    >
      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("services")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
          className={`flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl transition-all duration-200 cursor-pointer ${
            activeMenu === "services"
              ? "text-[#C5A059] bg-[#C5A059]/10 font-semibold"
              : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
          }`}
          aria-expanded={activeMenu === "services"}
        >
          <span>Services</span>
          <ChevronDown
            className={`size-3 2xl:size-3.5 3xl:size-4 4xl:size-5 transition-transform duration-200 ${
              activeMenu === "services" ? "rotate-180 text-[#C5A059]" : "text-muted-foreground"
            }`}
          />
        </button>

        {activeMenu === "services" && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[600px] 2xl:w-[720px] 3xl:w-[840px] 4xl:w-[980px] animate-in fade-in-0 zoom-in-95 duration-150">
            <div className="rounded-2xl border border-border/80 bg-white dark:bg-[#0A0A0A] p-5 2xl:p-6 3xl:p-7 4xl:p-8 shadow-2xl ring-1 ring-[#C5A059]/15">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                <span className="text-xs 2xl:text-sm 3xl:text-base font-semibold uppercase tracking-wider text-[#C5A059]">
                  Our Engineering Services
                </span>
                <Link
                  href="/services"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs 2xl:text-sm 3xl:text-base font-medium text-foreground hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                >
                  View All Services <ArrowRight className="size-3 2xl:size-4 text-[#C5A059]" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2.5 2xl:gap-3.5 3xl:gap-4">
                {SERVICES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group flex flex-col gap-1 rounded-xl p-2.5 2xl:p-3.5 transition-all hover:bg-[#FAF3E0]/50 dark:hover:bg-neutral-900 border border-transparent hover:border-[#C5A059]/30"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-lg border border-border/80 bg-background p-1.5 2xl:p-2 text-muted-foreground group-hover:border-[#C5A059]/60 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
                          <Icon className="size-4 2xl:size-5 3xl:size-6" />
                        </div>
                        <span className="text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-semibold text-foreground group-hover:text-[#C5A059] transition-colors">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 px-1.5 py-0.2 text-[9px] 2xl:text-[11px] font-semibold text-[#A37D2C] dark:text-[#E5C158]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] 2xl:text-xs 3xl:text-sm text-muted-foreground line-clamp-2 pl-8 2xl:pl-10">
                        {item.description}
                      </p>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Feature Banner */}
              <div className="mt-4 rounded-xl border border-[#C5A059]/30 bg-gradient-to-r from-[#FAF3E0] to-[#F5E6BE] dark:from-[#18181B] dark:to-[#121212] p-3 2xl:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="size-4 2xl:size-5 text-[#C5A059] animate-pulse" />
                  <div>
                    <div className="text-xs 2xl:text-sm 3xl:text-base font-semibold text-foreground">
                      Need Dedicated Developers?
                    </div>
                    <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-muted-foreground">
                      Scale your engineering bandwidth with pre-vetted engineers.
                    </div>
                  </div>
                </div>
                <Link
                  href="/staff-augmentation"
                  onClick={() => setActiveMenu(null)}
                  className="rounded-lg bg-black text-white dark:bg-white dark:text-black border border-[#C5A059]/40 px-3 py-1 2xl:px-4 2xl:py-1.5 text-xs 2xl:text-sm font-semibold hover:bg-[#C5A059] hover:text-black dark:hover:bg-[#C5A059] dark:hover:text-black transition-colors shrink-0 shadow-xs"
                >
                  Hire Talent
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Industries Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("industries")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
          className={`flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl transition-all duration-200 cursor-pointer ${
            activeMenu === "industries"
              ? "text-[#C5A059] bg-[#C5A059]/10 font-semibold"
              : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
          }`}
          aria-expanded={activeMenu === "industries"}
        >
          <span>Industries</span>
          <ChevronDown
            className={`size-3 2xl:size-3.5 3xl:size-4 4xl:size-5 transition-transform duration-200 ${
              activeMenu === "industries" ? "rotate-180 text-[#C5A059]" : "text-muted-foreground"
            }`}
          />
        </button>

        {activeMenu === "industries" && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[400px] 2xl:w-[480px] 3xl:w-[560px] 4xl:w-[640px] animate-in fade-in-0 zoom-in-95 duration-150">
            <div className="rounded-2xl border border-border/80 bg-white dark:bg-[#0A0A0A] p-4 2xl:p-5 3xl:p-6 shadow-2xl ring-1 ring-[#C5A059]/15 space-y-1">
              <div className="pb-2 px-2 text-xs 2xl:text-sm 3xl:text-base font-semibold uppercase tracking-wider text-[#C5A059] border-b border-border/60">
                Industries We Empower
              </div>
              {INDUSTRIES.map((ind) => (
                <Link
                  key={ind.title}
                  href={ind.href}
                  onClick={() => setActiveMenu(null)}
                  className="group block rounded-xl p-2.5 2xl:p-3 transition-all hover:bg-[#FAF3E0]/50 dark:hover:bg-neutral-900 border border-transparent hover:border-[#C5A059]/30"
                >
                  <div className="text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-semibold text-foreground group-hover:text-[#C5A059] transition-colors">
                    {ind.title}
                  </div>
                  <div className="text-[11px] 2xl:text-xs 3xl:text-sm text-muted-foreground mt-0.5">
                    {ind.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Studies */}
      <Link
        href="/case-studies"
        className="px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground hover:text-[#C5A059] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        Case Studies
      </Link>

      {/* Company Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("company")}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
          className={`flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl transition-all duration-200 cursor-pointer ${
            activeMenu === "company"
              ? "text-[#C5A059] bg-[#C5A059]/10 font-semibold"
              : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
          }`}
          aria-expanded={activeMenu === "company"}
        >
          <span>Company</span>
          <ChevronDown
            className={`size-3 2xl:size-3.5 3xl:size-4 4xl:size-5 transition-transform duration-200 ${
              activeMenu === "company" ? "rotate-180 text-[#C5A059]" : "text-muted-foreground"
            }`}
          />
        </button>

        {activeMenu === "company" && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[360px] 2xl:w-[440px] 3xl:w-[520px] 4xl:w-[600px] animate-in fade-in-0 zoom-in-95 duration-150">
            <div className="rounded-2xl border border-border/80 bg-white dark:bg-[#0A0A0A] p-3 2xl:p-4 3xl:p-5 shadow-2xl ring-1 ring-[#C5A059]/15 space-y-1">
              {COMPANY_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 rounded-xl p-2.5 2xl:p-3 transition-all hover:bg-[#FAF3E0]/50 dark:hover:bg-neutral-900 border border-transparent hover:border-[#C5A059]/30"
                  >
                    <div className="rounded-lg border border-border/80 bg-background p-1.5 2xl:p-2 text-muted-foreground group-hover:border-[#C5A059]/60 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors mt-0.5">
                      <Icon className="size-4 2xl:size-5 3xl:size-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-semibold text-foreground group-hover:text-[#C5A059] transition-colors">
                          {link.title}
                        </span>
                        {link.badge && (
                          <span className="rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 px-1.5 py-0.2 text-[9px] 2xl:text-[11px] font-semibold text-[#A37D2C] dark:text-[#E5C158]">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] 2xl:text-xs 3xl:text-sm text-muted-foreground mt-0.5">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Careers */}
      <Link
        href="/careers"
        className="px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground hover:text-[#C5A059] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        Careers
      </Link>

      {/* Insights */}
      <Link
        href="/insights"
        className="px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2.5 4xl:px-6 4xl:py-3 rounded-full text-xs xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground hover:text-[#C5A059] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        Insights
      </Link>
    </nav>
  );
};

export default DesktopNav;
