"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: React.ReactNode;
  width?: "w-fit" | "w-full";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Reveal({ children, width = "w-full", delay = 0, direction = "up" }: RevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = 50;
        break;
      case "down":
        y = -50;
        break;
      case "left":
        x = 50;
        break;
      case "right":
        x = -50;
        break;
    }

    gsap.fromTo(
      container.current,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Trigger when top of element hits 85% of viewport height
          once: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div className={`relative overflow-hidden ${width}`} ref={container}>
      {children}
    </div>
  );
}
