/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gbrown': {
          100: '#655A3E',
          200: '#7E714E',
          300: '#A4946B',
          400: '#D1C9B3',
          500: '#E0DCCC',
          600: '#F7F6F2'
        },
        'gteal': {
          100: '#E8FAFF',
          200: '#C2F2FF',
          300: '#99E9FF',
          400: '#00C0F5',
          500: '#0090B8',
          600: '#0080A3',
          700: '#00607A'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'text': 'textMove 20s linear infinite',
      },
      keyframes: {
        textMove: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}
