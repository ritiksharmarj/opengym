/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        200: '#e5e7eb',
      },
      slate: {
        500: '#64748b',
        700: '#334155',
      },
      white: '#ffffff',
      black: '#000000',
      brown: {
        light: '#E1998B',
        DEFAULT: '#9D4635',
        dark: '#BD6655',
      },
    },
  },
  plugins: [],
};
