/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#2B3742',
          950: '#222E37',
        },
      },
      gridTemplateColumns: {
        custom: 'repeat(4, 264px)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
