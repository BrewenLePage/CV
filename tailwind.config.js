/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   media: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors:{
        tan : "#B68D40",
        Cream : "#F4EBD0",
        Charcoal : "#122620",
        Gold: "#D6AD60",
      },
      backgroundColor:{
        tan : "#B68D40",
        Cream : "#F4EBD0",
        Charcoal : "#122620",
        Gold: "#D6AD60",
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }