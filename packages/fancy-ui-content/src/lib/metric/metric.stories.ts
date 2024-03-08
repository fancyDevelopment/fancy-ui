import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { provideFancyUi } from 'fancy-ui-core';
import { MetricComponent } from './metric.component';

const meta: Meta<MetricComponent> = {
  title: 'Components/Content/Metric',
  component: MetricComponent,
  decorators: [
    moduleMetadata({
      imports: [MetricComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<MetricComponent>;

export const Basic: Story = {
  args: {
    label: "Label" as any,
    value: "$9850.90" as any,
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <fui-metric [label]="label" [value]="value">
      </fui-metric>
    `
  })
};

export const WithChange: Story = {
  args: {
    label: "Label" as any,
    value: "$9850.90" as any,
    changePositive: true as any,
    changeValue: "+1,8%" as any
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <fui-metric [label]="label" [value]="value" [changePositive]="changePositive" [changeValue]="changeValue">
      </fui-metric>
    `
  })
};
