/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/pages/*.html"],
  colors: {
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    primary: "#212529",
    secondary: "#152536",
    gray_500: "#7B7B7B",
  },
  theme: {
    backgroundImage: {
      welcome: "url('../src/images/welcome.png')",
    },
    fontFamily: {
      Inter: "url('../src/fonts/Inter-Regular.ttf')",
    },
    extend: {},
  },
  plugins: [],
};
