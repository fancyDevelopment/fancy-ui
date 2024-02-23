
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ViewComponent } from './view.component';

import { ViewHeaderComponent } from './view-header.component';
import { ViewMainContentComponent } from './view-content.component';
import { ViewFooterComponent } from './view-footer.component';
import { provideFancyUi } from 'fancy-ui-core';

const meta: Meta<ViewComponent> = {
  title: 'Components/Shell/View',
  component: ViewComponent,
  subcomponents: { ViewHeaderComponent, ViewMainContentComponent, ViewFooterComponent },
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ViewComponent, ViewHeaderComponent, ViewMainContentComponent, ViewFooterComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<ViewComponent>;

export const Basic: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
      <fui-view class="block h-screen">
        <fui-view-header>
          <div class="bg-secondary text-on-secondary h-full flex justify-around p-5">
            Header
          </div>
        </fui-view-header>
        <fui-view-main-content>
          <div class="bg-primary text-on-primary h-full flex justify-around p-5">
            Main Content
          </div>
        </fui-view-main-content>
        <fui-view-footer>
          <div class="bg-accent text-on-accent flex justify-around p-5">
            Footer
          </div>
        </fui-view-footer>
      </fui-view>
    `
  })
};

