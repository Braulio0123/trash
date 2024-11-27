/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#E0E0E0",
        secondary: "#8C8C8C",
        complementary: "#5A5A5A",
        dark_complementary: "#2C2C2C", 
      }
    },
  },
  plugins: [],
}