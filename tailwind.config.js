const fontFamily = {
  title: ['Rubik', 'Inter', 'Roboto', 'sans-serif'],
  paragraph: ['Roboto', 'sans-serif'],
  body: ['Roboto', 'sans-serif'],
};
const borderWidth = {
  default: '1px',
  0: 0,
  2: '2px',
};
const colors = {
  primary: {
    default: '#0B69FF',
    focus: '#0055DC',
    hover: '#0058E3',
  },
  grey: {
    100: '#7E858E',
    50: 'rgba(126, 133, 142, .5)',
    40: 'rgba(126, 133, 142, .4)',
    4: 'rgba(126, 133, 142, .04)',
    bg: '#FBFBFB',
  },
  'light-grey': {
    100: '#D7DFE9',
    50: 'rgba(215, 223, 233, .5)',
    40: 'rgba(215, 223, 233, .4)',
    24: 'rgba(215, 223, 233, .24)',
  },
  success: {
    default: '#2DCA73',
    focus: '#1DB05F',
    hover: '#26BF6A',
    bg: '#F3FFF8',
  },
  warning: {
    default: '#FFB800',
    focus: '#EAA800',
    hover: '#F2AE00',
    bg: '#FFF8E6',
  },
  error: {
    default: '#FF0B37',
    focus: '#D7042A',
    hover: '#EF0D36',
    bg: 'rgba(255, 11, 55, .05)',
  },
};
const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  25: '6.25rem',
};

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily,
    borderWidth,
    extend: {
      colors,
      spacing,
    },
  },
  variants: {},
  plugins: [],
};
