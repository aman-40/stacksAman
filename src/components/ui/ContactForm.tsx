"use client";

import React, { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    formData.append("access_key", accessKey);

    // Optional: Add subject
    formData.append("subject", "New Project Enquiry from StacksAman");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-6 py-12 border border-border p-8 bg-background/50">
        <h3 className="text-2xl uppercase tracking-tighter">MESSAGE SENT</h3>
        <p className="text-muted text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
          SEND ANOTHER MESSAGE
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="space-y-4">
        <label htmlFor="name" className="block text-xs uppercase font-mono tracking-widest text-muted">NAME</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-foreground transition-colors placeholder:text-muted/30"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-4">
        <label htmlFor="email" className="block text-xs uppercase font-mono tracking-widest text-muted">EMAIL</label>
        <input 
          type="email" 
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-foreground transition-colors placeholder:text-muted/30"
          placeholder="Your email address"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-xs uppercase font-mono tracking-widest text-muted">PROJECT DETAILS</label>
        <textarea 
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-border py-4 text-xl md:text-2xl outline-none focus:border-foreground transition-colors placeholder:text-muted/30 resize-none"
          placeholder="Tell me about your idea, requirements, or problem..."
        ></textarea>
      </div>
      
      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "SENDING..." : "SEND ENQUIRY →"}
      </Button>
      
      {status === "error" && (
        <p className="text-red-500 text-sm tracking-wide mt-4">
          Something went wrong. Please try again or use the direct email link.
        </p>
      )}
    </form>
  );
}
