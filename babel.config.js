module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      web: {
        presets: ["next/babel"],
        plugins: [["react-native-web", { commonjs: true }]]
      }
    }
  };
};
