import { Component, EventEmitter, Output, TemplateRef, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from 'fancy-ui-core';

@Component({
  selector: 'fui-card-header',
  standalone: true,
  imports: [NgTemplateOutlet, IconComponent],
  template: `
  <div class="flex">
    @if(imageSrc()) {
      <div class="pr-element">
        <img class="object-cover rounded-element 
                    h-[calc((theme(fontSize.title)+theme(fontSize.subtitle))*theme(lineHeight.normal))]
                    w-[calc((theme(fontSize.title)+theme(fontSize.subtitle))*theme(lineHeight.normal))]" [src]="imageSrc()">
      </div>
    }
    <div class="flex-1">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="text-title font-light">
            @if(titleTemplateRef()) {
              <ng-container *ngIf="titleTemplateRef" [ngTemplateOutlet]="titleTemplateRef()"/>
            }
            @if(!titleTemplateRef() && title()) {
              <span>{{title()}}</span>
            }
          </div>
        </div>
        @if(moreTap.observers.length) {
          <a (click)="moreTap.emit()" class=" w-hover flex justify-center items-center">
          <div class="absolute w-hover h-hover rounded-xl transition-all duration-500 hover:bg-hover">
          </div>
          <fui-icon class="h-icon w-icon" name="matMoreVertOutline"></fui-icon>
        </a>
        }
      </div>
      @if(subtitleTemplateRef() || subtitle()) {
        <div class="text-subtitle">
          @if(subtitleTemplateRef()) {
            <ng-container [ngTemplateOutlet]="subtitleTemplateRef()"/>
          }
          @if(!subtitleTemplateRef()) {
            <span>{{subtitle()}}</span>
          }
        </div>
      }
    </div>
  </div>
  `
})
export class CardHeaderComponent {

  titleTemplateRef = input<TemplateRef<unknown> | null>(null);
  title = input('');

  subtitleTemplateRef = input<TemplateRef<unknown> | null>(null);
  subtitle = input('');

  imageSrc = input<string | null>(null);
  
  @Output()
  moreTap = new EventEmitter();
}
