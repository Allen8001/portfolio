"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

async function fetchProject(id: string): Promise<Project> {
  const response = await fetch(`/api/projects/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;

  const { data: project, isLoading, error } = useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-96 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white">
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/projects">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-600 text-lg">
              Created on {new Date(project.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Project Image */}
          {project.imageUrl && (
            <div className="mb-8">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Project Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About This Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </CardContent>
          </Card>

          {/* Project Actions */}
          <div className="mt-8 flex gap-4">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
            <Link href="/contact">
              <Button>Get In Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
