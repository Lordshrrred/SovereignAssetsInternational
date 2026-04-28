'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const inquiryTypes = [
  { value: 'pilot', label: 'Pilot Project Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'investor', label: 'Investor / Funder' },
  { value: 'grant', label: 'Grant Partnership' },
  { value: 'media', label: 'Media / Press' },
  { value: 'other', label: 'Other' },
]

const contactInfo = [
  {
    label: 'General Inquiries',
    value: 'info@sovereignassets.com',
    type: 'email',
  },
  {
    label: 'Investor Relations',
    value: 'invest@sovereignassets.com',
    type: 'email',
  },
  {
    label: 'Entity',
    value: 'GeoNano R&D LLC',
    type: 'text',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    country: '',
    inquiryType: 'pilot',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const inquiryLabel =
      inquiryTypes.find((t) => t.value === formData.inquiryType)?.label ?? formData.inquiryType
    const subject = encodeURIComponent(
      `SAI Contact ~ ${inquiryLabel} ~ ${formData.organization || formData.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nCountry: ${formData.country}\nInquiry Type: ${inquiryLabel}\n\nMessage:\n${formData.message}`
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(201,168,76,0.06),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="section-label">Get In Touch</p>
            <h1 className="section-heading mb-6">
              Start the Conversation
            </h1>
            <div className="gold-line" />
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you are exploring a pilot deployment, representing a funding institution,
              or seeking a technology partnership ~ reach out and our team will respond within
              two business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20 bg-navy-mid border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-10"
            >
              {/* Contact details */}
              <div>
                <p className="section-label mb-6">Contact</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label}>
                      <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.type === 'email' ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-gold text-sm hover:text-gold-light transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry type guide */}
              <div>
                <p className="section-label mb-6">What We Handle</p>
                <div className="space-y-3">
                  {[
                    { type: 'Pilot Project', desc: 'Site assessment and deployment scoping' },
                    { type: 'Partnership', desc: 'Technology licensing and operational partnerships' },
                    { type: 'Investment', desc: 'Equity, debt, and blended finance structures' },
                    { type: 'Grants', desc: 'Co-financing and development fund alignment' },
                    { type: 'Press', desc: 'Media inquiries and speaking requests' },
                  ].map((item) => (
                    <div key={item.type} className="flex gap-3">
                      <span className="flex-none w-1.5 h-1.5 rounded-full bg-teal mt-2" />
                      <div>
                        <p className="text-white text-sm font-medium">{item.type}</p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regions */}
              <div>
                <p className="section-label mb-4">Active Regions</p>
                <div className="space-y-2">
                  {[
                    'West Africa (Ghana, Mali)',
                    'Amazon Basin (Peru, Colombia)',
                    'Southeast Asia (Indonesia, Philippines)',
                    'East Africa (expanding)',
                  ].map((r) => (
                    <p key={r} className="text-gray-400 text-sm">{r}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="card border border-navy-border">
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  We respond to all inquiries within 2 business days.
                </p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-6">
                      <span className="text-teal text-2xl">✓</span>
                    </div>
                    <p className="text-white text-xl font-display font-bold mb-3">
                      Message Sent
                    </p>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                      Your email client should have opened with the message pre-filled.
                      We look forward to connecting.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="Company / Institution"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                          placeholder="your@email.com"
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
                          placeholder="Your country"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Inquiry Type *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, inquiryType: type.value }))
                            }
                            className={`px-3 py-2.5 text-xs font-medium rounded-sm border transition-all duration-200 text-left ${
                              formData.inquiryType === type.value
                                ? 'border-gold bg-gold/10 text-gold'
                                : 'border-navy-border text-gray-400 hover:border-gray-600 hover:text-gray-300'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-navy border border-navy-border rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your project, region of interest, or question. The more context you provide, the better we can respond."
                      />
                    </div>

                    <button type="submit" className="btn-gold w-full justify-center text-sm">
                      Send Message
                    </button>

                    <p className="text-gray-600 text-xs text-center">
                      By submitting, your default email client will open with the message pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-16 bg-navy border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-lg font-display italic mb-2">
              "Roots in the Earth. Capital in the Future."
            </p>
            <p className="text-gray-600 text-sm">Sovereign Assets International ~ GeoNano R&D LLC</p>
          </div>
        </div>
      </section>
    </>
  )
}
