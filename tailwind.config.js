/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-bold': ['Josefin Sans', 'sans-serif'],
        'josefin-slab': ['Josefin Slab', 'serif'],
      },
      colors: {
        primary: '#FF7C71',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}