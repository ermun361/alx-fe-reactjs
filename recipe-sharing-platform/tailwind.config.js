/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
     "./public/index.html", 
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'class' if you want manual control
  theme: {
    extend: {},
  },
  plugins: [],
}
