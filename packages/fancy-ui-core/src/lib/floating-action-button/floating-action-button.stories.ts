import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { userEvent, within, expect, fn } from '@storybook/test';
import { FloatingActionButtonComponent } from './floating-action-button.component';

const meta: Meta<FloatingActionButtonComponent> = {
  title: 'Components/Core/Floating Action Button',
  component: FloatingActionButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FloatingActionButtonComponent]
    })
  ],
};

export default meta;
type Story = StoryObj<FloatingActionButtonComponent>;

export const Basic: Story = {
  args: {
    label: 'FAB Button' as any
  },
  parameters: {
    tapped: fn(action('tapped'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-floating-action-button [label]="label" (onTap)="tapped()" />
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
    label: 'FAB Button' as any,
    disabled: true as any
  },
  parameters: {
    tapped: fn(action('tapped'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-floating-action-button [label]="label" [disabled]="disabled" (onTap)="tapped()" />
    `
  }),
  play: async ({canvasElement, parameters, args}) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: (args.label as any) });
    userEvent.click(button);

    expect(parameters['tapped']).toHaveBeenCalled();
  }
};
