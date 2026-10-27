import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engineering Insights & Thought Leadership | 9X Technology",
  description:
    "Technical articles, architecture deep-dives, and perspectives on low-latency systems, FinTech infrastructure, and enterprise AI.",
};

const ARTICLES = [
  {
    id: "art-1",
    slug: "optimizing-sub-millisecond-order-execution",
    title: "Optimizing Sub-Millisecond Order Routing Engines in C++20",
    excerpt:
      "A technical walkthrough of cache-line alignment, lock-free ring buffers, and Linux kernel-bypass techniques used in our institutional trading bridge.",
    date: "October 2026",
    readTime: "7 min read",
    category: "FinTech & Low-Latency",
  },
  {
    id: "art-2",
    slug: "building-hallucination-free-rag-pipelines",
    title: "Architecting Hallucination-Resistant RAG Pipelines for Financial Intelligence",
    excerpt:
      "How we combine hybrid vector search, strict citation verification, and cross-encoder re-ranking to achieve 99%+ factual precision in enterprise LLMs.",
    date: "September 2026",
    readTime: "9 min read",
    category: "AI & Machine Learning",
  },
  {
    id: "art-3",
    slug: "zero-downtime-kubernetes-gitops",
    title: "Zero-Downtime Multi-Region Kubernetes Deployments with ArgoCD",
    excerpt:
      "Automating canary rollouts, automated rollback gates, and multi-cloud disaster recovery across AWS and Google Cloud.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Cloud & DevOps",
  },
];

export default function InsightsPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container size="wide">
        <SectionHeading
          badge="Thought Leadership"
          title="Engineering Insights & Perspectives"
          subtitle="Deep-dive articles and architecture patterns authored by our principal systems architects and engineers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col justify-between border-border/80 bg-card/60 hover:border-primary/50 transition-all p-6"
            >
              <div>
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/30 text-primary text-[11px]">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold leading-snug hover:text-primary transition-colors">
                    <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {article.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readTime}
                    </span>
                  </div>
                </CardHeader>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <CardFooter className="p-0 pt-6 mt-6 border-t border-border/50">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Read Technical Article</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner
        title="Stay updated on high-performance engineering."
        description="Connect with our principal architects for direct technical discussions."
        buttonText="Get In Touch"
      />
    </div>
  );
}
