/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: {
          950: '#070a0f',
          900: '#0b1018',
          800: '#111827',
          700: '#1f2937',
          600: '#374151',
        },
        slate: {
          950: '#020617',
        },
        accent: {
          50: '#e7fff9',
          100: '#c6fff0',
          200: '#8effe0',
          300: '#5fffcf',
          400: '#00e676',
          500: '#00d96b',
          600: '#00b859',
          700: '#00994c',
          800: '#007a3e',
          900: '#005a2e',
        },
      },
      backgroundImage: {
        'glass-panel': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
        glow: '0 0 24px 0 rgba(0,230,118,0.45)',
        'glow-lg': '0 0 48px 0 rgba(0,230,118,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        flow: 'flow 3s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
