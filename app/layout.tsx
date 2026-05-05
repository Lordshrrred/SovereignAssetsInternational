import type { Metadata, Viewport } from 'next'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  createOrganizationJsonLd,
  createWebSiteJsonLd,
  defaultDescription,
  defaultOgImage,
  defaultOgImageAlt,
  defaultOgImageHeight,
  defaultOgImageWidth,
  siteName,
  siteUrl,
} from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Global Mercury Recovery & Water Security | Environmental Remediation',
    template: '%s | GMRWS',
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'Environmental remediation',
  keywords: [
    'mercury remediation',
    'soil regeneration',
    'environmental remediation',
    'water infrastructure',
    'artisanal mining',
    'water security',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: siteUrl,
  },
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
  openGraph: {
    title: 'Global Mercury Recovery & Water Security | Environmental Remediation',
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    images: [
      {
        url: defaultOgImage,
        secureUrl: defaultOgImage,
        width: defaultOgImageWidth,
        height: defaultOgImageHeight,
        type: 'image/png',
        alt: defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Mercury Recovery & Water Security | Environmental Remediation',
    description: defaultDescription,
    images: [defaultOgImage],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white">
        <JsonLd data={createOrganizationJsonLd()} />
        <JsonLd data={createWebSiteJsonLd()} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
