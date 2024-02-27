import { Component, contentChildren } from '@angular/core';
import { TabsItemComponent } from './tabs-item.component';

@Component({
  selector: 'fui-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html'
})
export class TabsComponent {
  _items = contentChildren(TabsItemComponent);
  activeTabIndex = 0;
  activateTab(index: number) {
    console.log('Tab click', index);
    this.activeTabIndex = index;
  }
}
