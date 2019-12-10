import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Terminal } from '../dominio/terminal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor(
    private httpClient: HttpClient
  ) { }


  cadastrar(terminal: Terminal): Observable<any> {
    let url = `${environment.baseURL}/terminal/cadastrar`;

    return this.httpClient.post(url, terminal);
  }

  buscaTodos(): Observable<Array<Terminal>> {
    let url = environment.baseURL + '/terminal/todos';

    return this.httpClient.get<Array<Terminal>>(url);
  }

  buscaTerminaisLivres() : Observable<Array<Terminal>> {
    let url = `${environment.baseURL}/terminal/livres`;

    return this.httpClient.get<Array<Terminal>>(url);
  }
}
