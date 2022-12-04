module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ["Syncopate", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: {
          dark: "#2E2E2E",
          yellow: "#F2ED72",
        },
        natural: {
          pink: "#FFB9DB",
          cream: "#FFE3CE",
          aqua: "#C2F4FF",
          pinaple: "#FFEBB9",
          taro: "#C0C4E9",
          dark: "#3E3E3E",
          wasabi: "#DAF6CC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-inner-border")],
};
