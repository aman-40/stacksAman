"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="z-50 relative flex items-center">
          <img 
            src="/logo.png" 
            alt="StacksAman Logo" 
            className="h-16 md:h-20 w-auto" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-mono tracking-widest font-medium uppercase">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-muted hover:text-background transition-colors hover-water-fill px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative p-2 -mr-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-background border-b border-border/30 flex flex-col items-center transition-all duration-300 ease-in-out md:hidden overflow-hidden origin-top",
          isOpen ? "max-h-[400px] opacity-100 border-b" : "max-h-0 opacity-0 border-b-0"
        )}>
          <nav className="flex flex-col w-full text-center text-sm uppercase font-mono tracking-widest font-medium py-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-foreground hover:text-background transition-colors px-6 py-4 w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
