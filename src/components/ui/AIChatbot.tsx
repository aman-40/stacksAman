"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Loader2 } from "lucide-react";
import { ChatMessage } from "@/types/chat";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

const SUGGESTIONS = [
  "Cafe Website",
  "Healthcare",
  "Dashboard",
  "AI SaaS",
  "Show All Projects",
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.text,
        projects: data.projects,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm having trouble connecting right now. You can explore the projects directly while I reconnect.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-foreground text-background rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        aria-label="Open StackSaman AI"
      >
        <Sparkles size={24} />
      </button>

      {/* CHAT WINDOW */}
      <div 
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh] bg-background border border-border shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-foreground text-background shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-accent" />
            <h3 className="uppercase tracking-widest font-mono text-sm">StackSaman AI</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-background/70 hover:text-background transition-colors p-1"
            aria-label="Close Chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 flex flex-col scroll-smooth">
          {messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-0 animate-fade-in-up">
              <Sparkles size={32} className="text-accent mb-4" />
              <h4 className="text-lg uppercase tracking-tight mb-2">Hi! I&apos;m StackSaman AI</h4>
              <p className="text-sm text-muted text-balance mb-8">What are you looking to build?</p>
              
              <div className="w-full space-y-2 text-left">
                <p className="text-xs font-mono tracking-widest text-muted uppercase mb-4 text-center">Try asking:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSend(sug)}
                      className="text-xs font-mono tracking-widest uppercase border border-border px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
              {/* Message Bubble */}
              <div 
                className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-foreground text-background" 
                    : "bg-transparent text-foreground border border-border/50"
                }`}
              >
                {msg.content}
              </div>

              {/* Project Cards (if any) */}
              {msg.role === "assistant" && msg.projects && msg.projects.length > 0 && (
                <div className="w-full mt-4 space-y-4">
                  {msg.projects.map(project => (
                    <Link key={project.id} href={`/projects/${project.slug}`} className="block w-full border border-border group hover:border-foreground transition-colors overflow-hidden">
                      <div className="aspect-video bg-background/50 relative overflow-hidden">
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-muted">NO IMAGE</div>
                        )}
                        <div className="absolute top-2 right-2 bg-background/90 text-foreground text-[10px] px-2 py-0.5 font-mono uppercase border border-border">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="uppercase tracking-tight text-sm font-semibold mb-1 group-hover:text-accent transition-colors truncate">{project.title}</h5>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="text-[9px] font-mono tracking-widest uppercase border border-border/50 px-1.5 py-0.5 text-muted bg-background/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start">
              <div className="max-w-[85%] p-3 text-sm bg-transparent border border-border/50 flex items-center gap-2 text-muted">
                <Loader2 size={14} className="animate-spin" />
                <span className="font-mono text-xs uppercase tracking-widest">Searching...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} className="shrink-0" />
        </div>

        {/* INPUT AREA */}
        <div className="p-4 border-t border-border shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              disabled={isLoading}
              className="w-full bg-transparent border border-border rounded-none px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-foreground/50 hover:text-foreground disabled:opacity-30 disabled:hover:text-foreground/50 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
