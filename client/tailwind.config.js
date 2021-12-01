module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["Leckerli One", "cursive"],
        primary: ["Poppins", "sans-serif"],
        secondary: ["Open-Sans", "sans-serif"],
      },
      borderRadius: {
        def: "25px",
      },
      textColor: {
        primary: "#993D13",
        secondary: "#1A9944",
        error: "#A80D0D",
      },
      backgroundColor: {
        primary: "#993D13",
        secondary: "#1A9944",
        secondary_light: "#32E56E",
        def: "#FBF4F0",
        footer: "#3B2E26",
      },
      boxShadow: {
        nav: "0px 1px 3px rgba(0, 0, 0, 0.5);",
        card: "0px 4px 5px 4px rgba(0, 0, 0, 0.1);",
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
