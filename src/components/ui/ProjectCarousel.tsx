"use client";

import React, { useState } from "react";
import { Project } from "@/lib/projects";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  if (!projects || projects.length === 0) {
    return null;
  }

  const activeProject = projects[activeIndex];
  if (!activeProject) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden py-32 relative">
      {/* Slider Track */}
      <div className="relative h-[45vh] md:h-[65vh] w-full flex items-center justify-center">
        {projects.map((project, index) => {
          // Calculate distance from active index (-1, 0, 1)
          const offset = index - activeIndex;
          
          const isActive = offset === 0;
          
          // Transform styles
          let transform = "translateX(0) scale(1)";
          let opacity = 1;
          let zIndex = 10;
          
          if (isActive) {
            transform = "translateX(0) scale(1)";
            opacity = 1;
            zIndex = 20;
          } else {
            // Push it to the side based on offset
            transform = `translateX(${offset * 75}%) scale(0.85)`;
            opacity = 0.3;
            zIndex = 10 - Math.abs(offset);
          }

          return (
            <div 
              key={project.id}
              className="absolute top-0 w-[85%] md:w-[60%] h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform,
                opacity,
                zIndex,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className={cn(
                "w-full h-full relative overflow-hidden rounded-xl border transition-colors duration-700 group/card",
                isActive ? "border-border/80 shadow-2xl cursor-default" : "border-border/20 cursor-pointer hover:border-accent"
              )}>
                {/* Image Wrapper for Zoom on Hover */}
                <div className="w-full h-full transform transition-transform duration-700 group-hover/card:scale-105">
                  {project.image ? (
                    <ParallaxImage 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      speed={isActive ? 15 : 0}
                    />
                  ) : (
                    <div className="w-full h-full bg-border/20 flex items-center justify-center">
                      <span className="text-muted font-mono tracking-widest uppercase">IMAGE PLACEHOLDER</span>
                    </div>
                  )}
                </div>

                {/* Overlay & Button for Active Project (Dribbble Style) */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                    <div className="pointer-events-auto scale-95 group-hover/card:scale-100 transition-transform duration-500 flex flex-col sm:flex-row gap-4 items-center">
                      <Button href={`/projects/${project.slug}`} variant="primary">
                        VIEW CASE STUDY
                      </Button>
                      {project.links?.live && (
                        <Button href={project.links.live} target="_blank" rel="noopener noreferrer" variant="secondary" className="bg-background/90 text-foreground hover:bg-background border-none">
                          LIVE SITE ↗
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Metadata & Controls */}
      <div className="container mx-auto px-4 sm:px-6 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          {/* Details */}
          <div className="flex-1 max-w-2xl transition-all duration-500 min-h-[160px] md:min-h-[140px] flex flex-col justify-end">
            <div>
              <h3 className="text-3xl md:text-4xl uppercase tracking-tighter mb-4 line-clamp-2">
                <Link href={`/projects/${activeProject.slug}`} className="hover:text-accent transition-colors">
                  {activeProject.title} / {activeProject.category}
                </Link>
              </h3>
              
              <p className="text-xs font-mono tracking-widest text-muted uppercase break-words text-balance line-clamp-3">
                {`{ ${activeProject.technologies.join(', ')} }`}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-8 justify-between md:justify-end border-t border-border/20 md:border-0 pt-8 md:pt-0">
            <Button href="/projects" variant="outline" size="sm">
              Explore All Showcases
            </Button>
            
            <div className="flex gap-4">
              <button 
                onClick={handlePrev} 
                disabled={activeIndex === 0}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button 
                onClick={handleNext} 
                disabled={activeIndex === projects.length - 1}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
