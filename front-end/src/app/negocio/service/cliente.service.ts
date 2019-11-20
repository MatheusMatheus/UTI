import {Injectable} from '@angular/core';
import {Cliente} from '../dominio/cliente';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class ClienteService {

  clientes = [
    new Cliente(
      'Gabriel Silva',
      '01234567890',
      'ATIVO'
    ),
    new Cliente(
      'Marcos Oliveira',
      '98765432130',
      'PENDENTE'
    ),
  ];

  constructor(
    private httpClient: HttpClient
  ) {}

  cadastra(cliente: Cliente): Observable<any> {
    //let url = environment.baseURL + '/cliente/' + cliente.cpf + '/cadastra';
    let url = `${environment.baseURL}/cliente/${cliente.cpf}/cadastra`;

    return this.httpClient.post(url, undefined, {
      params: {
        nome: cliente.nome
      }
    });
  }

  ativa(cliente: Cliente): Observable<any> {
    let url = `${environment.baseURL}/cliente/${cliente.cpf}/ativa`;

    return this.httpClient.put(url, undefined);
  }

  async remove(cliente: Cliente) {
    let url = `${environment.baseURL}/cliente/${cliente.cpf}/remove`;

    await this.httpClient.delete(url).toPromise();
  }

  buscaPorCPF(cpf: string): Cliente {
    return this.clientes.find(c => c.cpf == cpf);
  }

  buscaTodos(): Observable<Array<Cliente>> {
    let url = environment.baseURL + '/cliente/todos';

    return this.httpClient.get<Array<ClienteBE>>(url)
      .pipe(map(clientesBE => {

        return clientesBE.map(cliBE => {

          return new Cliente(
            cliBE.nome,
            cliBE.cpf,
            cliBE.situacao
          )

        });

      }));
  }

}

interface ClienteBE {
  cpf: string;
  nome: string;
  situacao: string;
}
