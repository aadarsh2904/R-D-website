// Import the plugins
const aspectRatio = require('tailwindcss-aspect-ratio');
const fontInter = require('tailwindcss-font-inter');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Your existing theme configuration
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'y': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        // Define a custom background image key
        'img': "url('../public/bgr.png')",
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  // Add the plugins to the configuration
  plugins: [
    aspectRatio,
    fontInter,
  ],
};
