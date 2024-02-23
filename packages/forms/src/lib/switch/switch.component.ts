import { Component, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBase } from '../form-control.base';

@Component({
  selector: 'fui-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchComponent,
      multi: true
    }
  ]
})
export class SwitchComponent extends FormControlBase<boolean> {
  label = input('');

  hintOff = input('');

  hintOn = input('');

  constructor() {
    super();
    this._currentValue = false;
  }

  _onInput() {
    this.onChanged();
    this.onTouched();
  }
}
