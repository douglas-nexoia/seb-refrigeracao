import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A131F',
        'base-surface': '#101E2E',
        'base-card': '#16283D',
        accent: '#0284C7',
        'accent-hover': '#0369A1',
        cyan: '#38BDF8',
        whatsapp: '#22C55E',
        'whatsapp-hover': '#16A34A',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
        heading: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        whatsapp: '0 10px 25px -5px rgba(34, 197, 94, 0.4)',
        accent: '0 10px 25px -5px rgba(2, 132, 199, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
