import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent } from 'fancy-ui-core';
import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle } from 'fancy-ui-shell';
import { CardBundle } from 'fancy-ui-content';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';

const meta: Meta<ShellComponent> = {
  title: 'Compositions/Card Layouts',
  component: ShellComponent,
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ShellBundle, NavBarBundle, NavRailBundle, AppBarBundle, ViewBundle, CardBundle, ButtonComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<ShellComponent>;

export const CardGrid: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #mainContentTemplate>
        <fui-view>
          <fui-view-header>
            <fui-app-bar title="Card Grid">
              <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
              <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
              <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
            </fui-app-bar>
          </fui-view-header>
          <fui-view-main-content>
            <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-component">
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
            </div>
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};

export const CardInContent: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #mainContentTemplate>
        <fui-view>
          <fui-view-header>
            <fui-app-bar title="Card in Content">
              <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
              <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
              <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
            </fui-app-bar>
          </fui-view-header>
          <fui-view-main-content>
            <div class="grid gap-component">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <fui-card class="max-w-md">
                <fui-card-image src="https://placehold.co/300x150?text=Your+Image" title="Card Title" subtitle="Subtitle"/>
                <fui-card-content>Some Content</fui-card-content>
                <fui-card-actions><fui-button label="Button" /></fui-card-actions>
              </fui-card>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};





