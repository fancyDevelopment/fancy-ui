import { componentWrapperDecorator, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardImageComponent } from './card-image.component';
import { CardContentComponent } from './card-content.component';
import { CardActionsComponent } from './card-actions.component';

import { ButtonComponent, provideFancyUi } from 'fancy-ui-core';

const meta: Meta<CardComponent> = {
  title: 'Components/Content/Card',
  component: CardComponent,
  subcomponents: { CardHeaderComponent, CardImageComponent, CardContentComponent, CardActionsComponent },
  decorators: [
    moduleMetadata({
      imports: [CardComponent, CardHeaderComponent, CardImageComponent, CardContentComponent, CardActionsComponent, ButtonComponent],
      providers: [
        provideFancyUi()
      ]
    }),
    componentWrapperDecorator((story) => `<div class="max-w-[400px]">${story}</div>`)
  ],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
  parameters: {
    title: 'Title',
    subtitle: 'Subtitle',
    onMoreTap: fn(action('onMoreTap'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-card [meaning]="meaning">
        <fui-card-header [title]="title" [subtitle]="subtitle" />
        <fui-card-content>Some Content</fui-card-content>
      </fui-card>
    `
  })
};

export const WithActions: Story = {
  parameters: {
    title: 'Title',
    subtitle: 'Subtitle',
    onSuccessTap: fn((actions: CardActionsComponent) => actions.showMessage('Success Message', 'success')),
    onErrorTap: fn((actions: CardActionsComponent) => actions.showMessage('Error Message', 'error'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-card>
        <fui-card-header [title]="title" [subtitle]="subtitle" (moreTap)="onMoreTap()"/>
        <fui-card-content>Some Content</fui-card-content>
        <fui-card-actions #actions>
          <div class="flex gap-element">
            <fui-button label="Success Action" (tap)="onSuccessTap(actions)" />
            <fui-button label="Error Action" (tap)="onErrorTap(actions)" />
          </div>
        </fui-card-actions>
      </fui-card>
    `
  })
};

export const HeaderWithImage: Story = {
  parameters: {
    title: 'Title',
    subtitle: 'Subtitle',
    onMoreTap: fn(action('onMoreTap'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-card>
        <fui-card-header [title]="title" [subtitle]="subtitle" imageSrc="https://placehold.co/300x200?text=YI" (moreTap)="onMoreTap()" />
        <fui-card-content>Some Content</fui-card-content>
      </fui-card>
    `
  })
};

export const HeadingImage: Story = {
  parameters: {
    title: 'Title',
    subtitle: 'Subtitle',
    onMoreTap: fn(action('onMoreTap'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-card>
        <fui-card-image src="https://placehold.co/300x150?text=Your+Image" [title]="title" [subtitle]="subtitle" (moreTap)="onMoreTap()"/>
        <fui-card-content>Some Content</fui-card-content>
        <fui-card-actions><fui-button label="Button" /></fui-card-actions>
      </fui-card>
    `
  })
};

export const ImageInBetween: Story = {
  parameters: {
    title: 'Title',
    subtitle: 'Subtitle',
    onMoreTap: fn(action('onMoreTap'))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-card>
        <fui-card-header [title]="title" [subtitle]="subtitle" (moreTap)="onMoreTap()" />
        <fui-card-image src="https://placehold.co/300x200?text=Your+Image" />
        <fui-card-content>Some Content</fui-card-content>
        <fui-card-actions><fui-button label="Button" /></fui-card-actions>
      </fui-card>
    `
  })
};
