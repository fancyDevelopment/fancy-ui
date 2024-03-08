import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, input, contentChild, viewChild } from '@angular/core';
import { DatasetItemBase } from './dataset-item.base';
import { DatasetHelpers } from './dataset.helpers';


@Component({
  selector: 'fui-dataset-item-image',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <ng-template #cardTemplate let-rowData>
      <span [ngClass]="{'col-span-3': cardLineWidth() === 'Quarter',
                        'col-span-6': cardLineWidth() === 'Half',
                        'col-span-12': cardLineWidth() === 'Full'}">
        <label class="text-label font-label">{{label()}}</label>
        <div class="flex">
          <img class="rounded" [src]="getImageSrc(rowData)">
          <span class="self-center ml-component">
            <ng-container *ngTemplateOutlet="_valueTemplate() ?? null; context: { $implicit: rowData }" />
          </span>
        </div>
      </span>
    </ng-template>
    <ng-template #tableTemplate let-rowData>
      <div class="flex">
        <img [src]="getImageSrc(rowData)">
        <span class="self-center ml-component">
          <ng-container *ngTemplateOutlet="_valueTemplate() ?? null; context: { $implicit: rowData }" />
        </span>
      </div>
    </ng-template>
  `,
  providers: [
    { provide: DatasetItemBase, useExisting: DatasetItemImageComponent }
  ],
})
export class DatasetItemImageComponent extends DatasetItemBase {

  imageSrcKeyPath = input('');

  _valueTemplate = contentChild<TemplateRef<unknown>>(TemplateRef);

  _cardTemplate = viewChild<TemplateRef<unknown>>('cardTemplate');
  _tableTemplate = viewChild<TemplateRef<unknown>>('tableTemplate');

  get cardTemplate(): TemplateRef<unknown> | undefined{
    return this._cardTemplate();
  }

  get tableTemplate(): TemplateRef<unknown> | undefined {
    return this._tableTemplate();
  }

  getImageSrc(data: unknown): string | null {
    if(!this.imageSrcKeyPath) return null;
    return DatasetHelpers.getKeyPathValue(data, this.imageSrcKeyPath());
  }

}
