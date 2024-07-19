/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js,css}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily : {
         JakartaSans : ["Plus Jakarta Sans"],
         Play : ["Playwrite CU","cursive"],
          
      }
    },
  },
  plugins: [require("daisyui")],
}



