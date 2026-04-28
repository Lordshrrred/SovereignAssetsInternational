import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sovereign Assets International | Environmental Remediation & Resource Recovery',
    template: '%s | SAI',
  },
  description:
    'Transforming environmental liabilities into sovereign assets through mercury remediation, primary water detection, soil regeneration, and village water infrastructure.',
  keywords: [
    'mercury remediation',
    'soil regeneration',
    'environmental remediation',
    'water infrastructure',
    'artisanal mining',
    'soil regeneration',
  ],
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
