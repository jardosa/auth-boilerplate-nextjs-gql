const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-divider': withOpacity('--color-divider'),
        'custom-white': '#ffffff',
        'ep-dark': '#111111',
        'ep-dark-100': '#3d3d3d',
        'custom-amethyst-gem': '#746486',
        'custom-red-100': '#e57373',
        'custom-orange-100': '#f8ac25',
        'custom-neon-green': '#3BFF34',
        'custom-india-green': '#28A503',
        'custom-onyx': '#0B1025',
        'custom-dark-orchid': '#9446CE',
        'custom-oxford-blue': '#141C3D',
        'custom-throat': '#221F3E',
        'custom-purple-rain': '#7936C5',
        'custom-harlequin': '#3CFF03',
        'custom-cloudy': '#AAAAAA',
        'custom-danger': '#C23E3F',
        'custom-milky': '#F6F6F6',
        'custom-sambucus': '#17152B',
        'custom-taurus-forest-fern': '#70C250',
        'custom-white-darker': '#ECECEC',
        'custom-ksu-purple': '#512484',
        'light-lines': '#D8D8D8',
        'custom-green-sub': '#63D440',
        'custom-pumping-spice': '#f54949',
        'custom-light-lines': '#443B57',
        'custom-rich-lavender': '#A06DD3',
        'custom-evening-mauve': '#413D67',
        'custom-gold': '#D0B264',
        'custom-charcoal-black': '#2A2A2A',
        'custom-teldrassil-purple': '#A96AD8',
        'custom-screen': '#C5C1C0',
        'custom-steel': '#0A1612',
        'custom-denim': '#1A2930',
        'custom-marigold': '#F7CE3E'
      }
    }
  },
  plugins: []
};
