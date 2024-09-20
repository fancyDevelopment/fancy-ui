import { Component, computed, contentChild, contentChildren, input, model, output, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DatasetItemBase, DatasetResponsive } from './dataset-item.base';
import { DatasetCardheaderComponent } from './dataset-cardheader.component';

import { CardComponent, CardContentComponent } from 'fancy-ui-content';
import { IconComponent } from 'fancy-ui-core';

export type SortItem = { sortKey: string | null, sortOrder: 'asc' | 'desc' };

const defaultSortItem: SortItem = { sortKey: null, sortOrder: 'asc' };

@Component({
  selector: 'fui-dataset',
  standalone: true,
  imports: [NgTemplateOutlet, CardComponent, CardContentComponent, IconComponent],
  templateUrl: './dataset.component.html'
})
export class DatasetComponent {
  tableVisibleAt = input<DatasetResponsive>('MdAndUp');

  dataSource = input<Array<unknown>>([]);

  itemTapMode = input<'None' | 'MoreIcon'>('None');
  itemTap = output<unknown>();

  enableSort = input(false);
  sortItem = model(defaultSortItem);

  _datasetItems = contentChildren(DatasetItemBase);
  _datasetCardHeader = contentChild(DatasetCardheaderComponent);

  _datasetTableItems = computed(() => this._datasetItems().filter(item => item.target() === 'Table' || item.target() === 'TableAndCard'));
  _datasetCardItems = computed(() => this._datasetItems().filter(item => item.target() === 'Card' || item.target() === 'TableAndCard'));

  onItemTap: (value: unknown) => void;

  constructor() {
    this.onItemTap = this.onItemTapInternal.bind(this);
  }

  onSort(item: DatasetItemBase) {
    if (!this.enableSort() || !item.sortKey()) return;
    let sortItem = this.sortItem();
    if (sortItem?.sortKey === item.sortKey()) {
      if (sortItem.sortOrder === 'asc') {
        sortItem.sortOrder = 'desc';
      } else {
        sortItem.sortOrder = 'asc';
      }
    } else {
      sortItem = { sortKey: item.sortKey(), sortOrder: 'asc' };
    }
    this.sortItem.set({ ...sortItem });
  }

  generateResponsiveCardsClass() {
    let classValue = '';

    switch (this.tableVisibleAt()) {
      case 'Always':
        classValue = 'hidden';
        break;
      case 'SmAndUp':
        classValue = 'sm:hidden';
        break;
      case 'MdAndUp':
        classValue = 'md:hidden';
        break;
      case 'LgAndUp':
        classValue = 'lg:hidden';
        break;
      case 'XlAndUp':
        classValue = 'xl:hidden';
        break;
      case 'SmOnly':
        classValue = 'sm:hidden md:block';
        break;
      case 'MdOnly':
        classValue = 'md:hidden xl:block';
        break;
      case 'LgOnly':
        classValue = 'lg:hidden xl:block';
        break;
      case 'XlOnly':
        classValue = 'xl:hidden 2xl:block';
        break;
    }

    return classValue;
  }

  generateResponsiveTableClass() {
    let classValue = '';

    switch (this.tableVisibleAt()) {
      case 'Always':
        classValue = '';
        break;
      case 'SmAndUp':
        classValue = 'hidden sm:block';
        break;
      case 'MdAndUp':
        classValue = 'hidden md:block';
        break;
      case 'LgAndUp':
        classValue = 'hidden lg:block';
        break;
      case 'XlAndUp':
        classValue = 'hidden xl:block';
        break;
      case 'SmOnly':
        classValue = 'hidden sm:block md:hidden';
        break;
      case 'MdOnly':
        classValue = 'hidden md:block xl:hidden';
        break;
      case 'LgOnly':
        classValue = 'hidden lg:block xl:hidden';
        break;
      case 'XlOnly':
        classValue = 'hidden xl:block 2x:hidden';
        break;
    }

    return classValue;
  }

  generateResponsiveCellClass(item: DatasetItemBase) {

    let tableWidth = '';

    switch (item.itemTableWidth()) {
      case 'Sm':
        tableWidth = 'max-w-1';
        break;
      case 'Md':
        tableWidth = 'max-w-2';
        break;
      case 'Lg':
        tableWidth = 'max-w-4';
        break;
      case 'Xl':
        tableWidth = 'max-w-8';
        break;
    }

    let responsive = '';

    switch (item.tableVisibleAt()) {
      case 'SmAndUp':
        responsive = 'hidden sm:table-cell';
        break;
      case 'MdAndUp':
        responsive = 'hidden md:table-cell';
        break;
      case 'LgAndUp':
        responsive = 'hidden lg:table-cell';
        break;
      case 'XlAndUp':
        responsive = 'hidden xl:table-cell';
        break;
      case 'SmOnly':
        responsive = 'hidden sm:table-cell md:hidden';
        break;
      case 'MdOnly':
        responsive = 'hidden md:table-cell xl:hidden';
        break;
      case 'LgOnly':
        responsive = 'hidden lg:table-cell xl:hidden';
        break;
      case 'XlOnly':
        responsive = 'hidden xl:table-cell 2xl:hidden';
        break;
    }

    return tableWidth + ' ' + responsive;
  }

  private onItemTapInternal(data: unknown) {
    this.itemTap.emit(data);
  }
}
