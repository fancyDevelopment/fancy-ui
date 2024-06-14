import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent, FloatingActionButtonComponent } from 'fancy-ui-core';
import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle, AppHeaderBundle } from 'fancy-ui-shell';
import { CardBundle } from 'fancy-ui-content';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';
import { RadioButtonComponent, SliderComponent, SwitchComponent, TextAreaComponent, TextBoxComponent } from 'fancy-ui-forms';

const meta: Meta<ShellComponent> = {
  title: 'Compositions/Card Layouts',
  component: ShellComponent,
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ShellBundle, NavBarBundle, NavRailBundle, AppBarBundle, ViewBundle, CardBundle, AppHeaderBundle, ButtonComponent, FloatingActionButtonComponent, TextBoxComponent, SliderComponent, RadioButtonComponent, SwitchComponent, TextAreaComponent],
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
            <fui-floating-action-button label="FAB Button" />
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};

export const CardGridWithAppHeader: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #headerTemplate>
        <fui-app-header  iconName="matHomeOutline" title="App Title" userDisplayName="John Doe" userId="john.doe@domain-very-very-long-domain.com">
          <fui-app-header-action iconName="matLogoutOutline" label="Logout" />
        </fui-app-header>
      </ng-template>
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

export const FormCards: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
    <fui-shell>
      <ng-template #mainContentTemplate>
        <fui-view>
          <fui-view-header>
            <fui-app-bar title="Form Cards">
              <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
              <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
              <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
            </fui-app-bar>
          </fui-view-header>
          <fui-view-main-content>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-component">
              <fui-card>
                <fui-card-header title="Form Title" subtitle="Form Subtitle" />
                <fui-card-content>
                  <div class="grid grid-cols-6 gap-component">
                    <fui-text-box class="col-span-3" label="Label1" />
                    <fui-text-box class="col-span-3" label="Label2" />
                    <fui-switch class="col-span-3" label="Switch" />
                    <fui-switch class="col-span-3" label="Switch" />
                    <fui-slider class="col-span-6" label="Slider" />
                    <fui-text-area class="col-span-6" label="Textarea" />
                  </div>
                </fui-card-content>
                <fui-card-grow />
                <fui-card-actions><fui-button label="Save" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-header title="Form Title" subtitle="Form Subtitle" />
                <fui-card-content>
                  <div class="grid grid-cols-6 gap-component">
                    <fui-text-box class="col-span-3" label="Label1" />
                    <fui-text-box class="col-span-3" label="Label2" />
                    <fui-text-box class="col-span-3" label="Label3" />
                    <fui-text-box class="col-span-3" label="Label4" />
                    <div>
                      <label class="my-element">Radios</label>
                      <fui-radio-button name="rbgroup1" label="Label1"  value="value1" />
                      <fui-radio-button name="rbgroup1" label="Label2"  value="value2" />
                      <fui-radio-button name="rbgroup1" label="Label3"  value="value3" />
                    </div>
                  </div>
                </fui-card-content>
                <fui-card-grow />
                <fui-card-actions><fui-button label="Save" /></fui-card-actions>
              </fui-card>
              <fui-card>
                <fui-card-header title="Form Title" subtitle="Form Subtitle" />
                <fui-card-content>
                  <div class="grid grid-cols-6 gap-component">
                    <fui-text-box class="col-span-6" label="Label1" />
                    <fui-text-box class="col-span-6" label="Label2" />
                    <fui-text-box class="col-span-3" label="Label3" />
                    <fui-text-box class="col-span-3" label="Label4" />
                  </div>
                </fui-card-content>
                <fui-card-grow />
                <fui-card-actions><fui-button label="Save" /></fui-card-actions>
              </fui-card>
            </div>
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};





