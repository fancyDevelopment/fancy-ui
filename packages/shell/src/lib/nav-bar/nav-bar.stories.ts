import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NavBarComponent } from './nav-bar.component';
import { NavBarItemComponent } from './nav-bar-item.component';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matArchiveOutline, matHomeOutline, matSettingsOutline } from '@ng-icons/material-icons/outline';

const meta: Meta<NavBarComponent> = {
  title: 'Shell/Nav Bar',
  component: NavBarComponent,
  subcomponents: { NavBarItemComponent },
  decorators: [
    moduleMetadata({
      imports: [NavBarComponent, NavBarItemComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<NavBarComponent>;

export const Basic: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-nav-bar>
        <fui-nav-bar-item iconName="matHomeOutline" label="Test1" />
        <fui-nav-bar-item iconName="matSettingsOutline" label="Test2" />
        <fui-nav-bar-item iconName="matArchiveOutline" label="Test3" />
    </fui-nav-bar>
    `
  })
};

