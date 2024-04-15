import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'fui-card-actions',
  standalone: true,
  imports: [NgClass],
  template:`
    <div class="border-t border-shade h-component"></div>
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
  message = signal<{ text: string, type: string }>({ text: '', type: ''});
  showMessageOverlay = signal(false);

  showMessage(text: string, type: 'success' | 'error') {
    this.message.set({ text, type});
    this.showMessageOverlay.set(true);
    timer(3000).subscribe(() => this.showMessageOverlay.set(false));
  }
}
