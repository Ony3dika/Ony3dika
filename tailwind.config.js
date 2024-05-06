/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#dad4d1",
        call: "#e23c20",
        alt: "#1c1d20",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
