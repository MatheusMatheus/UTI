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

  public monitora(terminalID: number): Observable<Monitoramento> {
    let url = `${environment.baseURL}/monitoramento/terminal/${terminalID}`;
    return this.httpClient.get<Monitoramento>(url);
  }
}
