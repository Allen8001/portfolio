import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
