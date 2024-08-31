/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
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
        border: "#00A86B",
        input: "#00D67F",
        ring: "#00FF9D",
        background: "#F0FFF4",
        foreground: "#005C36",
        primary: {
          DEFAULT: "#00D67F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#005C36",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF3D00",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#00A86B",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00FF9D",
          foreground: "#005C36",
        },
        popover: {
          DEFAULT: "#E6FFF0",
          foreground: "#005C36",
        },
        card: {
          DEFAULT: "#E6FFF0",
          foreground: "#005C36",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
