/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#88bfa6',
        },
      },
    },
  },
  plugins: [],
}
