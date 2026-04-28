'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// TODO: replace with real data
const envImpacts = [
  {
    metric: '500 kg+',
    label: 'Mercury Removed',
    desc: 'Captured and permanently immobilized from active mining environments, preventing entry into watersheds.',
  },
  {
    metric: '12',
    label: 'Aquifers Protected',
    desc: 'Primary water sources mapped, monitored, and secured against contamination from surface activities.',
  },
  {
    metric: '800 ha',
    label: 'Land Under Remediation',
    desc: 'Hectares of mine tailings in active molecular treatment, transitioning to agricultural substrate.',
  },
  {
    metric: '0',
    label: 'Mercury Release Events',
    desc: 'Zero reportable mercury spill or volatilization events at SAI-operated containment sites.',
  },
]

// TODO: replace with real data
const socialImpacts = [
  {
    metric: '12',
    label: 'Communities Served',
    desc: 'Villages receiving clean water infrastructure through Pillar B and E deployments.',
  },
  {
    metric: '340+',
    label: 'Jobs Created',
    desc: 'Direct employment in remediation operations and community infrastructure maintenance.',
  },
  {
    metric: '28,000',
    label: 'People with Water Access',
    desc: 'Individuals connected to SAI-installed potable water systems in mining-affected regions.',
  },
  {
    metric: '100%',
    label: 'Community Ownership',
    desc: 'All water infrastructure assets legally transferred to community ownership at project handover.',
  },
]

// TODO: replace with real data
const developmentImpacts = [
  {
    metric: 'Self-financing',
    label: 'Model Design',
    desc: 'Platform designed to operate without sustained grant dependency after initial deployment.',
  },
  {
    metric: '60%',
    label: 'Compliance Cost Reduction',
    desc: 'Average reduction in regulatory liability costs for mining operators partnering with SAI.',
  },
  {
    metric: 'SDGs 3, 6, 13, 15',
    label: 'Development Alignment',
    desc: 'Health, clean water, climate action, and life on land ~ all addressed by a single platform deployment.',
  },
  {
    metric: 'Minamata',
    label: 'Treaty Compliance',
    desc: 'Every SAI deployment generates Article 8 ASGM National Action Plan-compatible reporting data.',
  },
]

const phases = [
  {
    number: '01',
    label: 'Pilot',
    title: 'Phase 1 ~ Pilot Deployment',
    scope: '1-3 sites, single country',
    duration: '6-18 months',
    desc: 'Deploy the full five-pillar stack at a validated partner site. Generate baseline performance data, refine field protocols, and demonstrate the platform model for development finance institutions.',
    outcomes: [
      'Mercury capture rate validated at >99%',
      '3D subsurface environmental model generated',
      'Community water system operational and handed over',
      'Tailings molecular treatment underway',
      'Aquifer monitoring network established',
    ],
    accent: 'gold',
  },
  {
    number: '02',
    label: 'Regional',
    title: 'Phase 2 ~ Regional Scale',
    scope: '10-30 sites, 2-4 countries',
    duration: '18-48 months',
    desc: 'Replicate the pilot model across a regional mining corridor. Train local operators, build supply chains for reagents and equipment, and establish cross-site performance monitoring for development bank reporting.',
    outcomes: [
      '100+ communities with clean water access',
      'Regional mercury reduction measurable at basin scale',
      'Local operator certification program active',
      'Carbon and environmental credit frameworks initiated',
      'Development bank co-financing secured',
    ],
    accent: 'teal',
  },
  {
    number: '03',
    label: 'Global',
    title: 'Phase 3 ~ Global Platform',
    scope: '100+ sites, multi-continent',
    duration: '48-120 months',
    desc: 'Operate as a licensed environmental remediation platform, enabling sovereign governments, mining operators, and development institutions to deploy the SAI stack under license and technical supervision.',
    outcomes: [
      'Platform licensed in 15+ countries',
      'Sovereign environmental fund structures operational',
      'Minamata Convention compliance reporting integrated',
      'Publicly reportable environmental and social metrics',
      'Anchor case for global mercury treaty implementation',
    ],
    accent: 'gold',
  },
]

const regions = [
  {
    name: 'West Africa',
    countries: 'Ghana, Mali, Burkina Faso',
    challenge: 'High ASGM density, severe mercury contamination of river systems, limited regulatory capacity',
    opportunity: 'Minamata Convention signatory alignment, African Development Bank programming, GEF eligibility',
  },
  {
    name: 'Amazon Basin',
    countries: 'Peru, Colombia, Bolivia',
    challenge: 'Illegal mining in protected watersheds, indigenous community displacement, drinking water crisis',
    opportunity: 'Inter-American Development Bank funding, biodiversity credit frameworks, Green Climate Fund access',
  },
  {
    name: 'Southeast Asia',
    countries: 'Indonesia, Philippines, Myanmar',
    challenge: 'Island geography, isolated ASGM communities, limited regulatory reach, monsoon recontamination risk',
    opportunity: 'Solar infrastructure fit, GEF and ADB active programming, regional mercury treaty momentum',
  },
]

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(0,212,170,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="section-label">Platform Impact</p>
            <h1 className="section-heading mb-6">
              Measured Outcomes. Verified Results.
            </h1>
            <div className="gold-line" />
            <p className="text-gray-400 text-lg leading-relaxed">
              Impact is not a narrative at SAI ~ it is an engineering specification. Every pillar
              is designed to a measurable outcome, and every deployment generates verifiable data
              for environmental, social, and development finance stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label">Environmental</p>
            <h2 className="text-3xl font-display font-bold text-white">
              Restoring What Was Taken
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {envImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card border border-gold/20"
              >
                {/* TODO: replace with real data */}
                <p className="text-3xl font-display font-bold text-gradient-gold mb-2">
                  {item.metric}
                </p>
                <p className="text-white font-semibold text-sm mb-3">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-navy-mid border-y border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label">Social</p>
            <h2 className="text-3xl font-display font-bold text-white">
              Communities as Stakeholders
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card border border-teal/20"
              >
                {/* TODO: replace with real data */}
                <p className="text-3xl font-display font-bold text-gradient-teal mb-2">
                  {item.metric}
                </p>
                <p className="text-white font-semibold text-sm mb-3">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Impact */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label">Development</p>
            <h2 className="text-3xl font-display font-bold text-white">
              A Platform Built for Fundability
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {developmentImpacts.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card border border-navy-border"
                  >
                    {/* TODO: replace with real data */}
                    <p className="text-2xl font-display font-bold text-gold mb-2">{item.metric}</p>
                    <p className="text-white font-semibold text-sm mb-2">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card border border-teal/30 bg-gradient-to-br from-navy-card to-navy-mid"
            >
              <p className="text-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
                The Platform Model
              </p>
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Remediation That Sustains Itself
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    text: 'Subsurface intelligence maps contamination and aquifer systems at low cost',
                  },
                  {
                    step: '2',
                    text: 'Mercury capture eliminates the primary toxin and satisfies Minamata obligations',
                  },
                  {
                    step: '3',
                    text: 'Tailings remediation converts stranded liabilities into community agricultural land',
                  },
                  {
                    step: '4',
                    text: 'Water infrastructure delivers clean water and anchors community partnership',
                  },
                  {
                    step: '5',
                    text: 'Environmental monitoring data feeds treaty compliance and development finance reporting',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="flex-none w-7 h-7 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center text-teal text-xs font-bold">
                      {item.step}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed pt-0.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment phases */}
      <section className="py-24 bg-navy-mid border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="section-label">Roadmap</p>
            <h2 className="section-heading">Deployment Phases</h2>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card border border-navy-border grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`text-5xl font-display font-bold ${
                        phase.accent === 'gold' ? 'text-gradient-gold' : 'text-gradient-teal'
                      }`}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <p
                        className={`text-xs font-bold tracking-widest uppercase ${
                          phase.accent === 'gold' ? 'text-gold' : 'text-teal'
                        }`}
                      >
                        {phase.label}
                      </p>
                      <h3 className="text-lg font-display font-bold text-white">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="flex gap-6 text-xs">
                    <div>
                      <p className="text-gray-600 uppercase tracking-wider mb-1">Scope</p>
                      <p className="text-gray-300">{phase.scope}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 uppercase tracking-wider mb-1">Timeline</p>
                      <p className="text-gray-300">{phase.duration}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-3">
                    Key Outcomes
                  </p>
                  <ul className="space-y-2">
                    {phase.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 items-start">
                        <span
                          className={`mt-1.5 flex-none w-1.5 h-1.5 rounded-full ${
                            phase.accent === 'gold' ? 'bg-gold' : 'bg-teal'
                          }`}
                        />
                        <span className="text-gray-400 text-xs leading-relaxed">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Regions */}
      <section className="py-24 bg-navy border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="section-label">Geographic Focus</p>
            <h2 className="section-heading mb-4">Target Regions</h2>
            {/* TODO: replace with real interactive map */}
            <div className="mt-6 mb-10 bg-navy-card border border-navy-border rounded-sm h-64 flex items-center justify-center">
              <p className="text-gray-600 text-sm">
                [Interactive region map ~ Africa · South America · Southeast Asia]
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card border border-navy-border"
              >
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
                  {region.name}
                </p>
                <p className="text-gray-300 text-sm mb-5">{region.countries}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{region.challenge}</p>
                  </div>
                  <div>
                    <p className="text-teal text-xs uppercase tracking-wider mb-1">Opportunity</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{region.opportunity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-mid border-t border-navy-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Align your capital with verified outcomes
          </h2>
          <p className="text-gray-400 mb-8">
            SAI provides third-party verifiable environmental and social metrics ~ a requirement
            for GEF, World Bank, and Green Climate Fund grant compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/funding" className="btn-gold">
              Explore Funding Alignment
            </Link>
            <Link href="/contact" className="btn-outline">
              Request Impact Data
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
