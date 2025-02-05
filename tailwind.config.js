/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        customColor: "rgb(136, 146, 176)",
        colorP: "rgb(136, 146, 176)",
        customGreen: "rgb(95, 241, 207)",
        customBlue: "rgb(10, 25, 47)",
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      backgroundImage: {
        "custom-gradient-text":
          "linear-gradient(45deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-clip-text": { backgroundClip: "text" },
        ".text-transparent": { color: "transparent" },
      };
      addUtilities(newUtilities);
    },
  ],
};
