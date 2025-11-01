/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-beige': '#ECDAC8',
        'soft-peach': '#D1A693',
        'terracotta': '#D8966F',
        'rust': '#BF5B3C',
        'deep-brown': '#955749',
        'off-white': '#FAF8F6',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}