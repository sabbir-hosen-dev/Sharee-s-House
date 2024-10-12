
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7ED956",
        gray: "#A8A9AD",
        text:"#242424"
      },
      fontFamily: {
        mulish: ["Mulish", "sons-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  // variants: {
  //   extend: {
  //     backgroundColor: ['light'], // Enable `light` variant for background color
  //     textColor: ['light'], // Enable `light` variant for text color
  //   },
  // }
}