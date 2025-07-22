/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E5F44',
        secondary: '#5E936C',
        accent: '#93DA97',
        highlight: '#78C841',
        textLight: '#E5FBE6',
        textDark: '#1A3D2F',
      },
      boxShadow: {
        soft: 'inset 0 2px 6px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)',
        strong: '0 8px 30px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'green-stripes': 'repeating-linear-gradient(45deg, #5E936C, #5E936C 10px, #93DA97 10px, #93DA97 20px)',
        'soft-gradient': 'linear-gradient(135deg, #3E5F44 0%, #5E936C 30%, #93DA97 60%, #78C841 100%)',
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}