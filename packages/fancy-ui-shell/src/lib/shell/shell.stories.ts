import { provideFancyUi } from 'fancy-ui-core';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ShellComponent } from './shell.component';

const meta: Meta<ShellComponent> = {
  title: 'Components/Shell/Shell',
  component: ShellComponent,
  decorators: [
    moduleMetadata({
      imports: [ShellComponent],
      providers: [
        provideFancyUi()
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
          <div class="bg-secondary text-on-secondary h-full flex items-center p-5">
            Left Template
          </div>
        </ng-template>
        <ng-template #mainContentTemplate>
          <div class="bg-primary text-on-primary h-full flex items-center justify-around">
            Main Content Template
          </div>
        </ng-template>
        <ng-template #bottomTemplate>
          <div class="bg-accent text-on-accent flex justify-around p-5">
            Bottom Template
          </div>
        </ng-template>
      </fui-shell>
    `
  })
};

export const Responsive: Story = {
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
      <fui-shell>
        <ng-template #leftTemplate>
          <div class="hidden md:flex bg-secondary text-on-secondary h-full items-center p-5">
            Left Template
          </div>
        </ng-template>
        <ng-template #mainContentTemplate>
          <div class="bg-primary text-on-primary h-full flex items-center justify-around">
            Main Content Template
          </div>
        </ng-template>
        <ng-template #bottomTemplate>
          <div class="md:hidden bg-accent text-on-accent flex justify-around p-5">
            Bottom Template
          </div>
        </ng-template>
      </fui-shell>
    `
  })
};

