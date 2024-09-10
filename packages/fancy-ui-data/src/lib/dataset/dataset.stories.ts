import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { fn } from '@storybook/test';

import { DatasetComponent } from './dataset.component';
import { DatasetCardheaderComponent } from './dataset-cardheader.component';
import { DatasetItemValueComponent } from './dataset-item-value.component';
import { DatasetItemTemplateComponent } from './dataset-item-template.component';
import { DatasetItemImageComponent } from './dataset-item-image.component';
import { provideFancyUi } from 'fancy-ui-core';

const meta: Meta<DatasetComponent> = {
  title: 'Components/Data/Dataset',
  component: DatasetComponent,
  decorators: [
    moduleMetadata({
      imports: [DatasetComponent, DatasetCardheaderComponent, DatasetItemValueComponent, DatasetItemTemplateComponent, DatasetItemImageComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<DatasetComponent>;

const dataSource = [
  {id: 1, firstName: 'John', lastName: 'Rambo', score: 0.95, imgHref: 'https://place-hold.it/40x40?text=JR' },
  {id: 2, firstName: 'Rockey', lastName: 'Balboa', score: 0.94, imgHref: 'https://place-hold.it/40x40?text=RB' },
  {id: 3, firstName: 'Marty', lastName: 'McFly', score: 0.98, imgHref: 'https://place-hold.it/40x40?text=MM' },
  {id: 4, firstName: 'Emmet', lastName: 'Brown', score: 0.91, imgHref: 'https://place-hold.it/40x40?text=EB' }
];

export const Basic: Story = {
  args: {
    dataSource: dataSource as any
  },
  render: (args) => ({
    props: { ...args },
    template:`
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
    `
  })
};

export const WithMoreButton: Story = {
  args: {
    dataSource: dataSource as any
  },
  parameters: {
    onMoreTapped: fn(action('tapped'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-dataset [dataSource]="dataSource" (moreTap)="onMoreTapped($event)">
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
    `
  })
};

export const WithColumnSorting: Story = {
  args: {
    dataSource: dataSource as any
  },
  parameters: {
    onItemTapped: fn(action('tapped')),
    onSort: fn(action('sort'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template:`
      <fui-dataset [dataSource]="dataSource" [enableSort]="true" (sort)="onSort($event)" itemTapMode="MoreIcon" (itemTap)="onItemTapped($event)">
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
    `
  })
};
