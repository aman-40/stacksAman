import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { getProjects } from "@/lib/projects";
import { Reveal } from "@/components/animations/Reveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { ScrollMarquee } from "@/components/animations/ScrollMarquee";
import { HeroSearch } from "@/components/ui/HeroSearch";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

export const revalidate = 0; // Disable caching so new projects appear immediately

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {/* SECTION 01 — HERO */}
      <section className="pt-40 pb-24 px-4 sm:px-6 min-h-[90dvh] flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col items-center text-center max-w-4xl">
          <SplitTextReveal as="h1" delay={0.2} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tighter mb-12">
            WHAT KIND OF WEBSITE ARE YOU LOOKING FOR?
          </SplitTextReveal>
          <div className="w-full">
            <Reveal delay={0.4}>
              <div className="w-full flex justify-center">
                <HeroSearch projects={projects} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 01.5 — MARQUEE */}
      <section className="py-12 bg-accent text-background overflow-hidden border-y border-border/20">
        <ScrollMarquee baseVelocity={100} className="py-4">
          <div className="flex items-center gap-16 px-8 text-4xl md:text-6xl uppercase tracking-tighter font-medium">
            <span>REACT</span>
            <span className="text-xl">✦</span>
            <span>NEXT.JS</span>
            <span className="text-xl">✦</span>
            <span>TYPESCRIPT</span>
            <span className="text-xl">✦</span>
            <span>TAILWIND CSS</span>
            <span className="text-xl">✦</span>
            <span>GSAP</span>
            <span className="text-xl">✦</span>
            <span>NODE.JS</span>
            <span className="text-xl">✦</span>
            <span>WEBGL</span>
            <span className="text-xl">✦</span>
          </div>
        </ScrollMarquee>
      </section>

      {/* SECTION 02 — INTRODUCTION */}
      <section className="py-24 px-4 sm:px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <Reveal direction="up">
            <SectionHeading subtitle="Philosophy" className="max-w-6xl mb-12">
              EVERY PROJECT STARTS WITH A PROBLEM.<br />THE TECHNOLOGY COMES AFTER.
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

      {/* SECTION 03 — PROJECT CAROUSEL */}
      <ProjectCarousel projects={projects} />

      {/* SECTION 05 — SERVICES PREVIEW */}
      <section className="py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <SectionHeading subtitle="What I Build">
            SERVICES &<br />CAPABILITIES
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.id} direction="up" delay={index * 0.1}>
                <div className="group border-t border-border pt-6">
                  <span className="text-sm font-medium font-mono tracking-widest text-muted block mb-4">
                    {service.id}
                  </span>
                  <h3 className="text-2xl uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="text-muted mb-6 text-sm">
                    {service.description}
                  </p>
                  <ul className="text-xs uppercase font-mono tracking-widest text-muted space-y-2">
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

      {/* SECTION 13 — FINAL CTA */}
      <section className="py-40 px-4 sm:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Reveal direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tighter mb-12">
              HAVE AN IDEA?<br />LET&apos;S BUILD IT.
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
