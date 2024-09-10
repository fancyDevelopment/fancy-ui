import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { userEvent, within, expect, fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Core/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent]
    })
  ]
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
  args: {
    label: 'Primary Button',
    disabled: false,
    tap: fn()
  },
  render: (args) => ({
    props: args,
    template:`
      <fui-button [label]="label" [disabled]="disabled" (tap)="tap()"></fui-button>
    `
  }),
  play: async ({canvasElement, args}) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: args.label });
    await userEvent.click(button);

    expect(args.tap).toHaveBeenCalled();
  }
};

export const Disabled: Story = {
  args: {
    label: 'Primary Button',
    disabled: true,
    tap: fn()
  },
  render: (args) => ({
    props: args,
    template:`
      <fui-button [label]="label" [disabled]="disabled" (tap)="tap()"></fui-button>
    `
  }),
  play: async ({canvasElement, args}) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: args.label });
    await userEvent.click(button);

    expect(args.tap).not.toHaveBeenCalled();
  }
};
