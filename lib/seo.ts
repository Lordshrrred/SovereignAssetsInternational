import type { Metadata } from 'next'

export const siteUrl = 'https://globalmercuryrecovery.com'
export const siteName = 'Global Mercury Recovery & Water Security'
export const defaultDescription =
  'Global Mercury Recovery & Water Security deploys a five-pillar platform for mercury remediation, primary water detection, soil regeneration, and village water infrastructure.'

type SeoInput = {
  title: string
  description: string
  path?: string
  image?: string | null
}

export function createPageMetadata({ title, description, path = '/', image }: SeoInput): Metadata {
  const url = new URL(path, siteUrl).toString()
  const imageUrl = image ? new URL(image, siteUrl).toString() : null
  const imageType = imageUrl?.endsWith('.jpg') || imageUrl?.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'

  return {
    title,
    description,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: 'Environmental remediation',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                secureUrl: imageUrl,
                type: imageType,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  }
}

export function createOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    legalName: 'GeoNano R&D LLC',
  }
}

export function createWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: createOrganizationJsonLd(),
  }
}

export function createWebPageJsonLd({ title, description, path = '/' }: SeoInput) {
  const url = new URL(path, siteUrl).toString()

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    headline: title,
    description,
    url,
    isPartOf: createWebSiteJsonLd(),
    publisher: createOrganizationJsonLd(),
  }
}

export function createPersonJsonLd({
  name,
  title,
  description,
  path,
  image,
}: {
  name: string
  title?: string
  description: string
  path: string
  image?: string | null
}) {
  const url = new URL(path, siteUrl).toString()

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    ...(title ? { jobTitle: title } : {}),
    description,
    url,
    ...(image ? { image: new URL(image, siteUrl).toString() } : {}),
    worksFor: createOrganizationJsonLd(),
  }
}
