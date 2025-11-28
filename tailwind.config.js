/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d32f2f',
          dark: '#b71c1c',
          light: '#ef5350',
        },
        secondary: {
          DEFAULT: '#424242',
          dark: '#212121',
          light: '#616161',
        },
      },
    },
  },
  plugins: [],
}

