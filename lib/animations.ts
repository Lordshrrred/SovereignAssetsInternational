import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Slightly more dramatic variant used on the home page hero
export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
