/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7ED956",
        halkaBlack: "#A8A9AD",
        text:"#242424"
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

