/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: { 'poppins': ['Poppins', 'sans-serif'],
                    'nova': ['Nova Flat'] },
      colors: {
        gray: {
          800: '#262628',
          900: '#171717'
        },
        purple: {
          500: '#AD00FF',
          600: '#4B006F'
        }
      }
    }
  },
  plugins: []
}
