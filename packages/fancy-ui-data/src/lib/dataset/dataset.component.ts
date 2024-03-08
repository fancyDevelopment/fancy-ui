import { Component, EventEmitter, Output, computed, contentChild, contentChildren, effect, input } from '@angular/core';
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

  @Output()
  moreTap = new EventEmitter<unknown>();

  onMoreTap: (value: unknown) => void;

  _datasetItems = contentChildren(DatasetItemBase);
  _datasetCardHeader = contentChild(DatasetCardheaderComponent);

  _datasetTableItems = computed(() => this._datasetItems().filter(item => item.target() === 'Table' || item.target() === 'TableAndCard'));
  _datasetCardItems = computed(() => this._datasetItems().filter(item => item.target() === 'Card'|| item.target() === 'TableAndCard'));

  constructor() {
    this.onMoreTap = this.onMoreTapInternal.bind(this);
  }

  onMoreTapInternal(data: unknown) {
    this.moreTap.emit(data);
  }
}
