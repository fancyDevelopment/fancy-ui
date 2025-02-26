import { Component, EventEmitter, Output, TemplateRef, input, viewChild } from '@angular/core';
import { IconComponent } from 'fancy-ui-core';

@Component({
    selector: 'fui-app-header-action',
    imports: [IconComponent],
    template: `
    <ng-template #template>
    </ng-template>
    <ng-template #mobileTemplate>
      <a class="px-2 py-2 flex cursor-pointer text-gray font-light hover:bg-hover rounded" (click)="_onClick()" [attr.data-testid]="label()">
        <div class="h-6 w-6">
            <fui-icon [name]="iconName()"></fui-icon> 
        </div>
        <div class="self-center text-xs font-semibold px-2">{{label()}}</div>
      </a>
    </ng-template>
  `
})
export class AppHeaderActionComponent {
  /** The name of the icon to show for this action in the app bar. */
  iconName = input('default');

  /** The label of the action to show in the action dropdown in case of mobile screen layout. */
  label = input('');

  /** An event called if the action is tapped. */
  @Output() tap: EventEmitter<void> = new EventEmitter<void>();

  // The templates used by the app bar to render this action
  _template = viewChild<TemplateRef<unknown>>('template');
  _mobileTemplate = viewChild<TemplateRef<unknown>>('mobileTemplate');

  _onClick() {
    this.tap.next();
  }
}
