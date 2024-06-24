/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-color': '#3A7859',
      'secondary-color': '#42A976',
      'background-color': '#f4f4f4',
      'button-disabled': '#E1E5EC',
      black: '#000',
      white: '#fff',
      'text-primary': '#354153',
    },
    extend: {},
  },
  plugins: [],

  purge: [
    './src/**/*.{html,ts}',
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

