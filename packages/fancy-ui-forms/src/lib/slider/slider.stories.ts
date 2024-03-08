import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { SliderComponent } from './slider.component';

import { jest } from '@storybook/jest';
import { FormsModule } from '@angular/forms';

const meta: Meta<SliderComponent> = {
  title: 'Components/Forms/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [SliderComponent, FormsModule]
    }),
    componentWrapperDecorator((story) => `<div class="max-w-[400px]">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Basic: Story = {
  args: {
    label: 'Slider Label' as any,
    rangeMin: 10 as any,
    rangeMax: 90 as any
  },
  parameters: {
    model: 'Value',
    onModelChange: jest.fn(action('Slided'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-slider [label]="label" [rangeMin]="rangeMin" [rangeMax]="rangeMax" [ngModel]="model" (ngModelChange)="onModelChange($event)" />
    `
  })
};
