import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata, createWebPageJsonLd } from '@/lib/seo'

const seo = {
  title: 'Contact GMRWS',
  description:
    'Contact Global Mercury Recovery & Water Security for pilot project inquiries, partnerships, investor conversations, grant alignment, and media requests.',
  path: '/contact',
}

export const metadata = createPageMetadata(seo)

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={createWebPageJsonLd(seo)} />
      {children}
    </>
  )
}
