/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        "40px": "40px"
      },

      width: {
        "52px": "52px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}
