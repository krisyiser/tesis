import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#1A1A1A",
        primary: "#C05C3E",
        secondary: "#426B50",
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
