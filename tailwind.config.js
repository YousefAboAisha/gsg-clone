module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary theme variables
        primary: "#FF0000",
        grey: "#3d3d3d",

        // Dark Theme variables
        background_dark: "#282828",
        text_dark: "#FFF",

        // Light theme variables
        background_light: "#FFF",
        text_light: "#282828",

        // Paragraph text color
      },

      fontFamily: {
        primary: ["var(--font-opensans)"],
        secondary: ["var(--font-cairo)"],
      },

      borderColor: {
        light: "#181D3150",
        dark: "#dddddd1a",
      },

      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        shake: "shake 0.7s linear 1",
      },
      backgroundImage: {
        "landing-image": "url('/public/landing.jpeg')",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1400px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
