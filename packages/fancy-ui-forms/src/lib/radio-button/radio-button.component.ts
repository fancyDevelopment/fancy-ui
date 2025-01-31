import { Component, input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBase } from '../form-control.base';

@Component({
    selector: 'fui-radio-button',
    imports: [FormsModule],
    templateUrl: './radio-button.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: RadioButtonComponent,
            multi: true
        }
    ]
})
export class RadioButtonComponent extends FormControlBase<string> {

  label = input('');

  name = input('');

  value = input('');

  _onChange() {
    this.onChanged();
    this.onTouched();
  }

}
