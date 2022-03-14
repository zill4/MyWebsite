module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        teal: '#02B3A6',
        'teal-faded': '#05b1a426',
        'sky-blue': '#1AD1F2',
        red: '#FA3E3E',
        orange: '#F59A44',
        'orange-faded': '#3D3634',
        twitch: '#6441a5',
        facebook: '#3b5998',
        discord: '#5663F7',
        twitter: '#1DA1F2',
        youtube: '#c4302b',
        instagram: '#8a3ab9',
        github: '#171515',
        linkedin: '#0e76a8',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    variants: {
      height: ['responsive', 'hover', 'focus'],
      width: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
