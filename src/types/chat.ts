import { Project } from "@/lib/projects";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  projects?: Project[]; // Projects fetched during this turn
}

export interface ChatRequest {
  messages: ChatMessage[];
}

export interface ChatResponse {
  text: string;
  projects?: Project[]; // Projects the API retrieved and wants the UI to display
}
