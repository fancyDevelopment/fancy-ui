import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuiIconComponent } from 'fancy-ui-core';

@Component({
  selector: 'fui-app-bar-action',
  standalone: true,
  imports: [CommonModule, FuiIconComponent],
  template: `
    <ng-template #template>
      <a class="w-12 h-12 flex justify-center relative" (click)="_onClick()" role="nonMobileAppBarAction" [attr.aria-label]="label">
        <div class="absolute z-0 w-12 h-12 rounded-xl transition-all duration-500 hover:bg-hover">
        </div>
        <fui-icon class="h-6 w-6 self-center" [name]="iconName"></fui-icon>
      </a>
    </ng-template>
    <ng-template #mobileTemplate>
      <a class="px-2 py-2 flex cursor-pointer text-gray font-light hover:bg-hover rounded" [attr.data-testid]="label">
        <div class="self-center text-xs font-semibold px-2">{{label}}</div>
        <div class="h-6 w-6">
            <fui-icon [name]="iconName"></fui-icon> 
        </div>
      </a>
    </ng-template>
  `
})
export class AppBarActionComponent {
  /** The name of the icon to show for this action in the app bar. */
  @Input() iconName = 'default';

  /** The label of the action to show in the action dropdown in case of mobile screen layout. */
  @Input() label = '';

  /** An event called if the action is tapped. */
  @Output() tap: EventEmitter<void> = new EventEmitter<void>();

  // The templates used by the app bar to render this action
  @ViewChild('template', {static: true})  _template!: TemplateRef<unknown>;
  @ViewChild('mobileTemplate', {static: true}) _mobileTemplate!: TemplateRef<unknown>;

  _onClick() {
    this.tap.next();
  }
}
