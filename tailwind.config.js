/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ], 
  theme: {
    extend: {
      backdropBlur: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [  flowbite.plugin(),],
}

