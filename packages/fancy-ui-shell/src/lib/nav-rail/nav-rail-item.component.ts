import { Component, OnDestroy, OnInit, TemplateRef, inject, input, model, viewChild } from '@angular/core';
import { IconComponent } from 'fancy-ui-core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { NavService } from '../nav.service';

@Component({
    selector: 'fui-nav-rail-item',
    imports: [NgClass, IconComponent],
    template: `
    <ng-template #template>
      <div class="group/navitem flex flex-col justify-center" (click)="onTap()">
        <div class="relative grid justify-items-center items-center">
          <div class="absolute z-0 h-[calc(theme(spacing.hover)*0.6)] rounded-full transition-all duration-500" [ngClass]="{ 'w-0': !isActive(), 'w-[calc(theme(spacing.hover)*1.1)] bg-background-variant': isActive() }">
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
export class NavRailItemComponent implements OnInit, OnDestroy {
  iconName = input('');
  label = input('');
  routerLink = input<string | string[] | null>(null);

  isActive = model(false);

  _template = viewChild<TemplateRef<unknown>>('template');

  router = inject(Router);
  navService = inject(NavService);

  ngOnInit(): void {
    this.navService.registerNavRailItem(this);
  }

  ngOnDestroy(): void {
    this.navService.unregisterNavRailItem(this);
  }

  onTap() {
    this.isActive.set(!this.isActive())
    const routerLink = this.routerLink();
    if(routerLink != null) {
      if(typeof routerLink === 'string') {
        this.router.navigate([routerLink]);
      } else {
        this.router.navigate(routerLink);
      }
    }
  }
}
