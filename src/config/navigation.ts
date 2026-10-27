export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Company", href: "/about" },
  { title: "Careers", href: "/careers", badge: "Hiring" },
  { title: "Insights", href: "/insights" },
  { title: "Contact", href: "/contact" },
];

export const FOOTER_NAV: { [key: string]: NavItem[] } = {
  services: [
    { title: "Custom Software Engineering", href: "/services/software-development" },
    { title: "FinTech & Trading Platforms", href: "/services/fintech" },
    { title: "Cloud Architecture & DevOps", href: "/services/cloud-devops" },
    { title: "AI & Machine Learning", href: "/services/artificial-intelligence" },
    { title: "Mobile & Cross-Platform", href: "/services/mobile-development" },
    { title: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
    { title: "Dedicated Engineering Teams", href: "/staff-augmentation" },
  ],
  industries: [
    { title: "Financial Services & Banking", href: "/industries/fintech" },
    { title: "E-Commerce & Digital Retail", href: "/industries/ecommerce" },
    { title: "Healthcare & Life Sciences", href: "/industries/healthcare" },
    { title: "Logistics & Supply Chain", href: "/industries/logistics" },
  ],
  company: [
    { title: "About 9X Tech", href: "/about" },
    { title: "Leadership Team", href: "/team" },
    { title: "Workplace & Culture", href: "/culture" },
    { title: "Career Opportunities", href: "/careers" },
    { title: "Press & Newsroom", href: "/insights" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Security Governance", href: "/services/cybersecurity" },
    { title: "Cookie Policy", href: "/privacy#cookies" },
  ],
};
