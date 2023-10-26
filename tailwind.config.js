/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    
    extend: {
      backgroundImage:{
        'backgroundImage':"url(/images/bg-image.jpg)",
        'backImage':"url(/src/images/bg2.jpg)",
        'backKenya':"url(/src/images/mountkenya.jpeg)",
        'bgKenya':"url(/src/images/mount.jpg)",
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
}