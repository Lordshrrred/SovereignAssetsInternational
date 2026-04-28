'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const funders = [
  {
    name: 'Global Environment Facility',
    abbrev: 'GEF',
    desc: 'GEF financing for Minamata Convention implementation and land degradation neutrality aligns directly with Pillars A, D, and E.',
    fit: ['Mercury Convention', 'Land Degradation', 'International Waters'],
  },
  {
    name: 'World Bank',
    abbrev: 'WB',
    desc: 'The World Bank\'s Environment, Natural Resources, and Blue Economy program supports cross-border environmental remediation with community benefit.',
    fit: ['ASGM Formalization', 'Community Development', 'Clean Water Access'],
  },
  {
    name: 'Green Climate Fund',
    abbrev: 'GCF',
    desc: 'GCF climate adaptation funding covers solar water infrastructure and soil carbon sequestration through SAI\'s land regeneration program.',
    fit: ['Climate Adaptation', 'Carbon Sequestration', 'Water Security'],
  },
  {
    name: 'Inter-American Development Bank',
    abbrev: 'IADB',
    desc: 'IDB Invest impact investment facilities target mercury-affected Amazon and Andean communities ~ a core SAI deployment region.',
    fit: ['Amazon Mercury', 'Indigenous Rights', 'Environmental Justice'],
  },
  {
    name: 'African Development Bank',
    abbrev: 'AfDB',
    desc: 'AfDB\'s Desert to Power and ASGM formalization programming in West Africa creates direct co-financing opportunities for SAI pilots.',
    fit: ['ASGM Reform', 'Rural Water', 'Economic Formalization'],
  },
  {
    name: 'Minamata Convention',
    abbrev: 'MC',
    desc: 'As a signatory framework, the Minamata Convention creates mandatory compliance pathways that SAI technology uniquely satisfies at commercial scale.',
    fit: ['Mercury Treaty', 'ASGM Phase-Down', 'National Action Plans'],
  },
]

const qualifications = [
  {
    icon: '◎',
    title: 'Measurable Environmental Outcomes',
    desc: '>99% mercury capture, verified with field instruments and third-party laboratory analysis. Aquifer protection validated against baseline contamination surveys.',
  },
  {
    icon: '◎',
    title: 'Self-Financing Architecture',
    desc: 'Environmental services and land asset creation cover operating costs ~ reducing grant dependency and demonstrating commercial viability alongside development impact.',
  },
  {
    icon: '◎',
    title: 'Community Benefit by Design',
    desc: 'Infrastructure ownership is transferred to communities. Revenue-sharing and local employment are built into every deployment contract.',
  },
  {
    icon: '◎',
    title: 'Multi-Country Scalability',
    desc: 'The platform is modular, off-grid, and protocol-standardized ~ it can be replicated across any ASGM-affected region without redesign.',
  },
  {
    icon: '◎',
    title: 'Treaty Compliance Integration',
    desc: 'SAI deployments generate Minamata Convention Article 8 ASGM National Action Plan-compatible reporting data by default.',
  },
  {
    icon: '◎',
    title: 'Verification-Ready Data Infrastructure',
    desc: 'All pillar deployments produce sensor-logged, GPS-tagged, timestamped data outputs suitable for GEF, GCF, and World Bank M&E requirements.',
  },
]

export default function FundingPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    country: '',
    inquiryType: 'grant',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `SAI Funding Inquiry ~ ${formData.inquiryType === 'grant' ? 'Grant Partnership' : 'Investor Inquiry'} ~ ${formData.organization}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nRole: ${formData.role}\nCountry: ${formData.country}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@sovereignassets.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(0,212,170,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="section-label">Grants & Investment</p>
            <h1 className="section-heading mb-6">
              Aligned Capital for a Verified Platform
            </h1>
            <div className="gold-line" />
            <p className="text-gray-400 text-lg leading-relaxed">
              SAI is designed to be grant-eligible, impact-investable, and commercially
              self-sustaining ~ not as a compromise, but as a structural feature. The platform
              serves the mandates of multilateral environmental funds while creating land assets,
              carbon credit pathways, and environmental services revenue that sustain the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aligned Funders */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="section-label">Funding Alignment</p>
            <h2 className="section-heading mb-4">Aligned Funding Sources</h2>
            <p className="text-gray-400 max-w-2xl">
              SAI's mandate intersects the core programming criteria of every major multilateral
              environmental and development fund.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funders.map((funder, i) => (
              <motion.div
                key={funder.abbrev}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card border border-navy-border hover:border-teal/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center text-teal text-xs font-bold">
                    {funder.abbrev}
                  </span>
                  <h3 className="text-white font-semibold text-sm group-hover:text-teal transition-colors">
                    {funder.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{funder.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {funder.fit.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-sm bg-teal/5 border border-teal/10 text-teal/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SAI Qualifies */}
      <section className="py-24 bg-navy-mid border-y border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label">Eligibility Profile</p>
            <h2 className="section-heading mb-4">Why SAI Qualifies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Six structural attributes that make the SAI platform uniquely fundable across
              the full spectrum of environmental and development finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((q, i) => (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <span className="flex-none text-gold text-xl mt-0.5">{q.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-2">{q.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{q.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">For Investors</p>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Impact That Earns Returns
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  SAI is not a philanthropic platform that incidentally generates revenue. It is
                  a commercial technology company whose business model aligns private returns with
                  verified public environmental outcomes.
                </p>
                <p>
                  Land remediation converts toxic liabilities into agricultural assets with
                  long-duration value. Water infrastructure generates community concession and
                  carbon credit revenue. Environmental monitoring data commands licensing value
                  with regulatory bodies and development finance institutions.
                </p>
                <p>
                  For impact funds, family offices, and development finance institutions seeking
                  catalytic capital deployment with verifiable SDG alignment, SAI offers a
                  structure designed for that mandate.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Revenue Type', value: 'Land assets + environmental services' },
                  { label: 'Return Horizon', value: '3-7 years (per site)' },
                  { label: 'SDG Alignment', value: 'SDGs 3, 6, 8, 13, 15' },
                  { label: 'Exit Options', value: 'License, asset sale, IPO path' },
                ].map((item) => (
                  <div key={item.label} className="bg-navy-card border border-navy-border p-4 rounded-sm">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-gold text-sm font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inquiry form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="inquiry-form"
            >
              <div className="card border border-gold/20">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Submit an Inquiry
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Grant inquiries, investor introductions, and partnership requests.
                </p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-teal text-xl">✓</span>
                    </div>
                    <p className="text-white font-semibold mb-2">Inquiry Submitted</p>
                    <p className="text-gray-400 text-sm">
                      Your email client should have opened. We will respond within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Role / Title
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Your title"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Country"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="grant">Grant Partnership</option>
                        <option value="investor">Investor Deck Request</option>
                        <option value="co-finance">Co-Financing Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Describe your funding context, interest area, or specific question..."
                      />
                    </div>

                    <button type="submit" className="btn-gold w-full justify-center">
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
