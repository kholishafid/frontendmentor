/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#854dff",
        "light-red": "#ff5757",
        "off-white": "#f0f0f0",
        "light-grey": "#dbdbdb",
        "smokey-grey": "#716f6f",
        "off-black": "#141414",
      },
      fontFamily: {
        poppins: ["Poppins", "Arial, Helvatica"],
        "poppins-bold": ["Poppins Bold", "Arial, Helvatica"],
      },
    },
  },
  plugins: [],
};
