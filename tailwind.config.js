/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#808080',
        background: '#F5F5F5',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
    },
  },
  plugins: [],
};