/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}