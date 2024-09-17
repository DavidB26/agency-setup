/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-brandable': '#0900BC',
        'rose-brandable': '#E51448',
        'purple-brandable': '#490B7E',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

