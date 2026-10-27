import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import MenuDrawer from "./MenuDrawer";

const HeaderComponent: React.FC = () => {
  return (
    <div className="sticky top-3 sm:top-4 2xl:top-5 z-50 w-full px-3 sm:px-4 2xl:px-8 3xl:px-10 pointer-events-none">
      <header className="pointer-events-auto mx-auto max-w-5xl xl:max-w-6xl 3xl:max-w-[1440px] 4xl:max-w-[2300px] 5xl:max-w-[2450px] h-14 sm:h-16 2xl:h-[76px] 3xl:h-[88px] 4xl:h-[104px] rounded-full px-4 sm:px-5 2xl:px-7 3xl:px-9 4xl:px-11 flex items-center justify-between gap-3 sm:gap-4 2xl:gap-6 3xl:gap-8 bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 dark:border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] transition-all">
        {/* Left: 9X Technology Logo (Mobile and Desktop) */}
        <div className="flex items-center shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links (Desktop only) */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-1 xl:mx-2 2xl:mx-4">
          <DesktopNav />
        </div>

        {/* Right Section */}
        <div className="flex items-center shrink-0">
          {/* Desktop Utilities: Theme Toggle & Connect Button (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 2xl:gap-4 3xl:gap-5">
            <ThemeToggle />
            <Link href="/contact" className="inline-flex">
              <button
                type="button"
                className="group relative flex items-center gap-1.5 sm:gap-2 h-9 sm:h-9.5 md:h-10 2xl:h-11 3xl:h-[48px] 4xl:h-[56px] px-3.5 sm:px-4 xl:px-4.5 2xl:px-6 3xl:px-7 4xl:px-8 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-semibold tracking-wide border border-primary/40 hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Sparkles className="size-3.5 2xl:size-4 3xl:size-4.5 4xl:size-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                <span>Connect</span>
              </button>
            </Link>
          </div>

          {/* Mobile Right: Menu button only */}
          <div className="lg:hidden flex items-center">
            <MenuDrawer />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
