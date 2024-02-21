import { Component, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'fui-view-main-content',
  standalone: true,
  template: `
    <ng-template #template>
      <ng-content/>
    </ng-template>
  `
})
export class ViewMainContentComponent {
  _template = viewChild<TemplateRef<unknown>>('template');
}
