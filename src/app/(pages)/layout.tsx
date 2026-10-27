import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import HeaderComponent from "@/components/header/Index";
import Footer from "@/components/layout/Footer/Index";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "9X Technology | Enterprise Software & FinTech Engineering",
  description:
    "9X Technology delivers world-class custom software development, FinTech trading platforms, cloud architecture, and AI solutions for global enterprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/25 selection:text-primary dark:selection:bg-primary/30 dark:selection:text-primary relative">
        {/* Ambient backdrop glow so the frosted glass blur shines */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-primary/18 via-brand-gold-muted/20 to-transparent dark:from-primary/12 dark:via-neutral-900/10 blur-3xl opacity-80" />
        </div>

        {/* Floating Glassy Capsule Navigation */}
        <HeaderComponent />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
