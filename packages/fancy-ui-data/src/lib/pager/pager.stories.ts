import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { PagerComponent } from './pager.component';
import { provideFancyUi } from 'fancy-ui-core';

const meta: Meta<PagerComponent> = {
  title: 'Components/Data/Pager',
  component: PagerComponent,
  decorators: [
    moduleMetadata({
      imports: [PagerComponent],
      providers: [
        provideFancyUi()
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<PagerComponent>;

export const Basic: Story = {
  args: {
    currentPage: 1 as any,
    pageCount: 2 as any,
    prevPageRouterLink: null as any,
    nextPageRouterLink: ['../', 'https://foo.bar/next'] as any
  },
  render: (args) => ({
    props: { ...args },
    template:`
      <fui-pager [currentPage]="currentPage" [pageCount]="pageCount" [prevPageRouterLink]="prevPageRouterLink" [nextPageRouterLink]="nextPageRouterLink" />
    `
  })
};
