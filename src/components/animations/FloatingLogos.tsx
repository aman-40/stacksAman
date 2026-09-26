"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGreensock, SiNodedotjs, SiWebgl,
  SiFigma, SiPostgresql, SiPrisma, SiSupabase, SiVercel, SiGraphql, SiDocker, SiFramer
} from "react-icons/si";

const stackItems = [
  { Icon: SiReact, color: "text-[#61DAFB]", top: "15%", left: "10%", size: "w-16 h-16 md:w-32 md:h-32" },
  { Icon: SiNextdotjs, color: "text-black dark:text-white", top: "25%", left: "85%", size: "w-20 h-20 md:w-40 md:h-40" },
  { Icon: SiTypescript, color: "text-[#3178C6]", top: "75%", left: "15%", size: "w-16 h-16 md:w-32 md:h-32" },
  { Icon: SiTailwindcss, color: "text-[#06B6D4]", top: "80%", left: "80%", size: "w-20 h-20 md:w-40 md:h-40" },
  { Icon: SiGreensock, color: "text-[#88CE02]", top: "45%", left: "5%", size: "w-12 h-12 md:w-24 md:h-24" },
  { Icon: SiNodedotjs, color: "text-[#339933]", top: "55%", left: "90%", size: "w-16 h-16 md:w-24 md:h-24" },
  { Icon: SiWebgl, color: "text-[#990000]", top: "10%", left: "50%", size: "w-12 h-12 md:w-20 md:h-20" },
  { Icon: SiFigma, color: "text-[#F24E1E]", top: "35%", left: "25%", size: "w-12 h-12 md:w-20 md:h-20" },
  { Icon: SiPostgresql, color: "text-[#4169E1]", top: "65%", left: "30%", size: "w-16 h-16 md:w-24 md:h-24" },
  { Icon: SiPrisma, color: "text-[#2D3748]", top: "40%", left: "70%", size: "w-12 h-12 md:w-20 md:h-20" },
  { Icon: SiSupabase, color: "text-[#3ECF8E]", top: "85%", left: "45%", size: "w-16 h-16 md:w-28 md:h-28" },
  { Icon: SiVercel, color: "text-black dark:text-white", top: "15%", left: "70%", size: "w-10 h-10 md:w-16 md:h-16" },
  { Icon: SiGraphql, color: "text-[#E10098]", top: "60%", left: "60%", size: "w-12 h-12 md:w-24 md:h-24" },
  { Icon: SiDocker, color: "text-[#2496ED]", top: "20%", left: "40%", size: "w-14 h-14 md:w-24 md:h-24" },
  { Icon: SiFramer, color: "text-[#0055FF]", top: "90%", left: "20%", size: "w-10 h-10 md:w-16 md:h-16" },
];

export function FloatingLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const icons = gsap.utils.toArray<HTMLElement>(".floating-icon");
    
    icons.forEach((icon) => {
      // Continuous background bubbling float
      gsap.to(icon, {
        y: "random(-40, 40)",
        x: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: "random(0, 2)"
      });
    });
  }, { scope: containerRef });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // "Leaf on the water" effect: gently push away and ripple when hovered
    gsap.to(e.currentTarget, {
      x: "+=random(-30, 30)",
      y: "+=random(-30, 30)",
      rotation: "+=random(-15, 15)",
      scale: 1.1,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
      onComplete: () => {
        // Return to normal bubbling loop after disturbance
        gsap.to(e.currentTarget, {
          y: "random(-40, 40)",
          x: "random(-30, 30)",
          rotation: "random(-20, 20)",
          scale: 1,
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-15 mix-blend-multiply dark:mix-blend-screen"
    >
      {stackItems.map((item, i) => (
        <div 
          key={i}
          className="floating-icon absolute pointer-events-auto cursor-default"
          style={{ top: item.top, left: item.left, transform: "translate(-50%, -50%)" }}
          onMouseEnter={handleMouseEnter}
        >
          <item.Icon className={`${item.size} ${item.color}`} />
        </div>
      ))}
    </div>
  );
}
