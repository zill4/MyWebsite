module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
    variants: {
      height: ['responsive', 'hover', 'focus'],
      width: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
