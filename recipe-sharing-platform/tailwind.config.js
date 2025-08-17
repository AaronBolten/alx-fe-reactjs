/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './public/index.html',        // ✅ add this line for the checker
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
