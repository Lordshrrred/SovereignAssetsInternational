import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, createWebPageJsonLd } from '@/lib/seo'

const seo = {
  title: 'Technology Platform',
  description:
    'Explore the five GMRWS pillars: mercury capture, community water infrastructure, subsurface intelligence, soil regeneration, and hydrogeological protection.',
  path: '/technology',
}

export const metadata = createPageMetadata(seo)

export default function TechnologyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      {children}
    </>
  )
}
