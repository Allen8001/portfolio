"use client";

import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

async function fetchFeaturedProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects/featured");
  if (!response.ok) {
    throw new Error("Failed to fetch featured projects");
  }
  return response.json();
}

export function FeaturedProjects() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: fetchFeaturedProjects,
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Unable to load featured projects. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            No featured projects available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
