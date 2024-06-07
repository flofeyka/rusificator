/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx}",
    './src/components/**/*.{jsx, js, tsx, ts}'],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '330px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1024px'},

      'lg': {'min': '1025px'}
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    }
  },
  plugins: [],
}

