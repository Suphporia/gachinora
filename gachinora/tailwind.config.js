//tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#F88282",
        bgColor: "#F4E6E6",
        textColor: "#4F4F4F",
        textAssisColor: "#929292",
        borderColor: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
