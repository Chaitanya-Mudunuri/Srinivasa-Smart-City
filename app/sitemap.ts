import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://srinivasa.smartcity.mudunuri.co.in';

  const routes = [
    '',
    '/project',
    '/location',
    '/buyers-guide',
    '/verify-us',
    '/tools',
    '/brochure',
    '/contact',
    '/privacy',
    '/terms',
    '/copyright',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
