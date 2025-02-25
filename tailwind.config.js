/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          25: "#fffffff9",
          50: "#dfeff0",
          75: "#e3f2df",
          100: "#f4f0fa",
          200: "#010101",
          300: "#4fd4dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#98673f",
          300: "#ffb366",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};