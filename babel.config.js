module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".jsx", ".js"],
          alias: {
            Components: "./src/components",
            Screens: "./src/screens",
            Assets: "./src/assets",
            Utils: "./src/utils",
            Hooks: "./src/hooks",
            Services: "./src/services",
            Routes: "./src/routes",
            Global: "./src/global",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
