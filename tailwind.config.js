/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      hero: 'url(/home/hero.jpg)',
      logo: 'url(/home/habitatservice-logo.jpg)',
      'gold-gradient': 'linear-gradient(135deg, #C59B27 0%, #E5C158 50%, #A8821E 100%)',
      'dark-gradient': 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)',
    },
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '750': 750,
        '600': 600,
        '500': 500,
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -10px rgba(197, 155, 39, 0.3)',
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.03)',
        'card-hover': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
      },
      colors: {
        gold: {
          DEFAULT: '#C59B27',
          light: '#F8F3E6',
          hover: '#A8821E',
          accent: '#E5C158',
          // Text-safe golds for light backgrounds (WCAG AA ≥ 4.5:1 on white and gold-light)
          ink: '#7F6210',
          deep: '#5E480C',
        },
        emerald: {
          DEFAULT: '#1E3A2B',
          light: '#2C5E2E',
          hover: '#152A1F',
        },
        slate: {
          950: '#0B0F17',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
        },
        primary: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
        },
        primary2: '#1E3A2B',
        primary3: '#C59B27',
        secondary: '#475569',
        accent: {
          DEFAULT: '#C59B27',
          secondary: '#FAF9F5',
          hover: '#A8821E',
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

