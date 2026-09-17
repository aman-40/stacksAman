import { supabase } from "./supabase";

export interface SupabaseProject {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  description: string | null;
  category: string;
  subcategory: string | null;
  project_type: string;
  status: string;
  role: string | null;
  scope: string | null;
  overview: string | null;
  problem: string | null;
  approach: string | null;
  build_details: string | null;
  challenges: string | null;
  outcome: string | null;
  learnings: string | null;
  thumbnail_url: string | null;
  preview_image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  case_study_url: string | null;
  featured: boolean;
  sort_order: number;
  project_technologies?: { technology: string }[];
  project_features?: { feature: string }[];
  project_tags?: { tag: string }[];
}

export type ProjectStatus = string;

export interface Project {
  slug: string;
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  role: string;
  scope: string;
  overview: string;
  problem: string;
  approach: string;
  buildDetails: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string;
  outcome: string;
  learnings: string;
  image: string;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export function mapSupabaseProjectToProject(sp: SupabaseProject): Project {
  return {
    slug: sp.slug,
    id: sp.id, // Using Supabase UUID or keep it as string
    title: sp.title,
    category: sp.category,
    status: sp.status === "published" ? "IN PRODUCTION" : sp.status.toUpperCase(), // Best effort mapping
    shortDescription: sp.short_description,
    role: sp.role || "",
    scope: sp.scope || "",
    overview: sp.overview || "",
    problem: sp.problem || "",
    approach: sp.approach || "",
    buildDetails: sp.build_details || "",
    technologies: sp.project_technologies ? sp.project_technologies.map(t => t.technology) : [],
    keyFeatures: sp.project_features ? sp.project_features.map(f => f.feature) : [],
    challenges: sp.challenges || "",
    outcome: sp.outcome || "",
    learnings: sp.learnings || "",
    image: sp.thumbnail_url || "",
    links: {
      live: sp.live_url || undefined,
      github: sp.github_url || undefined,
      demo: sp.case_study_url || undefined,
    }
  };
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_technologies(technology),
      project_features(feature),
      project_tags(tag)
    `)
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return (data as SupabaseProject[]).map(mapSupabaseProjectToProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_technologies(technology),
      project_features(feature),
      project_tags(tag)
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error(`Error fetching project ${slug}:`, error);
    return null;
  }

  return mapSupabaseProjectToProject(data as SupabaseProject);
}

export async function searchProjects(query: string): Promise<Project[]> {
  if (!query) return getProjects();

  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_technologies(technology),
      project_features(feature),
      project_tags(tag)
    `)
    .eq("status", "published")
    .or(`title.ilike.%${query}%,short_description.ilike.%${query}%,category.ilike.%${query}%`)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error searching projects:", error);
    return [];
  }

  return (data as SupabaseProject[]).map(mapSupabaseProjectToProject);
}
