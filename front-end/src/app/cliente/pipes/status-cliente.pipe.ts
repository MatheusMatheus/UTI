import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCliente'
})
export class StatusClientePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      switch (value) {
        case 'ATIVO':
          return 'Ativo';
        case 'PENDENTE':
          return 'Pendente';
      }
    }
    return null;
  }

}
