/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GrayishBlue: "hsl(237, 18%, 59%)",
        SoftRed: "hsl(345, 95%, 68%)",
        VeryDarkBlue: "#241E2C",
        VeryDarkBlueMostly: "#1E1E28",
        DarkDesaturatedBlue: "hsl(236, 21%, 26%)",
      },
      fontFamily: {
        RedHat: '"Red Hat Text", sans-serif',
      },
      backgroundImage: {
        "pattern-hills": "url('/public/images/pattern-hills.svg')",
      },
      letterSpacing: {
        VeryWidest: ".40em",
      },
    },
  },
  plugins: [],
};
