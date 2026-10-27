import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhatWeveBuiltSection from "@/components/sections/WhatWeveBuiltSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CaseStudyCards from "@/components/sections/CaseStudyCards";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      {/* 1. Hero Section with Value Proposition & Live Badges */}
      <HeroSection />

      {/* 2. Key Metrics Bar (Uptime, Trading Volume, Latency, Projects) */}
      <MetricsSection />

      {/* 3. Core Capabilities Grid (Software, FinTech, AI, Cloud, Mobile, Security) */}
      <ServicesGrid />

      {/* 4. What We've Built - Interactive Expanding Products Carousel */}
      <WhatWeveBuiltSection />

      {/* 5. The 9X Advantage & Engineering Pillars */}
      <WhyChooseUsSection />

      {/* 6. Proven Client Case Studies & Impact Testimonials */}
      <CaseStudyCards limit={3} />

      {/* 6. High-Conversion Architecture Consultation CTA */}
      <CtaBanner />
    </div>
  );
}
