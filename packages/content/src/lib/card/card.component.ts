import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fui-card',
  standalone: true,
  templateUrl: './card.component.html'
})
export class CardComponent {
  @HostBinding('class')
  classes = 'flex flex-col';
}
