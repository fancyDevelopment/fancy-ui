import { Component, contentChildren, effect} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavBarItemComponent } from './nav-bar-item.component';

@Component({
  selector: 'fui-nav-bar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  _navrailItems = contentChildren(NavBarItemComponent);

  constructor() {
    effect(() => {
      const navrailItems = this._navrailItems();

      if(navrailItems) {
        for(const item of navrailItems) {
          item.tap.subscribe(() => this.onItemTapped(item));
        }
      }
    });
  }

  onItemTapped(tappedItem: NavBarItemComponent) {
    const navrailItems = this._navrailItems();
    if(navrailItems) {
      for(const item of navrailItems) {
        if(item === tappedItem) {
          item.isActive.set(true);
        } else {
          item.isActive.set(false);
        }
      }
    }
  }
}
