"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextRevealProps {
  children: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function SplitTextReveal({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Get all the inner spans
    const words = containerRef.current.querySelectorAll(".split-word-inner");
    
    gsap.fromTo(
      words,
      { y: "110%", rotateZ: 5 },
      {
        y: "0%",
        rotateZ: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );
  }, { scope: containerRef });

  // Split text into words, then map over them to create spans
  // Keeping whitespace intact by wrapping the word in spans, and adding a trailing space outside the inner span.
  const words = children.split(" ").map((word, index) => {
    return (
      <span
        key={index}
        className="inline-block overflow-hidden align-bottom pb-1 -mb-1"
        style={{ verticalAlign: "bottom" }}
      >
        <span className="inline-block split-word-inner origin-top-left">
          {word}
        </span>
        {/* Add space back after the word */}
        <span className="inline-block">&nbsp;</span>
      </span>
    );
  });

  return (
    <Component ref={containerRef} className={className}>
      {words}
    </Component>
  );
}
