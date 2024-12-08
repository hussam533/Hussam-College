module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#FF9900',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}