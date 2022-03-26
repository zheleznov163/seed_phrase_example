module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-inline-import', {extensions: ['.svg']}],
    ['@babel/plugin-transform-flow-strip-types'],
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
