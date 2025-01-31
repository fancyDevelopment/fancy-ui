import { Component, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBase } from '../form-control.base';

@Component({
    selector: 'fui-switch',
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

  _onSwitch(event: boolean) {
    this._currentValue = event;
    this.onTouched();
    this.onChanged();
  }
}
