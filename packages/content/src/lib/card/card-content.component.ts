import { Component } from '@angular/core';

@Component({
  selector: 'fui-card-content',
  standalone: true,
  template: `
    <div>
      <ng-content />
    </div>
  `
})
export class CardContentComponent {}
