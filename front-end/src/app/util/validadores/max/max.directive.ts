import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Directive({
  selector: '[max]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxDirective,
      multi: true
    }
  ]
})
export class MaxDirective implements Validator {

  @Input('max') valorMaximo;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (isNotNullOrUndefined(control.value) &&
      Number(control.value) > this.valorMaximo) {

      return {max: {valor: this.valorMaximo}};
    }

    return undefined;
  }

}
