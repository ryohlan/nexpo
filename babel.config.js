module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            src: "./src"
          }
        }
      ]
    ],
    env: {
      web: {
        presets: ["next/babel"],
        plugins: [["react-native-web", { commonjs: true }]]
      }
    }
  };
};
