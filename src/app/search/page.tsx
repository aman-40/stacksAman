import React, { Suspense } from "react";
import { SearchResults } from "./SearchResults";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Search Results — StacksAman",
  description: "Search results for projects and digital experiences.",
};

export const revalidate = 0;

export default async function SearchPage() {
  const projects = await getProjects();

  return (
    <main className="pt-40 pb-24 px-4 sm:px-6 min-h-[90dvh]">
      <div className="container mx-auto">
        <Suspense fallback={<div className="text-sm font-mono tracking-widest text-muted uppercase">Searching...</div>}>
          <SearchResults projects={projects} />
        </Suspense>
      </div>
    </main>
  );
}
