import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure Tailwind scans your app directory
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/globals.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
