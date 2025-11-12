/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Manrope', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
