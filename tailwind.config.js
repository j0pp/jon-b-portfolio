/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nytheader: ["Cheltenham"],
        bbc: ["Reith"],
      },
      colors: {
        "bbc-red": "#9d0a0e",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}