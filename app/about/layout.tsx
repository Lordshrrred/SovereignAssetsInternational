import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, createWebPageJsonLd } from '@/lib/seo'

const seo = {
  title: 'About GMRWS',
  description:
    'Meet the leadership team and operating philosophy behind Global Mercury Recovery & Water Security, the deployment vehicle for GeoNano R&D LLC environmental remediation technology.',
  path: '/about',
}

export const metadata = createPageMetadata(seo)

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      {children}
    </>
  )
}
