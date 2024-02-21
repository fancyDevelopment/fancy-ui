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
  _activeItem: NavBarItemComponent | null = null;

  constructor() {
    effect(() => {
      const navrailItems = this._navrailItems();

      if(this._activeItem === null) {
        // Initialize first element as active item
        this._activeItem = navrailItems[0];
      } else {
        // Find new active item
        for(const item of navrailItems) {
          if(item.isActive() && item !== this._activeItem) {
            this._activeItem = item;
            break;
          }
        }
      }

      // Update state of all childs
      for(const item of navrailItems) {
        if(item.isActive() && item !== this._activeItem) item.isActive.set(false);
        if(!item.isActive() && item === this._activeItem) item.isActive.set(true);
      }
    }, { allowSignalWrites: true});
  }
}
