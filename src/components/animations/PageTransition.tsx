"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!container.current) return;
    
    // Simple fade in on route change
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [pathname]);

  return (
    <div ref={container} className="flex-grow flex flex-col">
      {children}
    </div>
  );
}
