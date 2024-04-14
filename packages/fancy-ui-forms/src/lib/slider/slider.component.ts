import { Component, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBase } from '../form-control.base';

@Component({
  selector: 'fui-slider',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true
    }
  ]
})
export class SliderComponent extends FormControlBase<number> {
  label = input('');
  rangeMin = input(0);
  rangeMax = input(100);

  _onInput() {
    this.onChanged();
    this.onTouched();
  }
}
