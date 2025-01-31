import { Component, ElementRef, EventEmitter, Output, input, viewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { timer } from 'rxjs';

@Component({
    selector: 'fui-floating-action-button',
    imports: [NgClass],
    templateUrl: './floating-action-button.component.html'
})
export class FloatingActionButtonComponent {
  /** The label of the Button. */
  label = input('');
  /** Flag to show the butto in a disabled state. */
  disabled = input(false);
  /** An event called if the button is tapped. */
  @Output()
  tap = new EventEmitter<void>();

  waveSpan = viewChild<ElementRef>('wave');

  animate = false;

  click(event: { offsetX: number, offsetY: number}) {
    if(!this.disabled())
    {
      const waveSpan = this.waveSpan();
      if(waveSpan) {
        waveSpan.nativeElement.style.left = event.offsetX + 'px';
        waveSpan.nativeElement.style.top = event.offsetY + 'px';
      }
      this.animate = true;
      timer(800).subscribe(() => this.animate = false);
      this.tap.next();
    }
  }

}
