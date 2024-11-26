// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        moveStars: 'moveStars 60s linear infinite',
      },
      keyframes: {
        moveStars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -1000px' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
