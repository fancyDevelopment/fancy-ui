import { Component, contentChildren } from '@angular/core';
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
}
