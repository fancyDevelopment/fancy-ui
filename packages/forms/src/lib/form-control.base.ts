import { ControlValueAccessor } from "@angular/forms";

export class FormControlBase<TValue> implements ControlValueAccessor {

    public _isDisabled = false;

    public _currentValue: TValue | null = null;

    // A function listening for changes
    private _changedHandlers: Array<(val: TValue | null) => void> = [];

    // A function listening for touched
    private _touchedHandlers: Array<() => void> = [];

    writeValue(obj: TValue): void {
      this._currentValue = obj;
    }

    readValue(): TValue | null {
      return this._currentValue;
    }

    registerOnChange(fn: (val: TValue | null) => void): void {
      this._changedHandlers.push(fn);
    }

    registerOnTouched(fn: () => void): void {
      this._touchedHandlers.push(fn);
    }

    setDisabledState?(isDisabled: boolean): void {
      this._isDisabled = isDisabled;
    }

    onChanged() {
      this._changedHandlers.forEach(fn => {
          fn(this._currentValue);
      });
    }

    onTouched() {
      this._touchedHandlers.forEach(fn => {
          fn();
      });
    }
}