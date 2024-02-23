import { Component } from '@angular/core';

@Component({
  selector: 'fui-card-actions',
  standalone: true,
  template:`
    <div class="border-t border-shade h-component"></div>
    <ng-content />
  `
})
export class CardActionsComponent {}
