import { NgClass } from '@angular/common';
import { Component, TemplateRef, input, viewChild } from '@angular/core';

import { DatasetItemBase } from './dataset-item.base'

@Component({
  selector: 'fui-dataset-item-value',
  standalone: true,
  imports: [NgClass],
  template: `
    <ng-template #cardTemplate let-rowData>
      <span [ngClass]="{'col-span-3': itemCardWidth() === 'Sm',
                        'col-span-4': itemCardWidth() === 'Md',
                        'col-span-6': itemCardWidth() === 'Lg',
                        'col-span-12': itemCardWidth() === 'Xl'}">
        <label class="text-label font-label">{{label()}}</label>
        <div>{{ rowData[key()] }}</div>
      </span>
    </ng-template>
    <ng-template #tableTemplate let-rowData>{{ rowData[key()] }}</ng-template>
  `,
  providers: [
    { provide: DatasetItemBase, useExisting: DatasetItemValueComponent }
  ],
})
export class DatasetItemValueComponent extends DatasetItemBase {

  key = input('');

  _cardTemplate = viewChild<TemplateRef<unknown>>('cardTemplate');
  _tableTemplate = viewChild<TemplateRef<unknown>>('tableTemplate');

  get cardTemplate(): TemplateRef<unknown> | undefined{
    return this._cardTemplate();
  }

  get tableTemplate(): TemplateRef<unknown> | undefined {
    return this._tableTemplate();
  }

}
