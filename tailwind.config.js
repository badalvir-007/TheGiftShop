/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      backgroundColor: {
        lineToblue: '#cbd5e1',
      },
      gradientColorStops: {
        'rgba-203-213-225-0': 'rgba(203, 213, 225, 0)',
      },
      gradientToColors: {
        'b': 'to bottom',
      },
    },
  },
  plugins: [
    
  ],
}

