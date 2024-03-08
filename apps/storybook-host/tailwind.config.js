const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const fuiTailwindConfig = require('../../packages/fancy-ui-core/tailwind.preset.private');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [fuiTailwindConfig],
  content: [
    join(__dirname, '../../packages/**/!(*.spec|).{ts,html}'),
    join(__dirname, 'stories/*.stories.ts'),
    join(__dirname, 'doc/*.mdx'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
