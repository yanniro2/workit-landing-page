// Import necessary types
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Match all files in src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: "Fraunces",
              fontWeight: "600",
              fontSize: "2.25rem", // 36px
              lineHeight: "1.2",
            },
            h2: {
              fontFamily: "Fraunces",
              fontWeight: "600",
              fontSize: "1.75rem", // 28px
              lineHeight: "1.25",
            },
            // Define more styles for h3, h4, and so on...
            body: {
              fontFamily: "manrope",
              fontWeight: "400",
              fontSize: "1rem", // 16px
              lineHeight: "1.5",
            },
          },
        },
      },
      colors: {
        "Dark-Purple": "#24053E",
        "Davy-Grey": "#584D62",
        Eucaplyptus: "#44FFA1",
        "Ghost-White": "#FCF8FF",
        White: "#FFFFFF",
        body: "#F2F2F2",
      },
    },
  },
  variants: {
    extend: {
      // screens: {
      //   sm: { min: "0px", max: "375px" }, // Mobile (0px to 375px)
      //   md: { min: "376px", max: "768px" }, // Tablet (376px to 768px)
      //   lg: { min: "769px", max: "1440px" }, // Desktop (769px to 1440px)
      // },
      screens: {
        sm: "375px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1440px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Include the typography plugin
    // Include additional plugins here if needed
  ],
};

export default config;
