"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import { FEATURED_PRODUCTS, ProductItem } from "@/data/products.data";

export const WhatWeveBuiltSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] dark:bg-card/30 border-y border-border/50 transition-colors overflow-hidden">
      <Container size="wide">
        {/* Section Tag with Horizontal Dash Header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-8 sm:w-10 h-[2px] bg-foreground/80 dark:bg-primary inline-block" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground/80 dark:text-foreground">
            What We&apos;ve Built
          </span>
        </div>

        {/* Expanding Cards Carousel Grid */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-5 h-auto md:h-[580px] lg:h-[640px] w-full">
          {FEATURED_PRODUCTS.map((product: ProductItem, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={product.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none ${
                  isActive
                    ? "md:flex-[2.6] lg:md:flex-[3] min-h-[460px] md:min-h-full shadow-2xl ring-1 ring-primary/30"
                    : "md:flex-1 min-h-[220px] md:min-h-full hover:border-primary/50 opacity-95 hover:opacity-100"
                }`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes={
                      isActive ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 20vw"
                    }
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay so text shines with high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-white">
                  {/* EXPANDED ACTIVE CARD VIEW */}
                  {isActive ? (
                    <div className="space-y-3 animate-in fade-in-0 duration-500">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                        {product.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                        {product.category}
                      </p>

                      <p className="text-xs sm:text-sm text-neutral-300/95 leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-4 pt-1">
                        {product.description}
                      </p>

                      {product.metrics && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-primary">
                          <span>{product.metrics.label}:</span>
                          <span className="text-white font-bold">{product.metrics.value}</span>
                        </div>
                      )}

                      <div className="pt-3">
                        <Link
                          href={product.href}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center px-6 py-2.5 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-200"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* COLLAPSED CARD VIEW */
                    <div className="space-y-2 animate-in fade-in-0 duration-300">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white truncate">
                        {product.title}
                      </h3>

                      <p className="text-xs text-neutral-300 font-medium truncate">
                        {product.category}
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          aria-label={`Expand ${product.title}`}
                          className="size-9 sm:size-10 bg-white text-black flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        >
                          <Plus className="size-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Showcase Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#E0A838] dark:bg-primary text-neutral-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:brightness-105 active:scale-95"
          >
            <span>Show All Products</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeveBuiltSection;
