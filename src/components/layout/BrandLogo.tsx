"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: number;
  showText?: boolean;
  priority?: boolean;
  compact?: boolean;
};

export default function BrandLogo({
  className,
  size = 38,
  showText = true,
  priority = false,
  compact = false,
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted || resolvedTheme === "dark" ? "/images/Dark.png" : "/images/Light.png";
  const frameSize = compact ? 30 : size;
  const imageSize = Math.round(frameSize * 0.84);

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      {/* Circular gradient logo frame */}
      <span
        className="flex-shrink-0 rounded-full flex items-center justify-center shadow-lg"
        style={{
          width: `${frameSize}px`,
          height: `${frameSize}px`,
          background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a8ff3e 100%)",
          padding: "2px",
        }}
      >
        <span
          className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: "var(--bg-primary, #08090a)" }}
        >
          <Image
            src={logoSrc}
            alt="Mohamed Ibrahim"
            width={imageSize}
            height={imageSize}
            className="w-full h-full object-contain"
            priority={priority}
          />
        </span>
      </span>

      {/* Gradient name text */}
      {showText && !compact && (
        <span
          className="font-bold tracking-tight text-base sm:text-lg bg-gradient-to-r from-[#38bdf8] via-[#c084fc] to-[#a8ff3e] bg-clip-text text-transparent"
        >
          Mohamed Ibrahim
        </span>
      )}
    </span>
  );
}
