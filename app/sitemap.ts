import type { MetadataRoute } from 'next';
import { artigosPublicados } from '@/lib/artigos';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: `${site.url}/`, lastModified: agora, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/produtos`, lastModified: agora, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.url}/sobre`, lastModified: agora, changeFrequency: 'monthly', priority: 0.7 },
    ...(artigosPublicados().length > 0
      ? [{ url: `${site.url}/conteudos`, lastModified: agora, changeFrequency: 'weekly' as const, priority: 0.8 }]
      : []),
    ...artigosPublicados().map((a) => ({
      url: `${site.url}/conteudos/${a.slug}`,
      lastModified: new Date(`${a.data}T12:00:00`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
