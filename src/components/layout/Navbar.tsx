"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight z-50 relative">
          STACKSAMAN
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm tracking-widest font-medium uppercase">
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
          className="md:hidden z-50 relative uppercase text-sm tracking-widest font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>

        {/* Mobile Nav */}
        <div className={cn(
          "fixed inset-0 bg-background flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <nav className="flex flex-col gap-8 text-center text-2xl uppercase tracking-widest">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-background transition-colors hover-water-fill px-6 py-3"
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
