import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#05070C',
        night: '#0A0F1C',
        deep: '#0F1729',
        navy: '#162038',
        steel: '#1F2A44',
        gold: {
          DEFAULT: '#D4A437',
          light: '#F0C75A',
          deep: '#A87E1F',
        },
        paper: '#F5F1E8',
        mist: '#C9CFD9',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'rise': 'rise 1.2s cubic-bezier(0.2,0.7,0.2,1) forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        rise: {
          'from': { transform: 'translateY(110%)' },
          'to': { transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
