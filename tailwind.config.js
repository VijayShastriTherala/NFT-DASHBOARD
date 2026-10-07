/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#7047EB",

        dark: {
          50: "#28223F",
          100: "#211C37",
          200: "#1D1931",
          300: "#17132B",
          400: "#131027",
          500: "#100D21",
        },

        light: {
          50: "#FFFFFF",
          100: "#F7F7FB",
          200: "#EEEEF5",
          300: "#E2E2EC",
          400: "#D4D4E2",
          500: "#C5C5D5",
        },
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        dashboard: "12px",
      },
    },
  },

  plugins: [],
};