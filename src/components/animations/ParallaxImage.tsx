"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // How much it moves on scroll
}

export function ParallaxImage({ src, alt, className, speed = 15 }: ParallaxImageProps) {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!container.current || !image.current) return;
    
    // Set initial scale to allow room for parallax
    gsap.set(image.current, { scale: 1.2, transformOrigin: "center center" });
    
    gsap.fromTo(
      image.current,
      { yPercent: -speed },
      {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // when the top of the container hits the bottom of the viewport
          end: "bottom top", // when the bottom of the container hits the top of the viewport
          scrub: true,
        },
      }
    );
  }, { scope: container, dependencies: [speed] });

  return (
    <div ref={container} className={cn("overflow-hidden relative", className)}>
      <img
        ref={image}
        src={src}
        alt={alt}
        className="w-full h-full object-cover absolute inset-0"
      />
    </div>
  );
}
