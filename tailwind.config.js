/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "rgb(136, 146, 176)",
        colorP: "rgb(136, 146, 176)",
        customGreen: "rgb(95, 241, 207)",
      },
    },
  },
  plugins: [],
};
