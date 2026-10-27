import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import MenuDrawer from "./MenuDrawer";

const HeaderComponent: React.FC = () => {
  return (
    <div className="sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 pointer-events-none">
      <header className="pointer-events-auto mx-auto max-w-7xl h-18 sm:h-20 rounded-full px-2.5 sm:px-4 flex items-center justify-between gap-2 sm:gap-4 bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 dark:border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] transition-all">
        {/* Left: Circular Menu Button + 9X Technology Official Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Circular Hamburger Button matching Infosys navbar */}
          <MenuDrawer />

          {/* Official 9X Technology Gold Logo */}
          <Logo />
        </div>

        {/* Center: Inner Floating Pill with Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-2">
          <DesktopNav />
        </div>

        {/* Right: Theme Toggle & High-Contrast Connect Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Connect Capsule Button matching Infosys 'Ask Leon' style */}
          <Link href="/contact" className="inline-flex">
            <button
              type="button"
              className="group relative flex items-center gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold tracking-wide border border-[#C5A059]/40 hover:border-[#C5A059] shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <Sparkles className="size-3.5 text-[#C5A059] transition-transform duration-300 group-hover:rotate-12" />
              <span>Connect</span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
