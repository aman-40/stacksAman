import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — StacksAman",
  description: "Web development, full-stack development, and custom digital systems designed around the specific needs of your project.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HERO & OVERVIEW */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Capabilities">
                SERVICES &<br/>EXPERTISE
              </SectionHeading>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted max-w-4xl text-balance mt-8 leading-relaxed">
                I build digital products from the ground up, focusing on clean architecture, performance, and actual business requirements. No unnecessary fluff, just robust systems designed to scale and solve real problems.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="px-4 sm:px-6 mb-40">
          <div className="container mx-auto">
            <div className="space-y-32">
              {services.map((service, index) => (
                <Reveal key={service.id} direction="up" delay={0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border pt-12 group">
                    <div className="lg:col-span-5">
                      <span className="text-sm font-medium font-mono tracking-widest text-accent uppercase block mb-4">
                        {service.id} — SERVICE
                      </span>
                      <h3 className="text-3xl md:text-5xl uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">
                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                      </h3>
                      <p className="text-lg text-muted text-balance mb-8">
                        {service.description}
                      </p>
                      <Button href={`/services/${service.slug}`} variant="outline">
                        VIEW DETAILS →
                      </Button>
                    </div>
                    
                    <div className="lg:col-span-7 bg-foreground text-background p-8 sm:p-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-xs font-mono tracking-widest uppercase mb-6 font-medium text-background/60 border-b border-background/20 pb-4">
                            Typical Projects
                          </h4>
                          <ul className="text-sm uppercase font-mono tracking-widest space-y-4">
                            {service.examples.map((ex, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-3 text-accent">—</span>
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono tracking-widest uppercase mb-6 font-medium text-background/60 border-b border-background/20 pb-4">
                            Core Tech
                          </h4>
                          <ul className="text-sm uppercase font-mono tracking-widest space-y-2 text-background/80">
                            {service.technologies.slice(0, 5).map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                            {service.technologies.length > 5 && <li>& MORE</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT APPROACH / PROCESS */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <SectionHeading subtitle="Methodology" className="mb-24">
              DEVELOPMENT<br/>APPROACH
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 gap-y-24">
              {[
                { num: "01", title: "UNDERSTAND", desc: "Analyzing the core problem, user needs, and business goals before writing a single line of code." },
                { num: "02", title: "PLAN", desc: "Defining the architecture, data models, and technology stack required for a scalable solution." },
                { num: "03", title: "BUILD", desc: "Writing clean, maintainable code in focused iterations, prioritizing core functionality." },
                { num: "04", title: "TEST", desc: "Rigorous testing of edge cases, performance bottlenecks, and security vulnerabilities." },
                { num: "05", title: "IMPROVE", desc: "Monitoring post-launch, gathering feedback, and continuously optimizing the system." },
              ].map((step, index) => (
                <Reveal key={step.num} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-6">
                    <span className="text-2xl text-accent font-light block mb-4">{step.num}</span>
                    <h3 className="text-xl uppercase tracking-tight mb-4">{step.title}</h3>
                    <p className="text-sm text-muted text-balance">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* PROJECT FIT */}
        <section className="py-32 px-4 sm:px-6">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Alignment">
                PROJECT FIT
              </SectionHeading>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              <Reveal direction="up" delay={0.1}>
                <div className="bg-foreground text-background p-10">
                  <h3 className="text-2xl uppercase tracking-tight mb-8 text-accent border-b border-background/20 pb-4">A Good Fit</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start"><span className="text-accent mr-4">✓</span> <span>Projects requiring custom architecture and complex logic.</span></li>
                    <li className="flex items-start"><span className="text-accent mr-4">✓</span> <span>Teams looking for a dedicated developer to integrate deeply.</span></li>
                    <li className="flex items-start"><span className="text-accent mr-4">✓</span> <span>Clients who value clean code, performance, and long-term maintainability.</span></li>
                    <li className="flex items-start"><span className="text-accent mr-4">✓</span> <span>Focus on actual business outcomes rather than just ticking feature boxes.</span></li>
                  </ul>
                </div>
              </Reveal>
              
              <Reveal direction="up" delay={0.2}>
                <div className="border border-border p-10">
                  <h3 className="text-2xl uppercase tracking-tight mb-8 text-muted border-b border-border pb-4">Not Every Project Is A Fit</h3>
                  <ul className="space-y-6 text-muted">
                    <li className="flex items-start"><span className="mr-4">✕</span> <span>Rushed implementations with unrealistic timelines.</span></li>
                    <li className="flex items-start"><span className="mr-4">✕</span> <span>Projects without a clear vision or understanding of the problem.</span></li>
                    <li className="flex items-start"><span className="mr-4">✕</span> <span>Haggling over fixed-price packages without defined scope.</span></li>
                    <li className="flex items-start"><span className="mr-4">✕</span> <span>Sacrificing code quality and user experience for speed.</span></li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROOF OF WORK */}
        <section className="py-32 px-4 sm:px-6 bg-foreground text-background">
          <div className="container mx-auto">
            <Reveal direction="up">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-background/20 pb-8">
                <SectionHeading subtitle="Proof of Work" className="mb-0 text-background">
                  SELECTED<br/>PROJECTS
                </SectionHeading>
                <div className="mt-8 md:mt-0">
                  <Button href="/projects" variant="outline" className="text-background border-background hover:bg-background hover:text-foreground">
                    VIEW ALL WORK →
                  </Button>
                </div>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.slice(0, 2).map((project, index) => (
                <Reveal key={project.id} direction="up" delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="aspect-video bg-background/10 mb-6 flex items-center justify-center overflow-hidden border border-background/20 transition-colors group-hover:border-accent">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <span className="text-xs font-medium font-mono tracking-widest text-accent uppercase block mb-2">{project.status}</span>
                    <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-background/70 text-balance line-clamp-2">{project.shortDescription}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-4 sm:px-6">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Common Questions" className="mb-16">
                FAQ
              </SectionHeading>
            </Reveal>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.slice(0, 4).map((faq, index) => (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl uppercase tracking-tight mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-lg text-muted text-balance leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5] text-center">
          <div className="container mx-auto max-w-4xl">
             <Reveal direction="up">
               <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-[1.1]">
                 READY TO DISCUSS YOUR PROJECT?
               </h2>
               <p className="text-xl text-muted text-balance mb-12">
                 Let&apos;s start with the problem and figure out the best technical architecture to solve it.
               </p>
               <Button href="/contact" size="lg">START A CONVERSATION →</Button>
             </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
