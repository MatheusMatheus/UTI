import {Injectable} from '@angular/core';
import {Conta} from '../dominio/conta';
import {Cliente} from '../dominio/cliente';
import {ClienteService} from './cliente.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContaService {

  private contas: Array<Conta> = [
    new Conta(
      7,
      12345,
      '0',
      'POUPANCA',
      new Cliente(
        'Conta 1',
        '01234567980',
        'ATIVO'
      ),
      'ATIVA',
      10
    ),
    new Conta(
      7,
      54321,
      '1000',
      'POUPANCA',
      new Cliente(
        'Conta 3',
        '98765432109',
        'ATIVO'
      ),
      'ENCERRADA',
      10
    ),
    new Conta(
      7,
      66666,
      '100',
      'CORRENTE',
      new Cliente(
        'Conta 2',
        '01430376171',
        'ATIVO'
      ),
      'ATIVA',
      null
    )
  ];

  constructor(
    private httpClient: HttpClient,
    private clienteService: ClienteService
  ) { }

  abre(conta: Conta): Promise<any> {
    let url = `${environment.baseURL}/conta/abertura`;
    let tipo = conta.tipo == 'CORRENTE' ? '1' : '2';

    return this.httpClient.post(url, undefined, {
      params: {
        tipo: tipo,
        cpf: conta.titular.cpf
      }
    }).toPromise();
  }

  encerra(conta: Conta): Promise<any> {
    let url = `${environment.baseURL}/conta/${conta.numero}/encerra`;

    return this.httpClient.put(url, undefined).toPromise();
  }

  buscaPorNumero(numero: number): Promise<Conta> {
    let url = `${environment.baseURL}/conta/${numero}`;

    return this.httpClient.get<Conta>(url).toPromise();
  }

  buscaTodas(): Promise<Array<Conta>> {
    let url = `${environment.baseURL}/conta/todas`;

    return this.httpClient.get<Array<Conta>>(url).toPromise();
  }

  async buscaAtivas(): Promise<Array<Conta>> {
    let contas = await this.buscaTodas();

    return contas.filter(cta => cta.estado === 'ATIVA');
  }

}
