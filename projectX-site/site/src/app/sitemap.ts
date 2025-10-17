import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: new Date() },
    { url: `${SITE.url}/about`, lastModified: new Date() },
    { url: `${SITE.url}/idea`, lastModified: new Date() },
  ]
}
