/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 20px 10px rgba(59, 130, 246, 0.6)',
      },
    },
  },
  plugins: [],
}

