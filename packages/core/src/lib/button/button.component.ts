import { Component, ElementRef, EventEmitter, Output, input, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'fui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  /** The label of the Button. */
  label = input('');
  /** An event called if the button is tapped. */
  @Output()
  tap = new EventEmitter<void>();

  waveSpan = viewChild<ElementRef>('wave');

  animate = false;

  click(event: { offsetX: number, offsetY: number}) {
    console.log(event);
    const waveSpan = this.waveSpan();
    if(waveSpan) {
      waveSpan.nativeElement.style.left = event.offsetX + 'px';
      waveSpan.nativeElement.style.top = event.offsetY + 'px';
    }
    this.animate = true;
    timer(800).subscribe(() => this.animate = false);
  }

}
