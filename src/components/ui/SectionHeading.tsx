import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ children, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24 max-w-4xl", className)}>
      {subtitle && (
        <p className="text-muted uppercase font-mono tracking-widest text-sm mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
        {children}
      </h2>
    </div>
  );
}
