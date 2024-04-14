import { provideFancyUi } from 'fancy-ui-core';
import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TextAreaComponent } from './text-area.component';

import { jest } from '@storybook/jest';
import { FormsModule } from '@angular/forms';

const meta: Meta<TextAreaComponent> = {
  title: 'Components/Forms/Text Area',
  component: TextAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [TextAreaComponent, FormsModule],
      providers: [
        provideFancyUi()
      ]
    }),
    componentWrapperDecorator((story) => `<div class="max-w-[400px]">${story}</div>`)
  ]
};

export default meta;
type Story = StoryObj<TextAreaComponent>;

export const Basic: Story = {
  args: {
    label: 'Label' as any,
    hint: 'Hint Text' as any,
  },
  parameters: {
    value: '',
    onModelChange: jest.fn((val) => action("Value Changed")(val))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-text-area [label]="label" [hint]="hint" minlength="3" [ngModel]="value" (ngModelChange)="onModelChange($event)" />
    `
  })
};
