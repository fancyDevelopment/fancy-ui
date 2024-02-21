import { Component, contentChildren, effect } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavRailItemComponent } from './nav-rail-item.component';

@Component({
  selector: 'fui-nav-rail',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './nav-rail.component.html'
})
export class NavRailComponent {
  _navrailItems = contentChildren(NavRailItemComponent);
  _activeItem: NavRailItemComponent | null = null;

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
