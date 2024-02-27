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
  parameters: {
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-tabs>
        <fui-tabs-item label="Foo" />
        <fui-tabs-item label="Bar" />
        <fui-tabs-item label="Baz" />
        <fui-tabs-item label="Foz" />
      </fui-tabs>
    `
  })
};
