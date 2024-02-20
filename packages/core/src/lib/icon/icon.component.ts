import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'fui-icon',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  name = input.required<string>();
}
