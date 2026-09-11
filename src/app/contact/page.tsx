import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/animations/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — StacksAman",
  description: "Start a project with StacksAman. Let's discuss your requirements and build something great.",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-40 pb-24">
        {/* HEADER */}
        <section className="px-4 sm:px-6 mb-32">
          <div className="container mx-auto max-w-4xl">
            <Reveal direction="up">
              <SectionHeading subtitle="Start a Project">
                LET&apos;S BUILD IT.
              </SectionHeading>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted text-balance mt-8">
                Tell me what you&apos;re trying to create. We&apos;ll start with the problem and figure out the right way to build it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONTACT FORM & INFO */}
        <section className="px-4 sm:px-6 mb-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              {/* CONTACT FORM PLACEHOLDER */}
              <div className="order-2 lg:order-1">
                <Reveal direction="up" delay={0.2}>
                  <ContactForm />
                </Reveal>
              </div>

              {/* CONTACT INFO */}
              <div className="order-1 lg:order-2 lg:pl-16 space-y-16">
                <Reveal direction="up" delay={0.1}>
                  <div>
                    <h3 className="text-sm font-mono tracking-widest uppercase text-muted mb-6 border-b border-border pb-4">DIRECT CONTACT</h3>
                    <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""}`} className="text-[clamp(1rem,4vw,1.75rem)] hover:text-accent transition-colors hover-underline inline-block break-all uppercase">
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "HELLO@STACKSAMAN.IN"}
                    </a>
                  </div>
                </Reveal>
                
                <Reveal direction="up" delay={0.2}>
                  <div>
                    <h3 className="text-sm font-mono tracking-widest uppercase text-muted mb-6 border-b border-border pb-4">SOCIALS</h3>
                    <ul className="space-y-4 text-xl md:text-2xl uppercase">
                      {process.env.NEXT_PUBLIC_GITHUB_URL && (
                        <li><a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GITHUB</a></li>
                      )}
                      {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                        <li><a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a></li>
                      )}
                    </ul>
                  </div>
                </Reveal>
                
                <Reveal direction="up" delay={0.3}>
                  <div>
                     <h3 className="text-sm font-mono tracking-widest uppercase text-muted mb-6 border-b border-border pb-4">WHO I BUILD FOR</h3>
                     <ul className="space-y-4 text-sm font-mono tracking-widest uppercase text-foreground">
                       <li>STARTUPS</li>
                       <li>BUSINESSES</li>
                       <li>CREATORS</li>
                       <li>PRODUCT TEAMS</li>
                       <li>INDIVIDUAL PROJECTS</li>
                     </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-4 sm:px-6 bg-[#EBE2D5]">
          <div className="container mx-auto">
            <Reveal direction="up">
              <SectionHeading subtitle="Questions" className="mb-24">
                FREQUENTLY ASKED
              </SectionHeading>
            </Reveal>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((faq, index) => (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl md:text-2xl uppercase tracking-tight mb-6">
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
      </main>
      
      </>
  );
}
