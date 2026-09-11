import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/animations/Reveal";

export default function Home() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <section className="pt-40 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto">
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter mb-12 max-w-6xl">
              DIGITAL PRODUCTS<br/>BUILT WITH PRECISION
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-24">
              <p className="text-xl md:text-2xl text-muted max-w-lg text-balance">
                From websites and web applications to custom digital products and intelligent systems, I build solutions around the problem — not around a predetermined technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start md:justify-end">
                <Button href="/services">EXPLORE SERVICES →</Button>
                <Button href="/projects" variant="outline">VIEW SELECTED WORK →</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02 — INTRODUCTION */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <Reveal direction="up">
            <SectionHeading subtitle="Philosophy" className="max-w-6xl mb-12">
              EVERY PROJECT STARTS WITH A PROBLEM.<br/>THE TECHNOLOGY COMES AFTER.
            </SectionHeading>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="ml-auto md:w-1/2">
              <p className="text-lg md:text-2xl text-background/70 text-balance">
                I design and build digital experiences, websites and applications around the needs of each project — selecting the right tools, technologies and architecture to bring the idea to life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 05 — SERVICES PREVIEW */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <SectionHeading subtitle="What I Build">
            SERVICES &<br/>CAPABILITIES
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.id} direction="up" delay={index * 0.1}>
                <div className="group border-t border-border pt-6">
                  <span className="text-sm font-medium tracking-widest text-muted block mb-4">
                    {service.id}
                  </span>
                  <h3 className="text-2xl uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6 text-sm">
                    {service.description}
                  </p>
                  <ul className="text-xs uppercase tracking-widest text-muted space-y-2">
                    {service.examples.slice(0, 3).map((ex, i) => (
                      <li key={i}>— {ex}</li>
                    ))}
                    {service.examples.length > 3 && (
                      <li>— AND MORE</li>
                    )}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
             <Button href="/services" variant="outline">VIEW ALL SERVICES</Button>
          </div>
        </div>
      </section>

      {/* SECTION 08 — SELECTED WORK PREVIEW */}
      <section className="py-32 px-6 bg-[#EBE2D5]">
        <div className="container mx-auto">
          <SectionHeading subtitle="Selected Work">
            RECENT<br/>PROJECTS
          </SectionHeading>
          
          <div className="space-y-32">
            {projects.slice(0, 2).map((project) => (
              <Reveal key={project.id} direction="up" delay={0.1}>
                <div className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-7 overflow-hidden aspect-[4/3] bg-border/20 relative">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted text-sm tracking-widest uppercase bg-border/10 transition-transform duration-700 group-hover:scale-105">
                        TODO: Image for {project.title}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-5">
                      <span className="text-xs font-medium tracking-widest text-accent uppercase block mb-4 border border-accent/30 inline-block px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                      <h3 className="text-4xl md:text-5xl uppercase tracking-tighter mb-6 transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="text-muted mb-8 text-lg text-balance">
                        {project.shortDescription}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-10 text-sm">
                        <div>
                          <span className="block text-muted text-xs tracking-widest uppercase mb-1">ROLE</span>
                          <span className="uppercase">{project.role}</span>
                        </div>
                        <div>
                          <span className="block text-muted text-xs tracking-widest uppercase mb-1">SCOPE</span>
                          <span className="uppercase">{project.scope}</span>
                        </div>
                      </div>
                      
                      <Button href={`/projects/${project.slug}`} variant="outline">VIEW CASE STUDY →</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-32 flex justify-center border-t border-border/30 pt-16">
             <Button href="/projects" variant="outline">VIEW ALL PROJECTS →</Button>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section className="py-40 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Reveal direction="up">
            <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tighter mb-12">
              HAVE AN IDEA?<br/>LET&apos;S BUILD IT.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-muted text-balance mx-auto mb-16 max-w-2xl">
              Tell me what you&apos;re trying to create. We&apos;ll start with the problem and figure out the right way to build it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact">START A PROJECT →</Button>
              <Button href="/projects" variant="outline">VIEW MY WORK →</Button>
            </div>
          </Reveal>
        </div>
      </section>
      
      </>
  );
}
