module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: ["text-FormRed", "placeholder-FormRed", "text-FormBlue ", "border-FormBlue", "border-FormRed", "text-FormBlue ", "border-FormBlue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        18: "18px",
        14: "14px",
        12: "12px",
      },

      boxShadow: {
        FormBtnShadow: "0px 14px rgba(0, 0, 0, 0.1)",
      },

      colors: {
        FormBlue: "#63B4FC",
        FormRed: " #FFBDBD",
        FormGrey: "#A1A1A1",
      },

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
