const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const fuiTailwindConfig = require('../../packages/fancy-ui-core/tailwind.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [fuiTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../packages/**/!(*.stories|*.spec|).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
