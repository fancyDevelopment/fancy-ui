import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlBase } from '../form-control.base';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fui-text-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-box.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextBoxComponent,
      multi: true
    }
  ]
})
export class TextBoxComponent extends FormControlBase<string>{
  label = input('');

  hint = input('');

  _id = uuidv4();

  _onInput() {
    this.onChanged();
    this.onTouched();
  }
}
function uuidv4() {
  return 'id'+ Math.random();
}

