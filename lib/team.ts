export interface TeamMember {
  name: string
  title: string
  slug: string
  shortBio: string
  bio: string[]
  headshot: string | null
  credentials: string[]
  focus: string[]
}

export const team: TeamMember[] = [
  {
    name: 'Clark',
    title: 'Founder / President',
    slug: 'clark',
    headshot: null,
    shortBio:
      'The visionary founder behind the GMRWS platform, Clark has spent over two decades developing the field science and strategic frameworks that make planetary-scale mercury remediation possible.',
    bio: ['Full profile coming soon.'],
    credentials: [],
    focus: ['Strategic Vision', 'Field Science', 'Platform Architecture'],
  },
  {
    name: 'Eric Crowe',
    title: 'Vice President',
    slug: 'eric-crowe',
    headshot: null,
    shortBio:
      'Eric brings executive leadership and organizational development expertise to the GMRWS platform, supporting the operational and strategic infrastructure required to scale global remediation deployments.',
    bio: ['Full profile coming soon.'],
    credentials: [],
    focus: ['Executive Operations', 'Organizational Development', 'Strategic Partnerships'],
  },
  {
    name: 'Sir Korrie Steven Hayes',
    title: 'Chief Executive Officer',
    slug: 'korrie-hayes',
    headshot: '/team/korrie-hayes.jpg',
    shortBio:
      'A decorated global commodity consultant and Knight of the Princely House of Schaumburg-Lippe-Nachod, Sir Korrie brings deep expertise in cross-border trade compliance, Kimberley Process certification, and intergovernmental diplomatic engagement to the GMRWS platform.',
    bio: [
      'As CEO of Subterranean Trading LLC and a distinguished Global Commodity Consultant, Sir Korrie Steven Hayes has spent years operating at the highest levels of international trade compliance. His command of Kimberley Process certification, U.S. Customs and Border Protection protocols, and Harmonized Tariff Schedule standards has guided high-value commodity movements, including high-carat diamond shipments and gold assets, across the most regulated international markets on earth.',
      'A Knight of the Princely House of Schaumburg-Lippe-Nachod, Sir Korrie occupies a rare position: an executive who moves fluently between the worlds of formal diplomatic protocol and precision-driven global commerce. He manages a formal office of heraldry and lineage and has developed expertise in international frameworks, letters of credence, and intergovernmental alliance structures, capabilities that directly serve GMRWS\'s need to engage sovereign governments and development finance institutions as strategic partners.',
      'Sir Korrie\'s current diplomatic mission focuses on international child protection and anti-trafficking advocacy, rooted in the conviction that trade must be accountable to the human communities it touches. At GMRWS, he brings this same accountability-first ethos to the company\'s commodity recovery operations, ensuring that every aspect of the platform\'s work meets the gold standard for ethical compliance and international certification.',
    ],
    credentials: [
      'Kimberley Process Certification',
      'CBP & HTS Protocol Expertise',
      'Maritime Regulatory Compliance',
      'Diplomatic Framework Development',
      'Intergovernmental Alliance Strategy',
    ],
    focus: [
      'International Trade Compliance',
      'Sovereign Government Engagement',
      'Commodity Recovery Operations',
      'Diplomatic & Humanitarian Initiatives',
    ],
  },
  {
    name: 'Mike Vallone',
    title: 'Chief Operating Officer',
    slug: 'mike-vallone',
    headshot: null,
    shortBio:
      'A serial entrepreneur and operator who has built and scaled businesses across eCommerce, media, art, and investment sectors, Mike brings hands-on capital alignment, brand development, and operational execution expertise to GMRWS.',
    bio: [
      'Mike Vallone is a founder-operator with a demonstrated ability to build businesses from concept to revenue across highly diverse sectors. As founder of 8th Dimension Creative Agency, he has managed multi-brand eCommerce portfolios, led Google Ads and paid acquisition campaigns, and consulted companies on brand positioning and monetization, building the performance marketing infrastructure that drives growth at scale.',
      'His work at Goodson Gallery, an art and antique business specializing in appraisals, acquisitions, and customs documentation under HS 9706, gave him fluency in alternative assets, valuation methodology, and the compliance requirements of high-value cross-border transactions. As Executive Director and Producer of the independently financed feature film Zodiac Crush, which sold out multiple theater showings and secured global streaming distribution, Mike demonstrated the full-cycle execution discipline that complex, multi-stakeholder projects demand.',
      'As founder and CEO of Dallas Socialite, Mike built a networking and events brand averaging over 250 attendees per event, structuring investor-facing programming and facilitating capital introductions across sectors. At GMRWS, he applies this investor relations experience, marketing infrastructure depth, and operational versatility to the challenge of scaling a global environmental remediation platform from pilot deployment to full commercial operation.',
    ],
    credentials: [
      'Google Ads & Paid Acquisition Strategy',
      'eCommerce Growth & Conversion Optimization',
      'Brand Positioning & Go-To-Market Strategy',
      'Investor Relations & Capital Alignment',
      'Operations Management & Team Leadership',
      'Strategic Partnerships & Deal Structuring',
    ],
    focus: [
      'Commercial Operations',
      'Capital Partner Engagement',
      'Marketing Infrastructure',
      'Brand Development',
    ],
  },
  {
    name: 'Elizabeth Hayes',
    title: 'Chief Development Officer',
    slug: 'elizabeth-hayes',
    headshot: '/team/elizabeth-hayes.jpg',
    shortBio:
      'With over fourteen years in graphic design and logistics operations, including international freight exports and global brand development at Subterranean Trading LLC, Elizabeth brings operational precision and creative leadership to every dimension of GMRWS\'s development strategy.',
    bio: [
      'Elizabeth Hayes brings an uncommon combination of operational rigor and creative excellence to the GMRWS leadership team. Over twelve years in quality assurance and customer service, including roles at Amazon Distribution Centers in inventory control and quality assurance and as an Exports Operations Specialist at Trans-border Global Freight Systems, she has developed the systems thinking and compliance discipline that global operations demand. Her understanding of international freight logistics, export documentation, and supply chain integrity directly informs how GMRWS structures its field operations and partner engagement frameworks.',
      'Equally fluent in the visual language of institutional communication, Elizabeth has worked as a freelance graphic designer and photographer for over fourteen years, with clients ranging from healthcare practices to independent businesses. Her proficiency across Adobe Creative Cloud and AI-integrated design workflows enables her to shape how GMRWS presents to the world, from investor materials and grant proposals to field-facing communications and brand identity.',
      'As Principal and COO of Subterranean Trading LLC, Elizabeth has architected the company\'s operational infrastructure, overseen global brand identity and design, and directed high-level business development and logistics across international markets. She holds a Bachelor of Arts from SUNY Plattsburgh. At GMRWS, she serves as Chief Development Officer, leading the strategic development frameworks, communications architecture, and operational systems that enable the company to engage partners, funders, and field teams around the world with clarity and credibility.',
    ],
    credentials: [
      'Exports Operations & International Freight',
      'Quality Assurance & Compliance Systems',
      'Graphic Design & Visual Identity',
      'Adobe Creative Cloud & AI Workflows',
      'Project Management',
      'Global Brand Development',
    ],
    focus: [
      'Development Strategy',
      'Brand & Communications',
      'Operational Infrastructure',
      'Partner & Funder Engagement',
    ],
  },
  {
    name: 'Matt Dunn',
    title: 'Chief Technology Officer',
    slug: 'matt-dunn',
    headshot: '/team/matt-dunn.jpg',
    shortBio:
      'A twenty-year builder of digital infrastructure and an early adopter of agentic AI, Matt architects the systems that make the GMRWS platform legible, scalable, and investor-ready, combining deep technical fluency with a track record of leading people and closing business in high-stakes environments.',
    bio: [
      'Matt Dunn brings two decades of hands-on technical architecture, AI systems development, and entrepreneurial execution to the GMRWS leadership team. As an early adopter of Claude Code, ChatGPT, and agentic AI frameworks, he has spent years building full-stack digital platforms from concept to deployment, including Vibration of Awesome (VOA), a multi-platform content and digital product ecosystem. His blockchain career spans nine-plus years across DeFi, NFTs, and tokenization mechanics on multiple chains, and includes completing the Solana Blockchain Rust Development Bootcamp at Encode Club in 2024.',
      'At Apple, Matt progressed through three roles (Training Lead, Sales Leader, and Technical Expert), ranking in the top 3 performers every quarter on revenue and upsell metrics while lifting customer satisfaction scores 7% above a team already operating at the top of its region. That discipline for performance in technical environments was built earlier across four years as a commercial electrician on institutional job sites, and three years as an Operations Technician in a GMP-certified, ISO 9001-compliant industrial manufacturing facility, work that demanded the kind of precision, documentation rigor, and process discipline that complex field deployments require.',
      'Before his technology career, Matt spent three and a half years as a Team Leader and frontline canvasser for Greenpeace USA, personally recruiting 719 monthly contributors generating $324,765 in projected lifetime donor value and building the canvassing crews that sustained that performance. The combination of technical depth, sales conviction, and environmental mission is not incidental. At GMRWS, Matt leads the technology architecture, digital systems, and AI infrastructure that connect the platform\'s field science to the investors, partners, and governments it needs to scale.',
    ],
    credentials: [
      'AI Systems Architecture (Claude Code, ChatGPT, Agents)',
      'Blockchain & Web3 (Solana, DeFi, NFTs, Tokenization)',
      'Digital Infrastructure & Full-Stack Development',
      'GMP & ISO 9001 Regulatory Compliance',
      'Apple Certified Hardware & Software Technician',
      'Sales Leadership & Donor Acquisition',
    ],
    focus: [
      'Technology Architecture',
      'AI & Agentic Systems',
      'Blockchain Infrastructure',
      'Digital Platform Development',
    ],
  },
  {
    name: 'Mitch Wardell',
    title: 'Chief Financial Officer',
    slug: 'mitch-wardell',
    headshot: null,
    shortBio:
      'Mitch oversees the financial architecture and capital strategy that enables GMRWS to operate at scale, structuring investment instruments, managing development finance relationships, and ensuring fiscal accountability across all operations.',
    bio: ['Full profile coming soon.'],
    credentials: [],
    focus: ['Financial Strategy', 'Capital Structure', 'Development Finance'],
  },
  {
    name: 'Elvis Araya',
    title: 'Chief Commercial Officer ~ Costa Rica',
    slug: 'elvis-araya',
    headshot: null,
    shortBio:
      'Elvis leads GMRWS\'s commercial operations and community engagement in Costa Rica, directing the Phase 1 pilot from relationship-building through field execution, translating the GMRWS platform into deployable reality on the ground.',
    bio: ['Full profile coming soon.'],
    credentials: [],
    focus: ['Costa Rica Operations', 'Community Engagement', 'Phase 1 Pilot'],
  },
  {
    name: 'Christian Kelch',
    title: 'Chief Marketing Officer',
    slug: 'christian-kelch',
    headshot: null,
    shortBio:
      'Christian directs the marketing strategy and brand communications that position GMRWS with governments, impact investors, grant institutions, and mining-affected communities, translating complex science into compelling, credible narratives.',
    bio: ['Full profile coming soon.'],
    credentials: [],
    focus: ['Marketing Strategy', 'Brand Communications', 'Institutional Positioning'],
  },
]

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug)
}
