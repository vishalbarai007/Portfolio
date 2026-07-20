import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vishalbarai.com'

  const routes = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/web',
    '/portfolio/app',
    '/portfolio/software',
    '/portfolio/cybersecurity',
    '/resume',
    '/skills',
    '/timeline',
    '/assistant',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
