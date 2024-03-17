/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
