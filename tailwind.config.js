/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-color': '#3A7859',
      'secondary-color': '#42A976',
      'background-color': '#f4f4f4',
      'button-disabled': '#E1E5EC',
      'text-primary': '#354153',
      'white': '#fff',
      'gainsboro': '#D4E0E0',
      'quick-silver': '#9EA0A4',
      'deep-moss-green': '#2D6A4C',
      'primary-black': '#000',
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

