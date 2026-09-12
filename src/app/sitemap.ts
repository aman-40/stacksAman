import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stacksaman.in';

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    // The data source doesn't have modification dates, so we omit lastModified as instructed.
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
  }));

  return [
    { url: baseUrl },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/services` },
    ...projectRoutes,
    ...serviceRoutes,
  ];
}
