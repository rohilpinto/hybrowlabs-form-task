module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      FormBlue: "#63B4FC",
    },

    fontSize: {
      18: "18px",
      14: "14px",
      12: "12px",
    },

    extend: {
      width: {
        360: "360px",
      },
      height: {
        FH: "640px",
      },

      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
