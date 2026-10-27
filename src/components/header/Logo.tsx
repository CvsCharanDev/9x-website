import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "default" }) => {
  const heightClass = variant === "compact" ? "h-9 sm:h-10" : "h-10 sm:h-11";

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
          width={4598}
          height={2928}
          priority
          className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs`}
        />
      </div>
    </Link>
  );
};

export default Logo;
