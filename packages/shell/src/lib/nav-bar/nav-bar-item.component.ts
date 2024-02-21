import { Component, EventEmitter, Output, TemplateRef, input, signal, viewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconComponent } from 'fancy-ui-core';
import { Router } from '@angular/router';

@Component({
  selector: 'fui-nav-bar-item',
  standalone: true,
  imports: [NgClass, IconComponent],
  template: `
    <ng-template #template>
      <div class="group/navitem flex flex-col justify-center" (click)="onTap()">
        <div class="relative grid justify-items-center items-center">
          <div class="absolute z-0 h-[calc(theme(spacing.hover)*0.6)] rounded-full transition-all duration-500" [ngClass]="{ 'w-0': !isActive(), 'w-[calc(theme(spacing.hover)*1.1)] bg-shade': isActive() }">
          </div>
          <div class="absolute z-0 h-[calc(theme(spacing.hover)*0.6)] w-[calc(theme(spacing.hover)*1.1)] rounded-full transition-all duration-500  group-hover/navitem:bg-hover">
          </div>
          <div class="h-icon w-icon z-10">
            <fui-icon [name]="iconName()" [ngClass]="{ 'text-gray': !isActive() }"/>
          </div>
        </div>
        <div class="text-center text-xs font-semibold mt-element transition-all duration-500" [ngClass]="{ 'text-gray': !isActive() }">{{label()}}</div>
      </div>
    </ng-template>
  `
})
export class NavBarItemComponent {

  iconName = input('');

  label = input('');

  routerLink = input<string | string[] | null>(null);

  isActive = signal(false);

  _template = viewChild<TemplateRef<unknown>>('template');

  @Output() tap = new EventEmitter<void>();

  constructor(private router: Router) {}

  onTap() {
    const routerLink = this.routerLink();
    if(routerLink != null) {
      if(typeof routerLink === 'string') {
        this.router.navigate([routerLink]);
      } else {
        this.router.navigate(routerLink);
      }
    }
    this.tap.emit();
  }
}
