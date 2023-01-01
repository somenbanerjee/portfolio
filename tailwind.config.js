/** @type {import('tailwindcss').Config} */
//const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f3f4f6",
      black: "#111827",
      red: "#ff0000",
      gray: "#6b7280",
      grayLight: "#e5e7eb",
      primary: "#EE674A",
    },
    extend: {},
  },
  plugins: [],
};
