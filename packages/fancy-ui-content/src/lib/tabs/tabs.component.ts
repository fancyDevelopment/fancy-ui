import { Component, contentChildren, model } from '@angular/core';
import { TabsItemComponent } from './tabs-item.component';

@Component({
    selector: 'fui-tabs',
    imports: [],
    templateUrl: './tabs.component.html'
})
export class TabsComponent {
  _items = contentChildren(TabsItemComponent);
  activeTabIndex = model(0);

  activateTab(index: number) {
    this.activeTabIndex.set(index);
  }
}
