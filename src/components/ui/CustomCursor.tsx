"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      setTimeout(() => setIsTouch(true), 0);
      return;
    }

  }, []);

  useGSAP(() => {
    if (isTouch || !cursorRef.current) return;

    // Use gsap.quickTo for high-performance following
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      // Center the 16px cursor (8px offset)
      xTo(e.clientX - 8);
      yTo(e.clientY - 8);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add scale effects for hovering interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
    
    const onMouseEnterInteractive = () => {
      gsap.to(cursorRef.current, { scale: 3, opacity: 0.2, duration: 0.3, ease: "power2.out" });
    };
    
    const onMouseLeaveInteractive = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-background rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ opacity: 0 }} // Starts hidden until first mouse move or GSAP takes over
    />
  );
}
