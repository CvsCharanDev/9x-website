import React from "react";
import Link from "next/link";
import {
  Zap,
  BookOpen,
  Terminal,
  FileCode,
  Layers,
  Shield,
  Activity,
  ChevronRight,
} from "lucide-react";

interface SidebarGroup {
  title: string;
  items: { title: string; href: string; icon?: React.ElementType; badge?: string; active?: boolean }[];
}

const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/", icon: BookOpen, active: true },
      { title: "Quickstart Guide", href: "/docs/quickstart", icon: Zap, badge: "5m" },
      { title: "Architecture", href: "/docs/architecture", icon: Layers },
      { title: "Authentication", href: "/docs/authentication", icon: Shield },
    ],
  },
  {
    title: "MetaTrade Core APIs",
    items: [
      { title: "Orders & Execution", href: "/docs/orders", icon: Terminal },
      { title: "Market Data Streams", href: "/docs/market-data", icon: Activity },
      { title: "WebSocket Subscriptions", href: "/docs/websockets", icon: FileCode },
      { title: "Liquidity Routing", href: "/docs/liquidity" },
      { title: "Risk & Margin Caps", href: "/docs/risk" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { title: "TypeScript SDK", href: "/docs/sdk-ts" },
      { title: "Python SDK", href: "/docs/sdk-py" },
      { title: "CLI Utilities", href: "/docs/cli" },
      { title: "Webhooks Simulator", href: "/docs/webhooks" },
    ],
  },
];

const SidebarComponent: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 shrink-0 pr-4">
      <div className="sticky top-24 space-y-6">
        {SIDEBAR_GROUPS.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {group.title}
            </h4>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className={`size-3.5 ${item.active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />}
                      <span>{item.title}</span>
                    </span>
                    {item.badge ? (
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.2 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {item.badge}
                      </span>
                    ) : item.active ? (
                      <ChevronRight className="size-3 text-primary" />
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarComponent;
