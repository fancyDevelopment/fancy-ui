import { Component, computed, contentChild, contentChildren, input, output, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DatasetItemBase, DatasetResponsive } from './dataset-item.base';
import { DatasetCardheaderComponent } from './dataset-cardheader.component';

import { CardComponent, CardContentComponent } from 'fancy-ui-content';
import { IconComponent } from 'fancy-ui-core';

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
  sort = output<{ label: string, order: 'asc' | 'desc' }>();

  _currentSortItem = signal<{ label: string, order: 'asc' | 'desc' } | null>(null);

  _datasetItems = contentChildren(DatasetItemBase);
  _datasetCardHeader = contentChild(DatasetCardheaderComponent);

  _datasetTableItems = computed(() => this._datasetItems().filter(item => item.target() === 'Table' || item.target() === 'TableAndCard'));
  _datasetCardItems = computed(() => this._datasetItems().filter(item => item.target() === 'Card' || item.target() === 'TableAndCard'));

  onItemTap: (value: unknown) => void;

  foo(item: DatasetItemBase) {
    if (!this.enableSort()) return;
    let currentSortItem = this._currentSortItem();
    if (currentSortItem?.label === item.label()) {
      if (currentSortItem.order === 'asc') {
        currentSortItem.order = 'desc';
      } else {
        currentSortItem.order = 'asc';
      }
    } else {
      currentSortItem = { label: item.label(), order: 'asc' };
    }
    this._currentSortItem.set({ ...currentSortItem });
    this.sort.emit(currentSortItem);
  }

  constructor() {
    this.onItemTap = this.onItemTapInternal.bind(this);
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

  generateResponsiveCellClass(responsive: DatasetResponsive) {
    let classValue = '';

    switch (responsive) {
      case 'SmAndUp':
        classValue = 'hidden sm:table-cell';
        break;
      case 'MdAndUp':
        classValue = 'hidden md:table-cell';
        break;
      case 'LgAndUp':
        classValue = 'hidden lg:table-cell';
        break;
      case 'XlAndUp':
        classValue = 'hidden xl:table-cell';
        break;
      case 'SmOnly':
        classValue = 'hidden sm:table-cell md:hidden';
        break;
      case 'MdOnly':
        classValue = 'hidden md:table-cell xl:hidden';
        break;
      case 'LgOnly':
        classValue = 'hidden lg:table-cell xl:hidden';
        break;
      case 'XlOnly':
          classValue = 'hidden xl:table-cell 2xl:hidden';
          break;
    }

    return classValue;
  }

  private onItemTapInternal(data: unknown) {
    this.itemTap.emit(data);
  }
}
