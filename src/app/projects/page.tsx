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
        <section className="px-6 mb-32">
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
        <section className="px-6 mb-24">
          <div className="container mx-auto space-y-40">
            {projects.map((project) => (
              <Reveal key={project.id} direction="up" delay={0.1}>
                <div className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    
                    {/* PROJECT IMAGE (Sticky) */}
                    <div className="lg:col-span-7 relative">
                      <div className="sticky top-32 overflow-hidden aspect-[4/3] bg-border/20 border border-border">
                        <div className="absolute inset-0 flex items-center justify-center text-muted text-sm tracking-widest uppercase bg-border/10 transition-transform duration-700 group-hover:scale-105">
                          TODO: Image for {project.title}
                        </div>
                      </div>
                    </div>
                    
                    {/* PROJECT DETAILS */}
                    <div className="lg:col-span-5 pt-8 lg:pt-0 lg:py-24">
                      <span className="text-xs font-medium tracking-widest text-accent uppercase block mb-6 border border-accent/30 inline-block px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                      
                      <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-[1] transition-colors group-hover:text-accent">
                        {project.title}
                      </h2>
                      
                      <p className="text-xl text-muted mb-12 text-balance leading-relaxed">
                        {project.shortDescription}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-16 text-sm border-t border-border pt-8">
                        <div>
                          <span className="block text-muted text-xs tracking-widest uppercase mb-2">ROLE</span>
                          <span className="uppercase text-foreground">{project.role}</span>
                        </div>
                        <div>
                          <span className="block text-muted text-xs tracking-widest uppercase mb-2">SCOPE</span>
                          <span className="uppercase text-foreground">{project.scope}</span>
                        </div>
                      </div>
                      
                      <Button href={`/projects/${project.slug}`}>VIEW CASE STUDY →</Button>
                    </div>
                    
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-32 px-6 bg-[#EBE2D5] text-center mt-32">
          <div className="container mx-auto">
             <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-10">SEE A FIT FOR YOUR PROJECT?</h2>
             <Button href="/contact">LET&apos;S TALK</Button>
          </div>
        </section>
      </main>
      
      </>
  );
}
