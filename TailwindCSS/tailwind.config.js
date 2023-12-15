/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './dist/**/*.html',
  ],
  theme: {
    extend: {
      height:{
        'screen-1/2': '50vh',
        'screen-1/3': '33.333333vh',
        'screen-2/3': '66.666667vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
        'screen-1/6': '16.666667vh',
        'screen-1/7': '14.285714vh',
        'screen-1/8': '12.5vh',
        'screen-1/9': '11.111111vh',
        'screen-1/10': '10vh',
        'screen-1/15': '6.666667vh',
        'screen-5/6': '83.333333vh',
      },
      zIndex: {
        '1': 1,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
      }
    },
  plugins: [],
}

