import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Stacks Aman",
  description: "I'm Aman, a software developer focused on building modern digital products and web applications.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HEADER */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <div className="mb-16 md:mb-24 max-w-4xl">
              <Reveal direction="up">
                <p className="text-muted uppercase font-mono tracking-widest text-sm mb-4">
                  Behind Stacks Aman
                </p>
              </Reveal>
              <SplitTextReveal as="h1" delay={0.2} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] uppercase">
                BUILDING DIGITAL EXPERIENCES THAT SOLVE REAL PROBLEMS
              </SplitTextReveal>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Reveal direction="up" delay={0.2}>
                <div className="text-xl md:text-2xl text-foreground text-balance space-y-8 leading-relaxed">
                  <p>
                    I&apos;m Aman, a software developer and the creator of Stacks Aman — an independent web development and digital solutions brand focused on creating modern websites, web applications, dashboards, and custom digital products.
                  </p>
                  <p>
                    With <strong>2+ years of hands-on experience building with modern web technologies</strong>, I focus on combining clean UI/UX with practical functionality to turn ideas into working digital experiences.
                  </p>
                  <p>
                    I work across the complete web development process — from interface design and frontend development to backend APIs, databases, authentication, and deployment.
                  </p>
                  <p>
                    My technology stack includes <strong>React, Next.js, JavaScript, TypeScript, Tailwind CSS, GSAP, Node.js, Express.js, MongoDB, PostgreSQL, Supabase, and Firebase</strong>. I also explore AI-powered applications and modern web technologies to build products that go beyond traditional websites.
                  </p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                  <div className="border-t border-border pt-4">
                    <h4 className="text-4xl md:text-5xl text-accent tracking-tighter mb-2">2+</h4>
                    <p className="text-sm font-mono tracking-widest uppercase mb-2">Years Building</p>
                    <p className="text-sm text-muted text-balance">Hands-on experience learning, designing, developing, and deploying modern web projects.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-4xl md:text-5xl text-accent tracking-tighter mb-2">30+</h4>
                    <p className="text-sm font-mono tracking-widest uppercase mb-2">Projects & Exp.</p>
                    <p className="text-sm text-muted text-balance">A growing collection of websites, dashboards, systems, and UI concepts.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-4xl md:text-5xl text-accent tracking-tighter mb-2">10+</h4>
                    <p className="text-sm font-mono tracking-widest uppercase mb-2">Technologies</p>
                    <p className="text-sm text-muted text-balance">Experience across modern frontend, backend, database, and animations.</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-4xl md:text-5xl text-accent tracking-tighter mb-2">15+</h4>
                    <p className="text-sm font-mono tracking-widest uppercase mb-2">Domains</p>
                    <p className="text-sm text-muted text-balance">Healthcare, education, SaaS, e-commerce, finance, real estate, AI.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DEVELOPER JOURNEY TIMELINE */}
        <section className="py-32 px-4 sm:px-6 bg-foreground text-background">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Developer Journey" className="mb-24 text-background max-w-5xl">
                FROM CURIOSITY TO<br/>FULL-STACK ENGINEERING.
              </SectionHeading>
            </Reveal>
            
            <div className="relative max-w-5xl mx-auto">
              {/* The Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-background/20 -translate-x-1/2" />
              
              <div className="space-y-20">
                {experiences.map((node, index) => (
                  <Reveal key={node.id} direction="up" delay={0.1}>
                    <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-background rounded-full border-[4px] border-foreground -translate-x-1/2 z-10 top-1.5 md:top-auto group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
                      
                      {/* Content Container */}
                      <div className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                        <span className="text-xs font-medium font-mono tracking-widest text-accent uppercase block mb-3">
                          {node.date}
                        </span>
                        <h3 className="text-2xl uppercase tracking-tight mb-2">
                          {node.title}
                        </h3>
                        {node.subtitle && (
                          <p className="text-sm uppercase font-mono tracking-widest text-background/50 mb-4">
                            {node.subtitle}
                          </p>
                        )}
                        <p className="text-base text-background/80 mb-6 leading-relaxed">
                          {node.description}
                        </p>
                        
                        {node.focus && node.focus.length > 0 && (
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            {node.focus.map((tech) => (
                              <span key={tech} className="text-[10px] font-medium font-mono tracking-widest uppercase border border-background/20 px-2 py-1 rounded-full text-background/60">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {node.link && (
                          <a href={node.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-xs font-mono tracking-widest uppercase text-accent border-b border-accent pb-1 hover:text-background hover:border-background transition-colors">
                            VIEW PROJECT →
                          </a>
                        )}
                      </div>
                      
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="My Approach" className="mb-24 max-w-5xl">
                A GOOD DIGITAL PRODUCT NEEDS MORE THAN ATTRACTIVE VISUALS.
              </SectionHeading>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 mb-24">
              {[
                { title: "USEFUL", desc: "Solving a real problem." },
                { title: "INTUITIVE", desc: "Easy for users to understand." },
                { title: "RESPONSIVE", desc: "Working across devices." },
                { title: "PERFORMANT", desc: "Fast and efficient." },
                { title: "SCALABLE", desc: "Ready to evolve with the project." },
                { title: "PURPOSEFUL", desc: "Every feature should have a reason to exist." }
              ].map((principle, index) => (
                <Reveal key={principle.title} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-6">
                    <span className="text-sm font-medium font-mono tracking-widest text-accent uppercase block mb-4">
                      {`0${index + 1}`} — {principle.title}
                    </span>
                    <p className="text-lg text-muted text-balance">{principle.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="up">
              <div className="max-w-5xl text-2xl md:text-3xl uppercase tracking-tighter leading-tight border-t border-border/30 pt-16">
                <p className="mb-8 text-muted normal-case font-sans tracking-normal leading-relaxed text-xl md:text-2xl text-balance">
                  From a simple landing page to a complete management platform, I approach each project with the goal of creating an experience that combines design, technology, and functionality.
                </p>
                <p className="text-foreground border-l-4 border-accent pl-6 py-2">
                  Stacks Aman — Design. Develop. Deliver.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      
      </>
  );
}
