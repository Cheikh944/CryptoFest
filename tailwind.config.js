/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'violet': "#261E35",
      'blue': "#868B93",
    },
    fontSize:{
      "title": "30px",
      "second": "20px",
      "third": "18px",
      "fourth": "16px",
      "five": "14px",
      "six": "12px",
      "text": "14px"
    },
    fontWeight:{
      "bold": "700",
      "semi": "600",
      "medium": "500",
      "regular": "400",
    },
    screens: {
      'md': {'max': '800px'},
      'sm': {'max': '680px'},
    },
    extend: {},
  },
  plugins: [],
}