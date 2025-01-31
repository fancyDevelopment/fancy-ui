import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
    selector: 'fui-icon',
    imports: [NgIconComponent],
    template: `<ng-icon [name]="name()"></ng-icon>`
})
export class IconComponent {
  name = input.required<string>();
}
