import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { technologies } from "@/data/technologies";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — StacksAman",
  description: "Web development, custom applications, APIs, and digital products tailored to your exact needs.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HEADER */}
        <section className="px-6 mb-32">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Capabilities">
                WHAT I BUILD
              </SectionHeading>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted max-w-3xl text-balance mt-8">
                Services must be outcome and problem based. I build digital products, not just code.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="px-6 mb-40">
          <div className="container mx-auto">
            <div className="space-y-24">
              {services.map((service, index) => (
                <Reveal key={service.id} direction="up" delay={index * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-12">
                    <div className="lg:col-span-4">
                      <span className="text-sm font-medium tracking-widest text-accent uppercase block mb-4">
                        {service.id} — SERVICE
                      </span>
                      <h3 className="text-3xl md:text-4xl uppercase tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <p className="text-lg md:text-xl text-muted text-balance mb-8">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest uppercase mb-6 font-medium text-foreground border-b border-border/30 pb-4">
                          Examples
                        </h4>
                        <ul className="text-sm uppercase tracking-widest text-muted space-y-4">
                          {service.examples.map((ex, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-3 text-accent">—</span>
                              {ex}
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

        {/* TECHNOLOGY APPROACH */}
        <section className="py-32 px-6 bg-foreground text-background">
          <div className="container mx-auto">
            <SectionHeading subtitle="Technology Approach" className="max-w-5xl mb-24">
              THE RIGHT TOOL<br/>FOR THE RIGHT PROBLEM.
            </SectionHeading>
            
            <p className="text-xl md:text-2xl text-background/70 max-w-4xl text-balance mb-24">
              Every project has different requirements. Instead of forcing every product into the same stack, I evaluate the goals, complexity, budget, performance requirements and future needs before deciding how it should be built.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {technologies.map((category, index) => (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase mb-6 text-background/50 border-b border-background/20 pb-4">
                      {category.title}
                    </h4>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-lg uppercase tracking-wide">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="mt-24 pt-12 border-t border-background/20 text-center">
              <p className="text-lg tracking-widest uppercase text-accent">
                Technology adapts to the requirements of the product.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-32 px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <SectionHeading subtitle="Process" className="mb-24">
              FROM IDEA<br/>TO PRODUCT
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-24">
              {[
                { num: "01", title: "DISCOVER", desc: "Understand the idea, users, requirements and desired outcome." },
                { num: "02", title: "DEFINE", desc: "Turn the idea into clear features, priorities and a practical plan." },
                { num: "03", title: "ARCHITECT", desc: "Choose appropriate technologies, systems and structure." },
                { num: "04", title: "BUILD", desc: "Design and develop the product in focused stages." },
                { num: "05", title: "REFINE", desc: "Test, optimize and improve the experience." },
                { num: "06", title: "LAUNCH", desc: "Deploy the product and prepare it for continued development." },
              ].map((step, index) => (
                <Reveal key={step.num} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-6">
                    <span className="text-4xl text-accent font-light block mb-4">{step.num}</span>
                    <h3 className="text-2xl uppercase tracking-tight mb-4">{step.title}</h3>
                    <p className="text-muted text-balance">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <div className="container mx-auto">
             <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-10">READY TO BUILD?</h2>
             <Button href="/contact">START A PROJECT</Button>
          </div>
        </section>
      </main>
      
      </>
  );
}
