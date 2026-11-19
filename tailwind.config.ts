import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07060c',
          900: '#0c0a14',
          800: '#141021',
          700: '#1d1730',
        },
        vice: {
          pink: '#ff3d8b',
          magenta: '#ff6bd0',
          cyan: '#31e6e0',
          sun: '#ffb14e',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255, 61, 139, 0.55)',
        cyan: '0 0 40px -10px rgba(49, 230, 224, 0.5)',
      },
      backgroundImage: {
        'vice-gradient':
          'linear-gradient(120deg, #ff3d8b 0%, #8b5cf6 45%, #31e6e0 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
