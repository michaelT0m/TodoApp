/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1e1f22",
        grayText: "#999999"
      },
    },
  },
  plugins: [],
};
