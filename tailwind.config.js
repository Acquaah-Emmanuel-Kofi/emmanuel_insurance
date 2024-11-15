/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'BentonSansBold': ['Benton-Sans-Bold', 'sans-serif'],
        'BentonSansRegular': ['Benton-Sans-Regular', 'sans-serif'],
        'BentonSansMedium': ['Benton-Sans-Medium', 'sans-serif']
      }
    },
  },
  plugins: [],
};

