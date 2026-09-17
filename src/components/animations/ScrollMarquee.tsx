"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollMarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export function ScrollMarquee({ children, baseVelocity = 100, className }: ScrollMarqueeProps) {
  const container = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  
  // Track scroll direction manually if needed, or let scrollTrigger handle it via scrub
  
  useGSAP(() => {
    if (!container.current || !scroller.current) return;
    
    // We create a timeline that loops the translation from 0 to -50% (since we duplicate the content)
    // Then we use scrollTrigger to scrub this animation based on scroll position.
    
    const tl = gsap.timeline({
      repeat: -1,
      paused: false,
    });
    
    tl.to(scroller.current, {
      xPercent: -50,
      ease: "none",
      duration: 1000 / baseVelocity,
    });
    
    // Scrub to speed it up on scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: 0,
      end: "max",
      onUpdate: (self) => {
        // Adjust time scale based on scroll velocity
        const velocity = self.getVelocity();
        // Base timescale is 1. If we scroll fast, we increase it.
        const targetTimeScale = 1 + Math.abs(velocity / 1000) * 3;
        
        // Direction is based on scroll direction
        const currentDirection = self.direction || 1;
        
        // Smoothly animate the timescale
        gsap.to(tl, {
          timeScale: currentDirection * targetTimeScale,
          duration: 0.2,
          overwrite: true,
          onComplete: () => {
            // Return to base speed
            gsap.to(tl, {
              timeScale: currentDirection * 1,
              duration: 1
            });
          }
        });
      }
    });
    
  }, { scope: container });

  return (
    <div ref={container} className={cn("w-full overflow-hidden flex whitespace-nowrap", className)}>
      <div ref={scroller} className="flex whitespace-nowrap min-w-full relative shrink-0">
        <div className="flex shrink-0 px-4 items-center">
          {children}
        </div>
        <div className="flex shrink-0 px-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
