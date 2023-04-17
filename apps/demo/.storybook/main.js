const path = require('path');
module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.js'
    }
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    console.log(config);
    // Uncomment this  to fix
    //config.resolve.fallback = {
    //  path: false,
    //  assert: false,
    //  util: false,
    //};
    return config;
  }
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
