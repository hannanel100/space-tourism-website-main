/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sans: ['Barlow Condensed', 'sans-serif'],
        sans2: ['Barlow', 'sans-serif'],
      },
    },

    colors: {
      primary: '#0B0D17',
      secondary: '#D0D6F9',
      tertiary: { 100: '#ffffff', 900: '#FFFFFF0A' },
    },
  },
  plugins: [],
};
