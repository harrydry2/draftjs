module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  rules: {
    'no-use-before-define': 0,
    'no-tabs': 0,
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/no-did-update-set-state': 0,
    'react/sort-comp': 0,
    'jsx-a11y/media-has-caption': 0,
  },
};
