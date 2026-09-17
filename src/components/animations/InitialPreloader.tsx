"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function InitialPreloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(() => {
    if (!containerRef.current || !logoRef.current) return;

    // We make pointer events auto during animation to block clicks
    containerRef.current.style.pointerEvents = "auto";

    const tl = gsap.timeline({
      onComplete: () => setIsComplete(true),
    });

    // 1. Scale up massively and fade out the logo
    tl.to(logoRef.current, {
      scale: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
      delay: 0.5,
    }, 0);

    // 2. Fade out the background container slightly after scale starts
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
    }, 0.5);

  }, []);

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-background/50 backdrop-blur-2xl flex items-center justify-center overflow-hidden select-none"
    >
      <img
        ref={logoRef}
        src="/logo.png"
        alt="Stacks Aman Logo"
        className="w-32 md:w-48 h-auto object-contain"
        style={{ willChange: "transform, opacity" }}
      />
    </div>
  );
}
