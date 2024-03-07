import { Component, contentChildren, model } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { TabsItemComponent } from '../tabs/tabs-item.component';
import { SwiperComponent } from '../swiper/swiper.component';
import { SwiperBladeComponent } from '../swiper/swiper-blade.component';
import { SwipeableTabsBladeComponent } from './swipeable-tabs-blade.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'fui-swipeable-tabs',
  standalone: true,
  imports: [
    TabsComponent,
    TabsItemComponent,
    SwiperComponent, 
    SwiperBladeComponent,
    NgTemplateOutlet
  ],
  templateUrl: './swipeable-tabs.component.html'
})
export class SwipeableTabsComponent {
  activeBlade = model(0);
  _blades = contentChildren(SwipeableTabsBladeComponent);
}
