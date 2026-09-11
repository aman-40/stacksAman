import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — StacksAman`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="pt-40 pb-24">
        {/* HERO */}
        <section className="px-4 sm:px-6 mb-24">
          <div className="container mx-auto">
            <Reveal direction="up">
              <span className="text-xs font-medium font-mono tracking-widest text-accent uppercase block mb-6 border border-accent/30 inline-block px-3 py-1 rounded-full">
                {project.status}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tighter mb-12 max-w-5xl">
                {project.title}
              </h1>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-border pt-12">
                <div className="md:col-span-2">
                  <p className="text-xl md:text-2xl text-muted text-balance">
                    {project.shortDescription}
                  </p>
                </div>
                <div>
                  <span className="block text-muted text-xs font-mono tracking-widest uppercase mb-2">ROLE</span>
                  <span className="uppercase text-sm">{project.role}</span>
                </div>
                <div>
                  <span className="block text-muted text-xs font-mono tracking-widest uppercase mb-2">SCOPE</span>
                  <span className="uppercase text-sm">{project.scope}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <div className="w-full aspect-video bg-border/20 flex items-center justify-center relative overflow-hidden border border-border">
               <div className="text-muted text-sm font-mono tracking-widest uppercase bg-border/10 p-4">
                  TODO: Hero Image / Video for {project.title}
               </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY CONTENT */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* SIDEBAR METADATA */}
              <div className="lg:col-span-4 order-2 lg:order-1 space-y-12">
                <Reveal direction="up">
                  <div>
                    <h3 className="text-xs font-mono tracking-widest uppercase text-muted mb-4 border-b border-border/50 pb-2">Technologies Used</h3>
                    <ul className="space-y-2 uppercase text-sm">
                      {project.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                
                <Reveal direction="up" delay={0.1}>
                  <div>
                    <h3 className="text-xs font-mono tracking-widest uppercase text-muted mb-4 border-b border-border/50 pb-2">Key Features</h3>
                    <ul className="space-y-2 uppercase text-sm">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {project.links && (
                  <Reveal direction="up" delay={0.2}>
                    <div className="pt-8 flex flex-col gap-4">
                      {project.links.live && <Button href={project.links.live} variant="primary" className="w-full">VIEW LIVE PRODUCT</Button>}
                      {project.links.github && <Button href={project.links.github} variant="outline" className="w-full">VIEW GITHUB</Button>}
                      {project.links.demo && <Button href={project.links.demo} variant="outline" className="w-full">VIEW DEMO</Button>}
                    </div>
                  </Reveal>
                )}
              </div>
              
              {/* MAIN CONTENT */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-24">
                <Reveal direction="up">
                  <div>
                    <h2 className="text-2xl uppercase font-mono tracking-widest mb-8 text-accent">Overview</h2>
                    <div className="prose prose-lg max-w-none prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed">
                      <p>{project.overview}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up">
                  <div className="w-full aspect-[16/9] bg-border/20 flex items-center justify-center border border-border">
                     <div className="text-muted text-xs font-mono tracking-widest uppercase">TODO: Secondary Image</div>
                  </div>
                </Reveal>

                <Reveal direction="up">
                  <div>
                    <h2 className="text-2xl uppercase font-mono tracking-widest mb-8 text-accent">The Problem</h2>
                    <div className="prose prose-lg max-w-none prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed">
                      <p>{project.problem}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up">
                  <div>
                    <h2 className="text-2xl uppercase font-mono tracking-widest mb-8 text-accent">The Approach & Build</h2>
                    <div className="prose prose-lg max-w-none prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed space-y-6">
                      <p>{project.approach}</p>
                      <p>{project.buildDetails}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up">
                  <div>
                    <h2 className="text-2xl uppercase font-mono tracking-widest mb-8 text-accent">Challenges & Learnings</h2>
                    <div className="prose prose-lg max-w-none prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed space-y-6">
                      <p><strong className="uppercase block text-sm font-mono tracking-widest mb-2 mt-6">Challenges:</strong> {project.challenges}</p>
                      <p><strong className="uppercase block text-sm font-mono tracking-widest mb-2 mt-6">Outcome:</strong> {project.outcome}</p>
                      <p><strong className="uppercase block text-sm font-mono tracking-widest mb-2 mt-6">Learnings:</strong> {project.learnings}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              
            </div>
          </div>
        </section>

        {/* NEXT PROJECT (Optional / Static for now) */}
        <section className="px-4 sm:px-6 border-t border-border py-24 bg-[#EBE2D5] text-center">
          <div className="container mx-auto">
            <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-8">NEXT PROJECT</h2>
            <Link href="/projects" className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter hover:text-accent transition-colors">
              BACK TO ALL PROJECTS
            </Link>
          </div>
        </section>
      </main>
      
      </>
  );
}
