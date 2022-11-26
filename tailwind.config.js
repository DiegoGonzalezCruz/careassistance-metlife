/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#0091DD',
      secondary: '#90CF3F',
      secondaryDark: '#0061A4',
      input: '#9E9E9E',
      error: '#FF1F1F',
      backgroundDark: '#F4F4F4'
    },
    extend: {},
  },
  plugins: [],
}
