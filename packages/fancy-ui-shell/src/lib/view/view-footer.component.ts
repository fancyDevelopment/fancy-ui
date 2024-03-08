import { Component, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'fui-view-footer',
  standalone: true,
  template: `
    <ng-template #template>
      <ng-content/>
    </ng-template>
  `
})
export class ViewFooterComponent {
  _template = viewChild<TemplateRef<unknown>>('template');
}
