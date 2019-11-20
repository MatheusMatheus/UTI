import { Pipe, PipeTransform } from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Pipe({
  name: 'tipoConta'
})
export class TipoContaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNotNullOrUndefined(value)) {
      switch (value) {
        case 'CORRENTE':
          return 'Conta Corrente';
        case 'POUPANCA':
          return 'Conta Poupança';
      }
    }

    return null;
  }

}
