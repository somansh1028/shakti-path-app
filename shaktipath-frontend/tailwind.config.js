/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FE', 300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9', 800: '#5B21B6', 900: '#4C1D95' },
        accent: { 50: '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA', 300: '#FDBA74', 400: '#FB923C', 500: '#F97316', 600: '#EA580C', 700: '#C2410C', 800: '#9A3412', 900: '#7C2D12' },
        neutral: { 50: '#FDF7FF', 100: '#F3F0F8', 200: '#E2E8F0', 300: '#CBD5E1', 400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155', 800: '#1F2933', 900: '#0F172A' }
      },
      fontFamily: { sans: ['Poppins', 'sans-serif'], display: ['Raleway', 'sans-serif'] },
      boxShadow: { 'soft': '0 8px 30px rgba(124, 58, 237, 0.08)', 'glow': '0 0 15px rgba(251, 146, 60, 0.3)' },
      borderRadius: { '3xl': '1.5rem', '4xl': '2rem' }
    },
  },
  plugins: [],
}