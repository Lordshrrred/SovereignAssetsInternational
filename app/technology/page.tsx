'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const pillars = [
  {
    letter: 'A',
    title: 'Mercury Capture',
    tagline: 'Eliminate the Primary Toxin',
    accent: 'gold',
    body: [
      'SAI deploys proprietary hermetic containment systems specifically engineered for the chaotic conditions of artisanal and small-scale gold mining (ASGM) environments.',
      'Our closed-loop mercury circuit achieves greater than 99% capture efficiency ~ preventing volatilization into the atmosphere and leaching into waterways that has devastated communities for generations.',
      'The system is modular, field-deployable in under 72 hours, and requires no grid power ~ making it viable in remote extraction zones where conventional remediation equipment cannot reach.',
    ],
    specs: [
      { label: 'Capture Efficiency', value: '>99%' },
      { label: 'Deployment Time', value: '<72 hrs' },
      { label: 'Power Requirement', value: 'Off-grid capable' },
      { label: 'System Type', value: 'Hermetic closed-loop' },
    ],
    roleNote:
      'Pillar A protects communities and unlocks regulatory approval for the entire deployment package.',
  },
  {
    letter: 'B',
    title: 'Community Water Infrastructure',
    tagline: 'Clean Water as a Sovereign Right',
    accent: 'teal',
    body: [
      'SAI designs and installs solar-powered village water systems engineered from the ground up for community ownership. Every component is selected for repairability in the field, using locally available materials where possible.',
      'Distribution networks, storage systems, and point-of-use infrastructure are sized for communities of 200-5,000 people and designed for 20+ year operational lifespans ~ not donor project cycles.',
      'Community operators are trained and certified before handover. Water governance structures ~ user committees, tariff management, and maintenance funds ~ are established alongside the physical infrastructure, ensuring the system works long after SAI personnel have left.',
    ],
    specs: [
      { label: 'Community Scale', value: '200-5,000 people' },
      { label: 'Power', value: 'Solar-powered pumping' },
      { label: 'Operational Lifespan', value: '20+ years' },
      { label: 'Ownership Model', value: 'Community transfer at handover' },
    ],
    roleNote:
      'Pillar B delivers the most immediate quality-of-life outcome and is the anchor for community trust in all other platform activities.',
  },
  {
    letter: 'C',
    title: 'Subsurface Intelligence',
    tagline: 'See What Others Cannot',
    accent: 'teal',
    body: [
      'SAI\'s Hyper-Spectral Plasma Detection technology fuses ground-based geophysical sensing with satellite multispectral imagery and AI-driven pattern recognition to generate 3D subsurface models to 50 meters depth.',
      'This approach identifies aquifer structures, contamination plumes, fault lines, and mineral concentrations with resolution and confidence levels that conventional exploratory drilling cannot match at comparable cost.',
      'For environmental remediation, this means contamination can be traced to its source, aquifer boundaries can be defined before drilling begins, and remediation resources can be targeted precisely ~ eliminating the guesswork that makes conventional programs expensive and incomplete.',
    ],
    specs: [
      { label: 'Mapping Depth', value: '50m subsurface' },
      { label: 'Cost vs. Drilling', value: '~80% reduction' },
      { label: 'Data Fusion', value: 'Satellite + AI + Ground' },
      { label: 'Output', value: '3D environmental model' },
    ],
    roleNote:
      'Pillar C de-risks every downstream decision ~ from well placement to tailings treatment zone selection.',
  },
  {
    letter: 'D',
    title: 'Trident System',
    tagline: 'Reclaim the Land',
    accent: 'gold',
    body: [
      'Mine tailings ~ the residual slurries left after ore processing ~ are among the most chemically hostile materials on Earth: acid-generating, heavy-metal laden, and biologically dead. They represent both an environmental liability and a stranded land asset that communities cannot use.',
      'The Trident System applies proprietary molecular stabilization chemistry to neutralize acid-generating sulfides, immobilize heavy metals in inert mineral matrices, and introduce the biological precursors necessary for soil formation.',
      'The output is a fertile substrate capable of supporting agricultural crops within 18-24 months of treatment ~ transforming what was a regulated liability into productive, community-owned agricultural land that generates food security and economic independence.',
    ],
    specs: [
      { label: 'Mechanism', value: 'Molecular stabilization' },
      { label: 'Input', value: 'Toxic mine tailings' },
      { label: 'Output', value: 'Fertile agricultural substrate' },
      { label: 'Cultivation Timeline', value: '18-24 months' },
    ],
    roleNote:
      'Pillar D converts a regulatory liability into a community land asset and agricultural economy ~ the most visible long-term outcome for host communities.',
  },
  {
    letter: 'E',
    title: 'Hydrogeological Infrastructure',
    tagline: 'Defend Primary Water Sources',
    accent: 'gold',
    body: [
      'SAI\'s subsurface mapping capability (Pillar C) identifies primary water sources ~ deep aquifer systems recharged by geological processes rather than surface precipitation ~ that are immune to the surface contamination affecting shallow community wells.',
      'Once identified, SAI designs source protection zones, installs monitoring well networks, and establishes baseline contamination data that enables ongoing aquifer health tracking and early detection of new contamination events.',
      'Hydrogeological infrastructure integrates with Pillar B water delivery systems to create a complete water security solution: the source is mapped and protected, the delivery system is community-owned, and the monitoring data feeds regulatory compliance reporting for Minamata Convention and national environmental agency requirements.',
    ],
    specs: [
      { label: 'Source Type', value: 'Primary aquifer systems' },
      { label: 'Protection Mechanism', value: 'Zone mapping + monitoring wells' },
      { label: 'Monitoring', value: 'Continuous sensor logging' },
      { label: 'Reporting', value: 'Regulatory compliance-ready' },
    ],
    roleNote:
      'Pillar E provides the scientific foundation for long-term water security and generates the compliance data required by multilateral environmental funders.',
  },
]

const comparison = [
  {
    feature: 'Mercury Containment',
    sai: '>99% hermetic capture, field-deployable, off-grid',
    traditional: '60-75% open retort, fixed facility required, grid-dependent',
  },
  {
    feature: 'Mercury Source Tracing',
    sai: 'AI + satellite fusion identifies contamination source to 50m depth',
    traditional: 'Surface sampling only ~ source often unidentified',
  },
  {
    feature: 'Water Source Detection',
    sai: 'Hyper-Spectral Plasma + satellite 3D mapping, aquifer boundaries defined pre-drill',
    traditional: 'Trial borehole drilling ~ high miss rate in complex geology',
  },
  {
    feature: 'Contamination Plume Mapping',
    sai: 'Full 3D plume model generated non-invasively',
    traditional: 'Grid-pattern monitoring wells ~ expensive, incomplete coverage',
  },
  {
    feature: 'Tailings Management',
    sai: 'Active molecular remediation to fertile substrate',
    traditional: 'Containment and monitoring (liability retained indefinitely)',
  },
  {
    feature: 'Water Infrastructure',
    sai: 'Community-owned solar systems, 20+ year lifespan, operator training included',
    traditional: 'Project-cycle systems, external maintenance dependency',
  },
  {
    feature: 'Deployment Context',
    sai: 'Off-grid, remote, modular, community-centered',
    traditional: 'Grid-dependent, centralized, operator-centered',
  },
]

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(0,212,170,0.07),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="section-label">Platform Architecture</p>
            <h1 className="section-heading mb-6">
              The Five Pillar Technology Architecture
            </h1>
            <div className="gold-line" />
            <p className="text-gray-400 text-lg leading-relaxed">
              SAI's integrated platform addresses the full lifecycle of mining-affected land ~
              from toxic liability to clean, water-secure, agriculturally productive community
              asset. Each pillar is independently deployable; together they form a complete
              environmental remediation system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar nav */}
      <div className="bg-navy-mid border-y border-navy-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0">
            {pillars.map((p) => (
              <a
                key={p.letter}
                href={`#pillar-${p.letter}`}
                className="flex-none px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gold border-b-2 border-transparent hover:border-gold transition-all duration-200 whitespace-nowrap"
              >
                <span className="text-gold mr-1.5">{p.letter}</span> {p.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <section
          key={pillar.letter}
          id={`pillar-${pillar.letter}`}
          className={`py-24 ${i % 2 === 0 ? 'bg-navy' : 'bg-navy-mid'} scroll-mt-28`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`text-7xl font-display font-bold leading-none ${
                      pillar.accent === 'gold' ? 'text-gradient-gold' : 'text-gradient-teal'
                    }`}
                  >
                    {pillar.letter}
                  </span>
                  <div>
                    <p
                      className={`text-xs font-bold tracking-[0.2em] uppercase mb-1 ${
                        pillar.accent === 'gold' ? 'text-gold' : 'text-teal'
                      }`}
                    >
                      Pillar {pillar.letter}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                      {pillar.title}
                    </h2>
                  </div>
                </div>
                <p
                  className={`text-base font-medium mb-6 ${
                    pillar.accent === 'gold' ? 'text-gold' : 'text-teal'
                  }`}
                >
                  {pillar.tagline}
                </p>
                <div className="space-y-4">
                  {pillar.body.map((para, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Specs card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`card border ${
                    pillar.accent === 'gold' ? 'border-gold/20' : 'border-teal/20'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                    Technical Specifications
                  </p>
                  <div className="space-y-5">
                    {pillar.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-center border-b border-navy-border pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-gray-400 text-sm">{spec.label}</span>
                        <span
                          className={`text-sm font-semibold ${
                            pillar.accent === 'gold' ? 'text-gold' : 'text-teal'
                          }`}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-6 p-6 rounded-sm border-l-4 ${
                    pillar.accent === 'gold' ? 'border-gold bg-gold/5' : 'border-teal bg-teal/5'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Platform Role
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{pillar.roleNote}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Physics vs Mechanics comparison */}
      <section className="py-24 bg-navy-mid border-t border-navy-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="section-label">Competitive Differentiation</p>
            <h2 className="section-heading mb-4">Physics vs. Mechanics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Traditional remediation firms contain and monitor contamination. SAI eliminates it
              ~ using molecular-level chemistry and precision geophysical intelligence rather than
              mechanical management alone.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-navy-border">
                  <th className="text-left py-4 px-4 text-gray-500 text-xs uppercase tracking-wider font-medium w-1/3">
                    Capability
                  </th>
                  <th className="text-left py-4 px-4 text-teal text-xs uppercase tracking-wider font-medium w-1/3">
                    SAI Platform
                  </th>
                  <th className="text-left py-4 px-4 text-gray-500 text-xs uppercase tracking-wider font-medium w-1/3">
                    Traditional Firms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className={`border-b border-navy-border ${i % 2 === 0 ? 'bg-navy/50' : ''}`}
                  >
                    <td className="py-5 px-4 text-gray-300 text-sm font-medium">{row.feature}</td>
                    <td className="py-5 px-4 text-sm text-teal">{row.sai}</td>
                    <td className="py-5 px-4 text-sm text-gray-500">{row.traditional}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-navy-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to deploy the platform?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact SAI to discuss a pilot deployment, technology partnership, or site
            assessment for your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Request a Pilot Assessment
            </Link>
            <Link href="/impact" className="btn-outline">
              View Impact Data
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
