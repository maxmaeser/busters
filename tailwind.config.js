/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Ops Colors
        'grill-charcoal': '#36454F',
        'bunker-concrete': '#A9A9A9',
        'mission-dossier-cream': '#F5F5DC',

        // Flavor Accent Colors
        'ketchup-red': '#FF6347',
        'saffron-gold': '#FFDB58',
        'olive-drab-green': '#6B8E23',

        // Utility Colors
        'classified-black': '#000000',
        'redacted-white': '#FFFFFF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Reference CSS variables set in layout.tsx
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-bebas-neue)', 'sans-serif'],
        // Keep serif as fallback if needed, or remove if unused
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      textShadow: {
        sm: '1px 1px 1px rgba(0, 0, 0, 0.3)',
        md: '0 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '0 2px 8px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}; 