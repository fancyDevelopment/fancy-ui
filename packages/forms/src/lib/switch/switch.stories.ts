import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { SwitchComponent } from './switch.component';

import { jest } from '@storybook/jest';
import { FormsModule } from '@angular/forms';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Forms/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [SwitchComponent, FormsModule]
    }),
    componentWrapperDecorator((story) => `<div class="max-w-[400px]">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Basic: Story = {
  args: {
    label: 'Switch' as any,
  },
  parameters: {
    model: false,
    onModelChange: jest.fn(action('Switched'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-switch [label]="label" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
    `
  })
};

export const WithHints: Story = {
  args: {
    label: 'Switch' as any,
    hintOff: 'Off' as any,
    hintOn: 'On' as any
  },
  parameters: {
    model: false,
    onModelChange: jest.fn(action('Switched'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-switch [label]="label" [hintOff]="hintOff" [hintOn]="hintOn" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
    `
  })
};
