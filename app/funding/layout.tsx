import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, createWebPageJsonLd } from '@/lib/seo'

const seo = {
  title: 'Funding & Grant Alignment',
  description:
    'See how GMRWS aligns with GEF, World Bank, Green Climate Fund, Inter-American Development Bank, and Minamata Convention funding mandates.',
  path: '/funding',
}

export const metadata = createPageMetadata(seo)

export default function FundingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      {children}
    </>
  )
}
