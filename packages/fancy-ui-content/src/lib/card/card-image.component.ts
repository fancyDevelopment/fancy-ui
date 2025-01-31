import { Component, EventEmitter, HostBinding, Output, input } from '@angular/core';
import { IconComponent } from 'fancy-ui-core';

@Component({
    selector: 'fui-card-image',
    imports: [IconComponent],
    template: `
    	<div class="group-first:-mt-element group-first:-ml-element group-first:-mr-element group-last:-mb-element relative group-last:-ml-element group-last:-mr-element">
        <img class="object-cover w-full h-full rounded-component [:not(:first-child)]:px-element group-first:rounded-t group-last:rounded-b" [src]="src()">
          <div class="absolute top-0 left-0 right-0 p-element">
            <div class="flex items-center">
              <div class="flex-1">
                <div class="text-title font-light">{{title()}}</div>
              </div>
              @if(moreTap.observers.length) {
                <a (click)="moreTap.emit()" class=" w-hover flex justify-center items-center">
                  <div class="absolute w-hover h-hover rounded transition-all duration-500 hover:bg-hover"></div>
                  <fui-icon class="h-icon w-icon" name="matMoreVertOutline" />
                </a>
              }
            </div>
            @if(subtitle()) {
              <div class="text-subtitle">{{subtitle()}}</div>
            }
          </div>
      </div>
  `
})
export class CardImageComponent {
  src = input('');
  title = input('');
  subtitle = input('');
  @Output()
  moreTap = new EventEmitter();
  @HostBinding('class')
  classes = 'group'
}
