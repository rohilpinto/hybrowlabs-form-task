module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      FormBlue: "#63B4FC",
      FormRed: " #FFBDBD",
    },

    fontSize: {
      18: "18px",
      14: "14px",
      12: "12px",
    },

    extend: {
      width: {
        360: "360px",
        152: "152px",
      },
      height: {
        FH: "640px",
      },

      fontFamily: {
        sans: ["Aileron", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
