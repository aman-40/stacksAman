import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — StacksAman",
  description: "Selected work including production systems, unreleased products, and self-initiated technical explorations.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HEADER */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Selected Work">
                PROJECTS
              </SectionHeading>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted max-w-3xl text-balance mt-8">
                A collection of production applications, unreleased products, and personal projects exploring specific technical challenges.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS LIST */}
        <section className="px-4 sm:px-6 mb-24">
          <div className="container mx-auto space-y-40">
            {projects.map((project) => (
              <Reveal key={project.id} direction="up" delay={0.1}>
                <div className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    
                    {/* PROJECT IMAGE (Sticky) */}
                    <div className="lg:col-span-7 relative">
                      <div className="sticky top-32 overflow-hidden aspect-[4/3] bg-background/40 border border-border/50 rounded-xl">
                        <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover border-[0.5px] border-border/80 shadow-2xl rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* PROJECT DETAILS */}
                    <div className="lg:col-span-5 pt-8 lg:pt-0 lg:py-24">
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
                      
                      <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-[1] transition-colors group-hover:text-accent">
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
        </section>
        
        {/* CTA */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5] text-center mt-32">
          <div className="container mx-auto">
             <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-10">SEE A FIT FOR YOUR PROJECT?</h2>
             <Button href="/contact">LET&apos;S TALK</Button>
          </div>
        </section>
      </main>
      
      </>
  );
}
