import { Component, computed, contentChild, contentChildren, input, output, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DatasetItemBase } from './dataset-item.base';
import { DatasetCardheaderComponent } from './dataset-cardheader.component';

import { CardComponent, CardContentComponent } from 'fancy-ui-content';
import { IconComponent } from 'fancy-ui-core';

@Component({
  selector: 'fui-dataset',
  standalone: true,
  imports: [NgTemplateOutlet,  CardComponent, CardContentComponent, IconComponent],
  templateUrl: './dataset.component.html'
})
export class DatasetComponent {
  dataSource = input<Array<unknown>>([]);

  itemTapMode = input<'None' | 'MoreIcon'>('None');
  itemTap = output<unknown>();

  enableSort = input(false);
  sort = output<{label: string, order: 'asc' | 'desc' }>();

  _currentSortItem = signal<{ label: string, order: 'asc' | 'desc' } | null>(null);

  _datasetItems = contentChildren(DatasetItemBase);
  _datasetCardHeader = contentChild(DatasetCardheaderComponent);

  _datasetTableItems = computed(() => this._datasetItems().filter(item => item.target() === 'Table' || item.target() === 'TableAndCard'));
  _datasetCardItems = computed(() => this._datasetItems().filter(item => item.target() === 'Card'|| item.target() === 'TableAndCard'));

  onItemTap: (value: unknown) => void;

  foo(item: DatasetItemBase) {
    if(!this.enableSort()) return; 
    let currentSortItem = this._currentSortItem();
    if(currentSortItem?.label === item.label()) {
      if(currentSortItem.order === 'asc') {
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

  private onItemTapInternal(data: unknown) {
    this.itemTap.emit(data);
  }
}
