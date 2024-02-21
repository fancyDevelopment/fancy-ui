import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { NavRailComponent } from './nav-rail.component';
import { NavRailItemComponent } from './nav-rail-item.component';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';

const meta: Meta<NavRailComponent> = {
  title: 'Shell/Nav Rail',
  component: NavRailComponent,
  subcomponents: { NavRailItemComponent },
  decorators: [
    moduleMetadata({
      imports: [NavRailComponent, NavRailItemComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<NavRailComponent>;

export const Basic: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-nav-rail>
        <fui-nav-rail-item iconName="matHomeOutline" label="Test1" />
        <fui-nav-rail-item iconName="matSettingsOutline" label="Test2" />
        <fui-nav-rail-item iconName="matArchiveOutline" label="Test3" />
    </fui-nav-rail>
    `
  })
};

