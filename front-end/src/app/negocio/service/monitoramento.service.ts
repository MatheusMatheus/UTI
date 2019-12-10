import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Monitoramento } from '../dominio/monitoramento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public gravaMonitoramento(monitoramento: Monitoramento) : Observable<any> {
    let url = `${environment.baseURL}/monitoramento/grava`;
    console.log(url);
    console.log(monitoramento)
    return this.httpClient.post(url, monitoramento);
  }
}
