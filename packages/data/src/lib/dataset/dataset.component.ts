import { Component, computed, contentChild, contentChildren, effect, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DatasetItemBase } from './dataset-item.base';
import { DatasetCardheaderComponent } from './dataset-cardheader.component';

import { CardComponent, CardContentComponent } from 'fancy-ui-content';

@Component({
  selector: 'fui-dataset',
  standalone: true,
  imports: [NgTemplateOutlet,  CardComponent, CardContentComponent],
  templateUrl: './dataset.component.html'
})
export class DatasetComponent {
  dataSource = input<Array<unknown>>([]);

  _datasetItems = contentChildren(DatasetItemBase);
  _datasetCardHeader = contentChild(DatasetCardheaderComponent);

  _datasetTableItems = computed(() => this._datasetItems().filter(item => item.target() === 'Table' || item.target() === 'TableAndCard'));
  _datasetCardItems = computed(() => this._datasetItems().filter(item => item.target() === 'Card'|| item.target() === 'TableAndCard'));

  constructor() {
    effect(() => console.log('Datasource: ', this.dataSource()));
  }
}
