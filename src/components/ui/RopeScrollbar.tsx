"use client";

import React, { useEffect, useRef, useState } from "react";

export function RopeScrollbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  
  const [windowHeight, setWindowHeight] = useState(0);
  
  const state = useRef({
    isDragging: false,
    startY: 0,
    startScroll: 0,
  });

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    
    setWindowHeight(window.innerHeight);

    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    
    const updateScroll = () => {
      if (state.current.isDragging) return; // We handle drag manually for zero lag
      const THUMB_HEIGHT = 48;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const thumbY = progress * (window.innerHeight - THUMB_HEIGHT);
      
      if (thumbRef.current) {
        thumbRef.current.style.transform = `translateY(${thumbY}px)`;
      }
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll(); // initial sync
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    state.current.isDragging = true;
    state.current.startY = e.clientY;
    state.current.startScroll = window.scrollY;
    
    // Disable smooth scrolling on html to prevent scroll lag
    document.documentElement.style.scrollBehavior = "auto";
    
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!state.current.isDragging) return;
    const THUMB_HEIGHT = 48;
    const deltaY = e.clientY - state.current.startY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const travelRange = window.innerHeight - THUMB_HEIGHT;
    const scrollDelta = (deltaY / travelRange) * maxScroll;
    
    // Update scroll instantly, overriding any CSS behavior
    window.scrollTo({
      top: state.current.startScroll + scrollDelta,
      behavior: "instant"
    });
    
    // Instantly update thumb to avoid scroll listener lag
    const newScrollY = window.scrollY;
    const progress = maxScroll > 0 ? newScrollY / maxScroll : 0;
    if (thumbRef.current) {
      thumbRef.current.style.transform = `translateY(${progress * travelRange}px)`;
    }
  };

  const handlePointerUp = () => {
    state.current.isDragging = false;
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
    document.body.style.userSelect = "";
    
    // Restore CSS smooth scrolling
    document.documentElement.style.scrollBehavior = "";
  };

  if (windowHeight === 0) return null; // Wait for hydration

  return (
    <div 
      ref={containerRef}
      className="hidden lg:block fixed top-0 right-0 w-[40px] h-full z-50 pointer-events-none"
    >
      {/* Scroll Track Area (invisible but captures events if needed) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-auto">
        
        {/* The Scroller Thumb */}
        <div 
          ref={thumbRef}
          className="absolute right-[6px] top-0 w-[6px] h-[48px] cursor-grab active:cursor-grabbing pointer-events-auto group py-1"
          style={{ willChange: "transform" }}
          onPointerDown={handlePointerDown}
        >
          {/* Pure vertical pill scroller, no borders */}
          <div className="w-full h-full bg-foreground/80 rounded-full group-hover:bg-accent transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
}
