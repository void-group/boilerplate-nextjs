const { default: TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  typescript: { reactDocgen: 'none' },
  stories: [
    '../src/components/**/*.story.mdx',
    '../src/components/**/*.story.@(js|jsx|ts|tsx)',
    '../src/components/**/story.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  webpackFinal: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
}
