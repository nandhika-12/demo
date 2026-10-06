/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./pages/**/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        "primary-dark": "#123B63",
        secondary: "#2563EB",
        accent: "#06B6D4",
        teal: "#0F766E",
        "light-cyan": "#E6F7FA",
        background: "#F7F9FC",
        surface: "#FFFFFF",
        "bg-secondary": "#EEF3F8",
        "text-primary": "#172033",
        "text-secondary": "#5B667A",
        "text-muted": "#8892A5",
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#2563EB",
        border: "#E2E8F0"
      }
    }
  },
  plugins: []
};
