import { NavRailItemComponent } from './nav-rail/nav-rail-item.component';
import { EnvironmentInjector, Injectable, effect, inject, runInInjectionContext, untracked } from '@angular/core';
import { NavBarItemComponent } from './nav-bar/nav-bar-item.component';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private navBarItems = new Array<NavBarItemComponent>();
  private navRailItems = new Array<NavRailItemComponent>();

  private environmentInjector = inject(EnvironmentInjector);

  registerNavBarItem(navBarItem: NavBarItemComponent) {
    this.navBarItems.push(navBarItem);
    runInInjectionContext(this.environmentInjector, () => {
      effect(() => {
        if(navBarItem.isActive()) {
          untracked(() => {
            this.navBarItems.forEach(item => {
              if(item !== navBarItem) {
                item.isActive.set(false);
              }
            });
            this.navRailItems.forEach(item => {
              if(item.label() === navBarItem.label()) {
                item.isActive.set(true);
              } else {
                item.isActive.set(false);
              }
            });
          });
        }
      }, { allowSignalWrites: true});
    });
  }

  registerNavRailItem(navRailItem: NavRailItemComponent) {
    this.navRailItems.push(navRailItem);
    runInInjectionContext(this.environmentInjector, () => {
      effect(() => {
        if(navRailItem.isActive()) {
          untracked(() => {
            this.navRailItems.forEach(item => {
              if(item !== navRailItem) {
                item.isActive.set(false);
              }
            });
            this.navBarItems.forEach(item => {
              if(item.label() === navRailItem.label()) {
                item.isActive.set(true);
              } else {
                item.isActive.set(false);
              }
            });
          });
        }
      }, { allowSignalWrites: true});
    });
  }

  unregisterNavBarItem(navBarItem: NavBarItemComponent) {
    this.navBarItems = this.navBarItems.filter(item => item !== navBarItem);
  }

  unregisterNavRailItem(navRailItem: NavRailItemComponent) {
    this.navRailItems = this.navRailItems.filter(item => item !== navRailItem);
  }

}
