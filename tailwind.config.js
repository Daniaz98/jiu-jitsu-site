/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Mono', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
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

