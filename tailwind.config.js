/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            cardBackground: "#fdfaf5",
            aboutBackground: "#eaeaea",
            aboutHeaderColor: "#28282b",
            teamBackground: "#28282b",
          },
        },
      },
    plugins: [],
  };
  