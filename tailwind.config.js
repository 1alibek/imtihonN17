/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        teg: "#1d72d2",
        ateg: "#323a56",
        bright2: "#1d72d2",
        pteg: "#8a90a5",
        border: "#eff2f7",
        buttonbg: " #f8fafc",
        b70: "#70c63b",
        f4: "#f4fff4",
        dark: "#313647",
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};
