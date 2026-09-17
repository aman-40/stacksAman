"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Project } from "@/lib/projects";

export function HeroSearch({ projects = [] }: { projects?: Project[] }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsFocused(false);
    }
  };

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter actual projects based on query using useMemo (derived state)
  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return projects.filter((p) => {
      return (
        p.title.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)) ||
        p.keyFeatures.some((feature) => feature.toLowerCase().includes(lowerQuery))
      );
    });
  }, [query]);

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsFocused(false);
    }
    if (isFocused) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused]);

  const showDropdown = isFocused;
  const showEmptyState = query.trim() !== "" && results.length === 0;
  const showSuggestions = query.trim() === "";

  return (
    <div className="relative w-full max-w-2xl" ref={containerRef}>
      {/* Search Bar - using theme colors but keeping the slanted shape */}
      <form 
        onSubmit={handleSearch}
        className={`relative flex items-center w-full bg-background border border-border/60 rounded-full shadow-md transition-all duration-300 h-14 md:h-16 overflow-hidden [transform:translateZ(0)]
          ${isFocused ? "shadow-xl border-foreground" : "hover:border-foreground/50"}
        `}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="What are you looking for?"
          className="w-full h-full pl-6 md:pl-8 pr-24 md:pr-32 bg-transparent outline-none text-base md:text-lg text-foreground placeholder:text-muted z-10 font-mono tracking-wide"
          aria-label="Search projects"
        />
        
        {/* Accent button with icon - using theme accent color */}
        <button type="submit" className="absolute right-0 top-0 bottom-0 w-24 md:w-32 flex items-center justify-center text-background z-20 cursor-pointer">
          <div 
            className="absolute inset-0 bg-foreground transition-colors hover:bg-accent" 
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 32px 100%)" }}
          />
          <Search className="w-5 h-5 ml-2 md:ml-4 relative z-10" strokeWidth={2} />
        </button>
      </form>

      {/* Suggested Search Chips */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-6 text-xs font-mono tracking-widest text-muted uppercase">
        <span className="opacity-50 hidden sm:inline-block">Popular:</span>
        {["Healthcare", "Education", "Dashboard", "Platform"].map((term) => (
          <button
            key={term}
            onClick={() => {
              setQuery(term);
              setIsFocused(true);
            }}
            className="hover:text-foreground transition-colors hover-underline"
          >
            {term}
          </button>
        ))}
      </div>

      {/* Dropdown Panel */}
      {showDropdown && (
        <div 
          className="absolute top-[calc(100%+8px)] left-0 w-full bg-background border border-border shadow-2xl z-50 overflow-hidden transform origin-top transition-all duration-300 ease-out"
          style={{ 
            opacity: showDropdown ? 1 : 0, 
            scale: showDropdown ? 1 : 0.95,
            pointerEvents: showDropdown ? "auto" : "none",
            borderRadius: "2px"
          }}
        >
          <div className="max-h-[60vh] overflow-y-auto overscroll-contain">
            
            {showSuggestions && (
              <div className="p-6">
                <h3 className="text-xs font-mono tracking-widest uppercase text-muted mb-4 pb-2 border-b border-border/30">
                  Explore Categories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {["Healthcare", "Education", "Management", "Platform", "Dashboard", "Interactive"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuery(cat)}
                      className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {results.length > 0 && (
              <div className="flex flex-col">
                <div className="px-6 pt-4 pb-2 text-xs font-mono tracking-widest uppercase text-muted border-b border-border/30 bg-background sticky top-0 z-10">
                  Matches ({results.length})
                </div>
                {results.map((project) => (
                  <Link 
                    key={project.id} 
                    href={`/projects/${project.slug}`}
                    onClick={() => setIsFocused(false)}
                    className="group block p-6 border-b border-border/30 last:border-0 hover:bg-foreground/5 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      {project.image && (
                        <div className="shrink-0 w-full sm:w-32 aspect-[4/3] rounded overflow-hidden border border-border/50">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-xl uppercase tracking-tight mb-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs font-mono tracking-widest uppercase text-muted mb-2">
                          {project.category}
                        </p>
                        <p className="text-sm text-foreground/80 max-w-md text-balance mb-3 line-clamp-2">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="text-[10px] uppercase font-mono tracking-widest border border-border/50 px-2 py-0.5 rounded text-muted">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 hidden md:block">
                        <span className="inline-flex items-center justify-center text-[10px] font-mono tracking-widest uppercase border border-border px-3 py-1 rounded-full group-hover:border-accent group-hover:text-accent transition-colors">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {showEmptyState && (
              <div className="p-10 text-center flex flex-col items-center justify-center">
                <p className="text-lg mb-6">No exact match yet.</p>
                <p className="text-xs font-mono tracking-widest uppercase text-muted mb-4">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm uppercase tracking-wider">
                  <button onClick={() => setQuery("Healthcare")} className="hover:text-accent transition-colors hover-underline">Healthcare</button>
                  <button onClick={() => setQuery("Dashboard")} className="hover:text-accent transition-colors hover-underline">Dashboard</button>
                  <button onClick={() => setQuery("Platform")} className="hover:text-accent transition-colors hover-underline">Platform</button>
                </div>
                <Link 
                  href="/projects" 
                  onClick={() => setIsFocused(false)}
                  className="inline-flex items-center justify-center font-medium transition-colors uppercase font-mono tracking-widest border border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground px-6 py-3 text-xs"
                >
                  EXPLORE ALL PROJECTS →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
