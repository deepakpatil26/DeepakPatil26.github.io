/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
      },
      backgroundColor: {
        primary: {
          light: "#FFFFFF",
          dark: "#111827",
        },
        secondary: {
          light: "#F3F4F6",
          dark: "#1F2937",
        },
      },
      textColor: {
        primary: {
          light: "#111827",
          dark: "#F9FAFB",
        },
        secondary: {
          light: "#4B5563",
          dark: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};
