/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        navGreen: "#c1f377",
      },
      textColor: {
        textBlue1: "#539BB5",
      },
      backgroundImage: {
        hero1: `url('/images/hero1.jpg')`,
        hero2: `url('/images/hero2.jpg')`,
        hero3: `url('/images/hero3.jpg')`,
      },
    },
  },
  plugins: [],
};
