import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl text-gray-900 line-clamp-2">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {project.imageUrl && (
            <div className="mb-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          <p className="text-gray-600 line-clamp-3 mb-4">
            {project.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              {new Date(project.createdAt).toLocaleDateString()}
            </span>
            {project.featured && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                Featured
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
