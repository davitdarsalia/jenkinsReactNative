const ReactCompilerConfig = {
  target: '18',
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
};
