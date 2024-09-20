import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, viewChild, contentChild } from '@angular/core';
import { DatasetItemBase } from './dataset-item.base';


@Component({
  selector: 'fui-dataset-item-template',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass],
  template: `
    <ng-template #cardTemplate let-rowData>
    <span [ngClass]="{'col-span-3': itemCardWidth() === 'Sm',
                        'col-span-4': itemCardWidth() === 'Md',
                        'col-span-6': itemCardWidth() === 'Lg',
                        'col-span-12': itemCardWidth() === 'Xl'}">
        <label class="text-label font-label">{{label()}}</label>
        <div><ng-container *ngTemplateOutlet="_valueTemplate() ?? null; context: { $implicit: rowData }" /></div>
      </span>
    </ng-template>
    <ng-template #tableTemplate let-rowData>
      <ng-container *ngTemplateOutlet="_valueTemplate() ?? null; context: { $implicit: rowData }" />
    </ng-template>
  `,
  providers: [
    { provide: DatasetItemBase, useExisting: DatasetItemTemplateComponent }
  ],
})
export class DatasetItemTemplateComponent extends DatasetItemBase {

  _valueTemplate = contentChild<TemplateRef<unknown>>(TemplateRef)

  _cardTemplate = viewChild<TemplateRef<unknown>>('cardTemplate');
  _tableTemplate = viewChild<TemplateRef<unknown>>('tableTemplate');

  get cardTemplate(): TemplateRef<unknown> | undefined{
    return this._cardTemplate();
  }

  get tableTemplate(): TemplateRef<unknown> | undefined {
    return this._tableTemplate();
  }
}
