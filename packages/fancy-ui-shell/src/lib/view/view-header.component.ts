import { Component, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'fui-view-header',
  standalone: true,
  template: `
    <ng-template #template>
      <ng-content/>
    </ng-template>
  `
})
export class ViewHeaderComponent {
  _template = viewChild<TemplateRef<unknown>>('template');
}
