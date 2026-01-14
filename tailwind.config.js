/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5DFB93",
        darkgreen: "#001917",
        cross: "#D5FB93",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
         tiempos: ["Test Tiempos Fine", "serif"],
         gloock: ['Gloock', 'serif'],
      },
    },
  },
  plugins: [],
};
