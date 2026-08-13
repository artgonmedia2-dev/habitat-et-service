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
      logo: 'url(/home/habitatservice-logo.jpg)'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        creepster: ['Creepster', 'cursive'], 
      },
      fontWeight: {
        '750': 750,
        '600': 600,
        '500': 500,
      },
      colors: {
        primary: {
          DEFAULT: '#292F36',
          hover: '#343E4A',
        },
        primary2: '#2C5E2E',
        primary3: '#BB8E48',
        secondary: '#4D5053',
        accent: {
          DEFAULT:'#BB8E48',
          secondary: '#F4F0EC',
          hover : "#B88C5D",
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    
  ],
}

