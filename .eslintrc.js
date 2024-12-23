const reactCompiler = require('eslint-plugin-react-compiler');

module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['eslint-plugin-react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
  },
};
