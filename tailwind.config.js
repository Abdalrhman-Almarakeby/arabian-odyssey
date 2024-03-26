/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  prefix: "",
  theme: {
    container: {
      center: true,
      margin: "0px",
    },
    fontSize: {
      "4xl": "36px",
      "3xl": "30px",
      "2xl": "24px",
      xl: "20px",
      base: "18px",
      sm: "16px",
    },
    extend: {
      colors: {
        primary: "#01A368",
        secondary: "#00d692",
      },
      spacing: {
        4.5: "1.125rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        24.5: "6.125rem",
        30: "7.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "3xl": "1600px",
        "min-450": "450px",
      },
      transitionDuration: {
        "10s": "10s",
      },
      boxShadow: {
        1: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
