import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C46E',
          dark: '#A07830',
        },
        teal: {
          DEFAULT: '#00D4AA',
          light: '#33DDBB',
          dark: '#00A882',
        },
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#111827',
          mid: '#0D1526',
          card: '#131C30',
          border: '#1E2D4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E2C46E 50%, #C9A84C 100%)',
        'teal-gradient': 'linear-gradient(135deg, #00A882 0%, #00D4AA 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0F1E 0%, #0D1526 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
