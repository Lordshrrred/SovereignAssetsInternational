import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, createWebPageJsonLd } from '@/lib/seo'

const seo = {
  title: 'Impact',
  description:
    'Review GMRWS impact targets for mercury capture, aquifer protection, water infrastructure, community ownership, jobs, and land remediation.',
  path: '/impact',
}

export const metadata = createPageMetadata(seo)

export default function ImpactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      {children}
    </>
  )
}
