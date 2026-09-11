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
        <section className="px-6 mb-32">
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
                    My work isn&apos;t limited to one framework or technology. I enjoy understanding how a product works as a whole — from the interface people interact with to the systems, data and logic behind it.
                  </p>
                  <p>
                    I believe good software should feel simple. The interfaces should be intuitive, the systems should be efficient, and the architecture should serve the product&apos;s actual needs rather than follow trends.
                  </p>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.4}>
                <div className="aspect-[3/4] bg-border/20 border border-border flex items-center justify-center max-w-md ml-auto w-full relative">
                   <div className="text-muted text-sm tracking-widest uppercase bg-border/10 p-4 text-center">
                      TODO: Professional Portrait Photo of Aman
                   </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-32 px-6 bg-foreground text-background">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Experience" className="mb-24 text-background max-w-5xl">
                REAL PROJECTS.<br/>REAL REQUIREMENTS.<br/>REAL EXPERIENCE.
              </SectionHeading>
            </Reveal>
            
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <Reveal key={exp.id} direction="up" delay={index * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-background/20 pt-12">
                    <div className="lg:col-span-4">
                      <span className="text-sm font-medium tracking-widest text-accent uppercase block mb-4">
                        {exp.id}
                      </span>
                      <h3 className="text-2xl uppercase tracking-tight mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-sm uppercase tracking-widest text-background/50 mb-4">
                        {exp.roleTitle}
                      </p>
                      <p className="text-xs tracking-widest text-accent uppercase">
                        {exp.date}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <p className="text-lg text-background/80 mb-8">
                          {exp.description}
                        </p>
                        
                        <div className="mb-6">
                          <span className="block text-xs uppercase tracking-widest text-background/50 mb-2">CONTRIBUTION</span>
                          <p className="text-sm uppercase tracking-wider">{exp.contribution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-background/50 mb-4">FOCUS</span>
                        <ul className="space-y-3">
                          {exp.focus.map((item, i) => (
                            <li key={i} className="text-sm uppercase tracking-wide flex items-start">
                              <span className="mr-3 text-accent">—</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="py-32 px-6 bg-[#EBE2D5]">
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
                    <span className="text-sm font-medium tracking-widest text-accent uppercase block mb-4">
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
