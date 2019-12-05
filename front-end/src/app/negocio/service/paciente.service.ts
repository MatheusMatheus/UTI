import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Paciente } from '../dominio/paciente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  cadastrar(paciente: Paciente): Observable<any> {
    let url = `${environment.baseURL}/paciente/novo`;

    return this.httpClient.post(url, paciente);
  }
}
