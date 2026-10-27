import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "default" }) => {
  const heightClass = variant === "compact" ? "h-6 sm:h-7" : "h-7 md:h-8 4xl:h-[52px]";

  return (
    <Link
      href="/"
      aria-label="9X Technology Home"
      className={`group relative flex items-center transition-all duration-200 hover:opacity-95 ${className}`}
    >
      <div className={`relative ${heightClass} w-auto flex items-center shrink-0`}>
        <Image
          src="/LOGO.png"
          alt="9X Technology"
          width={565}
          height={100}
          priority
          className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs`}
        />
      </div>
    </Link>
  );
};

export default Logo;
