import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'fui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  /** The label of the Button. */
  label = input('');
  /** Flag to show the butto in a disabled state. */
  disabled = input(false);
  /** An event called if the button is tapped. */
  tap = output<void>();

  _waveSpan = viewChild<ElementRef>('wave');

  _animate = false;

  _click(event: { offsetX: number, offsetY: number}) {
    if(!this.disabled())
    {
      const waveSpan = this._waveSpan();
      if(waveSpan) {
        waveSpan.nativeElement.style.left = event.offsetX + 'px';
        waveSpan.nativeElement.style.top = event.offsetY + 'px';
      }
      this._animate = true;
      timer(800).subscribe(() => this._animate = false);
      this.tap.emit();
    }
  }

}
