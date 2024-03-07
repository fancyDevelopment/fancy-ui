import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { provideFancyUi } from 'fancy-ui-core';
import { SwiperComponent } from './swiper.component';
import { SwiperBladeComponent } from './swiper-blade.component';

const meta: Meta<SwiperComponent> = {
  title: 'Components/Content/Swiper',
  component: SwiperComponent,
  decorators: [
    moduleMetadata({
      imports: [SwiperComponent, SwiperBladeComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<SwiperComponent>;

export const Basic: Story = {
  args: {
    activatedBladeIndex: 0 as any
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <fui-swiper [_i]="_i">
        <fui-swiper-blade>
          <p class="text-title">First Blade</p>
        </fui-swiper-blade>
        <fui-swiper-blade>
          <p class="text-title">Second Blade</p>
          <p>A larger blade</p>
        </fui-swiper-blade>
        <fui-swiper-blade>
          <p class="text-title">Third Blade</p>
        </fui-swiper-blade>
      </fui-swiper>
    `
  })
};
