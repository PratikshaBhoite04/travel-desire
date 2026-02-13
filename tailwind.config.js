/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#5DFB93",
        darkgreen: "#001917",
        cross: "#D5FB93",
      },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        tiempos: ["Test Tiempos Fine", "serif"],
        gloock: ["Gloock", "serif"],
      },
keyframes: {
  /* BACKGROUND */
  colorFollowIn: {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  colorFollowOut: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(100%)" },
  },

  /* 🐦 BIRD DIAGONAL */
  birdSweepIn: {
    "0%": {
      transform: "translate(-120px, 20px) scale(0.9)",
      opacity: "0.8",
    },
    "100%": {
      transform: "translate(220px, -70px) scale(1)",
      opacity: "1",
    },
  },
  birdSweepOut: {
    "0%": {
      transform: "translate(220px, -70px) scale(1)",
      opacity: "1",
    },
    "100%": {
      transform: "translate(-120px, 20px) scale(0.9)",
      opacity: "0",
    },
  },
},

animation: {
  colorFollowIn: "colorFollowIn 600ms ease-out forwards",
  colorFollowOut: "colorFollowOut 600ms ease-in forwards",
  birdSweepIn: "birdSweepIn 600ms ease-out forwards",
  birdSweepOut: "birdSweepOut 500ms ease-in forwards",
},

    },
  },

  plugins: [],
};
