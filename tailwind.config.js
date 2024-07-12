/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '985px' },
      md: { max: '889px' },
      sm: { max: '519px' },
      xs: { max: '459px' },
      '2xs': { max: '401px' },
    },
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
