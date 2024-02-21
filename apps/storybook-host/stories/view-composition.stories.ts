import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle } from 'fancy-ui-shell';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';

const meta: Meta<ShellComponent> = {
  title: 'View Compositions',
  component: ShellComponent,
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ShellBundle, NavBarBundle, NavRailBundle, AppBarBundle, ViewBundle],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<ShellComponent>;

export const Basic: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #leftTemplate>
        <div class="hidden md:block h-full">
          <fui-nav-rail>
            <fui-nav-rail-item iconName="matHomeOutline" label="Test1" routerLink="card-view"/>
            <fui-nav-rail-item iconName="matSettingsOutline" label="Test2" routerLink="fullscreen-view"/>
            <fui-nav-rail-item iconName="matArchiveOutline" label="Test3" />
          </fui-nav-rail>
        </div>
      </ng-template>
      <ng-template #mainContentTemplate>
        

      <fui-view>
        <fui-view-header>
          <fui-app-bar title="Card View">
            <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
            <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
            <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
          </fui-app-bar>
        </fui-view-header>
        <fui-view-main-content>
          <div class="grid gap-component">
            
          </div>
        </fui-view-main-content>
      </fui-view>

      </ng-template>
      <ng-template #bottomTemplate>
        <div class="md:hidden">
          <fui-nav-bar>
            <fui-nav-bar-item iconName="matHomeOutline" label="Test1" routerLink="card-view"/>
            <fui-nav-bar-item iconName="matSettingsOutline" label="Test2" routerLink="fullscreen-view"/>
            <fui-nav-bar-item iconName="matArchiveOutline" label="Test3" />
          </fui-nav-bar>
        </div>
      </ng-template>
    </fui-shell>
    `
  })
};

