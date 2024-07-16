/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textGrey: "#B4B4B4",
        yellow: "#FFB800",
        blue: "#3346AC",
        main: "#1E1443",
        "modal-overlay": "rgba(0, 0, 0, 0.5)",
        indigo: "#2B1A63",
        redpurple: "#A1397E",
        extinct: "#958DB1",
      },
    },
  },
  plugins: [],
};
