/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}" // All JS, TS, JSX, TSX files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#00351C",
      },
    },
  },
  plugins: [],
}
  
