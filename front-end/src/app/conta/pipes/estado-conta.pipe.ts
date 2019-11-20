import { Pipe, PipeTransform } from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Pipe({
  name: 'estadoConta'
})
export class EstadoContaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNotNullOrUndefined(value)) {
      switch (value) {
        case 'ATIVA':
          return 'Ativa';
        case 'ENCERRADA':
          return 'Encerrada';
      }
    }
    return null;
  }

}
