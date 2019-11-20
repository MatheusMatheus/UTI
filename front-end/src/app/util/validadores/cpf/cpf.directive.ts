import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Directive({
  selector: '[appCpf]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfDirective,
      multi: true
    }
  ]
})
export class CpfDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (isNotNullOrUndefined(control.value)) {

      if (control.value.length != 14 ||
          !control.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        return {cpf: true};
      }

    }

    return undefined;
  }

}
