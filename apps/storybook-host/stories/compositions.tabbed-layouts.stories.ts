import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent } from 'fancy-ui-core';
import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle, AppHeaderBundle } from 'fancy-ui-shell';
import { CardBundle, SwiperBundle, TabsBundle } from 'fancy-ui-content';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';
import { RadioButtonComponent, SliderComponent, SwitchComponent, TextAreaComponent, TextBoxComponent } from 'fancy-ui-forms';
import { signal } from '@angular/core';

const meta: Meta<ShellComponent> = {
  title: 'Compositions/Tabbed Layouts',
  component: ShellComponent,
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ShellBundle, NavBarBundle, NavRailBundle, AppBarBundle, ViewBundle, CardBundle, AppHeaderBundle, TabsBundle, SwiperBundle, ButtonComponent, TextBoxComponent, SliderComponent, RadioButtonComponent, SwitchComponent, TextAreaComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<ShellComponent>;

export const TabbedView: Story = {
  args: {
  },
  render: (args) => ({
    props: { ...args, activeTabIndex: signal(0) },
    template: `
    <fui-shell>
      <ng-template #mainContentTemplate>
        <fui-view>

          <fui-view-header>
            <fui-app-bar title="Tabbed View">
              <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
              <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
              <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
            </fui-app-bar>
            <fui-tabs [(activeTabIndex)]="activeTabIndex">
              <fui-tabs-item label="First" />
              <fui-tabs-item label="Second" />
              <fui-tabs-item label="Third" />
            </fui-tabs>
          </fui-view-header>
          
          <fui-view-main-content>
            <fui-swiper [(activatedBladeIndex)]="activeTabIndex">
              <fui-swiper-blade>
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
              </fui-swiper-blade>
              <fui-swiper-blade>
                <p class="text-title">Second Blade</p>
                <p>A smaller blade</p>
              </fui-swiper-blade>
              <fui-swiper-blade>
                <p class="text-title">Third Blade</p>
              </fui-swiper-blade>
            </fui-swiper>

          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};
