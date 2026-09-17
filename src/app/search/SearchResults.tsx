"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Project } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { Button } from "@/components/ui/Button";

export function SearchResults({ projects = [] }: { projects?: Project[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { exactMatches, fallbackProjects } = useMemo(() => {
    if (!query.trim()) {
      return { exactMatches: [], fallbackProjects: projects.slice(0, 3) };
    }

    const lowerQuery = query.toLowerCase();
    
    // Exact fuzzy matches
    const matches = projects.filter((p) => {
      return (
        p.title.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)) ||
        p.keyFeatures.some((feature) => feature.toLowerCase().includes(lowerQuery))
      );
    });

    // Fallback if 0 matches
    let fallbacks: typeof projects = [];
    if (matches.length === 0) {
      // Find projects that might share a technology or just default to top 3
      fallbacks = projects.slice(0, 3);
    }

    return { exactMatches: matches, fallbackProjects: fallbacks };
  }, [query]);

  const projectsToDisplay = exactMatches.length > 0 ? exactMatches : fallbackProjects;

  return (
    <div>
      <div className="mb-16 md:mb-24 max-w-4xl">
        <Reveal direction="up">
          <p className="text-muted uppercase font-mono tracking-widest text-sm mb-4">
            {query ? `Searched for: "${query}"` : "Search Projects"}
          </p>
        </Reveal>
        <SplitTextReveal as="h1" delay={0.2} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] uppercase">
          {exactMatches.length > 0 ? "SEARCH RESULTS" : "NO EXACT MATCHES"}
        </SplitTextReveal>
      </div>
      
      <Reveal direction="up" delay={0.2}>
        <p className="text-xl md:text-2xl text-muted max-w-3xl text-balance mt-8 mb-24">
          {exactMatches.length > 0 
            ? `Found ${exactMatches.length} project${exactMatches.length === 1 ? '' : 's'} matching your criteria.`
            : `We couldn't find an exact match for "${query}", but you might be interested in these featured projects:`}
        </p>
      </Reveal>

      <div className="space-y-40">
        {projectsToDisplay.map((project, idx) => (
          <Reveal key={project.id} direction="up" delay={idx * 0.1}>
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* PROJECT IMAGE */}
                <div className="lg:col-span-7 relative">
                  <div className="overflow-hidden aspect-[4/3] bg-background/40 border border-border/50 rounded-xl group-hover:border-border transition-colors relative">
                    <div className="absolute inset-0 p-6 md:p-10">
                      {project.image && (
                        <ParallaxImage 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full border-[0.5px] border-border/80 shadow-2xl rounded-sm"
                          speed={10}
                        />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* PROJECT DETAILS */}
                <div className="lg:col-span-5 pt-8 lg:pt-0 lg:py-12">
                  <div className="flex items-center text-xs font-medium font-mono tracking-widest text-muted uppercase mb-6">
                    <span>PROJECT / {project.category}</span>
                    {project.links?.live && (
                      <span className="ml-4 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] text-green-600/80">LIVE</span>
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter mb-8 leading-[1] transition-colors group-hover:text-accent">
                    {project.title}
                  </h2>
                  
                  <p className="text-xl text-muted mb-12 text-balance leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-16">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs font-medium font-mono tracking-widest uppercase border border-border px-3 py-1.5 rounded-full text-muted bg-background/50">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-medium font-mono tracking-widest uppercase border border-border px-3 py-1.5 rounded-full text-muted bg-background/50">
                        +{project.technologies.length - 5} MORE
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button href={`/projects/${project.slug}`}>VIEW PROJECT →</Button>
                    {project.links?.github && (
                      <Button href={project.links.github} variant="outline">GITHUB →</Button>
                    )}
                  </div>
                </div>
                
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      
      {/* Fallback extra CTA */}
      {exactMatches.length === 0 && (
        <div className="mt-32 flex justify-center border-t border-border/30 pt-16">
          <Button href="/projects" variant="outline">VIEW ALL PROJECTS →</Button>
        </div>
      )}
    </div>
  );
}
