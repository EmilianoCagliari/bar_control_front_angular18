/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Oxygen"', 'sans-serif'],
      'heading': ['"Red Hat Display"', 'sans-serif'],

    },
    colors: {
    },
    extend: {
      colors: {
        'primary': {
          '50': '#eef3ff',
          '100': '#e0e8ff',
          '200': '#c7d4fe',
          '300': '#a5b7fc',
          '400': '#8191f8',
          '500': '#626bf2',
          '600': '#4441e5',
          '700': '#3d37cb',
          '800': '#3330a3',
          '900': '#2e2e81',
          '950': '#1c1b4b',
        },
        'secondary': {
          '50': '#f2fcf1',
          '100': '#e0f9df',
          '200': '#c1f2c0',
          '300': '#92e590',
          '400': '#59d157',
          '500': '#37c234',
          '600': '#269623',
          '700': '#21761f',
          '800': '#1d5e1d',
          '900': '#1a4d1a',
          '950': '#092a0a',
        },
        "transparent": "transparent",
        'danger': '#D30E0E'
      }
    },
  },
  plugins: [],
}

