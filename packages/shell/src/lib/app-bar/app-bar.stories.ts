import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AppBarActionComponent } from './app-bar-action.component';
import { AppBarComponent } from './app-bar.component';

import { jest, expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { provideFancyUi } from 'fancy-ui-core';
import { matArchiveOutline, matCloudDoneOutline, matHomeOutline, matSettingsOutline } from '@ng-icons/material-icons/outline';


const meta: Meta<AppBarComponent> = {
  title: 'Components/Shell/App Bar',
  component: AppBarComponent,
  subcomponents: { AppBarActionComponent },
  parameters: { 
    controls: {
      exclude: /_.*/g
    }
   },
  decorators: [
    moduleMetadata({
      imports: [AppBarComponent, AppBarActionComponent],
      providers: [
        provideFancyUi(),
        provideIcons({matHomeOutline, heroUsers, matSettingsOutline, matArchiveOutline, matCloudDoneOutline})
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<AppBarComponent>;

export const Basic: Story = {
  args: {
    title: 'App or View Title' as any,
    showBackButton: true as any
  },
  render: (args) => ({
    props: args,
    template: `
      <fui-app-bar [title]="title" [showBackButton]="showBackButton" />
    `
  })
};

export const UpToThreeActions: Story = {
  args: Basic.args,
  parameters: {
    action1Label: 'Action 1',
    action2Label: 'Action 2',
    action3Label: 'Action 3',
    onTap: jest.fn((value: string) => action('Action Tap')(value))
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-app-bar [title]="title" [showBackButton]="showBackButton">
        <fui-app-bar-action iconName="matHomeOutline" [label]="action1Label" (tap)="onTap(action1Label)" />
        <fui-app-bar-action iconName="heroUsers" [label]="action2Label" (tap)="onTap(action2Label)" />
        <fui-app-bar-action iconName="matSettingsOutline" [label]="action3Label" (tap)="onTap(action3Label)" />
      </fui-app-bar>
    `
  }),
  play: async ({canvasElement, parameters}) => {
    const canvas = within(canvasElement);

    const action1 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action1Label']});
    userEvent.click(action1);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action1Label']);

    // const action2 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action2Label']});
    // userEvent.click(action2);
    // expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action2Label']);

    // const action3 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action3Label']});
    // userEvent.click(action3);
    // expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action3Label']);
  }
};

export const MoreThanThreeActions: Story = {
  args: UpToThreeActions.args,
  parameters: {
    ...UpToThreeActions.parameters,
    action4Label: 'Action 4',
    action5Label: 'Action 5',
  },
  render: (args, context) => ({
    props: { ...args, ...context.parameters },
    template: `
      <fui-app-bar [title]="title" [showBackButton]="showBackButton">
        <fui-app-bar-action iconName="matHomeOutline" [label]="action1Label" (tap)="onTap(action1Label)" />
        <fui-app-bar-action iconName="heroUsers" [label]="action2Label" (tap)="onTap(action2Label)" />
        <fui-app-bar-action iconName="matSettingsOutline" [label]="action3Label" (tap)="onTap(action3Label)" />
        <fui-app-bar-action iconName="matArchiveOutline" [label]="action4Label" (tap)="onTap(action4Label)" />
        <fui-app-bar-action iconName="matCloudDoneOutline" [label]="action5Label" (tap)="onTap(action5Label)" />
      </fui-app-bar>
    `
  }),
  play: async ({canvasElement, parameters }) => {
    const canvas = within(canvasElement);

    const action1 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action1Label']});
    userEvent.click(action1);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action1Label']);

    const action2 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action2Label']});
    userEvent.click(action2);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action2Label']);

    const action3 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action3Label']});
    userEvent.click(action3);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action3Label']);

    const action4 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action4Label']});
    userEvent.click(action4);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action4Label']);

    const action5 = canvas.getByRole('nonMobileAppBarAction', { name: parameters['action5Label']});
    userEvent.click(action5);
    expect(parameters['onTap']).toHaveBeenCalledWith(parameters['action5Label']);
  }
};
