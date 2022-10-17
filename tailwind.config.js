/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'general-color': '#ffdacc',
      },
    }
  },  // no options to configure
    variants: { // all the following default to ['responsive']
    imageRendering: ['responsive'],
    },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
  ],
}
