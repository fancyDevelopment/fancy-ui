import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { userEvent, within } from '@storybook/testing-library';
import { ButtonComponent } from './button.component';

import { jest, expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Core/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent]
    })
  ],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
  args: {
    label: 'Primary Button' as any,
  },
  parameters: {
    tapped: jest.fn(action('tapped'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-button [label]="label" (onTap)="tapped()"></fui-button>
    `
  }),
  play: async ({canvasElement, parameters, args}) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: (args.label as any) });
    userEvent.click(button);

    expect(parameters['tapped']).toHaveBeenCalled();
  }
};

export const Disabled: Story = {
  args: {
    label: 'Primary Button' as any,
    disabled: true as any
  },
  parameters: {
    tapped: jest.fn(action('tapped'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-button [label]="label" [disabled]="disabled" (onTap)="tapped()"></fui-button>
    `
  }),
  play: async ({canvasElement, parameters, args}) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: (args.label as any) });
    userEvent.click(button);

    expect(parameters['tapped']).toHaveBeenCalled();
  }
};
