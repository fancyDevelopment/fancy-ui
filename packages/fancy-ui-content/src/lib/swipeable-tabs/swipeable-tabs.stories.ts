import { SliderComponent, SwitchComponent, TextBoxComponent } from 'fancy-ui-forms';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { provideFancyUi } from 'fancy-ui-core';
import { SwipeableTabsComponent } from './swipeable-tabs.component';
import { SwipeableTabsBladeComponent } from './swipeable-tabs-blade.component';
import { MetricComponent } from '../metric/metric.component';

const meta: Meta<SwipeableTabsComponent> = {
  title: 'Components/Content/SwipeableTabs',
  component: SwipeableTabsComponent,
  decorators: [
    moduleMetadata({
      imports: [SwipeableTabsComponent, SwipeableTabsBladeComponent, MetricComponent, TextBoxComponent, SwitchComponent, SliderComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<SwipeableTabsComponent>;

export const Basic: Story = {
  args: {
    activeBlade: 0 as any
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <fui-swipeable-tabs [activeBlade]="activeBlade">
        <fui-swipeable-tabs-blade label="First">
          <div class="my-component">  
            <p class="text-title">First Blade</p>
            <p>With metrics</p>
          </div>
          <div class="grid grid-cols-3 my-component">
            <fui-metric label="First Metric" [value]="1234" changeValue="1,8%" [changePositive]="true" />
            <fui-metric label="Second Metric" [value]="1234" changeValue="1,8%" [changePositive]="false" />
            <fui-metric label="Third Metric" [value]="1234" changeValue="1,8%" [changePositive]="true" />
          </div>
        </fui-swipeable-tabs-blade>
        <fui-swipeable-tabs-blade label="Second">
          <div class="my-component">  
            <p class="text-title">Second Blade</p>
            <p>With form elements</p>
          </div>
          <div class="grid grid-cols-6 gap-component my-component">
            <fui-text-box class="col-span-3" label="Label1" />
            <fui-text-box class="col-span-3" label="Label2" />
            <fui-switch class="col-span-3" label="Switch" />
            <fui-switch class="col-span-3" label="Switch" />
            <fui-slider class="col-span-6" label="Slider" />
          </div>
        </fui-swipeable-tabs-blade>
        <fui-swipeable-tabs-blade label="Third">
          <p class="text-title">Third Blade</p>
        </fui-swipeable-tabs-blade>
      </fui-swipeable-tabs>
    `
  })
};
