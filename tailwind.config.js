/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontCusome: ["Rubik", "Broken", "Fax"],
      },
      animation: {
        "bounce-slow": "bounce 4s ease-in-out infinite ",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
