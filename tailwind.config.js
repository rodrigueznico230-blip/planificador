/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#0a0a0a", 100: "#171717", 200: "#262626", 300: "#404040", 400: "#555555",
          500: "#6b6b6b", 600: "#9a9a9a", 700: "#d4d4d4", 800: "#e5e5e5", 900: "#f4f4f5", 950: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
