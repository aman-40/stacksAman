import React from "react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: "Not Found" };
  
  return {
    title: `${service.title} Services — StacksAman`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="pt-40 pb-24">
        {/* HERO */}
        <section className="px-4 sm:px-6 mb-24">
          <div className="container mx-auto">
            <Reveal direction="up">
              <Link href="/services" className="text-xs font-medium font-mono tracking-widest text-muted uppercase block mb-8 hover:text-foreground transition-colors">
                ← BACK TO SERVICES
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tighter mb-12 max-w-5xl">
                {service.title}
              </h1>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <div className="border-t border-border pt-12 max-w-4xl">
                <p className="text-xl md:text-3xl text-muted text-balance leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTENT SPLIT */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* SIDEBAR */}
              <div className="lg:col-span-4 order-2 lg:order-1 space-y-16">
                <Reveal direction="up">
                  <div>
                    <h3 className="text-xs font-mono tracking-widest uppercase text-muted mb-6 border-b border-border/50 pb-4">Relevant Technology Stack</h3>
                    <ul className="space-y-4 uppercase text-sm font-medium">
                      {service.technologies.map((tech, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-accent mr-3">/</span> {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.1}>
                  <div>
                    <h3 className="text-xs font-mono tracking-widest uppercase text-muted mb-6 border-b border-border/50 pb-4">Typical Applications</h3>
                    <ul className="space-y-4 text-sm text-foreground">
                      {service.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-accent">—</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
              
              {/* MAIN CONTENT */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <Reveal direction="up">
                  <div className="bg-foreground text-background p-8 sm:p-16">
                    <h2 className="text-3xl uppercase tracking-tighter mb-12 border-b border-background/20 pb-8">
                      What You Get
                    </h2>
                    <ul className="space-y-8">
                      {service.whatYouGet.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-6 text-xl">✓</span>
                          <span className="text-lg md:text-xl text-background/90 text-balance leading-relaxed">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
              
            </div>
          </div>
        </section>

        {/* PROOF OF WORK */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Proof of Work" className="mb-16">
                SELECTED<br/>PROJECTS
              </SectionHeading>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.slice(0, 2).map((project, index) => (
                <Reveal key={project.id} direction="up" delay={index * 0.1}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="aspect-[16/10] bg-background/50 mb-6 flex items-center justify-center overflow-hidden border border-border transition-colors group-hover:border-foreground">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted text-balance line-clamp-2">{project.shortDescription}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 sm:px-6 text-center">
          <div className="container mx-auto">
             <Reveal direction="up">
               <h2 className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-10">NEED THIS SERVICE?</h2>
               <Button href="/contact">START A PROJECT</Button>
             </Reveal>
          </div>
        </section>
      </main>
      
    </>
  );
}
