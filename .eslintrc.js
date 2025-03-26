module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    '@react-native',
    'plugin:jest/recommended',
  ],
};
