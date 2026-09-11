import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — StacksAman",
  description: "I'm Aman, a software developer focused on building modern digital products and web applications.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HEADER */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Behind StacksAman">
                ABOUT AMAN
              </SectionHeading>
            </Reveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Reveal direction="up" delay={0.2}>
                <div className="text-xl md:text-2xl text-foreground text-balance space-y-8 leading-relaxed">
                  <p>
                    I&apos;m Aman, a software developer focused on building modern digital products and web applications.
                  </p>
                  <p>
                    My journey has taken me from a Computer Science student to a Frontend Developer, into Full-Stack engineering, and gaining exposure to AI evaluation. Today, I operate as an independent builder and the force behind StackAman.
                  </p>
                  <p>
                    I believe good software should feel simple. The interfaces should be intuitive, the systems should be efficient, and the architecture should serve the product&apos;s actual needs rather than follow trends.
                  </p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.4}>
                <div className="aspect-[3/4] bg-border/20 border border-border flex items-center justify-center max-w-md ml-auto w-full relative">
                   <div className="text-muted text-sm font-mono tracking-widest uppercase bg-border/10 p-4 text-center">
                      TODO: Professional Portrait Photo of Aman
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

        {/* PRINCIPLES */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Principles" className="mb-24 max-w-5xl">
                GOOD SOFTWARE<br/>SHOULD FEEL SIMPLE.
              </SectionHeading>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
              {[
                { num: "01", title: "CLARITY", desc: "Simple interfaces and understandable systems." },
                { num: "02", title: "PERFORMANCE", desc: "Fast and efficient experiences." },
                { num: "03", title: "FOUNDATION", desc: "Architecture that can evolve with the product." },
                { num: "04", title: "ADAPTABILITY", desc: "Technology should serve the product, not restrict it." },
                { num: "05", title: "CRAFT", desc: "Attention to the details that make a product feel finished." }
              ].map((principle, index) => (
                <Reveal key={principle.num} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-6">
                    <span className="text-sm font-medium font-mono tracking-widest text-accent uppercase block mb-4">
                      {principle.num} — {principle.title}
                    </span>
                    <p className="text-lg text-muted text-balance">{principle.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      </>
  );
}
