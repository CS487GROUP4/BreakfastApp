module.exports = {
  jit: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        def: "25px",
      },
      textColor: {
        primary: "#993D13",
        secondary: "#1A9944",
      },
      backgroundColor: {
        def: "#FBF4F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
