import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Create sample projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart functionality, and payment integration with Stripe. The platform includes an admin dashboard for managing products, orders, and users.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Node.js, and Socket.io for real-time communication.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts for multiple cities. Features include location-based weather data, 7-day forecasts, and interactive weather maps using OpenWeatherMap API.",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, user authentication, and a content management system. Features include rich text editing, image uploads, and SEO optimization.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills. Built with modern web technologies and featuring smooth animations, dark mode toggle, and mobile-first design principles.",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Recipe Finder",
      description: "A recipe discovery application that helps users find recipes based on available ingredients. Features include ingredient search, recipe filtering, nutritional information, and user ratings and reviews.",
      imageUrl: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
      featured: false,
    },
  ]

  for (const project of projects) {
    const createdProject = await prisma.project.create({
      data: project,
    })
    console.log(`Created project: ${createdProject.title}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
