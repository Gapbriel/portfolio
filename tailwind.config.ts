import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/data/**/*.{ts,tsx,js,jsx}", // si usás clases en data (raro pero puede pasar)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
