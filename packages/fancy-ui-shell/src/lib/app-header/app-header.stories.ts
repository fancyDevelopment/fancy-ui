import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AppHeaderActionComponent } from './app-header-action.component';
import { AppHeaderComponent } from './app-header.component';

import { jest, expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { provideFancyUi } from 'fancy-ui-core';
import { matHomeOutline, matLogoutOutline } from '@ng-icons/material-icons/outline';


const meta: Meta<AppHeaderComponent> = {
  title: 'Components/Shell/App Header',
  component: AppHeaderComponent,
  parameters: { 
    controls: {
      exclude: /_.*/g
    }
   },
  decorators: [
    moduleMetadata({
      imports: [AppHeaderComponent, AppHeaderActionComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, heroUsers, matLogoutOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<AppHeaderComponent>;

export const Basic: Story = {
  args: {
    iconName: 'matHomeOutline' as any,
    title: 'App Title' as any,
    userDisplayName: 'John Doe' as any,
    userId: 'john.doe@domain.com' as any
  },
  render: (args) => ({
    props: args,
    template: `
      <fui-app-header  [iconName]="iconName" [title]="title" [userDisplayName]="userDisplayName" [userId]="userId">
        <fui-app-header-action iconName="matLogoutOutline" label="Logout" />
      </fui-app-header>
    `
  })
};
