import { Component, TemplateRef, input, viewChild, contentChild } from '@angular/core';
import { CardHeaderComponent } from 'fancy-ui-content';
import { DatasetHelpers } from './dataset.helpers';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'fui-dataset-cardheader',
  standalone: true,
  imports: [NgTemplateOutlet, CardHeaderComponent],
  template: `
    <ng-template #template let-data let-onItemTap="onItemTap" let-itemTapMode="itemTapMode">
      <fui-card-header [titleTemplateRef]="titleTemplateWrapper" [subtitleTemplateRef]="subtitleTemplateWrapper" [imageSrc]="getImageSrc(data)" [showMore]="itemTapMode === 'MoreIcon'" (moreTap)="onItemTap(data)">
        <ng-template #titleTemplateWrapper>
          <ng-container *ngTemplateOutlet="_titleTemplate() ?? null; context: { $implicit: data }" />
        </ng-template>
        <ng-template #subtitleTemplateWrapper>
          <ng-container *ngTemplateOutlet="_subtitleTemplate() ?? null; context: { $implicit: data }" />
        </ng-template>
      </fui-card-header>
    </ng-template>
  `
})
export class DatasetCardheaderComponent {
  imageSrcKeyPath = input<string | null>(null);

  _template = viewChild<TemplateRef<unknown>>('template');

  _titleTemplate = contentChild<TemplateRef<unknown>>('titleTemplate');
  _subtitleTemplate = contentChild<TemplateRef<unknown>>('subtitleTemplate');

  getImageSrc(data: unknown): string | null {
    const keyPath = this.imageSrcKeyPath();
    if(!keyPath) return null;
    return DatasetHelpers.getKeyPathValue(data, keyPath);
  }
}
