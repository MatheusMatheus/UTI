import {Injectable} from '@angular/core';
import {Transferencia} from '../dominio/transferencia';
import {ContaService} from './conta.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class TransacaoService {

  constructor(
    private httpClient: HttpClient,
    private contaService: ContaService
  ) { }

  deposita(numero: number, valor: number): Promise<any> {
    let url = `${environment.baseURL}/conta/${numero}/deposita`;

    return this.httpClient.put(url, undefined, {
      params: {
        valor: valor.toString()
      }
    }).toPromise();
  }

  saca(numero: number, valor: number) {
    let url = `${environment.baseURL}/conta/${numero}/saca`;

    return this.httpClient.put(url, undefined, {
      params: {
        valor: valor.toString()
      }
    }).toPromise();
  }

  transfere(transferencia: Transferencia): Promise<any> {
    let url = `${environment.baseURL}/conta/transfere`;

    return this.httpClient.put(url, transferencia).toPromise();
  }
}
