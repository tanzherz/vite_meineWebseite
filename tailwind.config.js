import { winter } from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/theming/themes')['winter'],
          primary: '#460990',
          secondary: '#5cdf4a',
        },
      },

      'black',
    ],
  },
}
