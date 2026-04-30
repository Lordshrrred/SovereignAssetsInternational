import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Global Mercury Recovery & Water Security | Environmental Remediation',
    template: '%s | GMRWS',
  },
  description:
    'Global Mercury Recovery & Water Security deploys a five-pillar platform for mercury remediation, primary water detection, soil regeneration, and village water infrastructure.',
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
