// import { winter } from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: { sans: ['Rokkitt', 'serif'] } },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/theming/themes')['winter'],
          primary: '#2e0454',
          secondary: '#5cdf4a',
        },
      },

      'black',
    ],
  },
}
