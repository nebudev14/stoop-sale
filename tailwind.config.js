/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kyiv: ["Kyiv", "sans-serif"],
        old: ["Old", "sans-serif"],
        miama: ["Miama", "sans-serif"]
      },
      colors: {
        'stoop-green': '#71816D',
        'stoop-brown': '#C9B79C',
        'stoop-tan': '#F1E0C5',
      }
    },
  },
  plugins: [],
};
