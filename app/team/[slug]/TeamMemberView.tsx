'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { TeamMember } from '@/lib/team'
import { fadeUp } from '@/lib/animations'

export default function TeamMemberView({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(' ')
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(201,168,76,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-xs uppercase tracking-widest mb-12 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Leadership Team
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-none"
            >
              {member.headshot ? (
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-sm overflow-hidden border border-gold/20 shadow-[0_0_40px_rgba(201,168,76,0.08)]">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.headshotFit?.objectPosition ?? '50% top',
                      transform: member.headshotFit?.scale ? `scale(${member.headshotFit.scale})` : undefined,
                      transformOrigin: member.headshotFit?.transformOrigin,
                    }}
                  />
                </div>
              ) : (
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-sm bg-navy-card border border-navy-border flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.04)]">
                  <span className="text-gold text-5xl lg:text-6xl font-display font-bold opacity-60">
                    {initials}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Name / title */}
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <p className="section-label">{member.title}</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                {member.name}
              </h1>
              <div className="gold-line" />
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">{member.shortBio}</p>

              {/* Focus areas */}
              {member.focus.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {member.focus.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 bg-teal/10 border border-teal/20 text-teal text-xs font-medium uppercase tracking-wider rounded-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-navy-mid border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="section-label">Profile</p>
              {member.bio.map((paragraph, i) => (
                <p key={i} className="text-gray-400 leading-relaxed text-[1.05rem]">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Credentials sidebar */}
            {member.credentials.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="card border border-navy-border sticky top-28">
                  <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-5">
                    Core Competencies
                  </p>
                  <ul className="space-y-3">
                    {member.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-none" />
                        <span className="text-gray-400 text-sm leading-snug">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-navy border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Global Mercury Removal &amp; Water Security</p>
            <p className="text-white font-semibold">Ready to connect?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-gold text-xs">
              Contact the Team
            </Link>
            <Link href="/about" className="btn-outline text-xs">
              View Full Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
