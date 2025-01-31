import { Component, input } from '@angular/core';
import { FormControlBase } from '../form-control.base';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'fui-text-area',
    imports: [FormsModule],
    templateUrl: './text-area.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextAreaComponent,
            multi: true
        }
    ]
})
export class TextAreaComponent extends FormControlBase<string>{
  label = input('');

  hint = input('');

  rows = input(4);

  _id = uuidv4();

  _onInput() {
    this.onChanged();
    this.onTouched();
  }
}

function uuidv4() {
  return 'id'+ Math.random();
}

