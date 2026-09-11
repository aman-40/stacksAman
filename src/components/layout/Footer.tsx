import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/30 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="block mb-6">
              <img 
                src="/logo.png" 
                alt="StacksAman Logo" 
                className="h-20 md:h-24 w-auto" 
              />
            </Link>
            <div className="text-muted uppercase text-sm font-mono tracking-widest space-y-2">
              <p>DIGITAL PRODUCTS</p>
              <p>WEB DEVELOPMENT</p>
              <p>CUSTOM SOFTWARE</p>
            </div>
          </div>
          
          <div>
            <h3 className="uppercase font-mono tracking-widest text-sm mb-6">MENU</h3>
            <ul className="space-y-4 uppercase text-sm tracking-wider font-medium text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors hover-underline inline-block">ABOUT</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors hover-underline inline-block">SERVICES</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition-colors hover-underline inline-block">PROJECTS</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors hover-underline inline-block">CONTACT</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase font-mono tracking-widest text-sm mb-6">CONNECT</h3>
            <ul className="space-y-4 uppercase text-sm tracking-wider font-medium text-muted">
              {process.env.NEXT_PUBLIC_GITHUB_URL && (
                <li><a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover-underline inline-block">GITHUB</a></li>
              )}
              {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                <li><a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover-underline inline-block">LINKEDIN</a></li>
              )}
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL && (
                <li><a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-foreground transition-colors hover-underline inline-block">EMAIL</a></li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 text-xs font-mono tracking-widest uppercase text-muted">
          <p>INDIA</p>
          <p>© {currentYear} STACKSAMAN</p>
        </div>
      </div>
    </footer>
  );
}
