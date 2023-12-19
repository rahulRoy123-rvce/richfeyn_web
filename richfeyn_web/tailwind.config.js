module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#f5f5f5",
        tcolor:"#676767",
      },
      fontFamily: {
        custom: ['Atlas Grotesk Web Regular Regular', 'system-ui', 'sans-serif'],
        // You can add more font stacks as needed
      }
    },
    screens: {
      sm: "770px",
      md: "770px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
