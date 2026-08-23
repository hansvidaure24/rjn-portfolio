import type { MetadataRoute } from 'next'
import projects from '@/data/projects'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/about', '/contact'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }))

  const projectRoutes = Object.values(projects).map((project) => ({
    url: `${siteUrl}${project.link}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...projectRoutes]
}
