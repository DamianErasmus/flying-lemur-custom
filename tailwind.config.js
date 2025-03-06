/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lapis: "#3A6788",
        yelo: "#FFC86F",
        oran: "#DC7A5F",
        dark: "#261F1D",
        gren: "#7EB77F",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["'Paytone One'", "sans-serif"],
        body: ["'Mulish'", "sans-serif"],
        accent: ["'Caladea'", "serif"],
      },
    },
  },
  plugins: [],
};
