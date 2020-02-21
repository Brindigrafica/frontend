const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.{tsx,mdx}"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport",
    {
      name: "@storybook/preset-typescript",
      options: {
        include: [resolve(__dirname, "../src")],
        tsLoaderOptions: {
          configFile: resolve(__dirname, "../tsconfig.json"),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: resolve(__dirname, "../tsconfig.json"),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
      },
    },
    {
      name: "@storybook/addon-storysource",
      options: {
        parser: "typescript",
      },
    },
  ],
};
