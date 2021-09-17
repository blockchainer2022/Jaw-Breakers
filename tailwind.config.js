module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#222831",
        primary: "#ffdd55",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    fontFamily: {
      sans: "Humnst777 Blk BT Black Italic",
      serif: "Hanalei Fill",
      rubik: ["Rubik", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    backgroundColor: () => ({
      primary: "#ffdd55",
      primaryLight: "#fcd559",
      dark: "#222831",
      violet: "#C837AB",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
