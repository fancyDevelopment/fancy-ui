import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fui-card-grow',
  standalone: true,
  template: ``
})
export class CardGrowComponent {
  @HostBinding('class')
  classes = 'grow';
}
