import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects/featured - Get featured projects only
export async function GET() {
  try {
    const featuredProjects = await prisma.project.findMany({
      where: {
        featured: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(featuredProjects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch featured projects" },
      { status: 500 }
    );
  }
}
