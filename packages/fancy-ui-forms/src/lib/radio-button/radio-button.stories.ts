import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { RadioButtonComponent } from './radio-button.component';

import { fn } from '@storybook/test';
import { FormsModule } from '@angular/forms';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Forms/Radio Button',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RadioButtonComponent, FormsModule]
    })
  ],
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Basic: Story = {
  args: {
    label: 'Radio Button Label' as any,
    name: 'Ragio Button Group Name' as any,
    value: 'Value1' as any
  },
  parameters: {
    model: 'Value',
    onModelChange: fn(action('Marked'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-radio-button [label]="label" [name]="name" [value]="value" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
    `
  })
};

export const Group: Story = {
  args: {
    name: 'Ragio Button Group Name' as any,
  },
  parameters: {
    label1: 'Radio Button Label 1',
    value1: 'Value1',
    label2: 'Radio Button Label 2',
    value2: 'Value2',
    label3: 'Radio Button Label 3',
    value3: 'Value3',
    model: 'Value',
    onModelChange: fn(action('Marked'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-radio-button [name]="name" [label]="label1"  [value]="value1" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
      <fui-radio-button [name]="name" [label]="label2"  [value]="value2" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
      <fui-radio-button [name]="name" [label]="label3"  [value]="value3" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
    `
  })
};
