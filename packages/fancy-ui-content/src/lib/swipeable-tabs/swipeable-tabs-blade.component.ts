import { Component, TemplateRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'fui-swipeable-tabs-blade',
  standalone: true,
  template: `
    <ng-template #template>
      <ng-content/>
    </ng-template>
  `
})
export class SwipeableTabsBladeComponent {
  label = input('');
  _template = viewChild<TemplateRef<unknown>>('template');
}
