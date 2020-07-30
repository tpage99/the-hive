module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      display: ["Parisienne", "cursive"],
      body: ["IM Fell Double Pica", "serif"],
    },
    fontSize: {
      xs: ".5rem",
      sm: ".75rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4rem",
      "6xl": "5rem",
      header: "10rem",
      bigHeader: "14rem",
    },
    extend: {
      colors: {
        hGreen: "#439d93",
        hYellow: "#eebd6b",
        lBlue: "#bfe6ef",
        mBlue: "#437695",
        dBlue: "#04082e",
      },
    },
  },
}
