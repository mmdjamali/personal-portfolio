import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "rgb(31 31 31 / <alpha-value>)",
        white: "rgb(255 255 255 / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--error) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--warning) / <alpha-value>)",
        },
        // yellow: "rgb(255 255 0 / <alpha-value>)",
      },
      fontSize: {},
      borderRadius: {
        DEFAULT: "6px",
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
      transitionTimingFunction: {
        "back-in-out": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        // ispired by https://github.com/emilkowalski, EASE constant of vaul
        'emil': 'cubic-bezier(0.32, 0.72, 0, 1)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
