/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'verde': 'rgba(12,116,117,1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ]
}
