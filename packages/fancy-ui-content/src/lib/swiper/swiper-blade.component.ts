import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'fui-swiper-blade',
  standalone: true,
  template: `
  <ng-content/>
  `
})
export class SwiperBladeComponent {

  @HostBinding('class')
  class = 'w-[calc(100%/var(--n))]';
}
