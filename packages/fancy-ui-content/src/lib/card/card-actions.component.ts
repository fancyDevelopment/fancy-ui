import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'fui-card-actions',
    imports: [NgClass],
    template: `
  
    <div class="border-t border-shade h-component relative overflow-hidden" style="container-type: inline-size">
      <!-- Outer Ring-->
      <div class="w-full h-0.5 absolute bg-outline transition-opacity opacity-0 duration-1000" [class.opacity-100]="showLoadingBar()"></div>
      <!-- Inner Ring -->
      <div class="w-1/3 h-0.5 animate-infinite-scroll absolute bg-gradient-to-r from-shade via-primary to-shade transition-opacity opacity-0 duration-1000" [class.opacity-100]="showLoadingBar()"></div>
    </div>
    <div class="relative">
      <ng-content />
      <div class="absolute flex p-component items-center text-on-primary -inset-x-element -top-element rounded overflow-hidden transition-all duration-1000" 
           [ngClass]="{ 'opacity-0 h-0': (!showMessageOverlay()), 'opacity-100 h-[calc(100%+(theme(spacing.component)*2))]': showMessageOverlay(), 'bg-success': message().type === 'success', 'bg-error': message().type === 'error' }">
        <div>{{ message().text }}</div>
      </div>
    </div>
  `
})
export class CardActionsComponent {
  showLoadingBar = input(false);

  message = signal<{ text: string, type: string }>({ text: '', type: ''});
  showMessageOverlay = signal(false);

  showMessage(text: string, type: 'success' | 'error') {
    this.message.set({ text, type});
    this.showMessageOverlay.set(true);
    timer(3000).subscribe(() => this.showMessageOverlay.set(false));
  }
}
