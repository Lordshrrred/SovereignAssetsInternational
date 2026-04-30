'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/technology', label: 'Technology' },
  { href: '/impact', label: 'Impact' },
  { href: '/about', label: 'About' },
  { href: '/funding', label: 'Funding' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md border-b border-navy-border' : 'bg-transparent'
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-teal/10 border-b border-teal/20 text-center py-2 px-4">
        <p className="text-teal text-xs font-medium tracking-wide">
          Phase 1 Pilot &nbsp;~&nbsp; Costa Rica 2026 &nbsp;~&nbsp;{' '}
          <a href="/funding" className="underline underline-offset-2 hover:text-teal-light transition-colors">
            Now Seeking Grant Partners
          </a>
        </p>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          {/* Mobile: icon only */}
          <Image
            src="/brand/icon-white.png"
            alt="Global Mercury Recovery & Water Security"
            width={40}
            height={40}
            className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity sm:hidden"
          />
          {/* Desktop: horizontal logo */}
          <Image
            src="/brand/logo-horizontal-white.png"
            alt="Global Mercury Recovery & Water Security"
            width={320}
            height={56}
            className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity hidden sm:block"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? 'text-gold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-xs py-2 px-4">
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy-mid border-b border-navy-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 text-sm font-medium uppercase tracking-wide rounded-sm transition-colors ${
                    pathname === link.href
                      ? 'text-gold bg-navy-card'
                      : 'text-gray-300 hover:text-gold hover:bg-navy-card'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link href="/contact" className="btn-gold w-full justify-center text-xs">
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
