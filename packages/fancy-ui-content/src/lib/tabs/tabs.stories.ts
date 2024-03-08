import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { provideFancyUi } from 'fancy-ui-core';
import { TabsComponent } from './tabs.component';
import { TabsItemComponent } from './tabs-item.component';

const meta: Meta<TabsComponent> = {
  title: 'Components/Content/Tabs',
  component: TabsComponent,
  subcomponents: { TabsItemComponent },
  decorators: [
    moduleMetadata({
      imports: [TabsComponent, TabsItemComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Basic: Story = {
  args: {
    activeTabIndex: 1 as any
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <fui-tabs [(activeTabIndex)]="activeTabIndex">
        <fui-tabs-item label="First" />
        <fui-tabs-item label="Second" />
        <fui-tabs-item label="Third" />
        <fui-tabs-item label="Fourth" />
      </fui-tabs>
    `
  })
};
