import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../../../packages/*/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../../../packages/*/src/lib/**/*.mdx', '../doc/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;
