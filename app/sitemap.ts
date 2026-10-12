import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: `${site.url}/`, lastModified: agora, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/produtos`, lastModified: agora, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.url}/sobre`, lastModified: agora, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
