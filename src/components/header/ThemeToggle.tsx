"use client";

import React, { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getThemeSnapshot() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getServerSnapshot() {
  return false;
}

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex size-10 sm:size-11 2xl:size-12 3xl:size-[52px] 4xl:size-[60px] items-center justify-center rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-900 text-muted-foreground hover:text-foreground hover:border-[#C5A059]/60 shadow-xs transition-all duration-200 cursor-pointer active:scale-95 ${className}`}
    >
      <Sun
        className={`size-4 2xl:size-5 3xl:size-5.5 4xl:size-6 transition-all duration-300 absolute ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-[#C5A059]"
        }`}
      />
      <Moon
        className={`size-4 2xl:size-5 3xl:size-5.5 4xl:size-6 transition-all duration-300 absolute ${
          isDark
            ? "rotate-0 scale-100 opacity-100 text-[#E5C158]"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
