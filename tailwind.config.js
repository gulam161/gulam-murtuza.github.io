/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "280px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1200px" },
      "2xl": { min: "1201px" },
      custom: { min: "320px", max: "1024px" },
    },
    extend: {
      colors: {
        "dark-nav-bg": "#27374D",
        "dark-body-bg": "#092635",
      },
      backgroundImage: {},
      boxShadow: {
        neumorph:
          "inset 14px 14px 28px #b3b3b3, inset -14px -14px 28px #ffffff",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 1s ease forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
