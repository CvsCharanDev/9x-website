"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import {
  Search,
  Command,
  X,
  BookOpen,
  Terminal,
  Zap,
  ArrowRight,
  Shield,
  FileCode,
  Layers,
} from "lucide-react";

interface SearchResultItem {
  id: string;
  title: string;
  category: "Documentation" | "API Reference" | "Guides" | "Architecture";
  description: string;
  icon: React.ElementType;
  url: string;
}

const SEARCH_ITEMS: SearchResultItem[] = [
  {
    id: "getting-started",
    title: "Quickstart & Setup",
    category: "Documentation",
    description:
      "Install SDKs, configure API credentials, and send your first request in 5 minutes.",
    icon: Zap,
    url: "/docs/quickstart",
  },
  {
    id: "auth",
    title: "Authentication & Security",
    category: "API Reference",
    description: "HMAC SHA-256 signing, Bearer tokens, IP whitelisting and key rotation.",
    icon: Shield,
    url: "/docs/authentication",
  },
  {
    id: "order-execution",
    title: "Order Execution Engine",
    category: "API Reference",
    description: "Market, limit, stop-loss orders with sub-millisecond execution.",
    icon: Terminal,
    url: "/docs/orders",
  },
  {
    id: "websockets",
    title: "WebSocket Market Streams",
    category: "API Reference",
    description: "Real-time tick data, orderbook snapshots, and execution reports.",
    icon: FileCode,
    url: "/docs/websockets",
  },
  {
    id: "architecture",
    title: "MetaTrade Architecture Overview",
    category: "Architecture",
    description: "Distributed liquidity bridge, low latency gateway, and failover design.",
    icon: Layers,
    url: "/docs/architecture",
  },
  {
    id: "webhooks",
    title: "Webhook Subscriptions",
    category: "Guides",
    description: "Configure instant event deliveries for trade fills and risk alerts.",
    icon: BookOpen,
    url: "/docs/webhooks",
  },
];

function emptySubscribe() {
  return () => {};
}

function getIsMac() {
  return (
    typeof navigator !== "undefined" &&
    /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent || navigator.platform)
  );
}

function getServerIsMac() {
  return false;
}

export const SearchCommand: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isMac = useSyncExternalStore(emptySubscribe, getIsMac, getServerIsMac);

  const closeModal = () => {
    setIsOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (prev) {
            return false;
          }
          return true;
        });
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpenSearch);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const filteredItems = query.trim()
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_ITEMS;

  return (
    <>
      {/* Search trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative flex h-9 w-full max-w-[240px] items-center justify-between rounded-lg border border-border/70 bg-muted/40 px-3 text-xs text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
      >
        <span className="flex items-center gap-2">
          <Search className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="truncate">Search docs & APIs...</span>
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border/80 bg-background/80 px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
          {isMac ? "⌘" : "Ctrl"} K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-200">
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={closeModal} aria-hidden="true" />

          {/* Modal Container */}
          <div className="relative w-full max-w-xl rounded-xl border border-border/80 bg-background shadow-2xl overflow-hidden transition-all duration-200 animate-in zoom-in-95">
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-border/60 px-3.5 py-3 gap-2.5">
              <Search className="size-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation, APIs, or guides..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={closeModal}
                className="rounded border border-border/60 bg-muted/50 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground hover:bg-muted"
              >
                ESC
              </button>
            </div>

            {/* Quick Pills */}
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/40 bg-muted/20 overflow-x-auto text-xs">
              <span className="text-[11px] font-medium text-muted-foreground">Quick:</span>
              {["Quickstart", "Authentication", "Orders", "WebSockets"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setQuery(filter)}
                  className="rounded-full border border-border/60 bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors shrink-0"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="max-h-[340px] overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-muted-foreground">
                  No results found for &ldquo;<span className="text-foreground">{query}</span>
                  &rdquo;.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        onClick={(e) => {
                          e.preventDefault();
                          closeModal();
                        }}
                        className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/70 cursor-pointer"
                      >
                        <div className="mt-0.5 rounded-md border border-border/70 bg-background p-1.5 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider bg-muted/80 px-1.5 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="size-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border/50 bg-muted/30 px-4 py-2.5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Command className="size-3 text-muted-foreground" />
                Press <kbd className="font-mono text-[10px]">Enter</kbd> to select
              </span>
              <span>9X Tech Knowledge Base</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCommand;
