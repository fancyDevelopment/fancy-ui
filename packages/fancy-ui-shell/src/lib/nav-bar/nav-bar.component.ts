import { Component, contentChildren } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavBarItemComponent } from './nav-bar-item.component';

@Component({
    selector: 'fui-nav-bar',
    imports: [NgTemplateOutlet],
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  _navBarItems = contentChildren(NavBarItemComponent);
}
