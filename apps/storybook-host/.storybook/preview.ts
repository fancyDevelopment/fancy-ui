import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../documentation.json';
setCompodocJson(docJson);

export const parameters = {
    options: {
      storySort: {
        order: ['Intro', ['Introduction'], 'Components', 'Compositions'],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      exclude: /_.*/
    }
  };
