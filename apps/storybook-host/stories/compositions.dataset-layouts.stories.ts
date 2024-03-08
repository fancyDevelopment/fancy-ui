import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent } from 'fancy-ui-core';
import { ShellComponent, ShellBundle, NavBarBundle, NavRailBundle, ViewBundle, AppBarBundle } from 'fancy-ui-shell';
import { CardBundle } from 'fancy-ui-content';
import { provideFancyUi } from 'fancy-ui-core';
import { provideIcons } from '@ng-icons/core';
import { matHomeOutline, matSettingsOutline, matArchiveOutline } from '@ng-icons/material-icons/outline';
import { RadioButtonComponent, SliderComponent, SwitchComponent, TextBoxComponent } from 'fancy-ui-forms';
import { DatasetBundle } from 'fancy-ui-data';

const meta: Meta<ShellComponent> = {
  title: 'Compositions/Dataset Layouts',
  component: ShellComponent,
  parameters: { layout: 'fullscreen'},
  decorators: [
    moduleMetadata({
      imports: [ShellBundle, NavBarBundle, NavRailBundle, AppBarBundle, ViewBundle, DatasetBundle, CardBundle, ButtonComponent, TextBoxComponent, SliderComponent, RadioButtonComponent, SwitchComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, matSettingsOutline, matArchiveOutline})
      ]
    })
  ],
};

const dataSource = [
  {id: 1, firstName: 'John', lastName: 'Rambo', score: 0.95, imgHref: 'https://place-hold.it/40x40?text=JR' },
  {id: 2, firstName: 'Rockey', lastName: 'Balboa', score: 0.94, imgHref: 'https://place-hold.it/40x40?text=RB' },
  {id: 3, firstName: 'Marty', lastName: 'McFly', score: 0.98, imgHref: 'https://place-hold.it/40x40?text=MM' },
  {id: 4, firstName: 'Emmet', lastName: 'Brown', score: 0.91, imgHref: 'https://place-hold.it/40x40?text=EB' },
  {id: 5, firstName: 'John', lastName: 'Rambo', score: 0.95, imgHref: 'https://place-hold.it/40x40?text=JR' },
  {id: 6, firstName: 'Rockey', lastName: 'Balboa', score: 0.94, imgHref: 'https://place-hold.it/40x40?text=RB' },
  {id: 7, firstName: 'Marty', lastName: 'McFly', score: 0.98, imgHref: 'https://place-hold.it/40x40?text=MM' },
  {id: 8, firstName: 'Emmet', lastName: 'Brown', score: 0.91, imgHref: 'https://place-hold.it/40x40?text=EB' },
  {id: 9, firstName: 'John', lastName: 'Rambo', score: 0.95, imgHref: 'https://place-hold.it/40x40?text=JR' },
  {id: 10, firstName: 'Rockey', lastName: 'Balboa', score: 0.94, imgHref: 'https://place-hold.it/40x40?text=RB' },
  {id: 11, firstName: 'Marty', lastName: 'McFly', score: 0.98, imgHref: 'https://place-hold.it/40x40?text=MM' },
  {id: 12, firstName: 'Emmet', lastName: 'Brown', score: 0.91, imgHref: 'https://place-hold.it/40x40?text=EB' }
]

export default meta;
type Story = StoryObj<ShellComponent>;

export const DatasetOnly: Story = {
  parameters: {
    dataSource
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
    <fui-shell>
      <ng-template #mainContentTemplate>
        <fui-view>
          <fui-view-header>
            <fui-app-bar title="Dataset">
              <fui-app-bar-action iconName="matHomeOutline" label="Action 1" />
              <fui-app-bar-action iconName="matSettingsOutline" label="Action 2" />
              <fui-app-bar-action iconName="matArchiveOutline" label="Action 3" />
            </fui-app-bar>
          </fui-view-header>
          <fui-view-main-content>
            <fui-dataset [dataSource]="dataSource">
              <fui-dataset-cardheader imageSrcKeyPath="imgHref">
                <ng-template #titleTemplate let-data>{{data.firstName}} - {{data.lastName}}</ng-template>
                <ng-template #subtitleTemplate let-data>{{data.id}} - {{data.score | percent}}</ng-template>
              </fui-dataset-cardheader>
              <fui-dataset-item-value label="ID" key="id" />
              <fui-dataset-item-image label="Name" imageSrcKeyPath="imgHref" target="Table">
                <ng-template let-data>{{data.firstName}} - {{data.lastName}}</ng-template>
              </fui-dataset-item-image>
              <fui-dataset-item-template label="Score">
                <ng-template let-data>{{ data.score | percent:'2.2' }}</ng-template>
              </fui-dataset-item-template>
            </fui-dataset>
          </fui-view-main-content>
        </fui-view>
      </ng-template>
    </fui-shell>
    `
  })
};
