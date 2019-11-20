import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinDirective,
      multi: true
    }
  ]
})
export class MinDirective implements Validator {

  @Input('min') valorMinimo;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value &&
      Number(control.value) < this.valorMinimo) {
      return {min: {valor: this.valorMinimo}};
    }

    return undefined;
  }

}
