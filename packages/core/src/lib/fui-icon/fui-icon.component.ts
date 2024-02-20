import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'fui-icon',
  standalone: true,
  imports: [NgIconComponent],
  template: `<ng-icon [name]="name()"></ng-icon>`
})
export class FuiIconComponent {
  name = input.required<string>();
}
