import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/impact', label: 'Impact' },
  { href: '/about', label: 'About' },
  { href: '/funding', label: 'Funding' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { label: 'Mercury Remediation', href: '/technology#pillar-A' },
  { label: 'Soil Regeneration', href: '/technology#pillar-D' },
  { label: 'Water Infrastructure', href: '/technology#pillar-B' },
  { label: 'Land Regeneration', href: '/technology#pillar-D' },
  { label: 'Subsurface Intelligence', href: '/technology#pillar-C' },
  { label: 'Hydrogeological Infrastructure', href: '/technology#pillar-E' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-display font-bold text-gold">SAI</span>
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500">
                Sovereign Assets International
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming environmental liabilities into sovereign assets through science-driven
              remediation, resource recovery, and community infrastructure.
            </p>
            <p className="text-gold font-display text-lg italic">
              "From Liability to Legacy."
            </p>
            <p className="text-gray-600 text-xs mt-4 uppercase tracking-wider">
              GeoNano R&D LLC
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href + s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} GeoNano R&D LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-700 text-xs tracking-wide">
              Mercury Remediation | Water Infrastructure | Land Regeneration | Soil Regeneration
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
