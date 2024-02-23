import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle } from 'fancy-ui-shell';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';

const meta: Meta<ShellComponent> = {
  title: 'Compositions/Basic Layouts',
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

export const NoNavs: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
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
            Main Content here!
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};

export const NavRailOnly: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #leftTemplate>
          <fui-nav-rail>
            <fui-nav-rail-item iconName="matHomeOutline" [isActive]="true" label="Test1" />
            <fui-nav-rail-item iconName="matSettingsOutline" label="Test2" />
            <fui-nav-rail-item iconName="matArchiveOutline" label="Test3" />
          </fui-nav-rail>
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
          Main content here!
        </fui-view-main-content>
      </fui-view>

      </ng-template>
    </fui-shell>
    `
  })
};

export const NavBarOnly: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
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
          Main content here!
        </fui-view-main-content>
      </fui-view>

      </ng-template>
      <ng-template #bottomTemplate>
        <fui-nav-bar>
          <fui-nav-bar-item iconName="matHomeOutline" [isActive]="true" label="Test1" />
          <fui-nav-bar-item iconName="matSettingsOutline" label="Test2" />
          <fui-nav-bar-item iconName="matArchiveOutline" label="Test3" />
        </fui-nav-bar>
      </ng-template>
    </fui-shell>
    `
  })
};


export const ResponsiveNavs: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #leftTemplate>
        <div class="hidden md:block h-full">
          <fui-nav-rail>
            <fui-nav-rail-item iconName="matHomeOutline" [isActive]="true" label="Test1" />
            <fui-nav-rail-item iconName="matSettingsOutline" label="Test2" />
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
          Main content here!
        </fui-view-main-content>
      </fui-view>

      </ng-template>
      <ng-template #bottomTemplate>
        <div class="md:hidden">
          <fui-nav-bar>
            <fui-nav-bar-item iconName="matHomeOutline" [isActive]="true" label="Test1" />
            <fui-nav-bar-item iconName="matSettingsOutline" label="Test2" />
            <fui-nav-bar-item iconName="matArchiveOutline" label="Test3" />
          </fui-nav-bar>
        </div>
      </ng-template>
    </fui-shell>
    `
  })
};

