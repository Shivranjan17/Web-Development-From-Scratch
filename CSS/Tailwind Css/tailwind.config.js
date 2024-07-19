/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./deleteme//**/*.{html,js}"],
  theme: { 
    extend: {},
  },
  plugins: [],
}

// u need to include another folder in this file if we want to include it in output.css file

