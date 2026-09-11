import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors uppercase font-mono tracking-widest";
  
  const variants = {
    primary: "bg-foreground text-background hover-water-fill hover-water-fill-accent hover:text-foreground",
    secondary: "bg-transparent text-foreground hover-water-fill hover:text-background",
    outline: "border border-border text-foreground hover-water-fill hover:text-background hover:border-foreground",
    ghost: "text-foreground hover-underline",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-4 sm:px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
